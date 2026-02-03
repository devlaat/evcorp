"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  PhoneCall,
  MapPin,
  Zap,
} from "lucide-react";

export default function Servicios() {
  const [current, setCurrent] = useState(0);

  const servicios = [
    {
      imagen: "/images/servicios/image1.jpg",
      titulo: "Impuestos Nacionales (SIN)",
      specs: [
        "Declaraciones IVA, IT, IUE y RC-IVA",
        "Regularización tributaria en Bolivia",
        "Cumplimiento normativo vigente",
      ],
    },
    {
      imagen: "/images/servicios/image2.jpg",
      titulo: "SEPREC",
      specs: [
        "Constitución y actualización de empresas",
        "Modificación de actividades económicas",
        "Trámites comerciales legales",
      ],
    },
    {
      imagen: "/images/servicios/image3.jpg",
      titulo: "Gestora Pública",
      specs: [
        "Registro de empleadores",
        "Asesoría en aportes y pensiones",
        "Cumplimiento de seguridad social",
      ],
    },
    {
      imagen: "/images/servicios/image4.jpg",
      titulo: "Caja Nacional de Salud",
      specs: [
        "Afiliación y desafiliación de trabajadores",
        "Regularización de aportes",
        "Gestión administrativa laboral",
      ],
    },
    {
      imagen: "/images/servicios/image5.jpg",
      titulo: "Ministerio de Trabajo",
      specs: [
        "Contratos y finiquitos laborales",
        "Planillas salariales",
        "Cumplimiento de normativa laboral",
      ],
    },
    {
      imagen: "/images/servicios/image6.jpg",
      titulo: "SIGEP · RUPE · SICOES",
      specs: [
        "Registro de proveedores del Estado",
        "Actualización de documentación",
        "Habilitación para licitaciones",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % servicios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [servicios.length]);

  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <span className="uppercase tracking-widest text-sm text-blue-500 block mb-3">
          Servicios Profesionales
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
          EvCorp
        </h1>
        <p className="mt-5 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
          Auditoría · Contabilidad · Cumplimiento Legal en Bolivia
        </p>
      </section>

      {/* SLIDER DE LOGOS */}
      <section className="py-20 bg-white overflow-hidden border-y border-slate-200">
        <div className="flex gap-24 animate-scroll items-center">
          {servicios.concat(servicios).map((item, i) => (
            <div
              key={i}
              className="min-w-[200px] flex justify-center items-center"
            >
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={180}
                height={90}
                className="object-contain transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {servicios[current].titulo}
          </h2>

          <ul className="space-y-5 max-w-xl mx-auto">
            {servicios[current].specs.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-lg text-slate-700"
              >
                <CheckCircle className="h-6 w-6 text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-3 mt-12">
            {servicios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all ${
                  current === i
                    ? "w-12 bg-blue-600"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            ¿Por qué elegir EvCorp?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Item icon={<CheckCircle className="h-10 w-10 text-green-600" />} title="Cumplimiento legal" text="Normativa boliviana garantizada." />
            <Item icon={<Clock className="h-10 w-10 text-blue-600" />} title="Atención oportuna" text="Respuestas rápidas y claras." />
            <Item icon={<Zap className="h-10 w-10 text-red-500" />} title="Experiencia técnica" text="Soluciones reales y efectivas." />
            <Item icon={<MapPin className="h-10 w-10 text-purple-600" />} title="Cobertura" text="La Paz y El Alto – Bolivia." />
          </div>

          <div className="mt-20 text-center">
            <a
              href="/contacto"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-xl hover:bg-blue-700 transition"
            >
              <PhoneCall className="h-6 w-6" />
              Contáctanos ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
      <div className="flex justify-center mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
