import { Link } from "react-router-dom"

const Product = ({ id, image, price, category }) => {
    return (
        <li key={id}>
            <a href="#" className="group block overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                    <h3
                        className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                        {category}
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900">$ {price}.00 mnx </span>
                    </p>
                </div>
            </a>
        </li>
    )
}

export default Product
