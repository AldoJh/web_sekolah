"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryItems = [
    { src: "https://placehold.co/600x800", alt: "Kegiatan 1" },
    { src: "https://placehold.co/600x800", alt: "Kegiatan 2" },
    { src: "https://placehold.co/600x800", alt: "Kegiatan 3" },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Galeri <span className="text-green-700">Sekolah</span>
      </motion.h1>

      {/* Grid Galeri */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
