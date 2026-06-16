import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight, Check } from 'lucide-react';
import { HeroFrame } from '@/components/ui/hero-frame';
import { InfiniteCarousel } from '@/components/ui/infinite-carousel';

const wallGalleryImages = [
  '/imagens galeria/01.jpg',
  '/imagens galeria/02.png',
  '/imagens galeria/03.jpg',
  '/imagens galeria/04.jpg',
  '/imagens galeria/05.jpg',
  '/imagens galeria/06.jpg',
  // repetição para carrossel contínuo
  '/imagens galeria/01.jpg',
  '/imagens galeria/02.png',
  '/imagens galeria/03.jpg',
  '/imagens galeria/04.jpg',
  '/imagens galeria/05.jpg',
  '/imagens galeria/06.jpg',
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
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{ color: '#0a0a0a' }}
      >
        {end}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm uppercase tracking-widest font-semibold"
        style={{ color: '#4a3a28' }}
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
      className="relative pl-8 md:pl-0 md:pt-8 flex-1 group"
      style={{ borderLeft: '1px solid rgba(155,122,85,0.3)' }}
    >
      <div className="absolute left-[-5px] top-0 md:left-0 md:top-[-5px] w-[9px] h-[9px] rounded-full group-hover:scale-150 transition-transform duration-300" style={{ backgroundColor: '#C7A27A' }} />
      <span className="font-serif italic text-4xl block mb-2" style={{ color: 'rgba(155,122,85,0.6)' }}>{number}</span>
      <h3 className="text-xl font-bold mb-2" style={{ color: '#0a0a0a' }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#2a2a2a' }}>{desc}</p>
    </motion.div>
  );
};

import { BsPen, BsRulers, BsImage, BsPrinter, BsShieldCheck, BsWrench, BsPersonWorkspace, BsBriefcase } from 'react-icons/bs';

const modernFrame = { borderWidth: '8px', borderStyle: 'solid', borderColor: '#1a1a1a', boxShadow: 'inset 0 0 0 1px #333, inset 0 4px 15px rgba(0,0,0,0.4), 0 10px 25px rgba(0,0,0,0.5)', backgroundColor: '#0a0a0a' };
const frameStyles = Array(8).fill(modernFrame);

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
      className="group relative overflow-hidden p-5 md:p-8 hover:scale-[1.02] transition-transform duration-500 rounded-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-4 md:mb-6 relative z-10 drop-shadow-md" />
      <h3 className="text-sm md:text-lg font-medium text-foreground relative z-10 leading-snug">{title}</h3>
    </motion.div>
  );
}

