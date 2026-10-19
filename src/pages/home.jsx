import { Link } from 'react-router-dom'

export default function Home() {
    const isMobile = window.innerWidth < 768
    return (
        <div className ="relative h-screen overflow-hidden">
            <img 
            src='../../public/home-stock.jpg'
            alt="stock image for nonna hero section"
            className="absolute inset-0 w-full h-full object-cover "
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-8 bg-black/50">
                <h1 className="font-bold text-7xl text-white text-center font-heading">Nonna Luisa Ristorante</h1>
                <p className=" mt-5 text-xl text-white text-center font-description">
                    The premiere destination for authentic Italian cuisine in Skagit County
                </p>
                
                {/* If mobile render a call button, if not render a link to reservations page */}
                {isMobile ? (
                    <a
                    href="tel:+13608994659"
                    className="bg-red-800 text-white font-description px-6 py-3 mt-5 hover:bg-red-700 transition-colors"
                    >
                        Reserve a Table
                    </a>) : (

                    <Link
                    to="/reservations"
                    className="bg-red-800 text-white font-description px-6 py-3 mt-5 hover:bg-red-700 transition-colors"
                    >
                    Reserve a Table
                    </Link>
                )}
            </div>
        </div>

    )
}