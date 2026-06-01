import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight, Check, Image as ImageIcon, Ruler, PenTool, Layout, Box, Clock } from 'lucide-react';
import MasonryGrid from '@/components/ui/masonry-grid';

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1577083165350-13cb244eecb3?q=80&w=800&auto=format&fit=crop' }, // Frame workshop
  { id: 2, src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop' }, // Interior art
  { id: 3, src: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=800&auto=format&fit=crop' }, // Classic painting in frame
  { id: 4, src: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop' }, // Abstract art on wall
  { id: 5, src: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=800&auto=format&fit=crop' }, // Gallery wall
  { id: 6, src: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop' }, // Modern frame
  { id: 7, src: 'https://images.unsplash.com/photo-1580136608260-4ebf15facb42?q=80&w=800&auto=format&fit=crop' }, // Workshop tools
  { id: 8, src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop' }, // Minimalist art
];

const AnimatedNumber = ({ end, label }: { end: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-light text-primary"
      >
        {end}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </motion.div>
    </div>
  );
};

const ProcessStep = ({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-8 md:pl-0 border-l border-primary/20 md:border-l-0 md:border-t md:pt-8 flex-1 group"
    >
      <div className="absolute left-[-5px] top-0 md:left-0 md:top-[-5px] w-[9px] h-[9px] bg-secondary rounded-full group-hover:scale-150 transition-transform duration-300" />
      <span className="text-secondary/50 font-serif italic text-4xl block mb-2">{number}</span>
      <h3 className="text-xl text-foreground font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const ServiceCard = ({ title, icon: Icon, delay }: { title: string, icon: any, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden bg-background border border-border p-8 rounded-sm hover:border-secondary transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-8 h-8 text-secondary mb-6" strokeWidth={1.5} />
      <h3 className="text-lg font-medium text-foreground relative z-10">{title}</h3>
    </motion.div>
  );
}

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-secondary/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=2070&auto=format&fit=crop" 
            alt="Atelier de Molduras Premium" 
            className="w-full h-[120%] object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-[#121212]/55 mix-blend-multiply" />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        <motion.div 
          style={{ opacity, y: y2 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#F5F2EB] mb-6 tracking-tight leading-tight text-shadow-lg">
              Molduras que valorizam <span className="italic font-serif text-[#C7A27A]">histórias</span>, obras e memórias.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-[#D9D6D0] mb-10 font-light max-w-2xl mx-auto"
          >
            Produção artesanal, conservação especializada e acabamento premium para obras de arte, fotografias e projetos decorativos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-[#1D3124] hover:bg-[#1D3124]/90 text-[#F5F2EB] border-none rounded-sm px-8 py-6 text-base tracking-wide uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#1D3124]/20 group w-full sm:w-auto">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#D9D6D0]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 rounded-sm px-8 py-6 text-base tracking-wide uppercase backdrop-blur-sm transition-all duration-300 w-full sm:w-auto bg-transparent">
              <Phone className="mr-2 w-4 h-4" />
              WhatsApp Direto
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1594144406691-031f5139fbcc?q=80&w=1000&auto=format&fit=crop" 
                alt="Detalhe de Moldura" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
                  Tradição, técnica e <br/><span className="italic font-serif text-secondary">acabamento impecável.</span>
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-16">
                  <p>
                    Acreditamos que uma moldura é mais do que um suporte; é a extensão da obra, o elo entre a arte e o ambiente.
                  </p>
                  <p>
                    Com produção artesanal e materiais premium, garantimos não apenas a estética, mas a conservação profissional de cada peça com atenção meticulosa aos detalhes e atendimento personalizado.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-border pt-12">
                <AnimatedNumber end="100%" label="Sob Medida" />
                <AnimatedNumber end="∞" label="Atendimento Personalizado" />
                <AnimatedNumber end="10k+" label="Projetos Entregues" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 md:py-32 bg-[#F5F2EB]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Serviços Premium</h2>
            <div className="w-16 h-[1px] bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Molduras Artesanais" icon={PenTool} delay={0.1} />
            <ServiceCard title="Sob Medida" icon={Ruler} delay={0.2} />
            <ServiceCard title="Quadros Personalizados" icon={ImageIcon} delay={0.3} />
            <ServiceCard title="Impressão Fine Art" icon={Layout} delay={0.4} />
            <ServiceCard title="Conservação Preventiva" icon={Clock} delay={0.5} />
            <ServiceCard title="Montagem Técnica" icon={Box} delay={0.6} />
            <ServiceCard title="Instalação Profissional" icon={Check} delay={0.7} />
            <ServiceCard title="Projetos Corporativos" icon={ArrowRight} delay={0.8} />
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Nossa Metodologia</h2>
            <p className="text-muted-foreground text-lg">Do projeto à instalação, cuidado em cada etapa.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8">
            <ProcessStep number="01" title="Atendimento" desc="Consultoria especializada para entender sua obra e ambiente." delay={0.1} />
            <ProcessStep number="02" title="Materiais" desc="Seleção de madeiras, paspaturs e vidros de conservação." delay={0.3} />
            <ProcessStep number="03" title="Artesanal" desc="Produção minuciosa com acabamento de alto padrão." delay={0.5} />
            <ProcessStep number="04" title="Acabamento" desc="Inspeção rigorosa de qualidade antes da finalização." delay={0.7} />
            <ProcessStep number="05" title="Entrega" desc="Instalação profissional no local desejado com segurança." delay={0.9} />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 md:py-32 bg-[#121212] text-[#F5F2EB]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-4">Acervo & Projetos</h2>
              <p className="text-[#D9D6D0] font-light">Uma seleção de nossos trabalhos mais recentes.</p>
            </div>
            <Button variant="outline" className="border-[#D9D6D0]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 rounded-none tracking-widest uppercase text-xs">
              Ver Todos
            </Button>
          </div>

          <MasonryGrid
            items={galleryItems}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
            gap="1.5rem"
            renderItem={(item) => (
              <div className="relative group overflow-hidden rounded-sm cursor-none">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.src}
                  alt={`Galeria de Projetos ${item.id}`}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
          />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F2EB]/50 -skew-x-12 transform origin-top" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-12">Por que escolher a <span className="italic font-serif text-secondary">MK Molduras?</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                "Produção 100% Artesanal",
                "Acabamento Extremamente Refinado",
                "Conservação de Nível Museológico",
                "Materiais de Altíssima Qualidade",
                "Atendimento Personalizado e Consultivo",
                "Instalação e Montagem Profissional"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-[#1D3124]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594144406691-031f5139fbcc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#F5F2EB] mb-8 leading-tight">
              Transforme sua obra em uma <br/>
              <span className="italic font-serif text-[#C7A27A]">peça ainda mais especial.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-[#C7A27A] hover:bg-[#9B7A55] text-[#121212] rounded-sm px-10 py-6 text-base tracking-wide uppercase transition-all shadow-xl group">
                Solicitar Orçamento Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#121212] pt-24 pb-12 border-t border-[#1D3124]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-[#F5F2EB] tracking-widest mb-2">MK MOLDURAS</h3>
              <p className="text-[#D9D6D0]/60 text-sm tracking-widest uppercase">Premium Framing Studio</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
              <div>
                <h4 className="text-[#F5F2EB] text-sm tracking-widest uppercase mb-4">Localização</h4>
                <p className="text-[#D9D6D0]/80 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  São Paulo - SP
                </p>
                <p className="text-[#D9D6D0]/60 text-sm mt-2">Atendemos Capital, Litoral e Todo o Brasil</p>
              </div>
              <div>
                <h4 className="text-[#F5F2EB] text-sm tracking-widest uppercase mb-4">Contato</h4>
                <p className="text-[#D9D6D0]/80 flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  (11) 98297-3236
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#F5F2EB]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#D9D6D0]/40 text-xs tracking-wider">
              © {new Date().getFullYear()} MK Molduras. Todos os direitos reservados.
            </p>
            <p className="text-[#D9D6D0]/40 text-xs tracking-wider">
              Design & Development Premium
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
