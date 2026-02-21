# LCard

A glassmorphism-styled container component for displaying related data and actions, divided into header, content, and footer sections.

## Live Demo

<script setup>
import { LCard, LButton } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="max-w-sm mx-auto p-4 mb-8">
  <LCard title="Project Statistics" description="Overview of your current performance.">
    <div class="space-y-4">
      <div class="flex justify-between items-center text-black dark:text-black">
        <span>Visitors</span>
        <span class="font-bold">12,345</span>
      </div>
      <div class="flex justify-between items-center text-black dark:text-black">
        <span>Revenue</span>
        <span class="font-bold">$4,567</span>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end w-full">
        <LButton variant="primary">View Details</LButton>
      </div>
    </template>
  </LCard>
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { LCard, LButton } from 'liquid-glass-ui';
</script>

<template>
  <LCard title="Project Statistics" description="Overview of your current performance.">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span>Visitors</span>
        <span class="font-bold">12,345</span>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end w-full">
        <LButton>View Details</LButton>
      </div>
    </template>
  </LCard>
</template>
```

## Props

- `title`: Shortcut prop to display a title in the card header.
- `description`: Shortcut prop to display a subtitle in the card header.

## Slots

- `default`: The main body content, styled with appropriate padding.
- `header`: Overrides the default header section. Ideal if you need complex layouts in the header.
- `title`: Slot to override the default text title rendering. Allows inserting icons alongside the text, etc.
- `description`: Slot to override the default description text.
- `footer`: Action area at the bottom of the card, padded properly.
