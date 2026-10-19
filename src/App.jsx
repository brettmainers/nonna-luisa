import Home from './pages/home.jsx'
import Menus from './pages/menus.jsx'
import Reservations from './pages/reservations.jsx'
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/menus" element = {<Menus />} />
          <Route path="/reservations" element = {<Reservations />} />
          <Route path="/about" element = {<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}


