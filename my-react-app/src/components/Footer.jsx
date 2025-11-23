export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Cột 1 */}
        <div>
          <h2 className="text-xl font-semibold text-white">My Travel Agency</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Mang đến trải nghiệm du lịch tuyệt vời, an tâm trong từng hành trình.
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Về chúng tôi</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-white transition">Điều khoản</a></li>
            <li><a href="#" className="hover:text-white transition">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Câu hỏi thường gặp</a></li>
            <li><a href="#" className="hover:text-white transition">Hướng dẫn đặt tour</a></li>
            <li><a href="#" className="hover:text-white transition">Liên hệ hỗ trợ</a></li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Liên hệ</h3>
          <p className="text-gray-400">Hotline: 0123 456 789</p>
          <p className="text-gray-400 mt-1">Email: travel@support.com</p>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2025 My Travel Agency. All rights reserved.
      </div>
    </footer>
  );
}
