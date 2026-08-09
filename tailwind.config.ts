import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void: '#030014',
        panel: '#0b0b1e',
        neon: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          magenta: '#e879f9',
        },
      },
      animation: {
        aurora: 'aurora 14s ease-in-out infinite alternate',
        'aurora-slow': 'aurora 20s ease-in-out infinite alternate-reverse',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 12s linear infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(80px, -60px) scale(1.15)' },
          '100%': { transform: 'translate(-60px, 40px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
}
