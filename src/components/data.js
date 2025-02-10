export default function data() {
  return [
    {
      id: 1,
      text: "Veitnam",
      delay: 150,
      animateby: "words",
      direction: "top",
      onAnimationComplete: { handleAnimationComplete },
      className: "text-2xl mb-8",
      threshold: 0.1,
      rootMargin: "0px",
      animationFrom,
      animationTo,
      easing: "easeOutCubic"
    },
  ];
}
