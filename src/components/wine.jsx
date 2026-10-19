import wine from '../data/wine.json'
import WineCard from './wine-card.jsx'

export default function Wine() {
    return (
        <div>
            <h2 className="text-5xl font-bold font-heading text-center underline p-16">Wine</h2>

            <h3 className="text-4xl font-bold font-heading text-center pb-8">Vini Bianchi By The Glass</h3>
            <div className="pb-16">
                {
                    wine.bianchiByGlass.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h3 className="text-4xl font-bold font-heading text-center pb-8">Bubbles and Desserts</h3>
            <div className="pb-16">
                {
                    wine.bubblesAndDesserts.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h3 className="text-4xl font-bold font-heading text-center pb-8">Vini Rossi By The Glass</h3>
            <div className="pb-16">
                {
                    wine.rossiByGlass.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h3 className="text-4xl font-bold font-heading text-center pb-8">Vini Rossi By The Bottle</h3>

            <h4 className="text-3xl text-red-800 font-bold font-heading text-center pb-8">Toscana</h4>
            <div className="pb-16">
                {
                    wine.toscana.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h4 className="text-3xl text-red-800 font-bold font-heading text-center pb-8">Piemonte</h4>
            <div className="pb-16">
                {
                    wine.piemonte.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h4 className="text-3xl text-red-800 font-bold font-heading text-center pb-8">Veneto</h4>
            <div className="pb-16">
                {
                    wine.veneto.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>

            <h4 className="text-3xl text-red-800 font-bold font-heading text-center pb-8">Altre Regioni</h4>
            <div className="pb-16">
                {
                    wine.altreRegioni.map(item => (
                        <WineCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                            price = {item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}