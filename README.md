<div align="center">

# CogniLab

### Software como Servicio para tu Negocio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://cognilab.dev)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-orange?style=for-the-badge&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

**CogniLab** es un estudio de productos SaaS que crea plataformas modernas para optimizar negocios: agendamiento inteligente, gestión empresarial, punto de venta y experiencias gamificadas — todo en un solo ecosistema.

[Productos](#productos) · [Tech Stack](#tech-stack) · [Getting Started](#getting-started) · [Contacto](#contacto)

</div>

---

## Productos

| Producto | Descripción | Link |
|----------|-------------|------|
| **VLink** | Agendamiento profesional con sincronización bidireccional de Google Calendar, catálogo de servicios y dashboards en tiempo real. | [vlink.cognilab.dev](https://vlink.cognilab.dev) |
| **Loki** | Gestión empresarial todo-en-uno: ventas, inventario, gastos, fidelización de clientes y métricas avanzadas. | [loki.cognilab.dev](https://loki.cognilab.dev) |
| **Hermes** | Sistema POS con facturación electrónica DIAN, gestión de inventario, reportes y soporte offline para Colombia. | [hermes.cognilab.dev](https://hermes.cognilab.dev) |
| **Thor** | Plataforma de sorteos gamificados con ruleta en vivo, aleatoriedad SHA-256 verificable y pagos Wompi/Bold. | [thor.cognilab.dev](https://thor.cognilab.dev) |
| **Apolo** | Laboratorio de vectorización inteligente: convierte imágenes rasterizadas en SVG de alta fidelidad usando IA y pipelines dinámicos. | [GitHub](https://github.com/edwar/apolo) |
| **Atenea** | Gestión segura de API keys con cifrado AES-256-GCM, control de acceso por roles, auditoría y autenticación 2FA. | [GitHub](https://github.com/edwar/atenea) |
| **Nabu** | Plataforma SaaS de scraping web que usa LLM para extraer datos estructurados de cualquier sitio web. | [GitHub](https://github.com/edwar/nabu) |
| **Perseus** | Gestor financiero personal con OCR inteligente, categorización automática con IA, presupuestos y metas de ahorro. | [GitHub](https://github.com/edwar/perseus) |

---

## Tech Stack

- **Framework:** [Astro](https://astro.build) + [React](https://react.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide](https://lucide.dev)
- **Animations:** [AOS](https://michalsnik.github.io/aos/)
- **Database:** [Neon](https://neon.tech) (PostgreSQL)
- **Deployment:** [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/)

### Installation

```bash
# Clonar el repositorio
git clone git@github.com:edwar/cognilab.git
cd cognilab

# Instalar dependencias
pnpm install
```

### Development

```bash
pnpm dev
```

Abre [localhost:4321](http://localhost:4321) en tu navegador.

### Commands

| Command | Action |
|:--------|:-------|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el build de producción en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente |
| `pnpm astro ...` | Ejecuta comandos CLI de Astro |

---

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── projects/          # Imágenes de proyectos
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/            # Assets estáticos (SVGs)
│   ├── components/
│   │   ├── landing/       # Componentes de la landing page
│   │   │   ├── navbar.astro
│   │   │   ├── hero.astro
│   │   │   ├── features.astro
│   │   │   ├── about.astro
│   │   │   ├── projects.astro
│   │   │   ├── pricing.astro
│   │   │   ├── contact.astro
│   │   │   ├── footer.astro
│   │   │   └── ...
│   │   └── ui/            # Componentes UI reutilizables
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── accordion.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── components.json
├── tsconfig.json
└── package.json
```

---

## Contributing

Las contribuciones son bienvenidas. Si tienes una sugerencia o encontrar un problema, abre un [issue](https://github.com/edwar/cognilab/issues) o envía un pull request.

---

## Contacto

- **Web:** [cognilab.dev](https://cognilab.dev)
- **Email:** [edwaramayadiaz@gmail.com](mailto:edwaramayadiaz@gmail.com)
- **GitHub:** [github.com/edwar/cognilab](https://github.com/edwar/cognilab)

---

<div align="center">

**CogniLab** &copy; {new Date().getFullYear()} — Construido con pasión para resolver problemas reales.

</div>
