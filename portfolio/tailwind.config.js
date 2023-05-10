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
        'primary': '#6b81a3',
        'secondary': '#97cbe7',
        'tertiary': '#d0f0ee',
        'background': '#cee5ee',
        'text-main': '#9aeedc'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
