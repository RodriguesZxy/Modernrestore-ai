import React from 'react';
import { 
  Code, 
  Palette, 
  ShoppingCart, 
  TrendingUp, 
  Smartphone, 
  Settings,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance.',
      features: ['React/Next.js', 'WordPress', 'E-commerce', 'APIs'],
      color: 'bg-blue-500'
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.',
      features: ['Prototipação', 'Design System', 'Wireframes', 'Testes de Usabilidade'],
      color: 'bg-purple-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com integração de pagamentos e gestão de produtos.',
      features: ['WooCommerce', 'Shopify', 'Magento', 'Marketplace'],
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Estratégias digitais para aumentar sua presença online e gerar mais leads.',
      features: ['SEO/SEM', 'Social Media', 'Google Ads', 'Analytics'],
      color: 'bg-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'PWA'],
      color: 'bg-pink-500'
    },
    {
      icon: Settings,
      title: 'Consultoria Tech',
      description: 'Orientação estratégica para digitalização e otimização de processos.',
      features: ['Arquitetura', 'Performance', 'Security', 'DevOps'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas para seu Negócio
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços digitais para impulsionar 
            o crescimento da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      Saiba mais
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;