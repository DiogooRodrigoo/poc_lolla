"use client";

import { motion } from "framer-motion";
import { MoveRight, Zap, Droplets, Sparkles, UserCircle } from "lucide-react";

const services = [
  {
    title: "Tratamento de Lipedema",
    description: "Protocolo especializado para alívio de dores, redução de inflamação e melhoria da qualidade de vida.",
    icon: Droplets,
    highlight: "Especialidade"
  },
  {
    title: "Drenagem Linfática",
    description: "Técnica manual clínica para redução de edemas e eliminação de toxinas com foco em resultados reais.",
    icon: Zap,
    highlight: "Mais Procurado"
  },
  {
    title: "Estética Facial",
    description: "Tratamentos revigorantes que realçam sua beleza natural e cuidam da saúde da sua pele.",
    icon: Sparkles,
  },
  {
    title: "Estética Corporal",
    description: "Modelagem e tratamentos personalizados para harmonizar as curvas e o bem-estar do seu corpo.",
    icon: UserCircle,
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="concept-label">Menu de Especialidades</span>
            <h2 className="editorial-title">
              Cuidado <span className="italic text-primary">personalizado</span> para cada curva do seu corpo.
            </h2>
          </div>
          <button className="flex items-center gap-4 group">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Ver Tabela de Preços</span>
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <MoveRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col h-full group"
            >
              {service.highlight && (
                <span className="absolute top-6 right-6 font-sans text-[8px] tracking-[0.2em] font-black uppercase text-primary/60">
                  {service.highlight}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-4 leading-tight">{service.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
                {service.description}
              </p>
              <a href="#contato" className="mt-auto flex items-center gap-3 text-primary font-sans text-[10px] font-bold tracking-[0.2em] uppercase">
                Saiba Mais <MoveRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Diagnosis Protocol */}
        <div className="mt-32 relative overflow-hidden p-10 md:p-20 border border-primary/10 rounded-[3rem] bg-primary/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="concept-label text-primary/60">Protocolo Lolla</span>
              <h2 className="editorial-title mb-10">
                O caminho para o <br />
                <span className="italic text-primary">seu diagnóstico</span> perfeito.
              </h2>
              <p className="font-sans text-muted-foreground text-lg mb-12">
                Nenhum corpo é igual ao outro. Por isso, criamos um sistema de 3 etapas para garantir que você receba o tratamento exato para sua necessidade.
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              {[
                { step: "01", title: "Avaliação Biomecânica", desc: "Análise profunda do tecido e circulação para identificar pontos de retenção ou lipedema." },
                { step: "02", title: "Mapeamento Térmico & Toque", desc: "Identificamos as áreas de maior sensibilidade e necessidade de alívio imediato." },
                { step: "03", title: "Tratamento de Alívio", desc: "Execução do protocolo personalizado com foco em resultados já na primeira sessão." }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 group">
                  <span className="font-serif text-5xl text-primary/20 transition-colors group-hover:text-primary/60 leading-none">{item.step}</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-2xl">{item.title}</h4>
                    <p className="font-sans text-sm text-balance leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
