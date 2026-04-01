"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Slogan */}
          <div className="flex flex-col">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-serif text-3xl tracking-tight leading-none">
                Lolla
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase opacity-60 ml-0.5">
                Estética Corporal
              </span>
            </a>
            <p className="font-sans text-sm text-muted-foreground opacity-70 max-w-xs leading-relaxed">
              Especialista em Drenagem e Lipedema. Unindo técnica clínica e estética para transformar vidas no coração de Cidade Tiradentes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <span className="font-sans text-[10px] tracking-[0.2em] font-black uppercase opacity-60">Navegação</span>
              <div className="flex flex-col gap-4">
                {["Início", "Sobre", "Tratamentos", "Diagnóstico"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="font-serif text-lg hover:text-primary transition-colors hover:translate-x-1 duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-sans text-[10px] tracking-[0.2em] font-black uppercase opacity-60">Contato</span>
              <div className="flex flex-col gap-4">
                <a href="https://instagram.com" className="flex items-center gap-3 font-serif text-lg hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5 text-primary opacity-60" /> Instagram
                </a>
                <a href="#contato" className="flex items-center gap-3 font-serif text-lg hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary opacity-60" /> Cidade Tiradentes
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase opacity-50">
            © 2026 Lolla Estética Corporal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase">Feito com</span>
            <Heart className="w-3 h-3 text-primary fill-current" />
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase">em Cidade Tiradentes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
