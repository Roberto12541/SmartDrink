import { useContext } from "react"
import { CarritoContext } from "../../context/CartContext" 
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext)

    return (
        <Link to={'/cart'} type="button" className="relative inline-flex items-center py-2.5 text-sm font-medium text-center cursor-pointer ml-1" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="sr-only">Cart Items</span>
            {
                cantidadTotal > 0 && 
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 rounded-full -top-1 -left-4 dark:border-gray-900">{cantidadTotal}</div>
            }
        </Link>
    )
}

export default CartWidget
