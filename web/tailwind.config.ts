import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6fa',
          100: '#d4e8f5',
          200: '#b3d9ed',
          300: '#7db8df',
          400: '#5b9fd7',
          500: '#2C5F7C',
          600: '#1e4458',
          700: '#163346',
          800: '#12283a',
          900: '#0d1a24',
        },
        secondary: {
          50: '#f0f7f2',
          100: '#d4ebe0',
          200: '#b3dcd6',
          300: '#7db8c0',
          400: '#5b9fa8',
          500: '#5B9A6F',
          600: '#4a7f5d',
          700: '#3a6547',
          800: '#2d5139',
          900: '#1f3627',
        },
        accent: {
          50: '#fdfbf7',
          100: '#faf4e3',
          200: '#f5ebcd',
          300: '#ebd7a1',
          400: '#e0c07a',
          500: '#D4A857',
          600: '#b5873f',
          700: '#9a6d2f',
          800: '#7a5424',
          900: '#563c17',
        },
        bg: '#FAF8F5',
      },
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        heading: ['Special Gothic Expanded One', ...defaultTheme.fontFamily.sans],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        display: ['Anton SC', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-to-br-warm': 'linear-gradient(135deg, rgba(44,95,124,0.1) 0%, rgba(91,154,111,0.1) 100%)',
        'gradient-hero': 'linear-gradient(135deg, #2C5F7C 0%, #5B9A6F 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
