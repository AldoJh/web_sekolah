"use client";
import { motion } from "framer-motion";

export default function Profil() {
  return (
    <section className="w-full bg-green-50 py-20">
      {/* Tentang Sekolah */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-12"
      >
        Tentang <span className="text-green-700">SMA Harapan 3</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar Sekolah */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://placehold.co/600x600"
            alt="SMA Harapan 3"
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-green-900/30"></div>
        </motion.div>

        {/* Deskripsi Sekolah */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-semibold text-green-700">SMA Harapan 3</span>{" "}
            didirikan pada tahun 2004 dengan tujuan mengembangkan siswa secara
            akademis dan karakter. Sekolah ini fokus pada keseimbangan prestasi
            akademik dan keterampilan hidup.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Program pengembangan keterampilan mencakup kepemimpinan, kerja tim,
            berpikir kritis, serta adaptif terhadap perubahan zaman. Selain itu,
            pendidikan moral menjadi fondasi penting dalam membentuk karakter
            siswa.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Kegiatan ekstrakurikuler juga disediakan untuk mengasah bakat dan
            minat siswa di luar akademik, sehingga tercipta generasi yang
            berprestasi, berkarakter, dan siap menghadapi tantangan masa depan.
          </p>
        </motion.div>
      </div>

      {/* Sambutan Kepala Sekolah */}
      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-green-900 mb-10 text-left"
        >
          Sambutan Kepala Sekolah
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Teks Sambutan (kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Assalamu’alaikum warahmatullahi wabarakatuh,
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Dengan penuh rasa syukur, saya menyambut para siswa, orang tua,
              dan seluruh masyarakat yang telah mempercayakan pendidikan di{" "}
              <span className="font-semibold text-green-700">SMA Harapan 3</span>.
              Kami berkomitmen untuk mencetak generasi yang unggul dalam ilmu,
              berakhlak mulia, dan siap menghadapi tantangan global.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Mari bersama-sama kita wujudkan sekolah ini sebagai rumah kedua
              yang penuh dengan semangat belajar, persaudaraan, dan prestasi.
            </p>
            <p className="mt-6 font-semibold text-green-900">
              Kepala Sekolah,
              <br /> Bapak Ahmad Setiawan, S.Pd
            </p>
          </motion.div>

          {/* Foto Kepala Sekolah (kanan) */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            src="https://placehold.co/500x550"
            alt="Kepala Sekolah"
            className="rounded-2xl shadow-lg object-cover mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
