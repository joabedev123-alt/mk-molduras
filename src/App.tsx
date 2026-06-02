import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight, Check, Image as ImageIcon, Ruler, PenTool, Layout, Box, Clock } from 'lucide-react';
import { HeroFrame } from '@/components/ui/hero-frame';

const allImages = [
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.34.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.35.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.36.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.37 (1).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.37.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.38.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.39.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.40.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.41 (1).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.41 (2).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.41.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.42 (1).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.42.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.43 (1).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.43 (2).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.43.jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.44 (1).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.44 (2).jpeg',
  '/helton10/WhatsApp Image 2026-06-01 at 18.44.44.jpeg',
  '/helton10/helton1.jpeg',
  '/helton10/helton2.jpeg',
  '/helton10/helton3.jpeg',
  '/helton10/helton4.jpeg',
  '/helton10/helton5.jpeg',
  '/helton10/helton6.jpeg',
  '/helton10/helton7.jpeg',
  '/helton10/helton8.jpeg',
  '/helton10/helton9.jpeg'
];

const wallGalleryImages = allImages;

const WallGallery = ({ images }: { images: string[] }) => {
  const Frame = ({ src, className }: { src: string, className?: string }) => (
    <div className={`bg-zinc-900 border-[2px] sm:border-[4px] md:border-[12px] border-[#111] shadow-xl md:shadow-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:border-[#C7A27A] hover:shadow-[0_0_25px_rgba(199,162,122,0.3)] ${className}`}>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none" />
      <img src={src} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" loading="lazy" />
    </div>
  );

  const chunks = [];
  for (let i = 0; i < images.length; i += 12) {
    if (images.slice(i, i + 12).length === 12) {
      chunks.push(images.slice(i, i + 12));
    }
  }

  return (
    <div className="flex flex-col gap-12 md:gap-32 w-full">
      {chunks.map((chunk, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 md:gap-8 max-w-6xl mx-auto w-full px-1 sm:px-2 md:px-4">
          {/* Top Row */}
          <div className="flex w-full gap-1 sm:gap-2 md:gap-8">
            <Frame src={chunk[0]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[1]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[2]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[3]} className="flex-1 aspect-[21/30]" />
          </div>
          
          {/* Middle Row */}
          <div className="flex w-full gap-1 sm:gap-2 md:gap-8">
            <Frame src={chunk[4]} className="flex-[42] aspect-[42/30]" />
            <div className="flex-[15] flex flex-col justify-center gap-1 sm:gap-2 md:gap-8">
              <Frame src={chunk[5]} className="w-full aspect-[15/10]" />
              <Frame src={chunk[6]} className="w-full aspect-[15/10]" />
            </div>
            <Frame src={chunk[7]} className="flex-[42] aspect-[42/30]" />
          </div>

          {/* Bottom Row */}
          <div className="flex w-full gap-1 sm:gap-2 md:gap-8">
            <Frame src={chunk[8]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[9]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[10]} className="flex-1 aspect-[21/30]" />
            <Frame src={chunk[11]} className="flex-1 aspect-[21/30]" />
          </div>
        </div>
      ))}
    </div>
  );
};

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

import { BsPen, BsRulers, BsImage, BsPrinter, BsShieldCheck, BsWrench, BsPersonWorkspace, BsBriefcase } from 'react-icons/bs';

