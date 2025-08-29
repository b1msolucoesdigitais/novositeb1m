"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 text-secondary rounded-full text-base font-medium border border-secondary/20">
              <CheckCircle size={18} />
              Transformação Digital
            </div>
            
            <h1 className="text-balance leading-tight">
              Soluções Digitais que{" "}
              <span className="text-gradient">Impulsionam</span>{" "}
              seu Negócio
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed">
              Automatizamos processos, implementamos atendimento inteligente e desenvolvemos 
              sistemas personalizados para escalar sua empresa com eficiência e inovação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-primary group text-lg px-10 py-5">
                Fale com Especialista
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-accent group text-lg px-10 py-5">
                <Play size={20} className="mr-3" />
                Ver Demonstração
              </Button>
            </div>
          </div>

          {/* Estatísticas e Benefícios */}
          <div className="space-y-10">
            {/* Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-3">500+</div>
                <div className="text-text-secondary text-base font-medium">Automações Implementadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-3">98%</div>
                <div className="text-text-secondary text-base font-medium">Satisfação dos Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent-dark mb-3">24/7</div>
                <div className="text-text-secondary text-base font-medium">Suporte Disponível</div>
              </div>
            </div>
            
            {/* Cards de Benefícios */}
            <div className="space-y-6">
              <div className="card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">Automação Inteligente</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Reduza tarefas manuais e aumente a produtividade com automação baseada em IA</p>
                  </div>
                </div>
              </div>
              
              <div className="card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">Atendimento 24/7</h4>
                    <p className="text-text-secondary text-base leading-relaxed">Chatbots inteligentes para suporte contínuo e melhor experiência do cliente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
