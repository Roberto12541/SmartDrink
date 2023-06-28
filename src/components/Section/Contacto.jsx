
const Contacto = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 flex items-center justify-center relative">
                    <img src="https://www.sillasmesas.es/blog/wp-content/uploads/2020/07/Lounge-bar-caracteristicas-y-estilos.jpg" alt="" className="object-cover"/>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contactanos</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Eres muy importante para nosotros, por eso trabajamos para brindarte el mejor servicio.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                    </div>
                    <button className="text-white bg-black border py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-black rounded text-lg">Contactar</button>
                </div>
            </div>
        </section>
    )
}

export default Contacto
