import MenuCard from '../components/menu-card.jsx'
import dessertItems from '../data/desserts.json'  

export default function Desserts() {
    return (
        <div>
            <h2 className="text-5xl font-bold font-heading text-center underline p-16">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 pb-8 md:mx-16">
                {
                    dessertItems.map(item => (
                        <MenuCard
                            key = {item.id}
                            name = {item.name}
                            description = {item.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}