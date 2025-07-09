import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'design', name: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion',
      category: 'ecommerce',
      description: 'Loja virtual completa com sistema de pagamentos e gestão de estoque.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'App Delivery',
      category: 'mobile',
      description: 'Aplicativo de delivery com rastreamento em tempo real.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tech: ['React Native', 'Firebase', 'Maps API'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'web',
      description: 'Painel administrativo com métricas e relatórios em tempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tech: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: 'design',
      description: 'Identidade visual completa para startup de tecnologia.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      tech: ['Figma', 'Illustrator', 'After Effects'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      description: 'Site institucional responsivo com CMS personalizado.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tech: ['Next.js', 'Tailwind', 'Strapi', 'Vercel'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Marketplace Platform',
      category: 'ecommerce',
      description: 'Plataforma de marketplace com múltiplos vendedores.',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      tech: ['Django', 'PostgreSQL', 'Redis', 'AWS'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Nosso Portfolio
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Projetos que Fazem a Diferença
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados 
            extraordinários que alcançamos para nossos clientes
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="p-3 bg-white rounded-full text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.codeUrl}
                      className="p-3 bg-white rounded-full text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      className="p-3 bg-white rounded-full text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
            Iniciar Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;