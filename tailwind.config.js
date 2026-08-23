/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#1C1714',
          dark: '#120F0D',
          light: '#2B2420',
          muted: '#3D342E',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          light: '#FFFDF8',
          dark: '#EDE5D5',
        },
        warmSand: {
          DEFAULT: '#E8D8C3',
          light: '#F2E8DA',
          dark: '#D9C5AB',
        },
        terracotta: {
          DEFAULT: '#B96545',
          hover: '#A45537',
          light: '#D48668',
          glow: 'rgba(185, 101, 69, 0.25)',
        },
        sage: {
          DEFAULT: '#7C8B72',
          light: '#9EAD94',
          dark: '#5F6F56',
        },
        offWhite: '#FFFDF8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-wide': '0.35em',
      },
      backgroundImage: {
        'noise-pattern': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.03\"/%3E%3C/svg%3E')",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
