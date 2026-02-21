# Card Component

A glassmorphism-styled container component for displaying related data and actions, divided into header, content, and footer sections.

## Usage

```vue
<script setup>
import { Card, Button } from 'liquid-glass-ui';
</script>

<template>
  <Card title="Project Statistics" description="Overview of your current performance.">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span>Visitors</span>
        <span class="font-bold">12,345</span>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end w-full">
        <Button>View Details</Button>
      </div>
    </template>
  </Card>
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
