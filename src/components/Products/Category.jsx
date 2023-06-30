import { Link } from "react-router-dom"

const Category = () => {
    return (
        <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to={'/productos'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Todos los productos
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <span>/</span>
                        <Link to={'/productos/electronics'} href="#" className="ml-1 text-sm font-medium text-gray-700 md:ml-2 ">Bebidas</Link>
                    </div>
                </li>
            </ol>
        </nav>
    )
}

export default Category
