export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          EvCorp <span className="text-blue-400">Evidencia Tributaria</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          Especialistas en auditoría tributaria, evidencia fiscal y respaldo técnico
          para fiscalizaciones y procesos ante la administración tributaria.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contacto"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Solicitar evaluación
          </a>
          <a
            href="#servicios"
            className="border border-slate-400 hover:border-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Ver servicios
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Especialistas en respaldo tributario
        </h2>
        <p className="mt-6 text-lg text-center text-gray-600 max-w-4xl mx-auto">
          En <strong>EvCorp</strong> brindamos soluciones técnicas en auditoría y
          evidencia tributaria, orientadas a empresas, profesionales y
          contribuyentes que requieren respaldo sólido frente a fiscalizaciones,
          verificaciones y procesos impositivos.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Auditoría Tributaria"
              description="Evaluación técnica y normativa del cumplimiento tributario, identificando riesgos y contingencias fiscales."
            />
            <ServiceCard
              title="Evidencia Tributaria"
              description="Construcción y validación de evidencia documental y técnica para respaldar operaciones ante el SIN."
            />
            <ServiceCard
              title="Fiscalización y Descargos"
              description="Acompañamiento técnico en procesos de fiscalización, verificación y presentación de descargos."
            />
            <ServiceCard
              title="Consultoría Fiscal"
              description="Asesoramiento especializado en normativa tributaria vigente y planificación fiscal."
            />
            <ServiceCard
              title="Prevención de Riesgos Fiscales"
              description="Diagnósticos preventivos para minimizar sanciones, multas y observaciones tributarias."
            />
            <ServiceCard
              title="Informes Técnicos"
              description="Elaboración de informes tributarios con sustento legal y técnico."
            />
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Metodología de Trabajo
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-5 text-center">
          <Step number="1" title="Diagnóstico" />
          <Step number="2" title="Revisión Documental" />
          <Step number="3" title="Evidencia Técnica" />
          <Step number="4" title="Informe Tributario" />
          <Step number="5" title="Acompañamiento" />
        </div>
      </section>

      {/* CTA */}
      <section
        id="contacto"
        className="px-6 py-20 bg-slate-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold">
          ¿Necesitas respaldo tributario confiable?
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Contáctanos para una evaluación inicial y protege tu información
          tributaria con evidencia sólida.
        </p>

        <a
          href="https://wa.me/XXXXXXXXXX"
          target="_blank"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition"
        >
          Contactar por WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EvCorp | Evidencia Tributaria & Auditoría Fiscal
      </footer>
    </main>
  );
}

/* COMPONENTES AUXILIARES */

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <div className="text-blue-600 text-2xl font-bold">{number}</div>
      <div className="mt-2 font-semibold">{title}</div>
    </div>
  );
}