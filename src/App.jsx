import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel';
import Banner from './components/Banner/Banner';
import BannerTwo from './components/Banner/BannerTwo';
import AppSection from './components/Section/AppSection';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <CarritoProvider> */}
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Carousel/>
              <Banner />
              <BannerTwo/>
              <AppSection/>
            </>
          }/>
        </Routes>
        {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;