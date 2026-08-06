import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import {motion, AnimatePresence, easeInOut} from 'framer-motion'
import logo from '../../public/logoplaceholder.jpg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navLinkStyle = ({isActive}) =>
        isActive
        ? "text-red-800 border-b-2 border-red-800"
        : "hover:text-red-800 transition-colors"

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-40 p-2 bg-white">
                {/* Desktop navbar */}
                <nav className="hidden lg:flex justify-evenly items-center text-xl">
                    <Link to ="/"><img className="w-15 h-15 rounded-full" src={logo} alt="Nonna Luisa Ristorante Logo" /></Link>
                    <NavLink to ="/" className={navLinkStyle}>Welcome</NavLink>
                    <NavLink to ="/menu" className={navLinkStyle}>Menu</NavLink>
                    <NavLink to ="/wine-cocktails" className={navLinkStyle}>Wine & Cocktails</NavLink>
                    <NavLink to ="/reservations" className={navLinkStyle}>Reservations</NavLink>
                    <NavLink to ="/hours" className={navLinkStyle}>Hours</NavLink>
                    <NavLink to ="/about" className={navLinkStyle}>About</NavLink>
                </nav>

                {/* Mobile navbar */}
                <nav className="flex justify-between mx-4 lg:hidden">
                    <Link to ="/"><img className="w-15 h-15 rounded-full" src={logo} alt="Nonna Luisa Ristorante Logo" /></Link>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? <Menu /> : <X /> }
                    </button>
                </nav>
            </header>

                {/* dark overlay when mobile navbar is open */}
                {isOpen && (
                <div
                    className="fixed top-19 bottom-0 left-0 right-0 z-40 bg-black/50"
                    onClick={() => setIsOpen(false)}
                />
                )}

                {/* conditional rendering of mobile navbar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav 
                        initial={{x: '100%'}}
                        animate= {{x: 0}}
                        exit={{x: '100%'}}
                        transition={{duration: 0.3, ease: easeInOut}}
                        className="fixed flex flex-col w-1/3 z-60 top-19 bottom-0 right-0 items-center pt-10 gap-8 bg-white lg:hidden">
                        <NavLink to ="/" className={navLinkStyle}>Welcome</NavLink>
                        <NavLink to ="/menu" className={navLinkStyle}>Menu</NavLink>
                        <NavLink to ="/wine-cocktails" className={navLinkStyle}>Wine & Cocktails</NavLink>
                        <NavLink to ="/reservations" className={navLinkStyle}>Reservations</NavLink>
                        <NavLink to ="/hours" className={navLinkStyle}>Hours</NavLink>
                        <NavLink to ="/about" className={navLinkStyle}>About</NavLink>
                    </motion.nav>
                        )}
            </AnimatePresence>
        </>
    )
}