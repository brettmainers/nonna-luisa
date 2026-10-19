import Dinner from '../components/dinner.jsx'
import Desserts from '../components/desserts.jsx'
import Wine from '../components/wine.jsx'
import Cocktails from '../components/cocktails.jsx'
import {useState} from 'react'
export default function Menus() {
    const [activeTab, setActiveTab] = useState("Dinner")
    const tabs = ["Dinner", "Desserts", "Wine", "Cocktails"]

    return (
        <body className="pt-19 bg-[#E4D9C5]">

            <h1 className="text-center text-6xl font-heading font-bold pt-12">Menus</h1>
            
            <div className="flex flex-wrap justify-center lg:gap-x-24 py-4 border-b">
                {tabs.map(tab => (
                    <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="cursor-pointer text-red-800 font-description p-4 hover:text-red-500">{tab}</button>
                ))}
            </div>
            {activeTab === "Dinner" && <Dinner />}
            {activeTab === "Desserts" && <Desserts />}
            {activeTab === "Wine" && <Wine />}
            {activeTab === "Cocktails" && <Cocktails />}

        </body>
    )
}