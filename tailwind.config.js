/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shadow-light': ['Shadows Into Ligh', 'cursive'],
        'game-over': ['Silkscreen', 'sans-serif'],
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'anaheim': ['Anaheim', ' sans-serif'],
        'fell-english-reg': ['IM Fell English', 'serif'],
        'fell-english-italic': ['IM Fell English', 'serif'],
        'pt-serif-bold': ['PT Serif', 'serif'],
        'pt-serif-bold-italic': ['PT Serif', 'serif'],
        'fatface-reg': ['Abril Fatface', ' serif'],
        'jacquard': ['Jacquard 12', ' system-ui'],
      },
      backgroundImage: {
        'hero-pattern': "url('D:\shmoney\myReps\react-portfolio\react-portfolio\src\Img\background.png')",
        'bit-profile': "url('D:\shmoney\myReps\react-portfolio\react-portfolio\src\Img\bit-profile.gif')"


      }
    },
  },
  plugins: [],
}

