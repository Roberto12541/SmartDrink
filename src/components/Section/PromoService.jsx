import { Link } from 'react-router-dom'
import gif from '../../assets/promocion.gif'
const PromoService = () => {
  return (
    <div className="p-4 md:p-8 max-w-[1300px] mx-auto ">
            <div className="bg-white shadow-lg  rounded-[2rem] md:rounded-[4rem] p-8 sm:flex sm:items-center md:p-12 sm:justify-center justify-items-center ">
                <div className=" ">
                    <h1 className="text-black text-xs mb-1 lg:text-6xl md:mb-8 font-semibold text-center">Promoción servicio de instalación</h1>
                    <p className="text-black mx-40 mb-6  text-justify lg:text-3xl md:mb-10 ">A partir de $1500 MXN en compra el servicio de instalación es
                     <span className='text-red-600 font-bold'> GRATIS!</span> No te
                    pierdas de esta gran promoción!  </p> 
                    <div className='flex justify-center'>
                    <Link to={'/productos'}><img src={gif} alt="" /> </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PromoService
