"use client";

import { motion } from "framer-motion";
// Substituir Button do HeroUI por botões com Tailwind
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Sobre Nós", href: "about" },
      { name: "Nossas Soluções", href: "solutions" },
      { name: "Como Funciona", href: "how-it-works" },
      { name: "Carreiras", href: "#" },
    ],
    services: [
      { name: "Atendimento Inteligente", href: "solutions" },
      { name: "Automação Digital", href: "solutions" },
      { name: "Inteligência Artificial", href: "solutions" },
      { name: "Soluções Sob Medida", href: "solutions" },
    ],
    support: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Documentação", href: "#" },
      { name: "Suporte Técnico", href: "contact" },
      { name: "Status do Sistema", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B1M</span>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white">B1M</h3>
                <p className="text-sm text-cyan">Soluções Digitais</p>
              </div>
            </motion.div>
            
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Transformamos empresas através de soluções digitais inteligentes, 
              automação e inovação. Nossa missão é impulsionar o crescimento 
              dos nossos clientes com tecnologia de ponta.
            </p>
            
            <div className="flex gap-4 mb-6">
              <button
                className="bg-accent text-white hover:bg-accent-light border-0 px-4 py-2 rounded-lg"
                onClick={() => scrollToSection("contact")}
              >
                Fale Conosco
              </button>
              <button
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg"
                onClick={() => scrollToSection("solutions")}
              >
                Solicitar Orçamento
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 1, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="text-accent" size={20} />
              <div>
                <p className="text-white font-medium">+55 (11) 99999-9999</p>
                <p className="text-white/60 text-sm">Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-accent" size={20} />
              <div>
                <p className="text-white font-medium">contato@b1m.com.br</p>
                <p className="text-white/60 text-sm">Resposta em até 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" size={20} />
              <div>
                <p className="text-white font-medium">São Paulo, SP - Brasil</p>
                <p className="text-white/60 text-sm">Escritório principal</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
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
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 1, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent-light transition-all duration-200 hover:scale-110 z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
