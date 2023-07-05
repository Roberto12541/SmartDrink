import { Link } from "react-router-dom"

const Product = ({ id, image, price, category, name }) => {
    return (
        <li key={id}>
            <Link to={'/'} href="#" className="group relative block overflow-hidden rounded-2xl">
                <img src={image} alt="" className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"/>
                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-black px-3 py-1.5 text-xs font-medium rounded-lg text-white" > {category} </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1"> {name} </h3>
                    <p className="mt-1.5 text-sm text-gray-700">${price}.00</p>
                    <form className="mt-4">
                        <button className="block w-full rounded-xl bg-black p-4 text-sm font-medium transition hover:scale-105 text-white">
                            Agregar al carrito
                        </button>
                    </form>
                </div>
            </Link>
        </li>
    )
}

export default Product
