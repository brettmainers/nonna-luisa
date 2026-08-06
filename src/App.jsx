import Home from './pages/home.jsx'
import Menu from './pages/menu.jsx'
import WineCocktails from './pages/wine-cocktails.jsx'
import Reservations from './pages/reservations.jsx'
import Hours from './pages/hours.jsx'
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/wine-cocktails" element = {<WineCocktails/>} />
          <Route path="/reservations" element = {<Reservations />} />
          <Route path="/hours" element = {<Hours />} />
          <Route path="/about" element = {<About />} />
        </Routes>
    </BrowserRouter>
  )
}


