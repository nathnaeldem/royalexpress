import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import EquipmentPage from './pages/EquipmentPage'
import CoveragePage from './pages/CoveragePage'
import DriversPage from './pages/DriversPage'
import SafetyPage from './pages/SafetyPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
