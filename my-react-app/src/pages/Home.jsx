import TourCard from './TourCard'

export default function Home() {

  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Mỹ',
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241002092045_530225_44.jpg',
      price: 50000000
    },
    {
      id: 2,
      title: 'Tour Du Lịch DuBai',
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_4832_dubai-5.webp',
      price: 35000000
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhật Bản',
      image: 'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
      price: 28000000
    },
    {
      id: 4,
      title: 'Tour Du Lịch Trung Quốc',
      image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_241021023041_042431_TQ%20(8).jpg',
      price: 18000000
    }
  ]

  return (
    <div className="p-10">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Trang Chủ</h1>
        <p className="text-lg">Chào mừng bạn đến với trang chủ của chúng tôi!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tours.map(tour => (
          <TourCard
            key={tour.id}
            title={tour.title}
            image={tour.image}
            price={tour.price}      // 💥 Quan trọng — phải truyền!
          />
        ))}
      </div>
    </div>
  )
}
