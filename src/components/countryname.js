import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
 

const BlurText = (
  props,
  animationFrom,
  animationTo,
  
) => {
  console.log(props.Data)
  const elements = props.Data.animateBy === "words" ? props.Data.text.split(" ") : props.Data.text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
  props.Data.direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  const defaultTo = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
      props.Data.direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: props.data.threshold, rootMargin: props.data.rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [props.data.threshold, props.data.rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            // if (
            //   animatedCount.current === elements.length &&
            //   onAnimationComplete
            // ) {
            //   onAnimationComplete();
            // }
          }
        : animationFrom || defaultFrom,
      delay: i * props.Data.delay,
      config:  props.Data.easing ,
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${props.Data.className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {elements[index] === " " ? "\u00A0" : elements[index]}
          {props.Data.animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
