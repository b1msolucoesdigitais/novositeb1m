"use client";

import { motion } from "framer-motion";
// Substituir Button do HeroUI por botão com Tailwind
import { 
  MessageCircle, 
  Zap, 
  Brain, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SolutionsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const solutions = [
    {
      icon: MessageCircle,
      title: "Atendimento Inteligente",
      description: "Chatbots avançados e sistemas de atendimento 24/7 que resolvem 80% das demandas automaticamente.",
      features: ["Resposta instantânea", "Integração omnichannel", "Análise de sentimento"],
      color: "accent",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Automação Digital",
      description: "Automatize processos repetitivos e aumente a produtividade da sua equipe em até 300%.",
      features: ["Workflow inteligente", "Integração com APIs", "Relatórios em tempo real"],
      color: "cyan",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Soluções de IA personalizadas para análise de dados, previsões e tomada de decisões estratégicas.",
      features: ["Machine Learning", "Análise preditiva", "Processamento de linguagem natural"],
      color: "royal",
      delay: 0.3
    },
    {
      icon: Settings,
      title: "Soluções Sob Medida",
      description: "Desenvolvimento de sistemas exclusivos adaptados às necessidades específicas do seu negócio.",
      features: ["Arquitetura escalável", "Segurança avançada", "Suporte dedicado"],
      color: "accent",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 0 },
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

  const getHoverColorClasses = (color: string) => {
    const colors = {
      accent: "hover:bg-accent-light",
      cyan: "hover:bg-cyan-light",
      royal: "hover:bg-royal-light",
    };
    return colors[color as keyof typeof colors] || colors.accent;
  };

  return (
    <section id="solutions" className="section-padding bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6"
          >
            <Zap size={16} />
            Nossas Soluções
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Soluções{" "}
            <span className="gradient-text">Completas</span>{" "}
            para seu Negócio
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos um ecossistema completo de soluções digitais que transformam 
            a forma como sua empresa opera, vende e atende seus clientes.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 ${getColorClasses(solution.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`w-full ${getColorClasses(solution.color)} ${getHoverColorClasses(solution.color)} transition-all duration-300 inline-flex items-center justify-center gap-2 py-3 rounded-lg`}
                  onClick={() => scrollToSection("contact")}
                >
                  Saiba Mais
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Transformar sua Empresa?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para analisar suas necessidades 
              e propor a solução ideal para impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-primary text-lg inline-flex items-center gap-2 px-6 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight size={20} />
              </button>
              <button
                className="btn-outline text-lg inline-flex items-center gap-2 px-6 py-3"
                onClick={() => scrollToSection("how-it-works")}
              >
                Como Funciona
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
