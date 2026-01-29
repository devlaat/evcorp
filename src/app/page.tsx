export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          EvCorp{" "}
          <span className="text-blue-400">Auditores Contigo</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          Especialistas en evidencia tributaria y auditoría fiscal.
          Brindamos respaldo técnico y documental para afrontar procesos
          de fiscalización, verificación y control tributario.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#servicios"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Nuestros servicios
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg font-semibold transition"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-20 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Servicios Especializados
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Evidencia Tributaria
            </h3>
            <p className="text-slate-300">
              Elaboración, validación y organización de documentación
              tributaria conforme a normativa vigente.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Auditoría Fiscal
            </h3>
            <p className="text-slate-300">
              Revisión técnica de obligaciones fiscales para prevenir
              observaciones y sanciones.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Soporte en Fiscalizaciones
            </h3>
            <p className="text-slate-300">
              Acompañamiento técnico ante procesos de fiscalización,
              verificación y control tributario.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          ¿Por qué elegir EvCorp?
        </h2>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Combinamos experiencia técnica, criterio normativo y respaldo
          documental sólido para brindar seguridad y confianza frente a
          la administración tributaria.
        </p>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="px-6 py-20 bg-slate-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Contáctanos
        </h2>

        <p className="text-slate-300 mb-8">
          Agenda una consulta y recibe orientación profesional especializada.
        </p>

        <a
          href="mailto:contacto@evcorp.com"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
        >
          Solicitar asesoría
        </a>
      </section>

    </main>
  );
}