function App() {


  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>


      <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-secondary/30">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] py-20 md:py-0 flex items-center justify-center overflow-hidden bg-[#121212]">
        <HeroFrame />
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/molduras 02.jpg" 
            alt="Atelier de Molduras Premium" 
            className="w-full h-[120%] object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-[#121212]/75" />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        <motion.div 
          style={{ opacity, y: y2 }}
          className="relative z-20 text-center px-6 sm:px-12 md:px-24 max-w-4xl mx-auto mt-8 md:-mt-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-light text-[#F5F2EB] mb-4 md:mb-6 tracking-tight leading-tight text-shadow-lg">
              Molduras que valorizam <span className="italic font-serif text-[#C7A27A]">histórias</span>, obras e memórias.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base md:text-xl text-[#F5F2EB] mb-8 md:mb-10 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md"
          >
            Unimos a maestria da produção artesanal à conservação de nível museológico. Um acabamento premium desenvolvido para valorizar e eternizar suas obras de arte, fotografias e projetos decorativos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/5511982973236?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20MK%20Molduras.', '_blank')}
              className="bg-[#C7A27A] hover:bg-[#9B7A55] text-[#121212] rounded-sm px-6 py-5 md:px-8 md:py-6 text-sm md:text-base tracking-wide uppercase transition-all shadow-xl group w-full sm:w-auto"
            >
              <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Falar com um Especialista
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE A EMPRESA — fundo CLARO */}
      <section className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#F5F2EB' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm mx-auto lg:max-w-sm overflow-hidden shadow-2xl border border-[#C7A27A]/30 rounded-sm" style={{ aspectRatio: '4/3' }}
            >
              <img 
                src="/molduras.jpg" 
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
                <h2 className="text-3xl md:text-5xl font-semibold mb-2 leading-tight" style={{ color: '#0a0a0a' }}>
                  Tradição, técnica e <br/><span className="italic font-serif" style={{ color: '#9B7A55' }}>acabamento impecável.</span>
                </h2>
                <div className="w-14 h-[3px] mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, #C7A27A, #9B7A55)' }} />
                <div className="space-y-5 text-lg font-normal leading-relaxed mb-12" style={{ color: '#2a2a2a' }}>
                  <p>
                    Acreditamos que uma moldura é mais do que um suporte; é a extensão da obra, o elo entre a arte e o ambiente.
                  </p>
                  <p>
                    Com produção artesanal e materiais premium, garantimos não apenas a estética, mas a conservação profissional de cada peça com atenção meticulosa aos detalhes e atendimento personalizado.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 border-t pt-8 md:pt-10" style={{ borderColor: '#C7A27A40' }}>
                <AnimatedNumber end="100%" label="Sob Medida" />
                <AnimatedNumber end="∞" label="Atendimento Personalizado" />
                <AnimatedNumber end="10 mil" label="Projetos Entregues" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS — fundo ESCURO */}
      <section className="py-14 md:py-32" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-24">
            <h2 className="text-2xl md:text-5xl font-light text-foreground mb-4">Serviços Premium</h2>
            <div className="w-16 h-[1px] bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ServiceCard title="Definis Artesanais" icon={BsPen} delay={0.1} frameStyle={frameStyles[0]} />
            <ServiceCard title="Sob Medida" icon={BsRulers} delay={0.2} frameStyle={frameStyles[1]} />
            <ServiceCard title="Quadros Personalizados" icon={BsImage} delay={0.3} frameStyle={frameStyles[2]} />
            <ServiceCard title="Impressão Belas Artes" icon={BsPrinter} delay={0.4} frameStyle={frameStyles[3]} />
            <ServiceCard title="Conservação Preventiva" icon={BsShieldCheck} delay={0.5} frameStyle={frameStyles[4]} />
            <ServiceCard title="Montagem Técnica" icon={BsWrench} delay={0.6} frameStyle={frameStyles[5]} />
            <ServiceCard title="Instalação Profissional" icon={BsPersonWorkspace} delay={0.7} frameStyle={frameStyles[6]} />
            <ServiceCard title="Projetos Corporativos" icon={BsBriefcase} delay={0.8} frameStyle={frameStyles[7]} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/5511982973236?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Serviços%20Premium%20da%20MK%20Molduras.', '_blank')}
              className="bg-[#C7A27A] hover:bg-[#9B7A55] text-[#121212] rounded-sm px-6 py-5 md:px-10 md:py-6 text-sm md:text-base tracking-wide uppercase transition-all shadow-xl group w-full sm:w-auto"
            >
              <Phone className="mr-2 w-4 h-4" />
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROCESSO — fundo CLARO */}
      <section className="py-14 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F2EB', borderTop: '1px solid #C7A27A30', borderBottom: '1px solid #C7A27A30' }}>
        <HeroFrame color="#9B7A55" />
        <div className="container mx-auto px-6 sm:px-12 md:px-24 relative z-10">
          <div className="mb-10 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-semibold mb-2" style={{ color: '#0a0a0a' }}>Nossa Metodologia</h2>
            <div className="w-14 h-[3px] mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, #C7A27A, #9B7A55)' }} />
            <p className="text-lg font-normal" style={{ color: '#2a2a2a' }}>Do projeto à instalação, cuidado em cada etapa.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8">
            <ProcessStep number="01" title="Atendimento" desc="Consultoria especializada para entender sua obra e ambiente." delay={0.1} />
            <ProcessStep number="02" title="Materiais" desc="Seleção de madeiras, paspaturs e vidros de conservação." delay={0.2} />
            <ProcessStep number="03" title="Artesanal" desc="Produção minuciosa com acabamento de alto padrão." delay={0.3} />
            <ProcessStep number="04" title="Acabamento" desc="Inspeção rigorosa de qualidade antes da finalização." delay={0.4} />
            <ProcessStep number="05" title="Entrega" desc="Instalação profissional no local desejado com segurança." delay={0.5} />
          </div>
        </div>
      </section>

      {/* GALERIA — fundo ESCURO */}
      <section className="py-24 md:py-32 text-[#F5F2EB] overflow-hidden" style={{ backgroundColor: '#121212' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Acervo & Projetos</h2>
            <p className="text-[#D9D6D0] font-light text-lg max-w-2xl mx-auto">Veja algumas de nossas molduras ganhando vida em quadros expostos e obras finalizadas.</p>
          </div>
        </div>
        <div className="pt-8 w-full max-w-[100vw] overflow-hidden">
          <InfiniteCarousel images={wallGalleryImages} direction="left" speed={100} />
        </div>
      </section>

      {/* DIFERENCIAIS — fundo CLARO */}
      <section className="py-14 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F2EB' }}>
        <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full -skew-x-12 transform origin-top" style={{ backgroundColor: '#E8E2D8' }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-5xl font-semibold mb-2" style={{ color: '#0a0a0a' }}>Por que escolher a <span className="italic font-serif" style={{ color: '#9B7A55' }}>MK Molduras?</span></h2>
            <div className="w-14 h-[3px] mb-6 md:mb-10 rounded-full" style={{ background: 'linear-gradient(90deg, #C7A27A, #9B7A55)' }} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {[
                "Produção 100% Artesanal",
                "Acabamento Extremamente Refinado",
                "Conservação de Nível Museológico",
                "Materiais de Altíssima Qualidade",
                "Atendimento Personalizado e Consultivo",
                "Instalação e Montagem Profissional"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#C7A27A25', border: '1.5px solid #C7A27A60' }}>
                    <Check className="w-4 h-4" style={{ color: '#7A5C35' }} />
                  </div>
                  <span className="font-semibold text-base" style={{ color: '#0a0a0a' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — fundo ESCURO */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#214725' }}>
        <div className="absolute inset-0 bg-[url('/frames-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-[#F5F2EB] mb-6 md:mb-8 leading-tight">
              Transforme sua obra em uma <br/>
              <span className="italic font-serif text-[#C7A27A]">peça ainda mais especial.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/5511982973236?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20MK%20Molduras.', '_blank')}
                className="bg-[#C7A27A] hover:bg-[#9B7A55] text-[#121212] rounded-sm px-8 py-5 md:px-10 md:py-6 text-sm md:text-base tracking-wide uppercase transition-all shadow-xl group w-full sm:w-auto"
              >
                <Phone className="mr-2 w-4 h-4" />
                Falar com um Especialista
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/5511982973236?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20MK%20Molduras."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="bg-[#121212] pt-14 md:pt-24 pb-10 md:pb-12 border-t border-[#1D3124]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <img src="/helton logo-Photoroom.png" alt="MK Molduras" className="h-28 md:h-48 mb-4 md:mb-6 object-contain brightness-0 invert opacity-90 drop-shadow-md" />
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
