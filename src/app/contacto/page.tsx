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
    // Aquí iría la lógica para enviar el formulario
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
      valor: "contacto@elektronacdc.com",
      enlace: "mailto:contacto@elektronacdc.com",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      valor: "+591 6971 7553",
      enlace: "https://wa.me/59169717553",
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Ponte en Contacto
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ¿Preguntas o sugerencias? Nos encantaría saber de ti. Contáctanos ahora.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactoInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300 p-8 text-center"
              >
                <div className="inline-block p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.titulo}</h3>
                <p className="text-slate-600 group-hover:text-blue-600 transition font-medium">
                  {info.valor}
                </p>
              </a>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Envíanos un mensaje</h2>
          <p className="text-slate-600 mb-8">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition"
                placeholder="tu@email.com"
              />
            </div>

            {/* Asunto */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition"
                placeholder="¿De qué se trata?"
              />
            </div>

            {/* Mensaje */}
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 outline-none transition resize-none"
                placeholder="Cuéntanos más..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="h-5 w-5 group-hover:translate-x-1 transition" />
              Enviar Mensaje
            </button>

            {/* Success Message */}
            {enviado && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center font-medium animate-in fade-in duration-300">
                ✓ Mensaje enviado exitosamente. Pronto nos contactaremos contigo.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                pregunta: "¿Cuál es el tiempo de respuesta?",
                respuesta: "Nos esforzamos por responder todos los mensajes dentro de 24 horas hábiles.",
              },
              {
                pregunta: "¿Cómo puedo acceder a los cursos?",
                respuesta: "Todos nuestros cursos están disponibles en la sección Hello Electrónica después de registrarte.",
              },
              {
                pregunta: "¿Hay descuentos para grupos?",
                respuesta: "Sí, contáctanos para consultar sobre nuestros planes grupales especiales.",
              },
              {
                pregunta: "¿Puedo descargar los recursos?",
                respuesta: "Claro, todos nuestros recursos están disponibles para descargar en la sección de descargas.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
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
