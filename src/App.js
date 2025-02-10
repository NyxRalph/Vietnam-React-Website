import react from "react";
import data from "./components/data";
import BlurText from "./components/countryname";

export default function App() {
  return data().map((data) => <BlurText key={data.id} data={data} />);
}
