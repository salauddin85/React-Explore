import "./App.css";
import Navbar from "./components/Navbar/Navbar";  
import Link from "./components/Link/Link";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <PriceOptions></PriceOptions>
      </div>
      
    </>
  );
}

export default App;
