/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-dark': '#121212',

        card: '#F0F0F0',
        'card-dark': '#1E1E1E',

        'text-primary': '#333333',
        'text-primary-dark': '#E5E5E5',

        accent: '#007AFF',
        'accent-dark': '#E50914',

        'accent-alt': '#FF3B30',
        'accent-alt-dark': '#FF4500',
      },
    },
  },
  plugins: [],
};
