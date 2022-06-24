import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../ui/pages/Home";
import Cart from "../ui/pages/Cart";
import Shop from "../ui/pages/Shop";
import StaticPageContent from "../ui/pages/StaticPageContent";

function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/page/:pageName" element={<StaticPageContent />} />
      </Routes>
    </Router>
  );
}

export default MainRoute;
