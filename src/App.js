import Home from "./ui/pages/Home";
import Header from "./ui/atoms/Header";
import Navigation from "./ui/atoms/Navigation";
import Category from "./ui/atoms/Category";
import Footer from "./ui/atoms/Footer";
import MainRoute from "./Route";
import "./App.css";
function App() {
  return (
    <div className="main">
      <MainRoute></MainRoute>
    </div>
  );
}

export default App;
