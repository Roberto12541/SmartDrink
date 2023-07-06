import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CartContext.jsx';
import { LoginProvider } from './context/LoginContext.jsx';
import Navbar from './components/Navbar/Navbar';
import Carrusel from './components/Carousel/Carousel';
import BannerTwo from './components/Banner/BannerTwo';
import AppSection from './components/Section/AppSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Team from './components/Section/Team';
import NoFound from './components/Section/NoFound';
import Promo from './components/Section/Promo';
import Contacto from './components/Section/Contacto';
import AboutUs from './components/Section/AboutUs';
import Comparation from './components/Section/Comparation';
import ItemListContainer from './components/Products/ItemListContainer';
import SearchContainer from './components/Products/SearchContainer';
import ProductDetails from './components/Products/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import BannerThree from './components/Section/BannerThree.jsx';
import Login from './components/Section/Login.jsx';
import Register from './components/Register/Register.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <LoginProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={
                <><Carrusel /><Promo /><BannerThree /><Pricing /><AppSection /><Team /><BannerTwo /><Footer /></>
              } />
              <Route path='/servicios' element={
                <><Pricing /><Comparation /><AppSection /><Footer /></>
              } />
              <Route path='/checkout' element={
                <><Checkout /><Footer /></>
              } />
              <Route path='/checkout/:price/:name' element={
                <><Checkout /> <Footer /></>
              } />
              <Route path='/cart' element={
                <><Cart /><Footer /></>
              } />
              <Route path='/login' element={
                <><Login /><Footer /></>
              } />
              <Route path='/register' element={
                <><Register /><Footer /></>
              } />
              <Route path='/productos' element={
                <><ItemListContainer /><Footer /></>
              } />
              <Route path='/productos/:categoria' element={
                <><ItemListContainer /><Footer /></>
              } />
              <Route path='/producto/:producto' element={
                <><ProductDetails /><Footer /></>
              } />
              <Route path='/search/:busqueda?' element={
                <><SearchContainer /><Footer /></>
              } />
              <Route path='/nosotros' element={
                <><AboutUs /><Team /><Contacto /><Footer /></>
              } />
              <Route path='*' element={
                <><NoFound /></>
              } />
            </Routes>
          </LoginProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;