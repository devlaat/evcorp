"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "59160515320";
  const message = encodeURIComponent(
    "Hola EvCorp, me gustaría solicitar información sobre vuestros servicios de auditoría y contabilidad."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-14 h-14 bg-green-500 text-white rounded-full shadow-lg
        hover:bg-green-600 hover:scale-110 transition-all duration-300
        hover:shadow-2xl group"
    >
      <FaWhatsapp className="text-2xl" />
      
      {/* Tooltip opcional */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg
        whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity
        pointer-events-none">
        Contáctanos por WhatsApp
      </span>
    </a>
  );
}
