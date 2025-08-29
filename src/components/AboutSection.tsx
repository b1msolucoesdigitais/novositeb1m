"use client";

import { Button } from "@heroui/react";
import { Award, Users, Globe, Shield, Zap, Heart } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Zap className="text-accent" size={24} />,
      title: "Inovação",
      description: "Sempre buscamos as tecnologias mais avançadas para entregar soluções de ponta."
    },
    {
      icon: <Shield className="text-accent" size={24} />,
      title: "Qualidade",
      description: "Comprometimento com a excelência em cada projeto e solução entregue."
    },
    {
      icon: <Users className="text-accent" size={24} />,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes para alcançar os melhores resultados."
    },
    {
      icon: <Heart className="text-accent" size={24} />,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete na qualidade de nossas entregas."
    }
  ];

  const achievements = [
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Certificação ISO 27001",
      description: "Segurança da informação certificada internacionalmente"
    },
    {
      icon: <Globe className="text-accent" size={24} />,
      title: "Presença Global",
      description: "Atendemos clientes em mais de 15 países"
    },
    {
      icon: <Users className="text-accent" size={24} />,
      title: "Equipe Especializada",
      description: "Mais de 50 profissionais altamente qualificados"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Award size={16} />
              Sobre a B1M
            </div>
            
            <h2 className="text-balance">
              Transformando Empresas através da{" "}
              <span className="text-gradient">Inovação Digital</span>
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              Fundada em 2009, a B1M é uma empresa de tecnologia especializada em soluções 
              digitais para empresas de todos os portes. Nossa missão é democratizar o acesso 
              à tecnologia de ponta, transformando ideias em soluções reais que impulsionam 
              o crescimento dos nossos clientes.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Com uma equipe de mais de 50 especialistas e mais de 200 projetos entregues 
              com sucesso, nos tornamos referência no mercado de automação e inteligência 
              artificial para empresas brasileiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Conheça Nossa História
              </Button>
              <Button className="btn-outline">
                Baixar Apresentação
              </Button>
            </div>
          </div>

          {/* Imagem/Ilustração */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-12 text-center">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-4xl">B1M</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Desde 2009
              </h3>
              <p className="text-text-secondary">
                Transformando o futuro digital das empresas
              </p>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Valores da Empresa */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas e Certificações */}
        <div className="bg-secondary rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-12">
            Conquistas e Certificações
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
