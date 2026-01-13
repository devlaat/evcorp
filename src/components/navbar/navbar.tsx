"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  BookOpen,
  Mail,
  Home,
} from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Cerrar menú móvil al pasar a desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMenuClose = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900 hover:text-blue-600 transition"
        >
          <Zap className="h-6 w-6 text-blue-600" />
          EvCorp | Evidencia Tributaria
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <Link className="nav-link" href="/">
            <Home className="h-4 w-4" /> Inicio
          </Link>

          <Link className="nav-link" href="/servicios">
            <BookOpen className="h-4 w-4" /> Servicios
          </Link>

          {/* Dropdown Desktop */}
          <div className="relative group">
            <button className="nav-link">
              <Zap className="h-4 w-4" />
              Hello Electrónica!
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-56 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <Link className="dropdown-link" href="/hello-electronica/proyectos">
                Proyectos
              </Link>
              <Link className="dropdown-link" href="/hello-electronica/cursos">
                Cursos
              </Link>
              <Link className="dropdown-link" href="/hello-electronica/descargas">
                Descargas
              </Link>
            </div>
          </div>

          <Link className="nav-link" href="/contacto">
            <Mail className="h-4 w-4" /> Contacto
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ================== MOBILE OVERLAY ================== */}
      {mobileOpen && (
        <>
          {/* Overlay de fondo */}
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden animate-in fade-in duration-300"
            onClick={handleMenuClose}
          />

          {/* Panel deslizable */}
          <div className="fixed right-0 top-0 h-screen w-full max-w-xs z-[9999] bg-white shadow-2xl md:hidden animate-in slide-in-from-right duration-300">
            {/* Header móvil */}
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-6 bg-slate-50">
              <span className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Menú
              </span>
              <button
                onClick={handleMenuClose}
                className="p-2 rounded-lg hover:bg-slate-200 transition text-slate-900"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
              <Link
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition text-slate-700 hover:text-blue-600 font-medium active:bg-slate-200"
                href="/"
              >
                <Home className="h-5 w-5 flex-shrink-0" />
                <span>Inicio</span>
              </Link>

              <Link
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition text-slate-700 hover:text-blue-600 font-medium active:bg-slate-200"
                href="/servicios"
              >
                <BookOpen className="h-5 w-5 flex-shrink-0" />
                <span>Servicios</span>
              </Link>

              {/* Divider */}
              <div className="my-2 border-t border-slate-200" />

              {/* Dropdown móvil */}
              <button
                onClick={() => toggleDropdown("hello")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition text-slate-700 hover:text-blue-600 font-medium w-full active:bg-slate-200"
              >
                <Zap className="h-5 w-5 flex-shrink-0" />
                <span>Hello Electrónica!</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-300 flex-shrink-0 ${
                    activeDropdown === "hello" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "hello" && (
                <div className="pl-2 space-y-1 animate-in fade-in slide-in-from-top duration-200">
                  <Link
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition text-slate-600 hover:text-blue-600 text-sm border-l-2 border-blue-600 active:bg-blue-100"
                    href="/hello-electronica/proyectos"
                  >
                    Proyectos
                  </Link>
                  <Link
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition text-slate-600 hover:text-blue-600 text-sm border-l-2 border-blue-600 active:bg-blue-100"
                    href="/hello-electronica/cursos"
                  >
                    Cursos
                  </Link>
                  <Link
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition text-slate-600 hover:text-blue-600 text-sm border-l-2 border-blue-600 active:bg-blue-100"
                    href="/hello-electronica/descargas"
                  >
                    Descargas
                  </Link>
                </div>
              )}

              {/* Divider */}
              <div className="my-2 border-t border-slate-200" />

              <Link
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition text-slate-700 hover:text-blue-600 font-medium active:bg-slate-200"
                href="/contacto"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
