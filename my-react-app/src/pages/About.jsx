import Heading from '../components/Heading'

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      
      {/* 1. Phần Giới Thiệu Chung */}
      <section className="text-center mb-16">
        <Heading title="✈️ Về Chúng Tôi" />
        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Chúng tôi không chỉ là một công ty du lịch, mà là đối tác kiến tạo nên những hành trình đáng nhớ.
          Với kinh nghiệm dày dặn và đội ngũ tận tâm, chúng tôi cam kết mang đến trải nghiệm du lịch 
          độc đáo, an toàn và đầy cảm hứng cho mọi khách hàng.
        </p>
      </section>

      {/* 2. Phần Tầm nhìn & Sứ mệnh (Grid 2 cột) */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Hộp Sứ Mệnh */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-3xl font-extrabold text-blue-600 mb-4 flex items-center">
            <i className="fas fa-bullseye mr-3"></i> Sứ Mệnh
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Sứ mệnh của chúng tôi là kết nối mọi người với những kỳ quan tuyệt vời nhất của Việt Nam và thế giới,
            thông qua các tour du lịch chất lượng cao, linh hoạt và thân thiện với môi trường.
          </p>
        </div>

        {/* Hộp Tầm Nhìn */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-3xl font-extrabold text-green-600 mb-4 flex items-center">
            <i className="fas fa-eye mr-3"></i> Tầm Nhìn
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Trở thành công ty du lịch hàng đầu được yêu thích tại Việt Nam, được biết đến với sự đổi mới, 
            dịch vụ khách hàng xuất sắc và đóng góp tích cực cho cộng đồng du lịch bền vững.
          </p>
        </div>
      </section>

      {/* 3. Phần Giá trị Cốt lõi (Grid 3 cột) */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Giá Trị Cốt Lõi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <CoreValueCard 
            icon="fas fa-heart" 
            title="Tận Tâm" 
            description="Đặt trải nghiệm và sự hài lòng của khách hàng lên hàng đầu trong mọi dịch vụ."
            color="text-red-500"
          />
          <CoreValueCard 
            icon="fas fa-lock" 
            title="Uy Tín" 
            description="Cam kết cung cấp dịch vụ đúng như đã quảng cáo, minh bạch về giá cả và chất lượng."
            color="text-yellow-500"
          />
          <CoreValueCard 
            icon="fas fa-lightbulb" 
            title="Sáng Tạo" 
            description="Liên tục đổi mới, tạo ra các tour độc đáo, khác biệt và phong phú."
            color="text-indigo-500"
          />
        </div>
      </section>

      {/* 4. Lời kêu gọi hành động */}
      <section className="text-center bg-blue-50 p-10 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sẵn Sàng Cho Chuyến Đi Tiếp Theo Của Bạn?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Hãy để chúng tôi thiết kế hành trình hoàn hảo cho bạn.
        </p>
        
        {/* Thêm Link hoặc Button dẫn đến trang Tours */}
        <a 
          href="/tours" // Thay thế bằng component Link nếu bạn dùng React Router DOM
          className="bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 transition duration-300 shadow-lg"
        >
          Khám phá Tours ngay!
        </a>
      </section>
    </main>
  )
}

// Component phụ trợ cho Giá trị Cốt lõi
const CoreValueCard = ({ icon, title, description, color }) => (
    <div className="text-center p-6 bg-white border border-gray-100 rounded-lg shadow-md">
        <i className={`${icon} ${color} text-4xl mb-4`}></i>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
    </div>
);