const frameStyles = [
  { borderWidth: '20px', borderStyle: 'ridge', borderColor: '#C5A059', boxShadow: 'inset 0 0 0 6px #5c4316, inset 0 0 15px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Classic Ornate Gold
  { borderWidth: '24px', borderStyle: 'inset', borderColor: '#3E2011', boxShadow: 'inset 0 0 0 8px #C5A059, inset 0 0 20px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Wide Dark Wood with Gold Lip
  { borderWidth: '18px', borderStyle: 'groove', borderColor: '#A99B86', boxShadow: 'inset 0 0 0 4px #4a4133, inset 0 0 15px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Antique Bronze/Champagne
  { borderWidth: '22px', borderStyle: 'outset', borderColor: '#4A1515', boxShadow: 'inset 0 0 0 5px #1a0808, inset 0 0 20px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Sloped Mahogany
  { borderWidth: '16px', borderStyle: 'double', borderColor: '#DAA520', boxShadow: 'inset 0 0 0 4px #8B6508, inset 0 0 15px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Classic Double Gold
  { borderWidth: '18px', borderStyle: 'solid', borderColor: '#111', boxShadow: 'inset 0 0 0 8px #C5A059, inset 0 0 0 12px #111, inset 0 0 15px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Black & Gold Step Frame
  { borderWidth: '20px', borderStyle: 'ridge', borderColor: '#8B5A2B', boxShadow: 'inset 0 0 0 6px #3E2011, inset 0 0 15px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }, // Light Ornate Wood
  { borderWidth: '24px', borderStyle: 'groove', borderColor: '#221815', boxShadow: 'inset 0 0 0 6px #A9A9A9, inset 0 0 20px rgba(0,0,0,0.9), 0 15px 30px rgba(0,0,0,0.8)', backgroundColor: '#0a0a0a' }  // Dark Espresso with Silver Lip
];

const ServiceCard = ({ title, icon: Icon, delay, frameStyle }: { title: string, icon: any, delay: number, frameStyle: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      style={frameStyle}
      className="group relative overflow-hidden p-8 hover:scale-[1.02] transition-transform duration-500 rounded-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-10 h-10 text-secondary mb-6 relative z-10 drop-shadow-md" />
      <h3 className="text-lg font-medium text-foreground relative z-10">{title}</h3>
    </motion.div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.img
              initial={{ scale: 0.3, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              src="/helton logo.jpeg"
              alt="MK Molduras Logo"
              className="w-72 md:w-[400px] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-secondary/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
        <HeroFrame />
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/frames-bg.png" 
            alt="Atelier de Molduras Premium" 
            className="w-full h-[120%] object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-[#121212]/75" />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        <motion.div 
          style={{ opacity, y: y2 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-8"
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
            className="text-lg md:text-xl text-[#F5F2EB] mb-10 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md"
          >
            Unimos a maestria da produção artesanal à conservação de nível museológico. Um acabamento premium desenvolvido para valorizar e eternizar suas obras de arte, fotografias e projetos decorativos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-[#1D3124] hover:bg-[#1D3124]/90 text-[#F5F2EB] border-none rounded-sm px-8 py-6 text-base tracking-wide uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#1D3124]/20 group w-full sm:w-auto">
              <Phone className="mr-2 w-4 h-4" />
              Falar com um Especialista
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-sm overflow-hidden shadow-2xl border border-white/10 rounded-sm"
            >
              <img 
                src="/helton10/WhatsApp Image 2026-06-01 at 18.44.44 (1).jpeg" 
                alt="Detalhe de Moldura" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                  Tradição, técnica e <br/><span className="italic font-serif text-secondary">acabamento impecável.</span>
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-12">
                  <p>
                    Acreditamos que uma moldura é mais do que um suporte; é a extensão da obra, o elo entre a arte e o ambiente.
                  </p>
                  <p>
                    Com produção artesanal e materiais premium, garantimos não apenas a estética, mas a conservação profissional de cada peça com atenção meticulosa aos detalhes e atendimento personalizado.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 border-t border-border pt-10">
                <AnimatedNumber end="100%" label="Sob Medida" />
                <AnimatedNumber end="∞" label="Atendimento Personalizado" />
                <AnimatedNumber end="10 mil" label="Projetos Entregues" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Serviços Premium</h2>
            <div className="w-16 h-[1px] bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Definis Artesanais" icon={BsPen} delay={0.1} frameStyle={frameStyles[0]} />
            <ServiceCard title="Sob Medida" icon={BsRulers} delay={0.2} frameStyle={frameStyles[1]} />
            <ServiceCard title="Quadros Personalizados" icon={BsImage} delay={0.3} frameStyle={frameStyles[2]} />
            <ServiceCard title="Impressão Belas Artes" icon={BsPrinter} delay={0.4} frameStyle={frameStyles[3]} />
            <ServiceCard title="Conservação Preventiva" icon={BsShieldCheck} delay={0.5} frameStyle={frameStyles[4]} />
            <ServiceCard title="Montagem Técnica" icon={BsWrench} delay={0.6} frameStyle={frameStyles[5]} />
            <ServiceCard title="Instalação Profissional" icon={BsPersonWorkspace} delay={0.7} frameStyle={frameStyles[6]} />
            <ServiceCard title="Projetos Corporativo" icon={BsBriefcase} delay={0.8} frameStyle={frameStyles[7]} />
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32 bg-background border-y border-border relative overflow-hidden">
        <HeroFrame color="#ffffff" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Nossa Metodologia</h2>
            <p className="text-muted-foreground text-lg">Do projeto à instalação, cuidado em cada etapa.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8">
            <ProcessStep number="01" title="Atendimento" desc="Consultoria especializada para entender sua obra e ambiente." delay={0.2} />
            <ProcessStep number="02" title="Materiais" desc="Seleção de madeiras, paspaturs e vidros de conservação." delay={1.2} />
            <ProcessStep number="03" title="Artesanal" desc="Produção minuciosa com acabamento de alto padrão." delay={2.2} />
            <ProcessStep number="04" title="Acabamento" desc="Inspeção rigorosa de qualidade antes da finalização." delay={3.2} />
            <ProcessStep number="05" title="Entrega" desc="Instalação profissional no local desejado com segurança." delay={4.2} />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 md:py-32 bg-[#121212] text-[#F5F2EB] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-4">Acervo & Projetos</h2>
              <p className="text-[#D9D6D0] font-light text-lg">Veja algumas de nossas molduras ganhando vida em quadros expostos e obras finalizadas.</p>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full max-w-[100vw] overflow-hidden">
          <WallGallery images={wallGalleryImages} />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1a1a] -skew-x-12 transform origin-top" />
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
        <div className="absolute inset-0 bg-[url('/frames-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
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
                <Phone className="mr-2 w-4 h-4" />
                Falar com um Especialista
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
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <img src="/helton logo-Photoroom.png" alt="MK Molduras" className="h-40 md:h-48 mb-6 object-contain brightness-0 invert opacity-90 drop-shadow-md" />
              <p className="text-[#D9D6D0]/60 text-sm tracking-widest uppercase mt-2">Premium Framing Studio</p>
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
            <p className="text-[#D9D6D0]/60 text-xs tracking-wider flex items-center gap-1">
              Produzida com <span className="text-green-500">💚</span> por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#F5F2EB] font-bold transition-colors">CAMALY</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}

export default App;
