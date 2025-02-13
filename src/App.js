import BlurText from "./components/countryname";
import Background from "./components/background";
import './index.css';

export default function App() {
  return (
    <>
      <Background />
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
    </>
  );
}
