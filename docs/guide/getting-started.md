# Getting Started

Welcome to **Liquid Glass UI**, a stunningly beautiful Vue 3 component library built with Tailwind CSS, Tailwind Variants, and Radix Vue.

## Installation

### Local Development / Usage
Since the library isn't on NPM yet, you can use it locally in any standard Vue project by linking to it directly via your `package.json`:

```bash
# Point to your local liquid-glass-ui cloned directory
npm install file:../liquid-glass-ui
```

### Production / NPM
Assuming the package is published to npm, you would install it like this:

```bash
npm install liquid-glass-ui
```

You'll also need to ensure you have Tailwind CSS installed in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Tailwind Configuration

Since Liquid Glass UI uses Tailwind for styling, you must include its paths in your `tailwind.config.js` so Tailwind knows to scan the library for classes.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Add the UI library path:
    "./node_modules/liquid-glass-ui/dist/**/*.js" 
  ],
  darkMode: 'class', // Recommended for toggling dark/glass modes
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage

To use Liquid Glass UI, you can install it globally as a Vue plugin. By default, all components are prefixed with `L` (e.g., `LButton`, `LModal`) to prevent conflicts with native HTML elements.

**`main.ts`**
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { createLiquidGlass } from 'liquid-glass-ui' // The plugin

const app = createApp(App)

// Use default 'L' prefix (LButton, LModal)
app.use(createLiquidGlass())

// Or use a custom prefix (e.g. GlassButton, GlassModal)
// app.use(createLiquidGlass({ prefix: 'Glass' }))

app.mount('#app')
```

Then in your components:

```vue
<template>
  <LButton variant="primary">Hello Glass</LButton>
</template>
```

Alternatively, you can import specific components directly:

```vue
<script setup>
import { LButton } from 'liquid-glass-ui';
</script>

<template>
  <LButton variant="primary">Hello Glass</LButton>
</template>
```
