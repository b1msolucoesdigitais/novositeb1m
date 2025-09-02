"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
// Substituir o Button do HeroUI por um botão estilizado com Tailwind

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Início", href: "hero" },
    { name: "Soluções", href: "solutions" },
    { name: "Como Funciona", href: "how-it-works" },
    { name: "Sobre", href: "about" },
    { name: "Contato", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B1M</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-white">B1M</h1>
              <p className="text-xs text-cyan">Soluções Digitais</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              Simular Solução
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 1, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className="block w-full text-left text-white/80 hover:text-white font-medium py-2 transition-colors duration-200"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
            <button
              className="btn-primary w-full"
              onClick={() => scrollToSection("contact")}
            >
              Simular Solução
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
