export default function Footer() {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-24">
                <div className="text-center">
                    <h3>Location</h3>
                    <p>314 Commercial Ave</p>
                    <p>Anacortes, Washington 98221</p>
                    <p>Downtown Anacortes</p>
                </div>

                <div className="text-center">
                    <h3>Contact</h3>
                    <a href="tel:+13608994659">(360) 899-4659</a>
                </div>
            </div>
        </div>
    )
}