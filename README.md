# Code & Clarity Website

Premium marketing website for Code & Clarity - a React component library for AI chat interfaces.

## Features

- **3D Particle Animations** - WebGL-powered particle field with performance optimizations
- **Smooth Scroll** - Lenis-powered smooth scrolling experience
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Accessibility** - WCAG-compliant with reduced motion support
- **Dark Mode** - Premium dark theme with gradient accents
- **Contact Form** - Zod-validated forms with Resend email integration
- **SEO Optimized** - Comprehensive metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: React Three Fiber, Three.js
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint 9 (flat config)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/christireid/code-clarity-site.git
cd code-clarity-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Environment Setup

Create a `.env.local` file in the project root with your secrets. Files matching `.env*` are already git-ignored via `.gitignore`.

```bash
# Server-only - Required for contact form emails
RESEND_API_KEY=your_resend_api_key_here
```

The app reads `RESEND_API_KEY` in `app/actions/send-email.tsx`.

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run tests once |
| `pnpm test:watch` | Run tests in watch mode |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── actions/           # Server actions (email)
│   ├── services/          # Service pages
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── marketing/         # Marketing page sections
│   ├── three/             # 3D/WebGL components
│   ├── providers/         # Context providers
│   └── ui/                # Shadcn/ui components
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   └── utils.ts           # Utility functions
└── __tests__/             # Test files
```

## Testing

Tests are written with Vitest and React Testing Library:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

Test coverage includes:
- Form validation schemas (Zod)
- Server actions (contact email)
- Animation utilities (Framer Motion variants)

## License

Private - All rights reserved.
