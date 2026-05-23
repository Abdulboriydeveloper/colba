import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Advantages from './pages/Advantages'
import Teachers from './pages/Teachers'
import Results from './pages/Results'
import Locations from './pages/Locations'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/results" element={<Results />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
