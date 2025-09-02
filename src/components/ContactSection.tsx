"use client";

import { motion } from "framer-motion";
// Substituir Button do HeroUI por botão com Tailwind
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contato@b1m.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      description: "Escritório principal"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)"
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
    <section id="contact" className="section-padding bg-primary">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Estamos prontos para entender suas necessidades e propor a solução ideal 
            para impulsionar seu negócio. Entre em contato conosco!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Envie sua Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos sobre suas necessidades..."
                />
              </div>
              
              <button
                className="btn-primary w-full text-lg inline-flex items-center justify-center gap-2 py-3"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-white/60 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">
                Agende uma Reunião
              </h4>
              <p className="text-white/80 mb-6">
                Nossa equipe está pronta para analisar suas necessidades e propor 
                a solução ideal para seu negócio.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-white/80">Diagnóstico gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-white/80">Proposta personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-white/80">Sem compromisso</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
