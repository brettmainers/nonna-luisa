export default function WineCard({name, description, price}) {
    return (
        <div className="flex flex-wrap justify-evenly text-center pb-8 mx-24 gap-x-16">
                <p className="font-heading font-bold text-3xl">{name}</p>
                <p className="font-description font-bold">{price}</p>
                <p className="font-description w-full">{description}</p>
        </div>
    )
}