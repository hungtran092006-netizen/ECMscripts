import Heading from '../components/Heading'

export default function About() {
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
