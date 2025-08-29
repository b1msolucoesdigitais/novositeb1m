"use client";

import { Button } from "@heroui/react";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Conteúdo Principal do Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Image 
                  src="/img/logobranca.png" 
                  alt="B1M Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <span className="font-semibold text-2xl text-white">B1M</span>
                <div className="text-sm text-white/80">Soluções Digitais</div>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Transformamos empresas através de soluções digitais inteligentes, 
              automação e inovação. Nossa missão é impulsionar o crescimento 
              dos nossos clientes com tecnologia de ponta.
            </p>
            <div className="flex gap-4">
              <Button className="bg-secondary text-white hover:bg-secondary/90 border-0">
                Fale Conosco
              </Button>
              <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/20">
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
                  Nossas Soluções
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-secondary" size={16} />
                <span className="text-white/80 text-sm">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary" size={16} />
                <span className="text-white/80 text-sm">contato@b1m.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-secondary" size={16} />
                <span className="text-white/80 text-sm">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-secondary" size={16} />
                <span className="text-white/80 text-sm">Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="border-t border-white/10"></div>

      {/* Rodapé Inferior */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} B1M Soluções Digitais. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-200 hover:scale-110 z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
