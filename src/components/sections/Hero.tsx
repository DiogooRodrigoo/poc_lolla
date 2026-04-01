"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-10" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="concept-label animate-reveal">Premium Body Aesthetics</span>
            <h1 className="editorial-title mb-8">
              A arte de esculpir a <br />
              <span className="italic text-primary">harmonia</span> do seu corpo.
            </h1>
            
            <p className="font-sans text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              Especialista em Drenagem Linfática e Tratamento de Lipedema. 
              Combinamos técnica clínica e sensibilidade para entregar alívio imediato e resultados estéticos superiores.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#contato" className="btn-luxury">
                Agendar Consulta
              </a>
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center px-8 py-3.5 
                font-sans text-[10px] font-bold tracking-[0.25em] uppercase
                border border-primary/20 rounded-full hover:bg-primary/5 transition-colors"
              >
                Ver Tratamentos
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-2xl text-primary">6k+</p>
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase opacity-60">Seguidores</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">280+</p>
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase opacity-60">Resultados</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">1º</p>
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase opacity-60">Cidade Tiradentes</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/hero-lolla.png"
                alt="Lolla Estética Corporal - Drenagem"
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl max-w-[200px]">
                <p className="font-serif text-sm italic mb-1">Especialista em Lipedema</p>
                <p className="font-sans text-[8px] tracking-wide opacity-70">
                  Tratamento clínico focado na saúde e bem-estar feminino.
                </p>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
