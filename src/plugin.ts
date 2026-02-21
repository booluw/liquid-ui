import type { App } from 'vue';
import * as components from './components';

export interface LiquidGlassOptions {
  /**
   * The prefix used for all components.
   * @default 'L'
   */
  prefix?: string;
}

export function createLiquidGlass(options: LiquidGlassOptions = {}) {
  const prefix = options.prefix ?? 'L';

  return {
    install(app: App) {
      // Loop through all exported components 
      for (const [key, component] of Object.entries(components)) {
        // Register each component. If the original name is 'Button', the registered name becomes 'LButton' (if prefix is 'L')
        app.component(`${prefix}${key}`, component);
      }
    }
  };
}
