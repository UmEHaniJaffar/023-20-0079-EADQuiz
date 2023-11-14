import background from '../src/assets/images/background.jpg';
import Auctions from "./components/Auctions";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Discover } from "./components/Discover";
import Footer from "./components/Footer";
import Navbarfunc from "./components/Navbar";
function App() {
  const style={
    backgroundColor:"#1F1D2B"
  }
  return (
    <>
      <div style={style}>
      <Navbarfunc />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
      </div>
    </>
  )
}

export default App
