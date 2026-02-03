"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setTimeout(() => {
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      setEnviado(false);
    }, 3000);
  };

  const contactoInfo = [
    {
      icon: Mail,
      titulo: "Email",
      valor: "contacto@evcorp.com",
      enlace: "mailto:contacto@evcorp.com",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      valor: "+591 60515320",
      enlace: "https://wa.me/59160515320",
    },
    {
      icon: MapPin,
      titulo: "Ubicación",
      valor: "Bolivia",
      enlace: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* HERO */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-sm text-blue-600 block mb-4">
            Contáctanos
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Estamos listos para ayudarte
          </h1>
          <p className="text-xl text-slate-600">
            Escríbenos y recibe asesoría profesional en auditoría,
            cumplimiento y control financiero.
          </p>
        </div>
      </section>

      {/* TARJETAS DE CONTACTO */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {contactoInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300 p-10 text-center"
              >
                <div className="inline-flex p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition mb-5">
                  <IconComponent className="h-9 w-9 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{info.titulo}</h3>
                <p className="text-slate-600 group-hover:text-blue-600 transition font-medium">
                  {info.valor}
                </p>
              </a>
            );
          })}
        </div>

        {/* FORMULARIO */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 md:p-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Envíanos un mensaje
          </h2>
          <p className="text-slate-600 mb-10 text-center">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Nombre Completo", name: "nombre", type: "text", placeholder: "Tu nombre" },
              { label: "Correo Electrónico", name: "email", type: "email", placeholder: "tu@email.com" },
              { label: "Asunto", name: "asunto", type: "text", placeholder: "¿De qué se trata?" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition resize-none"
                placeholder="Cuéntanos más..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition flex items-center justify-center gap-2 group text-lg shadow-lg"
            >
              <Send className="h-5 w-5 group-hover:translate-x-1 transition" />
              Enviar Mensaje
            </button>

            {enviado && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center font-medium animate-in fade-in duration-300">
                ✓ Mensaje enviado exitosamente. Pronto nos contactaremos contigo.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-14">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-5">
            {[
              {
                pregunta: "¿Cuál es el tiempo de respuesta?",
                respuesta: "Respondemos en un máximo de 24 horas hábiles.",
              },
              {
                pregunta: "¿Atienden empresas públicas y privadas?",
                respuesta: "Sí, trabajamos con ambos sectores en Bolivia.",
              },
              {
                pregunta: "¿Pueden regularizar mi empresa?",
                respuesta: "Sí, realizamos regularización completa ante entidades.",
              },
              {
                pregunta: "¿Ofrecen asesoría continua?",
                respuesta: "Sí, contamos con planes mensuales y personalizados.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  {item.pregunta}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 pl-4">{item.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
