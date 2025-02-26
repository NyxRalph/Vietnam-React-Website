
import Memeheader from "./components/meme generator/memeHeader";
import LandingBlock from "./components/meme generator/landingBlock";
import Memeimg from "./components/meme generator/memeImg";
import Img from "./components/meme generator/images/q1.jpg"
import "./index.css";

export default function App() {
  return (
    <>

      <Memeheader />
      <LandingBlock />
      <Memeimg imageSrc ={Img} />
    </>
  );
}





// import BlurText from "./components/countryname";
// import Background from "./components/background";
   {/* <Background />
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      /> */}