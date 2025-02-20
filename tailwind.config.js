/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '575px',
      // => @media (min-width: 768px) { ... }

      'lg': '770px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1250px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}