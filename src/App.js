import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faFilter, faMagnifyingGlass, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
// import shoe1 from "./assets/shoe1.png";
// import shoe2 from "./assets/shoe2.png";
// import { faStar as HollowStar } from '@fortawesome/free-regular-svg-icons'
import {Routes,Route} from "react-router-dom";

import Navbar from './pages/Navbar';
import Store from './pages/Store';
import Contact from './pages/Contact.';
import Team from './pages/Team';
import TheJourney from './pages/TheJourney';
import Product from './pages/Product';
import Home from "./pages/Home";





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thejourney" element={<TheJourney />} />
        <Route path="/team" element={<Team />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Store /> */}
      {/* <Contact /> */}
      {/* <Team /> */}
      {/* <TheJourney /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;
