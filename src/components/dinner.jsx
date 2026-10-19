import MenuCard from '../components/menu-card.jsx'
import dinnerItems from '../data/dinner.json'  

export default function Dinner() {
    const categories = [...new Set(dinnerItems.map(item => item.category))]
    return (
        <div>
            <h2 className="text-5xl font-bold font-heading text-center p-16 underline">Speciali</h2>
            <div className="font-description text-center max-w-xl mx-auto px-16 lg:px-0 text-lg">
                <p>We have a rotating selection of dinner specials every night!</p>
                <p>Your server will read off of our signature specials board at the beginning of service.</p>
            </div>

            {categories.map(category => (
                <div key={category}>
                    <h2 className="text-5xl font-bold font-heading text-center p-16 underline">{category}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 pb-8 md:mx-16">
                        {
                            dinnerItems.filter(item => item.category === category).map(item => (
                                <MenuCard
                                    key = {item.id}
                                    name = {item.name}
                                    description = {item.description}
                                />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}