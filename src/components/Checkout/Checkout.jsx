import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CartContext.jsx"
import { LoginContext } from "../../context/LoginContext.jsx"
import { db } from "../../services/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import Logo from "../../assets/Logo-mobile.png"

const Checkout = () => {
    const { datos } = useContext(LoginContext);
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const { price, name } = useParams();
    const [nombre, setNombre] = useState(datos[0].name)
    const [paterno, setPaterno] = useState(datos[0].paterno)
    const [materno, setMaterno] = useState(datos[0].materno)
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState(datos[0].email)
    const [direccion, setDireccion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!nombre || !paterno || !materno || !telefono || !email || !direccion) {
            setError('Por favor llena todo los datos')
            return;
        }

        // carrito.map(producto => {
        //     const updateDocument = async () => {
        //         console.log(producto.cantidad);
        //         try {
        //             const docRef = collection(db, 'products').doc(producto.item.id);
        //             console.log(docRef.id);
        //             await docRef.update({
        //                 stock: docRef.stock - producto.cantidad,
        //             });
        //         } catch (error) {
        //             console.error('Error al actualizar el documento:', error);
        //         }
        //     };
        //     updateDocument();
        // })

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                title: producto.item.name,
                price: producto.item.price,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + (producto.item.price * producto.cantidad), 0),
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            telefono: telefono,
            email: email,
            direccion: direccion
        }

        addDoc(collection(db, 'ordenes'), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setError("");
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden intentelo mas tarde");
            })
    }

    return (
        <section>
            <h1 className="sr-only">Checkout</h1>
            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-12 md:py-24">
                    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                        <h2 className="text-2xl">Resumen de compra</h2>
                        <div>
                            <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-100">
                                    {
                                        name &&
                                        <li className="flex items-center gap-4 py-4">
                                            <img src={Logo} alt="" className="h-16 w-16 rounded object-fill" />
                                            <div>
                                                <h3 className="text-sm text-gray-900 line-clamp-1">{name}</h3>
                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline text-sm">Cantidad: </dt>
                                                        <dd className="inline text-sm">1</dd>
                                                    </div>
                                                    <div>
                                                        <dt className="inline text-sm">Precio:</dt>
                                                        <dd className="inline text-sm"> ${price}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li>
                                    }
                                    {carrito.map(producto =>
                                        <li className="flex items-center gap-4 py-4" key={producto.id}>
                                            <img src={producto.item.image} alt="" className="h-16 w-16 rounded object-fill" />
                                            <div>
                                                <h3 className="text-sm text-gray-900 line-clamp-1">{producto.item.name}</h3>
                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline text-sm">Cantidad: </dt>
                                                        <dd className="inline text-sm">{producto.cantidad}</dd>
                                                    </div>
                                                    <div>
                                                        <dt className="inline text-sm">Precio:</dt>
                                                        <dd className="inline text-sm"> ${producto.item.price}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4" onSubmit={handleCheckout}>
                            <div className="col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
                                <input type="text" id="Nombre" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={nombre} onChange={(e) => setNombre(e.target.value)} readOnly />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                                <input type="text" id="Paterno" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={paterno} onChange={(e) => setPaterno(e.target.value)} readOnly />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                                <input type="text" id="Materno" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={materno} onChange={(e) => setMaterno(e.target.value)} readOnly />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">Telefono</label>
                                <input type="tel" id="Telefono" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Correo electronico</label>
                                <input type="email" id="email" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email2" className="block text-sm font-medium text-gray-700">Direccion de envio</label>
                                <textarea name="" id="" cols="30" rows="5" className="mt-2 w-full border rounded-md border-gray-200 shadow-sm sm:text-lg px-2 py-1" value={direccion} onChange={(e) => setDireccion(e.target.value)}></textarea>
                            </div>

                            <div className="col-span-6">
                                <button className="block w-full border rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg hover:bg-white hover:text-black hover:border-black">Terminar Orden</button>
                            </div>
                        </form>
                        {
                            error && <p className="text-center my-4 text-red-700">{error}</p>
                        }
                        {
                            ordenId && (<p className="my-8 flex justify-center w-full text-gray-600">Numero de orden: {ordenId}</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout