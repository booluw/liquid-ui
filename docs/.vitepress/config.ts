import { defineConfig } from 'vitepress';
import { resolve } from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Liquid Glass UI",
  description: "A stunning, beautiful Vue 3 UI library based on liquid glassmorphism.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Card', link: '/components/card' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Table', link: '/components/table' },
          { text: 'Input', link: '/components/input' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Switch / Toggle', link: '/components/switch' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Menu', link: '/components/menu' },
          { text: 'Progress Indicator', link: '/components/progress' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/booluw/liquid-glass-ui' }
    ]
  },
  vite: {
    ssr: {
      noExternal: ['tailwind-variants', 'radix-vue']
    },
    resolve: {
      alias: {
        'liquid-glass-ui': resolve(__dirname, '../../src/index.ts'),
        '@': resolve(__dirname, '../../src')
      }
    }
  }
});
