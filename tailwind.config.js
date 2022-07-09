/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: '1440px'
    },
    extend: {
      colors: {
        'Cream': 'hsl(27, 66%, 92%)',
        'Mediumbrown': 'hsl(28, 10%, 53%)',
        'Verypaleorange': 'hsl(33, 100%, 98%)',
        'Softred': 'hsl(10, 79%, 65%)'
      }
    },
  },
  plugins: [],
}
