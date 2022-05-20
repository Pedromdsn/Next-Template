module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif'],
      },
      colors: {
        background: '#eee',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
     require('tailwind-children'),
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
}
