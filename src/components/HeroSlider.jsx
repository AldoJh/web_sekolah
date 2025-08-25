import { useState, useEffect } from "react";

const slides = [
  {
    title: "SMP-SMA Kusuma Bangsa, Palembang",
    subtitle: "Fasilitas modern & suasana belajar profesional",
    image: "https://upload.wikimedia.org/wikipedia/commons/…/SMP-SMA_Kusuma_Bangsa.jpg"
  },
  {
    title: "Kebiasaan Sehat di SMP N 30 Semarang",
    subtitle: "Senam pagi bersama membangun semangat dan kebugaran siswa",
    image: "https://smpn30.semarangkota.go.id/path/to/image.jpg"
  },
  {
    title: "SMP BIAS: Sekolah Aktif Literasi",
    subtitle: "Mengukir prestasi melalui kecintaan pada literasi",
    image: "https://sekolahbias.sch.id/path/to/award-image.jpg"
  },
  {
    title: "SMP-SMA Insan Cendekia Sukoharjo",
    subtitle: "Membangun generasi unggul melalui kesempatan profesional",
    image: "https://acec.ums.ac.id/path/to/lowongan-image.jpg"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-xl mb-6 text-center drop-shadow">
              {slide.subtitle}
            </p>
            {/* <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md transition">
              {slide.buttonText}
            </button> */}
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
