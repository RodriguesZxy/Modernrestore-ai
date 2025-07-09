import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      position: 'CEO',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b194?w=150&q=80',
      content: 'A SitePro transformou completamente nossa presença digital. O resultado superou todas as expectativas e nossa conversão aumentou 300%.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Santos',
      position: 'Diretor de Marketing',
      company: 'InnovaCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      content: 'Profissionais excepcionais! Entregaram um projeto impecável no prazo combinado. Recomendo para qualquer empresa que busca excelência.',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Oliveira',
      position: 'Fundadora',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      content: 'O aplicativo desenvolvido pela SitePro revolucionou nosso negócio. Interface intuitiva e performance excepcional. Parceria de sucesso!',
      rating: 5
    },
    {
      id: 4,
      name: 'Roberto Lima',
      position: 'Gerente de TI',
      company: 'MegaCorp',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      content: 'Equipe técnica altamente qualificada. Desenvolveram uma solução robusta e escalável que atende perfeitamente nossas necessidades.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Depoimentos
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary-200">
              <Quote size={48} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                "{current.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{current.name}</div>
                  <div className="text-gray-600">
                    {current.position} • {current.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-primary-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">80+</div>
            <div className="text-gray-600">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;