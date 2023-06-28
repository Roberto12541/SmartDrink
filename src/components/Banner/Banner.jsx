const Banner = () => {
    return (
        <section className="pt-12 max-w-[1200px] mx-auto">
            <div className="px-4">
                <h1 className="text-4xl mb-4 md:text-5xl">High-quality tech gadgets & accesories</h1>
                <p className="text-gray-500 mb-6 md:text-lg">Sem sit amet adipiscing ullamcorper adipiscing adipiscing dole convallis tincidunt senectus enim blandit elit egestas.</p>
                <div className="md:flex md:gap-4">
                    <button className="bg-black font-semibold text-white py-4 rounded-full w-full mb-4 md:mb-0 md:w-auto md:px-8">Browse products</button>
                    <button className="font-semibold border border-black py-4 w-full rounded-full md:w-auto md:px-8">About us</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
