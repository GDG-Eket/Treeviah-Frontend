/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#800080",
        "primary-light": "#952A95",
        "white": "#FFFFFF",
        "gray": "#D2D2D2",
        "gray-light": "#C0C0C0",
        "bg-light": "#D5AAD5",
        "yellow": "#FFD700",
        "brown": "#CD7F32"
      },
      // fontFamily: {
      //   dmSans: "--font-dmsans",
      //   poppins: "--font-poppins"
      // }
    },
  },
  plugins: [],
}
