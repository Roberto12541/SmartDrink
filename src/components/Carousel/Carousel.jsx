// eslint-disable-next-line no-unused-vars
import { Carousel } from 'flowbite';

const Carrusel = () => {
    return (
        // <div id="default-carousel" className="relative w-full" data-carousel="slide">
        //     {/* Carousel wrapper */}
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         {/* Item 1 */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="./src/assets/Logo.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         {/* Item 2 */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://fotografias.larazon.es/clipping/cmsimages02/2019/10/24/D710FB96-0A0B-44F3-A706-308DC8C040EF/98.jpg?crop=2000,1125,x0,y103&width=1900&height=1069&optimize=low&format=webply" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //     </div>
        //     {/* Slider indicators */}
        //     <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
        //     </div>
        //     {/* Slider controls */}
        //     <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        //         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        //             <span className="sr-only">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        //         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        //             <span className="sr-only">Next</span>
        //         </span>
        //     </button>
        // </div>
        <div id="gallery" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}

export default Carrusel
