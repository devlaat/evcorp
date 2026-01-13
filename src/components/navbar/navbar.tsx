"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  FileCheck,
  BookOpen,
  Mail,
  Home,
  Calculator,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClose = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <FileCheck className="h-7 w-7 text-blue-600" />
          <div className="leading-tight">
            <span className="block text-xl font-bold text-slate-900">
              EvCorp
            </span>
            <span className="block text-sm font-medium text-slate-600">
              Evidencia Tributaria
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center gap-1">
          <Link className="nav-link" href="/">
            <Home className="h-4 w-4" /> Inicio
          </Link>

          <Link className="nav-link" href="/servicios">
            <BookOpen className="h-4 w-4" /> Servicios
          </Link>

          <Link className="nav-link" href="/soluciones-contables">
            <Calculator className="h-4 w-4" /> Soluciones Contables
          </Link>

          <Link className="nav-link" href="/auditoria">
            <ShieldCheck className="h-4 w-4" /> Auditoría
          </Link>

          <Link className="nav-link" href="/recursos">
            <FolderOpen className="h-4 w-4" /> Recursos
          </Link>

          <Link className="nav-link" href="/contacto">
            <Mail className="h-4 w-4" /> Contacto
          </Link>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <>
          {/* Fondo */}
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={handleMenuClose}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-screen w-full max-w-xs z-[9999] bg-white shadow-2xl md:hidden">
            {/* Header móvil */}
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-6 bg-slate-50">
              <span className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-blue-600" />
                Menú
              </span>
              <button
                onClick={handleMenuClose}
                className="p-2 rounded-lg hover:bg-slate-200 transition"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenido móvil */}
            <div className="p-6 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
              <Link onClick={handleMenuClose} className="mobile-link" href="/">
                <Home className="h-5 w-5" /> Inicio
              </Link>

              <Link
                onClick={handleMenuClose}
                className="mobile-link"
                href="/servicios"
              >
                <BookOpen className="h-5 w-5" /> Servicios
              </Link>

              <Link
                onClick={handleMenuClose}
                className="mobile-link"
                href="/soluciones-contables"
              >
                <Calculator className="h-5 w-5" /> Soluciones Contables
              </Link>

              <Link
                onClick={handleMenuClose}
                className="mobile-link"
                href="/auditoria"
              >
                <ShieldCheck className="h-5 w-5" /> Auditoría
              </Link>

              <Link
                onClick={handleMenuClose}
                className="mobile-link"
                href="/recursos"
              >
                <FolderOpen className="h-5 w-5" /> Recursos
              </Link>

              <Link
                onClick={handleMenuClose}
                className="mobile-link"
                href="/contacto"
              >
                <Mail className="h-5 w-5" /> Contacto
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}