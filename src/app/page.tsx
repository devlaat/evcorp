export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-slate-900 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          EvCorp <span className="text-blue-400">Evidencia Tributaria</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          Especialistas en evidencia tributaria y auditoría fiscal.
          Brindamos respaldo técnico y documental para afrontar procesos
          de fiscalización, verificación y control tributario.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contacto"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
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

      {/* PROPUESTA DE VALOR */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Respaldo técnico para decisiones tributarias
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
          En <strong>EvCorp</strong> ofrecemos soluciones profesionales en auditoría
          tributaria y evidencia fiscal, orientadas a minimizar riesgos,
          fortalecer el cumplimiento normativo y respaldar operaciones
          económicas ante la Administración Tributaria.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Servicios</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Auditoría Tributaria"
              description="Evaluación integral del cumplimiento tributario e identificación de riesgos fiscales."
            />
            <ServiceCard
              title="Evidencia Tributaria"
              description="Construcción y validación de respaldo documental con sustento técnico y normativo."
            />
            <ServiceCard
              title="Fiscalización y Descargos"
              description="Acompañamiento técnico en procesos de fiscalización y presentación de descargos."
            />
            <ServiceCard
              title="Consultoría Fiscal"
              description="Asesoramiento especializado en normativa tributaria y buenas prácticas fiscales."
            />
            <ServiceCard
              title="Prevención de Riesgos Fiscales"
              description="Diagnósticos preventivos para reducir contingencias, multas y sanciones."
            />
            <ServiceCard
              title="Informes Técnicos"
              description="Elaboración de informes tributarios con respaldo legal y técnico."
            />
          </div>
        </div>
      </section>

      {/* ESPECIALIDAD */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Especialidad en Evidencia Tributaria
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto text-center">
          La evidencia tributaria constituye el respaldo técnico y documental
          que sustenta la realidad de las operaciones económicas frente a
          procesos de control fiscal. Nuestro enfoque combina análisis técnico,
          normativa vigente y documentación organizada.
        </p>
      </section>

      {/* METODOLOGÍA */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Metodología de Trabajo
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5 text-center">
            <Step number="1" title="Diagnóstico Tributario" />
            <Step number="2" title="Revisión Documental" />
            <Step number="3" title="Construcción de Evidencia" />
            <Step number="4" title="Informe Tributario" />
            <Step number="5" title="Acompañamiento Técnico" />
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">¿A quiénes atendemos?</h2>
        <p className="mt-6 text-lg text-gray-600">
          Empresas, profesionales independientes, emprendedores,
          contribuyentes y estudios contables que requieren respaldo
          tributario confiable.
        </p>
      </section>

      {/* CTA FINAL */}
      <section
        id="contacto"
        className="px-6 py-20 bg-slate-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold">
          ¿Necesitas respaldo tributario confiable?
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Contáctanos para una evaluación inicial y fortalece tu
          cumplimiento fiscal con evidencia técnica sólida.
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

/* COMPONENTES */

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm">
      <div className="text-blue-600 text-2xl font-bold">{number}</div>
      <div className="mt-2 font-semibold">{title}</div>
    </div>
  );
}