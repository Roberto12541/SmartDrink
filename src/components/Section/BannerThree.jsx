import BannerT from '../../assets/bannert.jpg'

const BannerThree = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-12 lg:pt-12">
                <div className="flex flex-col gap-4 md:flex-row-reverse justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Drinker.
                        </h1>
                        <p className="mt-6 text-xl text-slate-500 text-justify">
                            Conoce nuestro producto de subtitulo
                        </p>
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                            Comprometidos con la innovación, creatividad y servicio para que puedas brindar
                            la mejor experiencia a tus clientes con un estilo original.
                        </p>
                    </div>
                    <div>
                        <img src={BannerT} alt="" className='rounded-lg shadow-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerThree
