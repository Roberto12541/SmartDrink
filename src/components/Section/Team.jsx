import miguel from '../../assets/perfil-miguel.jpeg'
import roberto from '../../assets/perfil-roberto.jpeg'
import marco from '../../assets/perfil-marco.jpeg'
import luis from '../../assets/perfil-luis.jpeg'
const Team = () => {
    return (
        <section className="text-white body-font bg-black">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">NUESTRO EQUIPO</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Equipo JavaTec </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={miguel} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-white">Miguel Angel Chan V.</h2>
                                <h3 className="text-gray-500 mb-3">Lider de proyecto</h3>
                                <span className="inline-flex">
                                    <a href='https://www.facebook.com/macv2002' target='_blank' className="text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href='https://api.whatsapp.com/send/?phone=525631403719&text&app_absent=0' target='_blank' className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={roberto} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-white">Roberto Adrian Miranda M.</h2>
                                <h3 className="text-gray-500 mb-3">Desarrollador</h3>
                                <span className="inline-flex">
                                    <a href='https://www.facebook.com/profile.php?id=100010329643690' target='_blank' className="text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href='https://api.whatsapp.com/send/?phone=525564100068&text&app_absent=0' target='_blank' className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={marco} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-white">Marco Antonio Torres L.</h2>
                                <h3 className="text-gray-500 mb-3">Diseñador de interfaz de usuario
</h3>
                                <span className="inline-flex">
                                    <a href='https://www.facebook.com/profile.php?id=100082778165701' target='_blank' className="text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href='https://api.whatsapp.com/send/?phone=525564100068&text&app_absent=0' className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0     w-48 h-48 object-cover object-center sm:mb-0 mb-4 rounded-full" src={luis} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-white">Jose Luis Oro C.</h2>
                                <h3 className="text-gray-500 mb-3">Diseñador</h3><br></br>
                                <span className="inline-flex">
                                    <a href='' className="text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href='https://api.whatsapp.com/send/?phone=525564100068&text&app_absent=0' className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
