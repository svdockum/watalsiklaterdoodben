# Wat als ik later dood ben - Setup & Development Guide

## Project Overview

This is a production-quality Nuxt 3 application designed for Dutch end-of-life planning. The platform helps users organize their affairs, preserve memories, and provide guidance to next of kin.

**Target Audience:** 25-50 year olds
**Language:** Dutch
**Status:** Ready for development and Supabase integration

## Current Project Status

All core files have been created and npm dependencies are installed. The project is ready to:
1. Connect to Supabase backend
2. Build components for specific features
3. Deploy to production

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account (for backend)

### Installation & Development

```bash
# Project is already set up with npm installed
cd /sessions/zealous-nice-wozniak/mnt/outputs/watalsiklaterdoodben/web

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Environment Setup

Create `.env.local` with your Supabase credentials:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

Reference: `.env.example`

## Project Structure

```
web/
├── app.vue                      # Root Vue component
├── nuxt.config.ts              # Nuxt configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── package.json                 # Dependencies
│
├── pages/                       # Route pages
│   ├── index.vue               # Home/landing page (COMPLETED)
│   ├── login.vue               # Login page (COMPLETED)
│   └── signup.vue              # Registration page (COMPLETED)
│
├── layouts/                     # Layout templates
│   └── default.vue             # Main layout with nav & footer (COMPLETED)
│
├── components/                  # Reusable Vue components
│   ├── MemoryCard.vue          # Memory display card
│   ├── ChecklistItem.vue       # Checklist item component
│   └── TrustedContactCard.vue   # Trusted contact display
│
├── composables/                # Reusable logic (auto-imported)
│   ├── useSupabase.ts          # Auth & profile utilities
│   ├── useMemories.ts          # Memory CRUD operations
│   ├── useVault.ts             # Vault CRUD operations
│   ├── useTrustedContacts.ts   # Trusted contacts CRUD
│   └── useChecklist.ts         # Checklist CRUD operations
│
├── middleware/                  # Route middleware
│   └── auth.ts                 # Authentication protection
│
├── types/                       # TypeScript interfaces
│   └── index.ts                # All data type definitions
│
├── utils/                       # Utility functions
│   └── helpers.ts              # Common helpers (formatting, validation, etc.)
│
├── assets/                      # Static assets
│   └── css/main.css            # Global styles with Tailwind
│
└── public/                      # Public static files
```

## Completed Features

### Pages
- **Home Page (index.vue)**: Modern landing page with:
  - Hero section with gradient backgrounds
  - Stats bar showing platform metrics
  - Features bento grid layout
  - How-it-works section with step indicators
  - Pricing section (3 tiers)
  - Call-to-action section

- **Login Page**: Professional authentication UI with:
  - Email & password inputs
  - Remember me checkbox
  - Forgot password link
  - Social login options (Google, Apple)
  - Form validation

- **Signup Page**: Registration form with:
  - Full name, email, password inputs
  - Password strength requirements
  - Terms & conditions acceptance
  - Email validation

### Layout
- Sticky navigation bar with:
  - Logo (Merienda + Nunito font styling)
  - Navigation links (Voorbereiding, Herinneringen, etc.)
  - "Start gratis" CTA button
  - Mobile responsive hamburger menu
  
- Footer with:
  - Three columns: Platform, Informatie, Juridisch
  - Links to key pages
  - Social media links
  - Copyright information

### Styling
- Custom Tailwind configuration with:
  - Primary color: #2C5F7C (Deep Blue)
  - Secondary color: #5B9A6F (Muted Green)
  - Accent color: #D4A857 (Gold)
  - Background: #FAF8F5 (Warm White)
  - Glass morphism effects
  - Gradient backgrounds
  - Responsive design (mobile-first)

### Components
- **MemoryCard**: Display memories with images, titles, categories
- **ChecklistItem**: Interactive checklist items with completion tracking
- **TrustedContactCard**: Display trusted contacts with access levels

### Composables
- **useSupabase**: Auth (signUp, signIn, signOut), resetPassword, profile management
- **useMemories**: Full CRUD for memories by category
- **useVault**: Secure vault item management
- **useTrustedContacts**: Manage trusted contact permissions
- **useChecklist**: Checklist item management with completion tracking

### Utilities
- **formatDateDutch**: Format dates in Dutch locale
- **formatDateTimeDutch**: Format datetime in Dutch locale
- **isValidEmail**: Email validation
- **validatePassword**: Password strength checker with feedback
- **calculateProgress**: Completion percentage calculator
- **formatFileSize**: Convert bytes to readable format
- **debounce**: Function debouncing utility
- **sleep**: Async delay helper
- Plus Dutch month/day names arrays

## Next Steps for Development

### 1. Supabase Setup
Create these tables in your Supabase project:

```sql
-- Users/Profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  full_name VARCHAR,
  date_of_birth DATE,
  phone VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Memories
