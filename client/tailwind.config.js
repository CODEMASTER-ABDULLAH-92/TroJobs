/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optionally, define custom colors for dark mode
        darkBg: '#002E5B', // Background color for dark mode
        darkText: '#fafafa', // Text color for dark mode
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(0deg, rgba(0, 46, 91, 1) 0%, rgba(91, 119, 146, 0.61) 44%, rgba(231, 230, 230, 0) 98%)',
      },
      boxShadow: {
'custom-blue': '0 0 15px rgba(4, 173, 230, 0.8)',
      },
    },
  },
  plugins: [],
};


