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

You'll also need to ensure you have Tailwind CSS v4 installed in your project:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Tailwind Configuration

Since Liquid Glass UI uses Tailwind for styling, you must include the Vite plugin and standard CSS import. 

**`vite.config.ts`**
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

**`src/style.css` (or your main css file)**
```css
@import "tailwindcss";

/* Point Tailwind's v4 scanner to the library's pre-compiled files so it can generate the utility classes */
@source "../node_modules/liquid-glass-ui/dist/**/*.js";
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
