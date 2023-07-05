import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db } from "../../services/firebase"
import ListProducts from "./ListProducts"
import Search from '../Navbar/Search'

const SearchContainer = () => {
    const [productos, setProductos] = useState([]);
    const { busqueda } = useParams();

    useEffect(() => {
        const productos = collection(db, 'products')
        const filter = [];
        getDocs(productos)
            .then(res => {
                res.docs.map(doc => {
                    const id = doc.id;
                    const data = doc.data()
                    const nombre = data.name.toLowerCase()
                    const words = nombre.split(' ')
                    if (words.includes(`${busqueda.toLowerCase()}`)) {
                        filter.push({
                            id: id,
                            ...data
                        })
                    }
                })
                setProductos(filter)
            })
            .catch(error => console.log(error))
    }, [busqueda])

    if (productos.length < 1) {
        return (
            <div>
                <section className="w-full bg-white dark:bg-wickeddark">
                    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                        <div className="flex w-full mx-auto text-left">
                            <div className="relative inline-flex items-center mx-auto align-middle">
                                <div className="pb-12 text-center">
                                    <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl mb-8">
                                        Ups!, no encontramos <br className="hidden lg:block" />
                                        resultados para {`'${busqueda}'`}
                                    </h1>
                                    <Search/>
                                    <div className="sm:max-w-lg sm:flex md:mx-auto">
                                        <img src="https://img.freepik.com/vector-premium/producto-no-encontrado-ilustracion-plana_418302-105.jpg?w=2000" alt="" className='w-8/12 mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Productos SmartDrink</h2>
                    <p className="mt-4 max-w-md text-gray-500">
                        Encuentra los mejores productos inteligentes, desde luces hasta productos de limpieza a un mejor precio que en otras tiendas online solo en SmartDrink.
                    </p>
                </header>

                <div className="mt-8 block lg:hidden">
                    <div className="relative">
                        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                            <span href="#" className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">Categorias</span>
                            <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                                <span className="sr-only">Menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
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
                                <Link to={'/productos/Limpieza'} className='text-gray-700 text-sm font-medium'>Limpieza</Link>
                                <Link to={'/productos/Aire-Acondicionado'} className='text-gray-700 text-sm font-medium'>Aire-Acondicionado</Link>
                                <Link to={'/productos/Enchufes'} className='text-gray-700 text-sm font-medium'>Enchufes</Link>
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

export default SearchContainer
