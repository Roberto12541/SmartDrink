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
import Contacto from './components/Section/Contacto';
// import Service from './components/Section/Service';
// import Steps from './components/Section/Steps';
import AboutUs from './components/Section/AboutUs';
import Comparation from './components/Section/Comparation';
import ItemListContainer from './components/Products/ItemListContainer';
import LoginModal from './components/Modal/LoginModal';
import CartModal from './components/Modal/CartModal';
// import Category from './components/Products/Category';
// import AppSectionTwo from './components/Section/AppSectionTwo';
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
              
              <Pricing/>
              <Comparation/>
              <AppSection/>
              <Footer/>
            </>
          }/>
          <Route path='/productos' element={
            <>
              
              <ItemListContainer/>
              <Footer/>
            </>
          }/>
          <Route path='/productos/:categoria' element={
            <>
              
              <ItemListContainer/>
              <Footer/>
            </>
          }/>
          <Route path='/nosotros' element={
            <>
              
              <AboutUs/>
              <Team/>
              <Contacto/>
              <Footer/>
            </>
          }/>
          <Route path='*' element={
            <>
              <NoFound/>
            </>
          }/>
        </Routes>
        <LoginModal/>
        <CartModal/>
        {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;