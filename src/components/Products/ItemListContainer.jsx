import { useState, useEffect } from 'react'
import { Dropdown } from 'flowbite'
import { useParams, Link } from 'react-router-dom'
import ListProducts from "./ListProducts"
// import Category from "./Category"
import { db } from "../../services/firebase"
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const productos = categoria ? query(collection(db, 'products'), where('category', '==', categoria)) : collection(db, 'products')
        getDocs(productos)
            .then(res => {
                const newProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(newProductos)
            })
            .catch(error => console.log(error))
    }, [categoria])

    return (
        // <section className="text-gray-600 body-font">
        //     <div className="container px-5 py-6 mx-auto">
        //         <h1 className="mb-4 text-center font-semibold text-4xl">Productos</h1>
        //         <Category />
        //         <div className="flex flex-wrap -m-4">
        //             <ListProducts productos={productos} />
        //         </div>
        //     </div>
        // </section>

        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                    <p className="mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>

                <div className="mt-8 block lg:hidden">
                    <div>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                        {/* Dropdown menu */}
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <div className="hidden space-y-4 lg:block">
                        <div>
                            <label htmlFor="Categoria" className="block text-lg font-semibold text-black">
                                Categorias
                            </label>

                            <ul className='mt-4 flex flex-col gap-2'>
                                <Link to={'/productos'} className='text-gray-700 text-sm font-medium'>Todos los productos</Link>
                                <Link to={'/productos/Luces'} className='text-gray-700 text-sm font-medium'>Luces</Link>
                                <Link to={'/productos/Apagadores'} className='text-gray-700 text-sm font-medium'>Apagadores</Link>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <ListProducts productos={productos} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemListContainer
