# Accordion Component

A vertically stacked set of interactive headings that each reveal an associated section of content. Built with `radix-vue` for robust accessibility.

## Usage

```vue
<script setup>
import { Accordion } from 'liquid-glass-ui';

const items = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default liquid glass styles that match your aesthetically pleasing design system.' },
  { value: 'item-3', title: 'Is it animated?', content: 'Yes. It\'s animated by default, but you can disable it if you prefer.' },
];
</script>

<template>
  <Accordion :items="items" type="single" default-value="item-1" />
</template>
```

## Props

- `items`: Array of objects `{ value, title, content }`. Defines the sections of the accordion.
- `type`: `'single' | 'multiple'` (default: `'single'`). Determines whether one or multiple items can be opened at the same time.
- `defaultValue`: The value of the item(s) to expand by default.

## Slots

You can customize the rendering of titles and content using slots.

- `title`: Slot to override the default text title rendering. Exposes the `item` object.
- `content`: Slot to override the default text content rendering. Exposes the `item` object.

```vue
<Accordion :items="items">
  <template #title="{ item }">
    <span class="text-blue-500">{{ item.title }} (Custom)</span>
  </template>
  <template #content="{ item }">
    <div class="p-4 bg-black/10 rounded-xl">
      {{ item.content }}
    </div>
  </template>
</Accordion>
```
