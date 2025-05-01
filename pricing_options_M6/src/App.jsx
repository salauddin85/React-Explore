import "./App.css";
import Navbar from "./components/Navbar/Navbar";  
import Link from "./components/Link/Link";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import PieChart from "./components/PieChart/PieChart";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <PriceOptions></PriceOptions>
      </div>
      <div>
        <PieChart></PieChart>
      </div>
      
    </>
  );
}

export default App;
