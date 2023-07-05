import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import LogoCorto from '../../assets/Logo-mobile.png'
import Search from './Search';
import SearchMobile from './SearchMobile';
import LoginModal from '../Modal/LoginModal';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeState = () => {
    setNavbar(!navbar);
  }

  return (
    <header className='py-4 bg-white relative z-50'>
      <div className="flex items-center justify-between px-4 max-w-[1200px] mx-auto">
        <ul className='gap-4 hidden text-lg lg:flex'>
          <li><NavLink to={'/'}>Inicio</NavLink></li>
          <li><NavLink to={'/servicios'}>Servicios</NavLink></li>
          <li><NavLink to={'/productos'}>Productos</NavLink></li>
          <li><NavLink to={'/nosotros'}>Nosotros</NavLink></li>
        </ul>
        <Link to={'/'}>
          <img src={Logo} className='hidden h-14 lg:block' alt="Logo largo" />
          <img src={LogoCorto} className='h-14 lg:hidden' alt="Logo largo" />
        </Link>
        <div className="flex items-center gap-4">
          <Search/>
          <CartWidget/>
          <LoginModal/>
          {
            navbar ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:hidden" onClick={changeState}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:hidden" onClick={changeState}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          }
        </div>
      </div>
      {
        navbar &&
        <div className="-z-10 animate-[aparecer_300ms_ease-in-out] bg-white w-full absolute p-6 font-medium">
          <ul className='flex flex-col gap-4'>
            <li><NavLink to={'/'} onClick={changeState}>Inicio</NavLink></li>
            <li><NavLink to={'/servicios'} onClick={changeState}>Servicios</NavLink></li>
            <li><NavLink to={'/productos'} onClick={changeState}>Productos</NavLink></li>
            <li><NavLink to={'/nosotros'} onClick={changeState}>Contacto</NavLink></li>
            <li>
              <SearchMobile/>
            </li>
          </ul>
        </div>
      }
    </header>
  )
}

export default Navbar