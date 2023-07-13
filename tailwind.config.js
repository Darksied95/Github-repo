/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#1C2128',
        'primary': '#CDD9E5',
        'secondary': '#ADBAC7',
        'header-icon': '#49525C',
        'header-underline': '#bf6957',
        'green': '#347D39',
        'blue': '#2763D9',
        'profile-button': '#373E47',
        'body-mobile': '#2D333B',
        'body-desktop': '#22272E'
      }
    },
  },
  plugins: [],
}
