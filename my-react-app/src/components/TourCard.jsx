import Button from './Button'

export default function TourCard({ title, image, price }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-4">

            {/* Ảnh */}
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover rounded-xl"
            />

            {/* Tiêu đề */}
            <h2 className="text-2xl font-bold text-orange-400 mt-4">{title}</h2>

            {/* Giá – nếu không có sẽ hiện Liên hệ */}
            <p className="text-red-500 font-bold text-xl mt-2">
                {price ? price.toLocaleString() + " đ" : "Liên hệ"}
            </p>

            {/* Nút */}
            <div className="flex justify-between mt-4">
                <Button label="Xem chi tiết" />
                <Button label="Đặt tour" />
            </div>
        </div>
    )
}
