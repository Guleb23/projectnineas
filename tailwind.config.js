/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
        },
        extend: {
            utilities: {
                '.will-change-transform': { willChange: 'transform' },
                '.will-change-opacity': { willChange: 'opacity' },
            }
        }
    },
    plugins: [],
} 