"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Tratamentos", href: "#servicos" },
  { name: "Diagnóstico", href: "#diagnostico" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <nav
          className={cn(
            "flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full",
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-tight leading-none">
              Lolla
            </span>
            <span className="font-sans text-[8px] tracking-[0.3em] uppercase opacity-60 ml-0.5">
              Estética Corporal
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/_studiololla_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block transition-transform hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            
            <a href="https://api.whatsapp.com/send?phone=5511981565753&text=Ol%C3%A1%20%2C%20vi%20seu%20Instagram%20e%20gostaria%20de%20um%20or%C3%A7amento%20!" target="_blank" rel="noopener noreferrer" className="hidden md:flex btn-luxury">
              Agendar
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-primary"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-20">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight leading-none text-primary">
                  Lolla
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase opacity-60 ml-0.5">
                  Estética Corporal
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-primary bg-primary/10 rounded-full"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-4xl font-light hover:text-primary transition-colors text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-primary/10 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-50">
                    Siga no Instagram
                  </span>
                  <a href="https://www.instagram.com/_studiololla_/" target="_blank" rel="noopener noreferrer" className="font-serif text-lg">@_studiololla_</a>
                </div>
              </div>
              
              <a
                href="https://api.whatsapp.com/send?phone=5511981565753&text=Ol%C3%A1%20%2C%20vi%20seu%20Instagram%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-5 bg-primary text-white text-center rounded-full font-sans text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-primary/20"
              >
                Agendar Agora
              </a>
              
              <p className="text-center font-sans text-[9px] tracking-[0.3em] uppercase opacity-40">
                Cidade Tiradentes, São Paulo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
