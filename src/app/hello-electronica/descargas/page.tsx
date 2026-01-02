"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Zap } from "lucide-react";

export default function Descargas() {
  const descargas = [
    {
      titulo: "Proteus 8.17",
      descripcion: "Simulador profesional de circuitos electrónicos",
      imagen: "https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG",
      enlace: "/hello-electronica/descargas/proteus",
      color: "from-blue-500 to-cyan-500"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* HERO SECTION */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-blue-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              Descargas
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Accede a nuestros recursos y herramientas para tus proyectos de electrónica
          </p>
        </div>
      </section>

      {/* DESCARGAS SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {descargas.map((descarga, index) => (
              <Link
                key={index}
                href={descarga.enlace}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300 hover:-translate-y-2"
              >
                {/* Imagen */}
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  <img
                    src={descarga.imagen}
                    alt={descarga.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    {descarga.titulo}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {descarga.descripcion}
                  </p>

                  {/* Botón */}
                  <div className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${descarga.color} text-white font-bold rounded-lg group-hover:shadow-lg transition-all transform group-hover:scale-105 w-fit`}>
                    <Download className="h-5 w-5" />
                    <span>Descargar</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje informativo */}
          {descargas.length > 0 && (
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-slate-700 text-center">
                <strong>Nota:</strong> Haz clic en cualquiera de las tarjetas para acceder a más información y descargar el recurso.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">¿Necesitas más recursos?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Explora nuestra sección de cursos y proyectos
          </p>
          <Link href="/hello-electronica/cursos" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105">
            Ver Cursos
          </Link>
        </div>
      </section>
    </main>
  );
}
