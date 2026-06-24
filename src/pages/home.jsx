import myStock from '../../public/home-stock.jpg';

export default function Home() {
    return (
        <>
        <img 
        src={myStock}
        alt="stock image for nonna hero section"
        className="absolute inset-0 w-full h-full object-cover"
        />
        </>
    )
}