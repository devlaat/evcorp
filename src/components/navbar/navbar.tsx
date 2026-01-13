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
  Calculator,
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
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <FileCheck className="h-7 w-7 text-blue-600" />
          <div className="leading-tight">
            <span className="block text-xl font-bold text-slate-900">
              EvCorp
            </span>
            <span className="block text-sm text-slate-600">
              Evidencia Tributaria
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-1">
          <Link className="nav-link" href="/">
            <Home className="h-4 w-4" /> Inicio
          </Link>

          {/* Servicios Tributarios */}
          <div className="relative group">
            <button className="nav-link">
              <BookOpen className="h-4 w-4" />
              Servicios Tributarios
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition" />
            </button>

            <div className="dropdown">
              <Link className="dropdown-link" href="/servicios/apertura-nit">
                Apertura de NIT
              </Link>
              <Link className="dropdown-link" href="/servicios/formularios">
                Formularios 110, 200, 400, 500, 610
              </Link>
              <Link className="dropdown-link" href="/servicios/compras-ventas">
                Registro de Compras y Ventas
              </Link>
            </div>
          </div>

          {/* Contabilidad */}
          <div className="relative group">
            <button className="nav-link">
              <Calculator className="h-4 w-4" />
              Contabilidad & Finanzas
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition" />
            </button>

            <div className="dropdown">
              <Link className="dropdown-link" href="/contabilidad/balances">
                Balances (Apertura, Gestión y Cierre)
              </Link>
              <Link className="dropdown-link" href="/contabilidad/registros">
                Registros Contables
              </Link>
              <Link className="dropdown-link" href="/contabilidad/flujo-caja">
                Bancarización y Flujo de Caja
              </Link>
            </div>
          </div>

          {/* Trámites */}
          <div className="relative group">
            <button className="nav-link">
              <Building2 className="h-4 w-4" />
              Trámites
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition" />
            </button>

            <div className="dropdown">
              <Link className="dropdown-link" href="/tramites/seprec">
                SEPREC
              </Link>
              <Link className="dropdown-link" href="/tramites/ministerio-trabajo">
                Ministerio de Trabajo
              </Link>
              <Link className="dropdown-link" href="/tramites/cns-afp">
                CNS y AFPs
              </Link>
              <Link className="dropdown-link" href="/tramites/alcaldia">
                Alcaldía
              </Link>
            </div>
          </div>

          <Link className="nav-link" href="/contacto">
            <Mail className="h-4 w-4" /> Contacto
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobileOpen(true)} className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={handleMenuClose} />

          <div className="fixed right-0 top-0 h-screen w-full max-w-xs bg-white z-50 shadow-xl">
            <div className="flex justify-between items-center h-16 px-6 border-b">
              <span className="font-semibold flex gap-2 items-center">
                <FileCheck className="h-5 w-5 text-blue-600" />
                Menú
              </span>
              <button onClick={handleMenuClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <Link onClick={handleMenuClose} className="mobile-link" href="/">
                <Home className="h-5 w-5" /> Inicio
              </Link>

              {/* Servicios */}
              <button onClick={() => toggleDropdown("servicios")} className="mobile-link w-full">
                <BookOpen className="h-5 w-5" /> Servicios Tributarios
                <ChevronDown className={`ml-auto ${activeDropdown === "servicios" && "rotate-180"}`} />
              </button>

              {activeDropdown === "servicios" && (
                <div className="pl-6 text-sm space-y-1">
                  <Link href="/servicios/apertura-nit">Apertura de NIT</Link>
                  <Link href="/servicios/formularios">Formularios SIN</Link>
                  <Link href="/servicios/compras-ventas">Compras y Ventas</Link>
                </div>
              )}

              {/* Contabilidad */}
              <button onClick={() => toggleDropdown("contabilidad")} className="mobile-link w-full">
                <Calculator className="h-5 w-5" /> Contabilidad
                <ChevronDown className={`ml-auto ${activeDropdown === "contabilidad" && "rotate-180"}`} />
              </button>

              {activeDropdown === "contabilidad" && (
                <div className="pl-6 text-sm space-y-1">
                  <Link href="/contabilidad/balances">Balances</Link>
                  <Link href="/contabilidad/registros">Registros</Link>
                  <Link href="/contabilidad/flujo-caja">Flujo de Caja</Link>
                </div>
              )}

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