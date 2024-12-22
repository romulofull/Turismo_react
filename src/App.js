import Navbar from "./Components/navbar";
 import Header from "./Components/header";
import Custom from "./Components/custom";
import Details from "./Components/details";
import Testi from "./Components/testi";
import Desti from "./Components/desti";
import Second from "./Components/second";
import Footer from "./Components/footer"; 
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Details />
      <Testi />
      <Desti />
      <Second />
      <Custom />
      <Footer />
    </>
  );
};

export default App;