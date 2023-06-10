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
        'primary': '#414e87',
        'secondary-100': '#dadbd6',
        'secondary-200': '#b1b3ab',
        'tertiary': '#faede1',
        'background': '#eee4da',
        'text-main': '#9aeedc',
        'blog-bg': '#cabde1',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
