"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  "/assets/img/brands/Amsterdam-colored.png",
  "/assets/img/brands/CALIFORNIA-black.png",
  "/assets/img/brands/Norway-black.png",
  "/assets/img/brands/Springfield-black.png",
  "/assets/img/brands/babynow.svg",
  "/assets/img/brands/babynowtoptan.svg",
  "/assets/img/brands/delaware-colored.png",
];

export default function Brands() {
  return (
    <section className="py-10 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-gray-900 mb-8">Entegrasyonlar</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="items-center"
        >
          {[...brands, ...brands].map((src, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
              <img src={src} alt="Brand" className="h-8 md:h-10 object-contain mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
