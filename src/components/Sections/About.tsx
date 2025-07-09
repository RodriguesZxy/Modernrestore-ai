import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Projetos Entregues', value: '150+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '80+' },
    { icon: Award, label: 'Prêmios Recebidos', value: '15+' },
    { icon: TrendingUp, label: 'Anos de Experiência', value: '8+' },
  ];

  const values = [
    {
      title: 'Inovação',
      description: 'Sempre buscamos as tecnologias mais avançadas para criar soluções únicas.'
    },
    {
      title: 'Qualidade',
      description: 'Cada projeto é desenvolvido com os mais altos padrões de qualidade.'
    },
    {
      title: 'Resultados',
      description: 'Focamos em entregar resultados mensuráveis e impacto real para seu negócio.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                Sobre Nós
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Construindo o Futuro Digital
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos uma agência digital especializada em criar experiências 
                extraordinárias que transformam negócios. Com mais de 8 anos de 
                experiência, ajudamos empresas a alcançar seus objetivos através 
                de soluções tecnológicas inovadoras.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Saiba mais sobre nossa história
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <Icon size={24} className="text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Democratizar o acesso a tecnologias avançadas, ajudando empresas de todos os 
              tamanhos a se destacarem no mundo digital através de soluções personalizadas, 
              inovadoras e orientadas a resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;