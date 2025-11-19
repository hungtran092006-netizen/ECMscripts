import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import TourCard from './components/TourCard'
import Heading from './components/Heading'
import Banner from './components/Banner'

// Trang Home
function Home() {
  // Tour Quốc Tế
  const internationalTours = [
    {
      id: 1,
      title: 'Tour Du Lịch Mỹ',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241002092045_530225_44.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch DuBai',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_4832_dubai-5.webp',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhật Bản',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Trung Quốc',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241021023041_042431_TQ%20(8).jpg',
    },
  ]

  // Tour Nội Địa
  const domesticTours = [
    {
      id: 5,
      title: 'Tour Du Lịch Hà Nội',
      image:
        'https://dreamtravel.com.vn/Data/ResizeImage/uploads/images/thanh%20-%20mar%20outbound/inbound/478x298x220x2.jpg',
    },
    {
      id: 6,
      title: 'Tour Du Lịch Đà Nẵng',
      image:
        'https://dreamtravel.com.vn/Data/ResizeImage/~/uploads/images/uy%C3%AAn%202020/%C4%91%C3%A0%20n%E1%BA%B5ng/cau_vang_da_nangx298x220x2.jpg',
    },
    {
      id: 7,
      title: 'Tour Du Lịch Mộc Châu',
      image:
        'https://dreamtravel.com.vn/Data/ResizeImage/uploads/images/thanh%20-%20mar%20outbound/inbound/83x298x220x2.jpg',
    },
    {
      id: 8,
      title: 'Tour Du Lịch Sa Pa',
      image:
        'https://dreamtravel.com.vn/Data/ResizeImage/~/uploads/images/mai/h_m_r_ngx298x220x2.jpg',
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* ⭐ Banner mới */}
      <Banner />

      
      <Heading title="Tour Quốc Tế" />
      <p className="text-center text-gray-600 text-lg mt-4 mb-8 max-w-3xl mx-auto">
        Khám phá những chuyến đi quốc tế hấp dẫn, mang đến trải nghiệm đáng nhớ cho du khách.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {internationalTours.map(tour => (
          <TourCard key={tour.id} title={tour.title} image={tour.image} />
        ))}
      </div>

      
      <Heading title="Tour Nội Địa" />
      <p className="text-center text-gray-600 text-lg mt-4 mb-8 max-w-3xl mx-auto">
        Các chuyến đi trong nước, đồng hành cùng chúng tôi để khám phá vẻ đẹp Việt Nam.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domesticTours.map(tour => (
          <TourCard key={tour.id} title={tour.title} image={tour.image} />
        ))}
      </div>
    </main>
  )
}

// Trang About
function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24 text-center">
      <Heading title="Giới Thiệu" />
      <p className="text-lg mt-6 leading-relaxed text-gray-600">
        Đây là trang giới thiệu, nơi bạn có thể tìm hiểu về chúng tôi.
        Chúng tôi luôn cung cấp các dịch vụ tour du lịch chất lượng,
        mang đến trải nghiệm độc đáo và đáng nhớ cho mọi khách hàng.
      </p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
