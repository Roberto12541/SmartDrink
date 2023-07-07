import React from 'react'
import { Link } from 'react-router-dom'
import instalacion from '../../assets/instalacion.png'
const BannerFour = () => {
  return (
    <div className="relative overflow-hidden bg-white mt-20">
            <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-12 lg:pt-12">
                <div className="flex flex-col gap-10 md:flex-row-reverse justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Servicios de Instalación
                        </h1>
                        <p className="mt-6 text-xl text-slate-500 text-justify">
                            Conoce nuestros servicios de instalación!
                        </p>
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint incidunt at quos consequuntur voluptates tenetur accusantium? Corporis blanditiis quam necessitatibus.
                        </p>
                        
                        <p className="mt-6 text-xl text-green-700 font-bold  text-justify">
                           Menos de 10 produtos
                        </p>
                        
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint incidunt at quos consequuntur voluptates tenetur accusantium? Corporis blanditiis quam necessitatibus.
                        </p>
                        <div className='mt-6 mb-6' >
                            <Link to={'/checkout/13000/SmartPro'} className=" w-40 text-white block  border bg-black transition duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center ">Adquirir</Link>
                        </div>
                        <p className="mt-6 text-xl text-green-700 font-bold  text-justify">
                            Más de 20 productos
                        </p>
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint incidunt at quos consequuntur voluptates tenetur accusantium? Corporis blanditiis quam necessitatibus.
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
