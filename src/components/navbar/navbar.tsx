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
  Calculator,
  ShieldCheck,
  FolderOpen,
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
            <div className="dropdown">
              <Link className="dropdown-link" href="/servicios/apertura-nit">
                Apertura de NIT
              </Link>
              <Link className="dropdown-link" href="/servicios/formularios">
                Formularios SIN (110, 200, 400, 500, 610)
              </Link>
              <Link className="dropdown-link" href="/servicios/compras-ventas">
                Registro de Compras y Ventas
              </Link>
              <Link className="dropdown-link" href="/servicios/regularizacion">
                Regularización Tributaria
              </Link>
            </div>
          </div>

          {/* Soluciones Contables */}
          <div className="relative group">
            <button className="nav-link">
              <Calculator className="h-4 w-4" />
              Soluciones Contables
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="dropdown">
              <Link className="dropdown-link" href="/contabilidad/registros">
                Registros Contables
              </Link>
              <Link className="dropdown-link" href="/contabilidad/balances">
                Balances (Apertura, Gestión y Cierre)
              </Link>
              <Link className="dropdown-link" href="/contabilidad/flujo-caja">
                Flujo de Caja y Bancarización
              </Link>
              <Link className="dropdown-link" href="/contabilidad/conciliaciones">
                Conciliaciones Bancarias
              </Link>
            </div>
          </div>

          {/* Auditoría */}
          <div className="relative group">
            <button className="nav-link">
              <ShieldCheck className="h-4 w-4" />
              Auditoría
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="dropdown">
              <Link className="dropdown-link" href="/auditoria/financiera">
                Auditoría Financiera
              </Link>
              <Link className="dropdown-link" href="/auditoria/tributaria">
                Auditoría Tributaria
              </Link>
              <Link className="dropdown-link" href="/auditoria/interna">
                Auditoría Interna
              </Link>
              <Link className="dropdown-link" href="/auditoria/informes">
                Informes de Auditoría
              </Link>
            </div>
          </div>

          {/* Recursos */}
          <div className="relative group">
            <button className="nav-link">
              <FolderOpen className="h-4 w-4" />
              Recursos
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="dropdown">
              <Link className="dropdown-link" href="/recursos/normativa">
                Normativa Tributaria
              </Link>
              <Link className="dropdown-link" href="/recursos/calendario">
                Calendario Fiscal
              </Link>
              <Link className="dropdown-link" href="/recursos/guias">
                Guías y Artículos
              </Link>
              <Link className="dropdown-link" href="/recursos/faq">
                Preguntas Frecuentes
              </Link>
            </div>
          </div>

          <Link className="nav-link" href="/contacto">
            <Mail className="h-4 w-4" /> Contacto
          </Link>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={handleMenuClose}
          />

          <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-xs bg-white shadow-xl md:hidden">
            <div className="flex h-16 items-center justify-between border-b px-6">
              <span className="flex items-center gap-2 font-semibold">
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

              {[
                ["servicios", "Servicios", BookOpen],
                ["contabilidad", "Soluciones Contables", Calculator],
                ["auditoria", "Auditoría", ShieldCheck],
                ["recursos", "Recursos", FolderOpen],
              ].map(([key, label, Icon]: any) => (
                <div key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="mobile-link w-full"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                    <ChevronDown
                      className={`ml-auto transition ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}

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