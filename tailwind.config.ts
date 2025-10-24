import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0a0a0a',
        card: '#ffffff',
        'card-foreground': '#0a0a0a',
        popover: '#ffffff',
        'popover-foreground': '#0a0a0a',
        primary: '#0a0a0a',
        'primary-foreground': '#ffffff',
        secondary: '#f4f4f5',
        'secondary-foreground': '#0a0a0a',
        muted: '#f4f4f5',
        'muted-foreground': '#71717a',
        accent: '#f4f4f5',
        'accent-foreground': '#0a0a0a',
        destructive: '#dc2626',
        'destructive-foreground': '#ffffff',
        border: '#e4e4e7',
        input: '#e4e4e7',
        ring: '#0a0a0a',
      },
    },
  },
};

export default config;
