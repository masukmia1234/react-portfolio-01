import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'mdbreact/dist/css/mdb.css';
import EndFooter from "./PortfolioContainer/EndFooter/EndFooter";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <EndFooter />
    
    </div>
  );
}

export default App;
