"use client";

import { motion } from "framer-motion";
// Substituir Button do HeroUI por botão com Tailwind
import { 
  Search, 
  Target, 
  Code, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorksSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Análise profunda das necessidades e objetivos do seu negócio",
      details: [
        "Entrevista com stakeholders",
        "Análise de processos atuais",
        "Definição de KPIs",
        "Mapeamento de oportunidades"
      ],
      color: "accent"
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Desenvolvimento de uma estratégia personalizada e roadmap de implementação",
      details: [
        "Arquitetura da solução",
        "Cronograma de implementação",
        "Definição de recursos",
        "Plano de treinamento"
      ],
      color: "cyan"
    },
    {
      icon: Code,
      title: "Implementação",
      description: "Desenvolvimento e deploy da solução com metodologia ágil",
      details: [
        "Sprints de desenvolvimento",
        "Testes contínuos",
        "Integração com sistemas",
        "Configuração de segurança"
      ],
      color: "royal"
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Monitoramento, otimização e suporte contínuo para maximizar ROI",
      details: [
        "Monitoramento de performance",
        "Análise de dados",
        "Otimizações contínuas",
        "Suporte 24/7"
      ],
      color: "accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      accent: "bg-accent text-white",
      cyan: "bg-cyan text-white",
      royal: "bg-royal text-white",
    };
    return colors[color as keyof typeof colors] || colors.accent;
  };

  return (
    <section id="how-it-works" className="section-padding bg-primary">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 mb-6"
          >
            <Target size={16} />
            Metodologia Comprovada
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Como <span className="gradient-text">Funciona</span>{" "}
            nosso Processo
          </h2>
          
          <p className="text-xl text-white/80 leading-relaxed">
            Nossa metodologia comprovada garante que cada projeto seja entregue 
            com qualidade, no prazo e dentro do orçamento estabelecido.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/20 transform translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10">
                <div className="text-center">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <step.icon size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={16} />
                        <span className="text-sm text-white/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-accent mb-2"
              >
                15+
              </motion.div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-cyan mb-2"
              >
                200+
              </motion.div>
              <div className="text-gray-600 font-medium">Projetos Entregues</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-royal mb-2"
              >
                99%
              </motion.div>
              <div className="text-gray-600 font-medium">Taxa de Sucesso</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            className="btn-primary text-lg inline-flex items-center gap-2 px-6 py-3"
            onClick={() => scrollToSection("contact")}
          >
            Agendar Reunião de Diagnóstico
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
