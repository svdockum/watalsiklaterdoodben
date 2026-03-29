# Wat als ik later dood ben

A Nuxt 3 platform for end-of-life planning, memories, and helping next of kin.

## Project Setup

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

### Build for Production
```bash
npm run build
```

### Generate Static Site
```bash
npm run generate
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
watalsiklaterdoodben/
├── app.vue                 # Root component
├── pages/                  # Route pages
│   ├── index.vue          # Home page
│   ├── login.vue          # Authentication
│   └── signup.vue         # Registration
├── layouts/               # Layout templates
│   └── default.vue        # Main layout
├── composables/           # Reusable logic
│   ├── useSupabase.ts     # Supabase utilities
│   ├── useMemories.ts     # Memories composable
│   └── useVault.ts        # Vault composable
├── middleware/            # Route middleware
│   └── auth.ts           # Auth protection
├── types/                 # TypeScript types
│   └── index.ts          # Type definitions
├── assets/               # Static assets
│   └── css/main.css      # Global styles
├── public/               # Public files
└── nuxt.config.ts        # Nuxt configuration
```

## Environment Variables

Create a `.env.local` file with:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

See `.env.example` for reference.

## Features

- Modern, responsive design optimized for 25-50 year olds
- Hero section with gradient backgrounds and glass morphism
- Stats section showcasing platform metrics
- Bento grid layout for feature showcase
- How-it-works section with step indicators
- Three-tier pricing model
- Authentication pages (login/signup)
- Dutch language UI text
- Tailwind CSS styling
- TypeScript support
- Custom color palette (Primary: #2C5F7C, Secondary: #5B9A6F, Accent: #D4A857)

## Fonts

- **Merriweather**: Serif font for headings (elegant, trustworthy)
- **Merienda**: Display font for logo/branding
- **Nunito**: Sans-serif for body text (modern, readable)

## Color Palette

- Primary: #2C5F7C (Deep Blue)
- Secondary: #5B9A6F (Muted Green)
- Accent: #D4A857 (Gold)
- Background: #FAF8F5 (Warm White)

## Development Notes

### Building Components
Components are auto-imported from the `components/` directory. Create `.vue` files there and use them without imports.

### Composables
Composables in `composables/` are auto-imported for use in components and pages.

### Middleware
Middleware in `middleware/` can be applied to routes for authentication and route protection.

### TypeScript
All files use TypeScript. Define types in `types/index.ts` for consistency.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android 10+)

## License

MIT
