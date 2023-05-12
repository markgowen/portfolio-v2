/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            sans: ['Inconsolata', 'sans-serif'],
            serif: ['Inconsolata', 'serif'],
        },
        extend: {
            colors: {
                transparent: 'transparent',
                white: '#FFFFFF',
                black: '#000000',
                midnight: {
                    100: '#121212',
                    200: '#111111',
                },
                steel: "#1F1F1F",
                silver: '#B9C3C5',
                mustard: '#E8C47F',
                lime: '#9DC474',
                aqua: '#54C2CC',
                salmon: '#EB7765',
            },
        },
    },
    plugins: [
    ],
}
