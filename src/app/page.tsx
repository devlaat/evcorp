"use client";

import Image from "next/image";
import { CheckCircle, BarChart3, Search, ShieldCheck } from "lucide-react";

export default function Home() {
  const logos = [
    { src: "/images/servicios/image1.jpg", alt: "Impuestos Nacionales" },
    { src: "/images/servicios/image2.jpg", alt: "SEPREC" },
    { src: "/images/servicios/image3.jpg", alt: "Gestora Pública" },
    { src: "/images/servicios/image4.jpg", alt: "Caja Nacional de Salud" },
    { src: "/images/servicios/image5.jpg", alt: "Ministerio de Trabajo" },
    { src: "/images/servicios/image6.jpg", alt: "SIGEP - RUPE - SICOES" },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* HERO PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-24 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center">
          <span className="uppercase tracking-widest text-sm text-blue-200 mb-4">
            Firma de Auditoría en Bolivia
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            EvCorp <br />
            <span className="text-blue-200">Auditores Contigo</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-blue-100 mb-10">
            Auditoría, control financiero y cumplimiento legal con evidencia válida,
            procesos auditables y respaldo profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-blue-700 font-semibold text-lg shadow-lg hover:bg-blue-100 transition">
              Solicitar Auditoría
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/40 hover:bg-white/10 transition text-lg">
              Conocer Servicios
            </button>
          </div>
        </div>
      </section>


      {/* BLOQUE PROFESIONAL */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Especialistas en Auditoría, Cumplimiento y Evidencia Tributaria
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              En <strong>EvCorp</strong> acompañamos a empresas e instituciones con
              soluciones integrales en auditoría y control financiero.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Regularización tributaria y contable
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Gestión ante entidades oficiales
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Cumplimiento normativo vigente
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Habilitación para contrataciones con el Estado
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card title="Auditoría Financiera" text="Estados financieros con evidencia válida." />
            <Card title="Control Tributario" text="Respaldo ante fiscalizaciones." />
            <Card title="Gestión Institucional" text="Trámites legales y administrativos." />
            <Card title="Cumplimiento Legal" text="Normativa boliviana vigente." />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Nuestros Servicios Profesionales
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Service icon={<Search />} title="Auditoría" text="Revisión independiente." />
          <Service icon={<BarChart3 />} title="Control" text="Monitoreo financiero." />
          <Service icon={<ShieldCheck />} title="Cumplimiento" text="Normativa vigente." />
          <Service icon={<CheckCircle />} title="Informes" text="Resultados claros." />
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transparencia, Confianza y Resultados
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            En EvCorp trabajamos junto a usted.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Contáctanos
          </button>
        </div>
      </section>

      {/* CARRUSEL INFINITO */}
      <section className="py-20 bg-white overflow-hidden border-t border-gray-200">
        <p className="text-center text-gray-500 mb-12 text-sm uppercase tracking-widest">
          Instituciones con las que trabajamos
        </p>

        <div className="flex gap-24 animate-scroll items-center">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="min-w-[180px] flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Service({ icon, title, text }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function Card({ title, text }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}
