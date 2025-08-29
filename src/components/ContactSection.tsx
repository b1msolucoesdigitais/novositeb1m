"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="text-accent" size={20} />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: <Mail className="text-accent" size={20} />,
      title: "Email",
      value: "contato@b1m.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <MapPin className="text-accent" size={20} />,
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      description: "Atendimento presencial sob agendamento"
    },
    {
      icon: <Clock className="text-accent" size={20} />,
      title: "Horário",
      value: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Estamos prontos para entender suas necessidades e propor a solução ideal 
            para impulsionar seu negócio. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Envie sua Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nome"
                  placeholder="Seu nome completo"
                  variant="bordered"
                  className="w-full"
                />
                <Input
                  label="Empresa"
                  placeholder="Nome da sua empresa"
                  variant="bordered"
                  className="w-full"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  placeholder="seu@email.com"
                  variant="bordered"
                  type="email"
                  className="w-full"
                />
                <Input
                  label="Telefone"
                  placeholder="(11) 99999-9999"
                  variant="bordered"
                  className="w-full"
                />
              </div>
              
              <Input
                label="Assunto"
                placeholder="Como podemos ajudar?"
                variant="bordered"
                className="w-full"
              />
              
              <Textarea
                label="Mensagem"
                placeholder="Descreva suas necessidades e objetivos..."
                variant="bordered"
                minRows={4}
                className="w-full"
              />
              
              <Button className="btn-primary w-full group">
                <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Informações de Contato
              </h3>
              <p className="text-text-secondary mb-6">
                Nossa equipe está pronta para atender você e responder todas as suas dúvidas 
                sobre nossas soluções e como podemos ajudar sua empresa.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {info.title}
                    </h4>
                    <p className="text-accent font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Adicional */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-accent" size={24} />
                <h4 className="font-semibold text-text-primary">
                  Agende uma Reunião
                </h4>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                Que tal conversarmos sobre suas necessidades? Agende uma reunião gratuita 
                de 30 minutos com nossos especialistas.
              </p>
              <Button className="btn-outline w-full">
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
