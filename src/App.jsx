import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
import Carrusel from './components/Carousel/Carousel';
// import Banner from './components/Banner/Banner';
import BannerTwo from './components/Banner/BannerTwo';
import AppSection from './components/Section/AppSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Team from './components/Section/Team';
import NoFound from './components/Section/NoFound';
import Promo from './components/Section/Promo';
// import Galery from './components/Galery/Galery';

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
              <Promo/>
              <Pricing/>
              <AppSection/>
              <Team/>
              <BannerTwo/>
              <Footer/>
            </>
          }/>
          <Route path='/servicios' element={
            <>
              
              <Footer/>
            </>
          }/>
          <Route path='/contacto' element={
            <>
              
              <Footer/>
            </>
          }/>
          <Route path='*' element={
            <>
              <NoFound/>
            </>
          }/>
        </Routes>
        {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;