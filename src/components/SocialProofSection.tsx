"use client";

import { useState } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2.500+",
    label: "Clientes Atendidos",
    color: "from-b1m-orange to-orange-600"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Aumento na Eficiência",
    color: "from-b1m-blue to-blue-600"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilidade",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação dos Clientes",
    color: "from-purple-500 to-purple-600"
  }
];

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechCorp Solutions",
    role: "CEO",
    content: "A B1M transformou completamente nosso atendimento ao cliente. A automação reduziu nosso tempo de resposta em 80% e aumentou a satisfação dos clientes.",
    rating: 5,
    avatar: "CS"
  },
  {
    name: "Ana Costa",
    company: "DigitalFlow",
    role: "Diretora de Operações",
    content: "Implementamos a solução de IA da B1M e os resultados foram impressionantes. Nossa produtividade aumentou 60% em apenas 3 meses.",
    rating: 5,
    avatar: "AC"
  },
  {
    name: "Roberto Santos",
    company: "InnovateLab",
    role: "CTO",
    content: "A equipe da B1M é excepcional. Eles entenderam nossas necessidades e entregaram uma solução que superou todas as expectativas.",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Mariana Lima",
    company: "FutureTech",
    role: "Gerente de Marketing",
    content: "O sistema omnichannel da B1M revolucionou nossa comunicação com os clientes. Agora conseguimos atender em todos os canais de forma integrada.",
    rating: 5,
    avatar: "ML"
  }
];

export default function SocialProofSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-b1m-gray to-b1m-dark relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF8C00%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-b1m-white mb-6">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-b1m-orange to-b1m-blue bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
          <p className="text-xl text-b1m-white/80 max-w-3xl mx-auto">
            Nossas soluções já transformaram centenas de empresas. Veja os números e depoimentos que comprovam nossa eficácia.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-b1m-dark/50 backdrop-blur-sm border border-b1m-orange/20 hover:border-b1m-orange/40 transition-all duration-300 hover:scale-105 text-center"
              shadow="lg"
            >
              <CardBody className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-b1m-white mb-2">{stat.value}</h3>
                <p className="text-b1m-white/70 text-sm">{stat.label}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-b1m-white text-center mb-12">
            O que nossos clientes dizem
          </h3>

          <div className="relative">
            {/* Carrossel de depoimentos */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="flex transition-transform duration-500 ease-in-out">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    <Card className="bg-b1m-dark/50 backdrop-blur-sm border border-b1m-orange/20 p-8">
                      <CardBody className="p-0">
                        {/* Quote icon */}
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-b1m-orange to-b1m-blue rounded-full flex items-center justify-center">
                            <Quote size={32} className="text-b1m-dark" />
                          </div>
                        </div>

                        {/* Conteúdo do depoimento */}
                        <p className="text-lg text-b1m-white/90 text-center mb-8 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>

                        {/* Informações do cliente */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-b1m-orange/20 to-b1m-blue/20 rounded-full flex items-center justify-center border border-b1m-orange/30">
                            <span className="text-b1m-orange font-bold text-xl">{testimonial.avatar}</span>
                          </div>
                          <div className="text-left">
                            <h4 className="text-b1m-white font-semibold">{testimonial.name}</h4>
                            <p className="text-b1m-orange text-sm">{testimonial.role}</p>
                            <p className="text-b1m-white/70 text-sm">{testimonial.company}</p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center mt-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} className="text-b1m-orange fill-current" />
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navegação do carrossel */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                isIconOnly
                variant="bordered"
                className="border-b1m-orange/50 text-b1m-orange hover:bg-b1m-orange hover:text-b1m-dark"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={20} />
              </Button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-b1m-orange"
                        : "bg-b1m-orange/30"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                isIconOnly
                variant="bordered"
                className="border-b1m-orange/50 text-b1m-orange hover:bg-b1m-orange hover:text-b1m-dark"
                onClick={nextTestimonial}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA da seção */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-b1m-orange/10 to-b1m-blue/10 border border-b1m-orange/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-b1m-white mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="text-b1m-white/80 mb-6">
              Transforme sua empresa com as mesmas soluções que já impactaram centenas de negócios.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-b1m-orange to-b1m-blue text-b1m-dark font-bold px-8 py-6 hover:shadow-xl hover:shadow-b1m-orange/25 transition-all duration-300"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
