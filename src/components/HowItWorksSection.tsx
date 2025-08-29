"use client";

import { Button } from "@heroui/react";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="text-accent" size={24} />,
      title: "1. Análise e Diagnóstico",
      description: "Entendemos suas necessidades e analisamos os processos atuais para identificar oportunidades de melhoria.",
      details: ["Entrevista com stakeholders", "Análise de processos", "Mapeamento de necessidades"]
    },
    {
      icon: <Lightbulb className="text-accent" size={24} />,
      title: "2. Estratégia e Planejamento",
      description: "Desenvolvemos uma estratégia personalizada com roadmap detalhado e cronograma de implementação.",
      details: ["Definição de objetivos", "Arquitetura da solução", "Cronograma de entrega"]
    },
    {
      icon: <Code className="text-accent" size={24} />,
      title: "3. Desenvolvimento e Implementação",
      description: "Construímos e implementamos a solução com metodologia ágil e testes contínuos.",
      details: ["Desenvolvimento iterativo", "Testes de qualidade", "Deploy em fases"]
    },
    {
      icon: <Rocket className="text-accent" size={24} />,
      title: "4. Lançamento e Suporte",
      description: "Entregamos a solução e fornecemos suporte contínuo para garantir o sucesso.",
      details: ["Treinamento da equipe", "Monitoramento contínuo", "Suporte técnico 24/7"]
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Nossa metodologia comprovada garante que cada projeto seja entregue com qualidade, 
            no prazo e dentro do orçamento estabelecido.
          </p>
        </div>

        {/* Processo em 4 Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent/20 transform translate-x-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                {step.description}
              </p>
              
              <ul className="space-y-2 text-left">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-text-secondary">
                    <CheckCircle className="text-accent" size={16} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Métricas de Sucesso */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-text-secondary">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-text-secondary">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99%</div>
              <div className="text-text-secondary">Taxa de Sucesso</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-primary">
            Agendar Reunião de Diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
}
