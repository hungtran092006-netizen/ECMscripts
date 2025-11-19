import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import TourCard from './components/TourCard'
import Heading from './components/Heading'

// Trang Home
function Home() {
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Ky',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhat Ban Update',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Nhat Ban Update',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Heading title="Tour Nội Địa" />

      <p className="text-center text-lg font-medium mt-4 mb-8">
        Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biệt, tạo ra những trải nghiệm độc đáo và khó quên cho du khách.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map(tour => (
          <TourCard key={tour.id} title={tour.title} image={tour.image} />
        ))}
      </div>
    </main>
  )
}

// Trang About
function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center">
      <Heading title="Giới Thiệu" />
      <p className="text-lg mt-6 leading-relaxed">
        Đây là trang giới thiệu, nơi bạn có thể tìm hiểu về chúng tôi. Chúng tôi luôn cung cấp các dịch vụ tour du lịch chất lượng, trải nghiệm độc đáo và đáng nhớ cho mọi khách hàng.
      </p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
