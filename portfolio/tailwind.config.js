/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7AB0A',
        'secondary': '#6b7280',
        'tertiary': '#333333',
        'background': '#242424',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
