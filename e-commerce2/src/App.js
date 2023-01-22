import "./App.css";
import "./components/CustomerService";
import CustomerService from "./components/CustomerService";
import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import CustomerService1 from "./components/CustomerService1";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState([])
  return (
    <div className="App m-5">
      <header className="App-header d-flex justify-content-between">
        <CustomerService />
        <CustomerService1 />
      </header>
      <div>
        <nav className="navBar1">
          <div className="d-flex justify-content-between">
            <Navbar wishlist={wishlist} setWishlist={setWishlist}/>
          </div>
          <div className="navBar2 d-flex justify-content-between">
            <MainMenu />
            <h4 className="fundReturn">30 days return</h4>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/home"} element={<Home wishlist={wishlist} setWishlist={setWishlist} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
