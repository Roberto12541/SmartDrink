import { Link } from 'react-router-dom'
import carrito from '../../assets/carrito.png'

const PromoProducts = () => {
  return (
    <div className=' mt-20 flex flex-col md:flex-row md:gap-10'>
        <div className=' rounded-xl p-6  flex flex-col justify-center items-center  '>
            <h1 className='text-black text-4xl   font-semibold md:text-6x1 text-center'>Productos</h1>
            <p className='text-black text-1xl font-sans mt-8 text-justify  md:text-3xl w-60 md:w-auto lg:w-auto md:pl-10'>Los mejores productos inteligentes para cambiar el ambiente donde te ubiques, 
            encuentra los mejores precios solo en SmartDrink! Y disfruta de cada uno de ellos.</p>
        </div>
        
        <div className="flex justify-center items-center">
            <a href="/productos"><img className='rounded-2xl w-40 md:w-80' src={carrito} alt="" /></a>
            
        </div>

      
    </div>
  )
}

export default PromoProducts
