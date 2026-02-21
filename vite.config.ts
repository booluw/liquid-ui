import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LiquidGlassUI',
      fileName: (format) => `liquid-glass-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'tailwind-variants', 'clsx', 'tailwind-merge', 'radix-vue'],
      output: {
        globals: {
          vue: 'Vue',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'tailwind-variants': 'tailwindVariants',
          'radix-vue': 'radixVue'
        },
        exports: 'named'
      }
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  }
});
