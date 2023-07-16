import React from 'react'
import { Link } from 'react-router-dom'
import instalacion from '../../assets/instalacion.jpg'
const BannerFour = () => {
  return (
    <div className="relative overflow-hidden bg-white mt-20">
            <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-12 lg:pt-12">
                <div className="flex flex-col gap-10 md:flex-row-reverse justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Servicio de Instalación
                        </h1>
                        <p className="mt-6 text-xl text-slate-500 text-justify">
                            Conoce nuestro servicio de instalación!
                        </p>
                        <p className="mt-6 text-5xl text-green-700 font-bold  text-justify">
                           $400 MXN
                        </p>
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                        Contrata este servicio para que el equipo técnico de SmartDrink instale todos tus productos que hayas adquirido y
                         disfrutes de cada uno de ellos sin ninguna falla alguna, siéntete 100% seguro al adquirir este servicio y no esperes más . 
                        </p>
                        
                        
                        
                        
                        <div className='mt-6 mb-6' >
                            <Link to={'/checkout/13000/SmartPro'} className=" w-40 text-white block  border bg-black transition duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center ">Adquirir</Link>
                        </div>
                        
                    </div>
                    <div>
                    <img src={instalacion} alt="" className='rounded-lg shadow-lg '/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BannerFour
