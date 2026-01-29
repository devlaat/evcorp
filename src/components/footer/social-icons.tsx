"use client";

import { FaWhatsapp, FaTiktok, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/59160515320",
    Icon: FaWhatsapp,
    bgColor: "bg-green-500",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@elektrontools",
    Icon: FaTiktok,
    bgColor: "bg-black dark:bg-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/elektronlab",
    Icon: FaFacebook,
    bgColor: "bg-blue-600",
  },
  {
    name: "Telegram",
    href: "https://t.me/electrontools",
    Icon: FaTelegram,
    bgColor: "bg-sky-500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@LAAT123",
    Icon: FaYoutube,
    bgColor: "bg-red-600",
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`
            ${social.bgColor}
            text-white
            p-3
            rounded-full
            transition-all 
            duration-300 
            hover:scale-110
            hover:shadow-lg
            flex items-center justify-center
          `}
        >
          <social.Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
