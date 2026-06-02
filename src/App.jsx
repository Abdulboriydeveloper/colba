import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Registration from './components/Registration'

import Home from './pages/Home'
import About from './pages/About'
import Advantages from './pages/Advantages'
import Teachers from './pages/Teachers'
import System from './pages/System'
import Results from './pages/Results'
import Locations from './pages/Locations'
import FAQ from './pages/FAQ'

function AppContent() {
  const location = useLocation()
  const isRegistrationPage = location.pathname === '/registration'

  return (
    <>
      <ScrollToTop />
      {!isRegistrationPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/system" element={<System />} />
        <Route path="/results" element={<Results />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {!isRegistrationPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
