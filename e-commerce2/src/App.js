import './App.css';

// import AliceCarousel from 'react-alice-carousel';
import './components/CustomerService';
import CustomerService from './components/CustomerService';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import MainMenu from './components/MainMenu';
import CarouselData0 from './components/Carousel';
import CustomerService1 from './components/CustomerService1';
import SlideCarousel from './components/SlideCarousel';
import TwoRowCarousel from './components/TwoRowCarousel';
import TwoRowCarousel0 from './components/TwoRowCarousel0';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Laptop from './components/Laptop';
import ThreeProduct from './components/ThreeProduct';
// import Detail from './Detail';


function App() {
  const [wishlist, setWishlist] = useState(0)
  const [products, setProducts] = useState([]) 
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between">
        <CustomerService />
        <CustomerService1 />
      </header >
      <div>
        <nav className='navBar1'>
          <div className='d-flex justify-content-between'>
            <Navbar1 />
            <Navbar2 products={products} wishlist={wishlist}/>
          </div>
          <div className='navBar2 d-flex justify-content-between'>
            <MainMenu />
            <h4 className='fundReturn'>30 days return</h4>
          </div>
        </nav>
        <CarouselData0 />
        <SlideCarousel />
        <TwoRowCarousel0/>
        <TwoRowCarousel setWishlist={setWishlist} wishlist={wishlist} products={products} setProducts={setProducts}/>
        <Laptop />
        <ThreeProduct />
      </div>
      <Routes>
        <Route path={'/login'} element={<Login/>}></Route>
        {/* <Route path={'/detail'} element={<Detail/>}></Route> */}
      </Routes>
    </div >
  );
}

export default App;
