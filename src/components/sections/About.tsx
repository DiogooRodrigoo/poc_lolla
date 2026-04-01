"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="concept-label">O Toque que Transforma</span>
            <h2 className="editorial-title mb-10 leading-[1.2]">
              Lolla: Especialista em <br />
              <span className="italic text-primary">Drenagem & Lipedema</span>
            </h2>
            
            <p className="font-sans text-muted-foreground text-lg mb-8 leading-relaxed">
              Atuando no coração de Cidade Tiradentes, Lolla transformou a vida de centenas de mulheres através de protocolos exclusivos de estética corporal e facial. 
              Sua especialização em **Tratamento de Lipedema** e **Drenagem Linfática** vai além da estética: é um compromisso com a saúde e o alívio de suas pacientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Protocolos Clínicos Exclusivos",
                "Especialista em Lipedema",
                "Drenagem Linfática Manual",
                "Estética Facial & Corporal",
                "Atendimento Personalizado",
                "Localidade: Cidade Tiradentes"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary opacity-60" />
                  <span className="font-sans text-sm font-bold tracking-wide opacity-80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 p-8 border border-primary/10 rounded-2xl bg-primary/5">
              <p className="font-serif text-xl italic text-primary">"Meu propósito é devolver a leveza ao seu corpo e a confiança ao seu olhar."</p>
              <p className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-60 mt-4">— Lolla Estética</p>
            </div>
          </motion.div>

          {/* Visual Elements / Stats Card */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-4"
              >
                <p className="font-serif text-5xl text-primary">6k+</p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-60">Seguidores no Instagram</p>
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-primary/10 p-8 rounded-[2rem] flex flex-col gap-2"
                >
                  <p className="font-serif text-3xl text-primary leading-tight">280+</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold opacity-60">Resultados Documentados</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-[2rem] flex flex-col gap-2 border-primary/20"
                >
                  <p className="font-serif text-3xl text-primary leading-tight">100%</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold opacity-60">Satisfação Clínica</p>
                </motion.div>
              </div>
            </div>

            {/* Absolute Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-[80px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] border-[0.5px] border-primary/5 rounded-full -z-20 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
