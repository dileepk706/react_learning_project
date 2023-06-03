import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllMenu } from "./AllMenuContext";
import Hearo from "./Hearo";
import SpecialDishes from "./SpecialDishes";
import About from "./about";
import { AppProvider } from '../context/appProvider';
const Menu = () => {

  return (
    <Router>
      <Hearo />

      <AppProvider>
        <Routes>
          <Route path="/" element={<AllMenu><SpecialDishes /></AllMenu>} />


          <Route path="cart" element={<About />} />
        </Routes>
      </AppProvider>

    </Router>
  );
};

export default Menu;
