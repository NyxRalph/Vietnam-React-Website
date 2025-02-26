import TypeIns from "./typeIns";
import GenerateButton from "./genratorButton";
import Memeimg from "./memeImg";

export default function LandingBlock() {
  return (
    <div className="landingBlock">
      <TypeIns />
      <GenerateButton />
      <Memeimg />
    </div>
  );
}
