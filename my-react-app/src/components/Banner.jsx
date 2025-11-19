// components/Banner.jsx
export default function Banner() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden mb-16">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* LAYER MỜ */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT TRÊN BANNER */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Khám Phá Những Hành Trình Tuyệt Vời
        </h1>
        <p className="mt-4 text-lg md:text-2xl opacity-90">
          Cùng chúng tôi đi khắp thế giới!
        </p>
      </div>
    </section>
  );
}
