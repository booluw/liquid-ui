# LButton

A flexible, liquid glass styled button component built with `tailwind-variants` for simple size and variant management.

## Live Demo

<script setup>
import { LButton } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="p-8 bg-black/5 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl flex gap-4 items-center mb-8">
  <LButton variant="default">Default Glass</LButton>
  <LButton variant="primary">Primary Tint</LButton>
  <LButton variant="ghost">Ghost Hover</LButton>
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { LButton } from 'liquid-glass-ui';
</script>

<template>
  <LButton variant="primary" size="lg">Get Started</LButton>
</template>
```

## Props

- `as`: The HTML element or Vue component to render (e.g., `'button'`, `'a'`, `RouterLink`). Default is `'button'`.
- `variant`: The style variant of the button.
  - `'default'` (default): A standard glass button.
  - `'primary'`: A tinted variant built with primary theme colors (blue by default).
  - `'ghost'`: A borderless, shadowless version that applies glass on hover.
- `size`: The size of the button affecting height, padding, and text size.
  - `'sm'`: Small
  - `'md'` (default): Medium
  - `'lg'`: Large
- `disabled`: Boolean to disable the button. Shows reduced opacity and disabled pointer events.

## Customization

The component uses an underlying React/Vue style `variants` approach (powered by `tailwind-variants`). You can easily adjust the Tailwind classes in the library configuration or extend them via the `class` prop.

```vue
<!-- Overriding padding manually while keeping the variant look -->
<LButton class="px-12 py-6">Custom Size</LButton>
```
