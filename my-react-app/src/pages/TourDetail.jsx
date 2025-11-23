import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toursAPI } from '../services/api'; // Import toursAPI từ file service của bạn

function TourDetails() {
    // Lấy tham số động (tourId) từ URL
    const { tourId } = useParams(); 
    // Dùng useNavigate để điều hướng nếu cần
    const navigate = useNavigate(); 

    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // 🔥 Gọi API để lấy dữ liệu tour chi tiết
                const response = await toursAPI.getById(tourId); 
                
                // Axios trả về dữ liệu trong thuộc tính .data
                setTour(response.data); 
            } catch (err) {
                // Xử lý lỗi từ API, ví dụ: 404 Not Found
                console.error("Lỗi khi tải chi tiết tour:", err);
                // Đặt thông báo lỗi
                setError("Không thể tải chi tiết tour. Tour có thể không tồn tại."); 
            } finally {
                setLoading(false);
            }
        };

        fetchTourDetails();
    }, [tourId]); // useEffect chạy lại khi tourId thay đổi (nếu có)

    // --- Xử lý trạng thái Loading ---
    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="text-xl text-blue-600">Đang tải chi tiết tour...</div>
            </div>
        );
    }

    // --- Xử lý trạng thái Lỗi / Tour không tồn tại ---
    if (error || !tour) {
        return (
            <div className="text-center p-10">
                <h1 className="text-4xl text-red-600 font-bold mb-4">Lỗi Truy Cập</h1>
                <p className="text-xl mt-4">{error}</p>
                <button 
                    onClick={() => navigate('/tours')} 
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Quay lại danh sách Tours
                </button>
            </div>
        );
    }

    // --- Hiển thị chi tiết Tour ---
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl my-10">
            
            {/* Ảnh chính và tên tour */}
            <img 
                src={tour.image || "https://via.placeholder.com/800x400?text=No+Image"} 
                alt={tour.name} 
                className="w-full h-96 object-cover rounded-t-lg mb-6" 
            />
            
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">
                {tour.name}
            </h1>
            
            {/* Thông tin chính */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <DetailBox icon="fas fa-money-bill-wave" label="Giá Tour" value={`${tour.price ? tour.price.toLocaleString('vi-VN') + ' VNĐ' : 'Liên hệ'}`} color="text-red-600" />
                <DetailBox icon="fas fa-clock" label="Thời lượng" value={tour.duration} color="text-green-600" />
                <DetailBox icon="fas fa-map-marker-alt" label="Điểm đến" value={tour.destination} color="text-purple-600" />
                <DetailBox icon="fas fa-users" label="Chỗ trống" value={`${tour.available} chỗ`} color="text-orange-600" />
            </div>

            {/* Mô tả chi tiết */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-t pt-4">Mô tả chuyến đi</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                {tour.description}
            </p>
            
            {/* Nút đặt tour/Liên hệ */}
            <div className="text-center">
                <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-orange-600 transition duration-300 shadow-lg">
                    ĐẶT TOUR NGAY
                </button>
            </div>
        </div>
    );
}

export default TourDetails;

// Component phụ trợ để hiển thị thông tin chi tiết đẹp hơn
const DetailBox = ({ icon, label, value, color }) => (
    <div className="bg-gray-50 p-3 rounded-lg flex items-center shadow-sm">
        <i className={`${icon} ${color} text-xl mr-3`}></i>
        <div>
            <p className="text-xs text-gray-500 font-medium uppercase">{label}</p>
            <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
    </div>
);