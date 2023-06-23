
const Pricing = () => {
    return ( 
        <section>
            <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div>
                    <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
                        <div className="relative flex flex-col p-8 bg-white">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">Basico</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-extrabold tracking-tight">$24</span>
                                    <span className="ml-1 text-xl font-semibold">/mes</span>
                                </p>
                                <p className="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic.</p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">¿Que contiene?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Lorem ipsum dolor sit amet.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded-lg">
                                <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar </a>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-black rounded-2xl">
                            <div className="relative flex-1">
                                <h3 className="text-xl font-semibold text-white">Intermedio</h3>
                                <p className="flex items-baseline mt-4 text-white">
                                    <span className="text-5xl font-bold tracking-tight text-white">$32</span>
                                    <span className="ml-1 text-xl font-semibold text-white">/mes</span>
                                </p>
                                <p className="mt-6 text-white text-solitud">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, velit?</p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-white">¿Que incluye?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Lorem ipsum dolor sit amet.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="z-50 mt-6 rounded-lg">
                                <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar </a>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-white">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">Profesional</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-bold tracking-tight">$24</span>
                                    <span className="ml-1 text-xl font-semibold">/mes</span>
                                </p>
                                <p className="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic.</p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">¿Que contiene?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Lorem ipsum dolor sit amet.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded-lg">
                                <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing
