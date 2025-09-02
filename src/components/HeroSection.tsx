"use client";

import { motion } from "framer-motion";
// Substituído Button do HeroUI por botão com Tailwind
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Users, 
  TrendingUp,
  Play
} from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Clientes Atendidos" },
    { icon: Zap, value: "98%", label: "Satisfação" },
    { icon: TrendingUp, value: "24/7", label: "Suporte" },
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

  const itemVariants = {
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

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-light">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-cyan/20 rounded-full blur-xl"
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
              >
                <CheckCircle size={16} />
                Transformação Digital
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Soluções Digitais{" "}
                <span className="gradient-text">Inteligentes</span>{" "}
                para Empresas
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Transformamos empresas através de automação inteligente, 
                atendimento 24/7 e soluções personalizadas que impulsionam 
                resultados reais.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
                onClick={() => scrollToSection("solutions")}
              >
                Simular Solução
                <ArrowRight size={20} />
              </button>
              <button
                className="btn-outline text-lg px-8 py-4 inline-flex items-center gap-2"
                onClick={() => scrollToSection("contact")}
              >
                <Play size={20} />
                Falar com Especialista
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="text-accent" size={24} />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-light rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                      <Zap className="text-white" size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-sm text-white/60">Eficiência</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span className="text-white font-medium">Automação Inteligente</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-cyan rounded-full"></div>
                        <span className="text-white font-medium">Atendimento 24/7</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 2, delay: 1.5 }}
                          className="h-full bg-cyan"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-royal rounded-full"></div>
                        <span className="text-white font-medium">ROI Garantido</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "78%" }}
                          transition={{ duration: 2, delay: 2 }}
                          className="h-full bg-royal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan/20 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
