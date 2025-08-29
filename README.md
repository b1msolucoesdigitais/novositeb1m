# 🚀 B1M Soluções Digitais - Site Institucional

Site institucional moderno e responsivo para a empresa **B1M Soluções Digitais**, desenvolvido com Next.js, HeroUI e Tailwind CSS.

## ✨ Características

- 🎨 **Design Moderno**: Interface sofisticada com tema escuro nativo
- 📱 **Mobile First**: Totalmente responsivo para todos os dispositivos
- 🚀 **Performance**: Otimizado com Next.js e componentes modernos
- 🎭 **Animações**: Transições suaves e efeitos visuais elegantes
- 🎨 **Paleta Personalizada**: Cores da marca B1M integradas ao design

## 🎨 Paleta de Cores

- **Fundo Escuro**: `#0B0F1D`
- **Laranja Metálico**: `#FF8C00`
- **Branco Suave**: `#F3F4F6`
- **Azul Acento**: `#00C3FF`
- **Cinza**: `#1A1A1A`

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **HeroUI** - Biblioteca de componentes modernos
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações e transições

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e customizações
│   ├── layout.tsx           # Layout principal com providers
│   ├── page.tsx             # Página inicial
│   └── providers.tsx        # Providers do HeroUI e tema
├── components/
│   ├── Navbar.tsx           # Navegação principal
│   ├── HeroSection.tsx      # Seção hero com CTA principal
│   ├── ProductsSection.tsx  # Seção de produtos/soluções
│   ├── HowItWorksSection.tsx # Seção "Como Funciona"
│   ├── SocialProofSection.tsx # Prova social e depoimentos
│   ├── AboutSection.tsx     # Sobre a empresa
│   └── Footer.tsx           # Rodapé institucional
├── lib/                     # Utilitários e configurações
└── types/                   # Definições de tipos TypeScript
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd novositeb1m
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📱 Seções do Site

### 1. **Navbar**
- Logo da empresa
- Menu de navegação responsivo
- Botão CTA "Simular Solução"

### 2. **Hero Section**
- Headline principal impactante
- Subheadline explicativo
- Botões de ação principais
- Estatísticas rápidas da empresa

### 3. **Produtos/Soluções**
- 4 cards principais:
  - Atendimento Omnichannel
  - Automação Digital
  - Inteligência Artificial
  - Soluções Sob Medida

### 4. **Como Funciona**
- Timeline com 4 passos
- Metodologia da empresa
- Processo de implementação

### 5. **Prova Social**
- Estatísticas de resultados
- Depoimentos de clientes
- Carrossel interativo

### 6. **Sobre a B1M**
- História da empresa
- Valores organizacionais
- Linha do tempo de evolução

### 7. **Footer**
- Links organizados por categoria
- Informações de contato
- Redes sociais
- CTAs finais

## 🎯 Funcionalidades Principais

- **Tema Escuro Nativo**: Design sofisticado com cores da marca
- **Responsividade Total**: Adaptação perfeita para todos os dispositivos
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Performance Otimizada**: Carregamento rápido e eficiente
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🔧 Customizações

### Cores
As cores podem ser alteradas no arquivo `tailwind.config.ts` na seção `theme.extend.colors`.

### Animações
Novas animações podem ser adicionadas no arquivo `tailwind.config.ts` na seção `keyframes`.

### Componentes
Todos os componentes estão organizados em `/src/components` e podem ser facilmente modificados.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Outras Plataformas
```bash
npm run build
npm run start
```

## 📝 Licença

Este projeto foi desenvolvido para a B1M Soluções Digitais. Todos os direitos reservados.

## 👥 Suporte

Para dúvidas ou suporte técnico, entre em contato com a equipe de desenvolvimento da B1M.

---

**B1M Soluções Digitais** - Transformando empresas através da tecnologia 🚀
