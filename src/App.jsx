import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
import Carrusel from './components/Carousel/Carousel';
import Banner from './components/Banner/Banner';
import BannerTwo from './components/Banner/BannerTwo';
import AppSection from './components/Section/AppSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Galery from './components/Galery/Galery';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <CarritoProvider> */}
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Carrusel/>
              <Banner />
              <BannerTwo/>
              <AppSection/>
              <Pricing/>
              <Galery/>
              <Footer/>
            </>
          }/>
        </Routes>
        {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;