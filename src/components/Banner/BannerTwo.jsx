const BannerTwo = () => {
    return (
        <div className="p-4 md:p-8 max-w-[1200px] mx-auto">
            <div className="bg-black rounded-[2rem] md:rounded-[4rem] p-8 sm:flex sm:items-center md:p-12 sm:justify-center">
                <div className="md:w-6/12">
                    <h1 className="text-white text-3xl mb-4 lg:text-6xl md:mb-8">¿Por qué somos diferentes?</h1>
                    <p className="text-white mb-6 text-justify lg:text-2xl md:mb-10">Ofrecemos un servicio de calidad con 100% de garantía y un excelente servicio al cliente. En SmartDrink nos esforzamos para superar las expectativas de nuestros clientes. </p>
                    <button className="transition border bg-white w-full py-4 rounded-full hover:bg-black hover:text-white hover:border-white hover:scale-105 sm:w-auto sm:px-14"><a href="/nosotros"> Conócenos</a></button>
                </div>
                <img src="https://s3.amazonaws.com/newamsterdamspirits.com/mooseassets2/s3fs-public/cocktail-images-2020/NEWAM_VodkaSoda_0.png?9YLc0W3c9F5_XKycufHGvd3VfoNa20Ig" alt="" className="w-10/12 mx-auto sm:w-5/12 lg:w-4/12"/>
            </div>
        </div>
    )
}

export default BannerTwo
