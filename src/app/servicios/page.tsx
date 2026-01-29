"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  MapPin,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function Servicios() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      imagen: "/images/servicios/image1.jpg",
      titulo: "PC | LAPTOP",
      specs: [
        "Cumplimiento normativa NB777",
        "Material eléctrico certificado",
        "Instalaciones seguras y duraderas",
      ],
    },
    {
      imagen: "/images/servicios/image2.jpg",
      titulo: "Instalaciones Eléctricas",
      specs: [
        "Tableros monofásicos y trifásicos",
        "Protecciones térmicas y diferenciales",
        "Diseño profesional y ordenado",
      ],
    },
    {
      imagen: "/images/servicios/image3.jpg",
      titulo: "Problemas con tu labadora?",
      specs: [
        "Diagnóstico preventivo",
        "Corrección de fallas eléctricas",
        "Reducción de riesgos y apagones",
      ],
    },
    {
      imagen: "/images/servicios/image4.jpg",
      titulo: "Desarrollo de Hardware y Software",
      specs: [
        "Instalaciones industriales",
        "Optimización de consumo energético",
        "Soporte técnico especializado",
      ],
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100">

      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              ECA
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Descubre todo lo que EvCorp te ofrece
          </p>
        </div>
      </section>

      {/* CAROUSEL DE IMÁGENES */}
      <section className="px-4 pb-14">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-black"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div className="relative h-[420px] md:h-[460px] lg:h-[520px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.imagen}
                    alt={slide.titulo}
                    fill
                    className="object-cover"
                    priority={index === currentSlide}
                    sizes="100vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                </div>
              ))}
            </div>

            {/* CONTROLES */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition hover:scale-110"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition hover:scale-110"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      </section>

      {/* CAROUSEL DE DESCRIPCIÓN */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-10 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === currentSlide
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                  {slide.titulo}
                </h2>

                <ul className="max-w-xl mx-auto space-y-4">
                  {slide.specs.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-lg text-slate-700"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* INDICADORES */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-10 bg-blue-600"
                      : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Item icon={<Clock className="h-10 w-10 text-blue-600" />} title="Atención rápida" text="Respuesta inmediata y trabajos garantizados." />
            <Item icon={<Zap className="h-10 w-10 text-red-500" />} title="Emergencias 24/7" text="Disponibles día y noche." />
            <Item icon={<CheckCircle className="h-10 w-10 text-green-600" />} title="Trabajo seguro" text="Cumplimos normativa eléctrica." />
            <Item icon={<MapPin className="h-10 w-10 text-purple-600" />} title="Cobertura" text="La Paz y El Alto – Bolivia." />
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contacto"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-xl hover:bg-blue-700 transition"
            >
              <PhoneCall className="h-6 w-6" />
              ¡Contáctanos ahora!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
      <div className="flex justify-center mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
