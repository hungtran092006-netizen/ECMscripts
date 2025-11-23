import Heading from '../components/Heading'
import TourCard from '../components/TourCard'
import Banner from '../components/Banner'
import { useState } from 'react'
import axios from 'axios'
export default function Home() {

  // Tour Quốc Tế
  const internationalTours = [
    { id: 1, 
      title: 'Tour Du Lịch Mỹ',
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241002092045_530225_44.jpg' },
    { id: 2, 
      title: 'Tour Du Lịch DuBai', 
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_4832_dubai-5.webp' },
    { id: 3,
      title: 'Tour Du Lịch Nhật Bản',
      image: 'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg' },
    { id: 4, 
      title: 'Tour Du Lịch Trung Quốc', 
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241021023041_042431_TQ%20(8).jpg' },
    { id: 9, 
      title: 'Tour Du Lịch Malaysia', 
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_8014_batam-signal.webp' },
    { id: 10, title: 'Tour Du Lịch Singapore', image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/TourFiles/3353/z66900012813912dfe99fd38f71ea06d67e97e128d9328.webp' }
  ]

  // Tour Nội Địa
  const domesticTours = [
    { id: 5, 
      title: 'Tour Du Lịch Hà Nội', 
      image: 'https://dreamtravel.com.vn/Data/ResizeImage/uploads/images/thanh%20-%20mar%20outbound/inbound/478x298x220x2.jpg' },
    { id: 6, 
      title: 'Tour Du Lịch Đà Nẵng', 
      image: 'https://dreamtravel.com.vn/Data/ResizeImage/~/uploads/images/uy%C3%AAn%202020/%C4%91%C3%A0%20n%E1%BA%B5ng/cau_vang_da_nangx298x220x2.jpg' },
    { id: 7, 
      title: 'Tour Du Lịch Mộc Châu', 
      image: 'https://dreamtravel.com.vn/Data/ResizeImage/uploads/images/thanh%20-%20mar%20outbound/inbound/83x298x220x2.jpg' },
    { id: 8, 
      title: 'Tour Du Lịch Sa Pa', 
      image: 'https://dreamtravel.com.vn/Data/ResizeImage/~/uploads/images/mai/h_m_r_ngx298x220x2.jpg' },
    { id: 11, 
      title: 'Tour Du Lịch Lào Cai', 
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_13051_the-valley-of-sapa.webp' },
    { id: 12, 
      title: 'Tour Du Lịch Phú Quốc', 
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_240308102003_492490_cable%20car%20(4).jpg' }
  ]
        const getTours=async()=>{
          const data = await axios.get('https://localhost:3001/tours');
          console.log(data);
        }
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <Banner />

      {/* TOUR QUỐC TẾ */}
      <Heading title="Tour Quốc Tế" />
      <p className="text-center text-gray-600 text-lg mt-4 mb-8 max-w-3xl mx-auto">
        Khám phá những chuyến đi quốc tế hấp dẫn, mang đến trải nghiệm đáng nhớ cho du khách.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {internationalTours.map(tour => (
          <TourCard key={tour.id} 
          title={tour.title}
          image={tour.image} />
        ))}
      </div>

      {/* TOUR NỘI ĐỊA */}
      <Heading title="Tour Nội Địa" />
      <p className="text-center text-gray-600 text-lg mt-4 mb-8 max-w-3xl mx-auto">
        Các chuyến đi trong nước, đồng hành cùng chúng tôi để khám phá vẻ đẹp Việt Nam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domesticTours.map(tour => (
          <TourCard key={tour.id}
           title={tour.title} 
           image={tour.image} />
        ))}
      </div>
    </main>
  )
}
