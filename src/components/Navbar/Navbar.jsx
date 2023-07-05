import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import LogoCorto from '../../assets/Logo-mobile.png'
import Search from './Search';
import SearchMobile from './SearchMobile';
import LoginModal from '../Modal/LoginModal';

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
          <button type="button" className="relative inline-flex items-center py-2.5 text-sm font-medium text-center cursor-pointer
          ml-1" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="sr-only">Cart Items</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 rounded-full -top-1 -left-4 dark:border-gray-900">8</div>
          </button>
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