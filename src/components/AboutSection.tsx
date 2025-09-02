"use client";

import { motion } from "framer-motion";
// Substituir Button do HeroUI por botão com Tailwind
import { 
  Award, 
  Users, 
  Target, 
  Heart,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    {
      icon: Target,
      title: "Inovação",
      description: "Sempre buscamos as melhores tecnologias e metodologias para entregar soluções de ponta."
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete na qualidade dos nossos projetos e relacionamento com clientes."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes, entendendo suas necessidades e objetivos."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento total com a qualidade e entrega de resultados excepcionais."
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Prêmio de Inovação",
      description: "Reconhecimento por soluções inovadoras em IA e automação"
    },
    {
      icon: Users,
      title: "500+ Clientes",
      description: "Empresas de todos os portes confiam na B1M"
    },
    {
      icon: Award,
      title: "Certificação ISO",
      description: "Qualidade e processos certificados internacionalmente"
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

  const itemVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              <Award size={16} />
              Sobre a B1M
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Transformando Empresas através da{" "}
              <span className="gradient-text">Inovação Digital</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Fundada em 2009, a B1M é uma empresa de tecnologia especializada em soluções 
                digitais para empresas de todos os portes. Nossa missão é democratizar o acesso 
                à tecnologia de ponta, transformando ideias em soluções reais que impulsionam 
                o crescimento dos nossos clientes.
              </p>
              <p>
                Com uma equipe de mais de 50 especialistas e mais de 200 projetos entregues 
                com sucesso, nos tornamos referência no mercado de automação e inteligência 
                artificial para empresas brasileiras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary inline-flex items-center gap-2"
                onClick={() => scrollToSection("contact")}
              >
                Conheça Nossa História
                <ArrowRight size={20} />
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("solutions")}
              >
                Baixar Apresentação
              </button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-primary rounded-3xl p-12 text-center shadow-2xl">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-4xl">B1M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Desde 2009
              </h3>
              <p className="text-white/80">
                Transformando o futuro digital das empresas
              </p>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/20 rounded-full blur-xl"
            />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-accent" size={32} />
                </div>
                <h4 className="font-bold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Conquistas e Certificações
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-accent" size={32} />
                </div>
                <h4 className="font-bold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-white/80 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
