import React from "react";
import Profil from "./Profil";
import Program from "./Program";
import News from "./News";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Guru from "./guru";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider"; // Huruf kapital

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSlider /> 
      <Profil />
      <Program />
      <Guru />
      <News />
      <Gallery />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
