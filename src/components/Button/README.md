# Button Component

A flexible, liquid glass styled button component built with `tailwind-variants` for simple size and variant management.

## Usage

```vue
<script setup>
import { Button } from 'liquid-glass-ui';
</script>

<template>
  <Button variant="primary" size="lg">Get Started</Button>
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
<Button class="px-12 py-6">Custom Size</Button>
```
