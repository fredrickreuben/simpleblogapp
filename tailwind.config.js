/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            primary: '#E91E63',
            gray: {
                light: '#bdbdbd',
                dark: '#90A4AE'
            },
            dark: '#2C3E50',
            white: '#FFFFFF',
            error: '#ff3333',
            transparent: 'transparent',
        },
        extend: {
            container: {
                center: true,
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
