import { useState } from "react"
import { Link } from "react-router-dom";

const SearchMobile = () => {
    const [busqueda, setBusqueda] = useState("");

    return (
        <div className="items-center lg:flex">
            <label htmlFor="simple-search" className="sr-only">Buscar</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            </div>
            <Link to={`/search/${busqueda}`}>
                <button className="lg:hidden p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border hover:scale-105 focus:ring-blue-300">
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="sr-only">Search</span>
                </button>
            </Link>
        </div>
    )
}

export default SearchMobile
