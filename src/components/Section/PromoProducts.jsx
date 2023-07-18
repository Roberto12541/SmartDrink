import { Link } from 'react-router-dom'

const PromoProducts = () => {
  return (
    <div className='mx-11 mt-20 flex'>
        <div className=' rounded-xl p-6 mb-10 w-7/12 '>
            <h1 className='text-black text-6xl  text-left font-semibold'>Productos</h1>
            <p className='text-black text-2xl font-sans mt-8 text-justify'>Los mejores productos inteligentes para cambiar el ambiente donde te ubiques, 
            encuentra los mejores precios solo en SmartDrink! Y disfruta de cada uno de ellos.</p>
        </div>
        
        <div className="">
            <a href="/productos"><img className='rounded-2xl ' src="" alt="" /></a>
            
        </div>

      
    </div>
  )
}

export default PromoProducts
