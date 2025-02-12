import BlurText from "./components/countryname";
import Data from "./components/data";

console.log(Data);
export default function App() {
  return Data().map((Data) => (<BlurText key={Data.id} Data={Data} />))
}
   

