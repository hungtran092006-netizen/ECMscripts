import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetail";

function App() {
  
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:tourId" element={<TourDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App