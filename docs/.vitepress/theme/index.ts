import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './style.css';

// Import our UI library plugin
import { createLiquidGlass } from 'liquid-glass-ui';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register all components globally with the default 'L' prefix
    app.use(createLiquidGlass());
  }
} satisfies Theme;
