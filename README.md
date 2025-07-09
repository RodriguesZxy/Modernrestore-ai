# Site Profissional - SitePro

Um site profissional moderno desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface elegante e responsiva
- **Performance Otimizada**: Carregamento rápido e SEO otimizado
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Experiência de usuário aprimorada
- **Formulário de Contato**: Sistema de contato funcional
- **Portfolio Interativo**: Galeria de projetos com filtros
- **Depoimentos**: Carousel de avaliações de clientes

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd site-profissional
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📱 Seções do Site

### 🏠 Hero Section
- Apresentação principal com CTAs
- Estatísticas importantes
- Design com elementos visuais modernos

### 👥 Sobre
- Informações da empresa
- Valores e missão
- Estatísticas de performance

### 💼 Serviços
- Portfólio completo de serviços
- Cards interativos com hover effects
- Tecnologias utilizadas

### 🎨 Portfolio
- Galeria de projetos
- Filtros por categoria
- Links para demo e código

### ⭐ Depoimentos
- Carousel de avaliações
- Sistema de navegação
- Estatísticas de satisfação

### 📞 Contato
- Formulário funcional
- Informações de contato
- Mapa e redes sociais

## 🎨 Customização

### Cores
As cores podem ser customizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Suas cores aqui
  }
}
```

### Fontes
A fonte padrão é Inter, mas pode ser alterada no `tailwind.config.js`.

### Conteúdo
Todo o conteúdo pode ser editado nos componentes dentro de `src/components/`.

## 📧 Configuração do Formulário

Para funcionalidade completa do formulário de contato, configure:

1. **EmailJS** (recomendado para frontend)
2. **Netlify Forms** (se hospedado na Netlify)
3. **API personalizada** (backend próprio)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta .next/out
```

### Outros Provedores
O projeto é compatível com qualquer provedor que suporte Next.js.

## 📝 Estrutura de Pastas

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── Sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
└── styles/
    └── globals.css
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte, entre em contato:
- Email: contato@sitepro.com
- Telefone: (11) 9999-9999

---

Desenvolvido com ❤️ por SitePro