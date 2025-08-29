"use client";

import { Button } from "@heroui/react";
import { Bot, Zap, Shield, BarChart3, Users, Settings } from "lucide-react";

export default function ProductsSection() {
  const solutions = [
    {
      icon: <Bot className="text-secondary" size={28} />,
      title: "Chatbots Inteligentes",
      description: "Atendimento automatizado 24/7 com IA para melhorar a experiência do cliente",
      features: ["Respostas instantâneas", "Integração com CRM", "Análise de sentimentos"]
    },
    {
      icon: <Zap className="text-accent" size={28} />,
      title: "Automação de Processos",
      description: "Otimize workflows e elimine tarefas repetitivas com automação inteligente",
      features: ["Redução de 70% no tempo", "Integração com sistemas", "Relatórios em tempo real"]
    },
    {
      icon: <Shield className="text-accent-dark" size={28} />,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de software sob medida para suas necessidades específicas",
      features: ["Arquitetura escalável", "Segurança avançada", "Suporte técnico dedicado"]
    },
    {
      icon: <BarChart3 className="text-secondary" size={28} />,
      title: "Analytics & BI",
      description: "Transforme dados em insights acionáveis para tomada de decisões estratégicas",
      features: ["Dashboards personalizados", "Alertas inteligentes", "Integração multi-fonte"]
    },
    {
      icon: <Users className="text-accent" size={28} />,
      title: "Gestão de Clientes",
      description: "CRM completo para gerenciar relacionamentos e aumentar vendas",
      features: ["Pipeline de vendas", "Automação de marketing", "Análise de performance"]
    },
    {
      icon: <Settings className="text-accent-dark" size={28} />,
      title: "Integração de Sistemas",
      description: "Conecte suas ferramentas existentes para um fluxo de trabalho unificado",
      features: ["APIs personalizadas", "Sincronização em tempo real", "Migração de dados"]
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container">
        {/* Header da Seção */}
        <div className="section-header">
          <h2>
            Nossas <span className="text-gradient">Soluções</span>
          </h2>
          <p>
            Transforme sua empresa com soluções digitais inteligentes que impulsionam 
            resultados e otimizam processos de forma eficiente e escalável.
          </p>
        </div>

        {/* Grid de Soluções */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              <div className="mb-8">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  {solution.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-base text-text-secondary">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="btn-outline w-full group text-base">
                Saiba Mais
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-background rounded-3xl p-16 max-w-5xl mx-auto border border-border">
            <h3 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-6">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe de especialistas está pronta para analisar suas necessidades 
              e propor a solução ideal para seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary text-lg px-10 py-5">
                Agendar Consultoria Gratuita
              </Button>
              <Button className="btn-accent text-lg px-10 py-5">
                Ver Casos de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
