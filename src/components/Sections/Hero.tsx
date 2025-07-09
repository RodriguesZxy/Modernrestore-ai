import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Check } from 'lucide-react';

const Hero = () => {
  const features = [
    'Design Responsivo',
    'Performance Otimizada',
    'SEO Avançado',
    'Suporte 24/7'
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos
                <span className="block gradient-text">Ideias em</span>
                <span className="block">Soluções Digitais</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Criamos experiências digitais únicas que conectam sua marca aos clientes, 
                impulsionando o crescimento do seu negócio.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Começar Projeto
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-primary-600 hover:text-primary-600 transition-all duration-200">
                <Play size={20} className="mr-2" />
                Ver Demonstração
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">150+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-primary-100 rounded-lg"></div>
                    <div className="h-16 bg-purple-100 rounded-lg"></div>
                    <div className="h-16 bg-pink-100 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-200 rounded w-full"></div>
                    <div className="h-2 bg-primary-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-500 rounded-2xl shadow-lg animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;