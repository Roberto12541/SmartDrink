import { useState } from "react";
import { CarritoContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StockCount from "./StockCount";


const Details = ({ id, name, category, image, price, stock, description }) => {
    const [cantidad, setCantidad] = useState(0)
    const { agregarProducto } = useContext(CarritoContext);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad)
        const item = { id, name, price, description, category, image, stock };
        agregarProducto(item, cantidad);
    }

    return (
        <div className="lg:w-4/5 mx-auto flex flex-wrap" key={id}>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
                <h1 className="text-gray-900 title-font font-medium mb-1 text-lg line-clamp-3 sm:line-clamp-none md:text-2xl">{name}</h1>
                <div className="flex mb-4">
                    <span className="text-lg font-semibold text-green-600">Stock: {stock} disponibles</span>
                </div>
                <p className="leading-relaxed">{description}</p>
                <div className="flex flex-col gap-4 items-center mt-4 justify-between sm:flex-row ">
                    <span className="title-font font-medium text-4xl text-gray-900">${price}.00</span>
                    {
                        cantidad > 0 ?
                            (<Link to={'/cart'} className='flex ml-auto text-white bg-black border py-2 px-6 hover:bg-white hover:text-black hover:border-black rounded transition duration-500 ease-in-out'> Finalizar Compra </Link>) :
                            (<StockCount initial={1} stock={stock} funcionAgregar={handleCantidad} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Details
