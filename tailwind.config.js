/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '544px',
        nav1: '180px',
        nav2: '345px',
        nav3: '437px',
        nav4: '542px',
        nav5: '651px',
        main1: '767px'
      },
      colors: {
        'header': '#1C2128',
        'primary': '#CDD9E5',
        'secondary': '#ADBAC7',
        'header-icon': '#49525C',
        'header-underline': '#EC775C',
        'green': 'rgb(87, 171, 90)',
        'dark-green': '#347D39',
        'blue': ' rgb(83, 155, 245)',
        'profile-button': '#373e47',
        'body-mobile': '#2d333b',
        'body-desktop': '#22272e',
        'repo-type': 'rgb(118, 131, 144)'
      }
    },
  },
  plugins: [],
}