CREATE TABLE memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  title VARCHAR NOT NULL,
  description TEXT,
  category VARCHAR NOT NULL,
  image_url VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Vaults
CREATE TABLE vaults (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  title VARCHAR NOT NULL,
  content TEXT NOT NULL,
  is_encrypted BOOLEAN DEFAULT FALSE,
  access_level VARCHAR DEFAULT 'private',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Trusted Contacts
CREATE TABLE trusted_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone VARCHAR,
  relationship VARCHAR,
  access_level VARCHAR DEFAULT 'view',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Checklist Items
CREATE TABLE checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  title VARCHAR NOT NULL,
  description TEXT,
  category VARCHAR NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Checklists
CREATE TABLE checklists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  completion_percentage INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Feature Pages to Build
- Dashboard (user overview)
- Memories page (CRUD interface)
- Voorbereiding (preparation/planning)
- Nabestaanden (next of kin management)
- Webshop (merchandise/services)
- Kennisbank (knowledge base)
- User settings/profile

### 3. Additional Components
- Memory upload form
- Vault item editor
- Trusted contact form
- Checklist form
- Dashboard widgets
- Search/filter components
- Modal dialogs

### 4. Authentication
The auth middleware is ready in `middleware/auth.ts`. Configure public routes:
- `/` (home)
- `/login`
- `/signup`
- `/terms`
- `/privacy`
- `/over-ons`

### 5. Production Build
```bash
npm run build     # Build for production
npm run generate  # Generate static site (if needed)
npm run preview   # Preview production build
```

## Design System

### Colors
- **Primary (#2C5F7C)**: Main actions, navigation
- **Secondary (#5B9A6F)**: Success, secondary actions
- **Accent (#D4A857)**: Highlights, premium features
- **Background (#FAF8F5)**: Page background

### Typography
- **Merriweather** (serif): Headers, elegant text
- **Merienda**: Logo, branding
- **Nunito** (sans): Body text, UI elements

### Components Classes
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.glass-card`: Glass morphism card
- `.gradient-text`: Gradient text effect
- `.section-heading`: Large section heading
- `.section-subtitle`: Section subtitle

### Responsive Design
Built with mobile-first approach:
- Mobile: 320px+
- Tablet: 768px+ (md)
- Desktop: 1024px+ (lg)

## Code Quality

- TypeScript throughout for type safety
- Composables for reusable logic
- Auto-imported components and composables
- Proper error handling in all async operations
- Dutch localization (dates, validation messages, UI text)
- Clean, maintainable code structure

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android 10+)

## Performance Considerations

- Lazy load routes
- Component auto-import (tree-shakeable)
- CSS bundling with Tailwind
- Image optimization ready (@nuxt/image when needed)
- Proper error boundaries

## Security Notes

- All sensitive data should be encrypted
- Use Supabase RLS policies for data access
- Validate all user inputs
- GDPR compliant privacy features
- 256-bit encryption ready for vault

## Common Tasks

### Add a new page
1. Create file in `pages/`
2. Nuxt auto-routes it
3. Add to layout if needed

### Add a new component
1. Create `.vue` file in `components/`
2. Auto-imported and available everywhere

### Add composable
1. Create file in `composables/`
2. Auto-imported, use `const { ... } = useMyComposable()`

### Add utility function
1. Add to `utils/helpers.ts`
2. Import as: `import { myFunction } from '~/utils/helpers'`

## Troubleshooting

### Modules not found errors
- Run `npm run prepare` to generate types
- Check imports match file paths

### Styling issues
- Clear `.nuxt` folder: `rm -rf .nuxt`
- Rebuild: `npm run dev`

### Type errors
- Run `npm run prepare` to regenerate types
- Check `types/index.ts` for type definitions

## Support & Resources

- Nuxt 3 Docs: https://nuxt.com
- Vue 3 Docs: https://vuejs.org
- Tailwind CSS: https://tailwindcss.com
- Supabase: https://supabase.com

## License

MIT
