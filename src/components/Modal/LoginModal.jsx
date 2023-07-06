import { useState } from 'react';
import { Modal } from 'flowbite-react';


const LoginModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>

            <Modal show={openModal} size="md" dismissible onClose={() => setOpenModal(!openModal)} className=''>
                {/* Agregar detalles */}
                <div className={openModal && 'relative bg-white rounded-lg shadow-2xl'}>
                    <button type="button" className="absolute top-3 right-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" onClick={() => setOpenModal(!openModal)}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Cerrar Login</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900">Inicia Sesión en SmartDrink</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="correo@hotmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-500">Recordar sesión</label>
                                </div>
                            </div>
                            <button type="submit" className="border transition duration-500 ease-in-out w-full text-white bg-black hover:scale-105 hover:bg-white hover:text-black hover:border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm font-medium text-gray-500">
                                ¿No tienes cuenta? <a href="#" className="text-black font-semibold hover:underline">Crear cuenta</a>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LoginModal
