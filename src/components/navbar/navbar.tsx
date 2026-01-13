"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileCheck,
  BookOpen,
  Mail,
  Home,
  Building2,
} from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
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

          {/* Servicios */}
          <div className="relative group">
            <button className="nav-link">
              <BookOpen className="h-4 w-4" />
              Servicios
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <Link className="dropdown-link" href="/servicios/tributarios">
                Gestión Tributaria
              </Link>
              <Link className="dropdown-link" href="/servicios/contabilidad">
                Contabilidad Empresarial
              </Link>
              <Link className="dropdown-link" href="/servicios/balances">
                Balances y Registros
              </Link>
              <Link className="dropdown-link" href="/servicios/asesoria">
                Asesoría Fiscal
              </Link>
            </div>
          </div>

          {/* Trámites */}
          <div className="relative group">
            <button className="nav-link">
              <Building2 className="h-4 w-4" />
              Trámites
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <Link className="dropdown-link" href="/tramites/sin">
                SIN
              </Link>
              <Link className="dropdown-link" href="/tramites/seprec">
                SEPREC
              </Link>
              <Link className="dropdown-link" href="/tramites/trabajo">
                Ministerio de Trabajo
              </Link>
              <Link className="dropdown-link" href="/tramites/cns-afp">
                CNS y AFPs
              </Link>
              <Link className="dropdown-link" href="/tramites/especiales">
                Trámites Legales
              </Link>
            </div>
          </div>

          <Link className="nav-link" href="/nosotros">
            <FileCheck className="h-4 w-4" /> Nosotros
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
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={handleMenuClose}
          />

          <div className="fixed right-0 top-0 h-screen w-full max-w-xs z-[9999] bg-white shadow-2xl md:hidden">
            {/* Header móvil */}
            <div className="flex h-16 items-center justify-between border-b px-6 bg-slate-50">
              <span className="text-lg font-semibold flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-blue-600" />
                Menú
              </span>
              <button onClick={handleMenuClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenido móvil */}
            <div className="p-6 space-y-1">
              <Link onClick={handleMenuClose} className="mobile-link" href="/">
                <Home className="h-5 w-5" /> Inicio
              </Link>

              <button
                onClick={() => toggleDropdown("servicios")}
                className="mobile-link w-full"
              >
                <BookOpen className="h-5 w-5" /> Servicios
                <ChevronDown
                  className={`ml-auto ${
                    activeDropdown === "servicios" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "servicios" && (
                <div className="pl-6 space-y-1 text-sm">
                  <Link onClick={handleMenuClose} href="/servicios/tributarios">
                    Gestión Tributaria
                  </Link>
                  <Link onClick={handleMenuClose} href="/servicios/contabilidad">
                    Contabilidad Empresarial
                  </Link>
                  <Link onClick={handleMenuClose} href="/servicios/balances">
                    Balances y Registros
                  </Link>
                </div>
              )}

              <button
                onClick={() => toggleDropdown("tramites")}
                className="mobile-link w-full"
              >
                <Building2 className="h-5 w-5" /> Trámites
                <ChevronDown
                  className={`ml-auto ${
                    activeDropdown === "tramites" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "tramites" && (
                <div className="pl-6 space-y-1 text-sm">
                  <Link onClick={handleMenuClose} href="/tramites/sin">
                    SIN
                  </Link>
                  <Link onClick={handleMenuClose} href="/tramites/seprec">
                    SEPREC
                  </Link>
                  <Link onClick={handleMenuClose} href="/tramites/cns-afp">
                    CNS y AFPs
                  </Link>
                </div>
              )}

              <Link onClick={handleMenuClose} className="mobile-link" href="/nosotros">
                <FileCheck className="h-5 w-5" /> Nosotros
              </Link>

              <Link onClick={handleMenuClose} className="mobile-link" href="/contacto">
                <Mail className="h-5 w-5" /> Contacto
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}