import { collection, getDocs, where, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db } from "../../services/firebase"
import ListProducts from "./ListProducts"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [stateCategorias, setStateCategorias] = useState(false)
    const { categoria } = useParams();
    const { search } = useParams();

    const changeState = () => {
        setStateCategorias(!stateCategorias);
    }

    useEffect(() => {
        let productos = "";
        if (!categoria && !search) {
            productos = collection(db, 'products')
        }
        if (categoria) {
            productos = query(collection(db, 'products'), where('category', '==', categoria))
        }
        if (search) {
            productos = collection(db, 'products')
            console.log(productos);
        }
        // const productos = categoria && search ? query(collection(db, 'products'), where('category', '==', categoria)) : collection(db, 'products')
        getDocs(productos)
            .then(res => {
                const newProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(newProductos)
            })
            .catch(error => console.log(error))
    }, [categoria, search])

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
                            <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700" onClick={changeState}>
                                <span className="sr-only">Menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {
                            stateCategorias &&
                            <div className="absolute start-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                                <div className="p-2">
                                    <Link to={'/productos'} href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem" onClick={changeState}>Todos los productos</Link>
                                    <Link to={'/productos/Luces'} href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem" onClick={changeState}>Luces</Link>
                                    <Link to={'/productos/Apagadores'} href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem" onClick={changeState}>Apagadores</Link>
                                </div>
                            </div>
                        }
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
