import './App.css';

import AliceCarousel from 'react-alice-carousel';
import './components/CustomerService';
import CustomerService from './components/CustomerService';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import MainMenu from './components/MainMenu';
import CarouselData0 from './components/Carousel';
import CustomerService1 from './components/CustomerService1';
import SlideCarousel from './components/SlideCarousel';

function App() {
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
            <Navbar2 />
          </div>
          <div className='navBar2 d-flex justify-content-between'>
            <MainMenu />
            <h4 className='fundReturn'>30 days return</h4>
          </div>
        </nav>
        <CarouselData0 />
      </div>
      <div>
        {/* <SlideCarousel /> */}
      </div>
    </div >
  );
}

export default App;
