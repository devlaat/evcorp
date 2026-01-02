"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export default function ProteusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/hello-electronica/descargas" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
          <ArrowLeft className="h-5 w-5" />
          Volver a descargas
        </Link>
      </div>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Proteus 8.17</h1>

        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Proteus es un software de simulación y diseño de circuitos electrónicos, ampliamente usado en educación e industria. Con esta herramienta podrás diseñar y simular tus proyectos antes de implementarlos.
        </p>

        {/* Imagen */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG"
            alt="Proteus 8.17"
            width={350}
            height={250}
            className="rounded-lg shadow-lg max-w-sm"
          />
        </div>

        {/* Botones de descarga */}
        <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
          <a
            href="https://drive.google.com/file/d/13kSvOf495EB67NdCO-hx0_SMUkyk-TBB/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
          >
            <Download className="h-5 w-5" />
            Descargar Proteus 8.17
          </a>

          <a
            href="https://drive.google.com/file/d/12SJHGht5DvOnfQYuaNJfClADd2I5xWUw/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium rounded-lg transition-all"
          >
            Traductor al Español
          </a>

          <a
            href="https://drive.google.com/file/d/1tVo7DAXM4jjBqBw08hM0YQHVsK6dtgSC/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium rounded-lg transition-all"
          >
            Librería Arduino UNO
          </a>

          <a
            href="https://drive.google.com/file/d/11UNbW5jiSCCSgYoDkZjb36kXFEHiErCA/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-all"
          >
            WinRAR
          </a>
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué incluye?</h2>
          <ul className="text-left text-slate-700 space-y-2">
            <li>✓ Software Proteus 8.17 completo</li>
            <li>✓ Interfaz en español</li>
            <li>✓ Librería Arduino UNO</li>
            <li>✓ Herramientas de simulación avanzadas</li>
            <li>✓ Soporte para múltiples microcontroladores</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
