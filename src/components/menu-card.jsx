export default function MenuCard({name, description}) {
    return (
        <div className="text-center">
            <p className="font-bold text-4xl font-heading">{name}</p>
            <p className="mx-24 font-description">{description}</p>
        </div>
    )
}