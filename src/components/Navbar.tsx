"use client";

import { useState } from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from "@heroui/react";
import { MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Início", id: "hero" },
    { name: "Soluções", id: "solutions" },
    { name: "Como Funciona", id: "how-it-works" },
    { name: "Sobre", id: "about" },
    { name: "Contato", id: "contact" }
  ];

  return (
    <Navbar 
      className="bg-white border-b border-border/50 sticky top-0 z-50"
      maxWidth="full"
      position="sticky"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <NavbarContent className="w-full justify-between">
          {/* Logo e Nome */}
          <NavbarBrand className="flex-shrink-0">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Image 
                  src="/img/logo.png" 
                  alt="B1M Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-2xl text-primary">B1M</span>
                <div className="text-sm text-text-secondary font-medium">Soluções Digitais</div>
              </div>
            </div>
          </NavbarBrand>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavbarItem key={item.id}>
                <Button
                  className="text-text-secondary hover:text-secondary transition-all duration-200 bg-transparent font-medium text-base px-4 py-2 hover:bg-secondary/5 rounded-lg"
                  variant="light"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </Button>
              </NavbarItem>
            ))}
          </div>

          {/* Botão CTA e Menu Mobile */}
          <div className="flex items-center gap-4">
            <Button
              className="btn-primary hidden md:flex px-8 py-3 text-base font-semibold"
              startContent={<MessageCircle size={20} />}
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Fale Conosco
            </Button>
            
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="lg:hidden text-text-primary"
              icon={isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            />
          </div>
        </NavbarContent>
      </div>

      {/* Menu Mobile */}
      <NavbarMenu className="bg-white border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.id}>
                <Button
                  className="w-full text-text-secondary hover:text-secondary transition-all duration-200 bg-transparent justify-start font-medium text-lg py-4 px-6 hover:bg-secondary/5 rounded-xl"
                  variant="light"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </Button>
              </NavbarMenuItem>
            ))}
            
            <div className="pt-6 border-t border-border/50">
              <Button
                className="w-full btn-primary text-lg py-4 px-6"
                startContent={<MessageCircle size={20} />}
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
