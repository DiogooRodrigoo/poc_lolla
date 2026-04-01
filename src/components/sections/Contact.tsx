"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="concept-label">Agendamento & Localização</span>
            <h2 className="editorial-title mb-10 leading-[1.2]">
              Dê o primeiro passo para o <br />
              <span className="italic text-primary">seu alívio</span> hoje.
            </h2>
            
            <p className="font-sans text-muted-foreground text-lg mb-12 leading-relaxed">
              Agende seu diagnóstico exclusivo e comece seu tratamento com quem entende de verdade de drenagem e lipedema em Cidade Tiradentes.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-50">Localização</span>
                  <span className="font-serif text-xl">Cidade Tiradentes, São Paulo — SP</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-50">Atendimento</span>
                  <span className="font-serif text-xl">Segunda a Sábado — Horário Marcado</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-50">Redes Sociais</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-serif text-xl hover:text-primary transition-colors cursor-pointer">
                    @lolla_estetica
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white p-2 pr-10 rounded-full group hover:shadow-2xl shadow-primary/20 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <MessageCircle className="w-7 h-7 text-white fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[9px] tracking-widest font-black uppercase opacity-60">Agendar pelo</span>
                <span className="font-serif text-xl leading-none">WhatsApp</span>
              </div>
            </a>
          </motion.div>

          {/* Visual Map Placeholder / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted/40 rounded-[3rem] overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 p-10 text-center">
                 <div className="flex flex-col items-center gap-6">
                   <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-primary animate-bounce" />
                   </div>
                   <h3 className="font-serif text-3xl">Cidade Tiradentes</h3>
                   <p className="font-sans text-sm opacity-60 max-w-xs">
                     O seu refúgio de estética e alívio localizado no coração da Cidade Tiradentes.
                   </p>
                 </div>
              </div>
              
              {/* Overlay elements */}
              <div className="absolute top-8 left-8 glass p-6 rounded-2xl max-w-[200px]">
                <p className="font-sans text-[8px] tracking-[0.2em] font-black uppercase opacity-40 mb-2">Ponto de Referência</p>
                <p className="font-serif text-sm">Fácil acesso e atendimento exclusivo com segurança e discrição.</p>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-primary/10 rounded-full -z-10 rotate-45" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
