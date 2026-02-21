# Toast / Notification

The quintessential macOS notification banner rolling in from the top right edge. Features heavy "Thick" glass material (`backdrop-blur-[50px]`) and smooth swipe-to-dismiss animations.

## Live Demo

<script setup>
import { LButton, useToast, LToaster } from 'liquid-glass-ui';

const { addToast } = useToast();

const triggerToast = () => {
  addToast({
    title: 'Update Available',
    description: 'macOS Sequoia 15.1 is now available.',
  });
};
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex items-center justify-center bg-black/5 rounded-[24px] border border-black/5">
  <LButton @click="triggerToast">Show Notification</LButton>
  <LToaster />
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LButton, useToast, LToaster } from 'liquid-glass-ui';

const { addToast } = useToast();

const show = () => {
  addToast({
    title: 'Success',
    description: 'Your payment was processed successfully.',
    duration: 3000
  });
};
</script>

<template>
  <LButton @click="show">Show Toast</LButton>
  
  <!-- Add LToaster at the root level of your App.vue -->
  <LToaster />
</template>
```

## Props / API

### `useToast()` Composable
- `toasts`: A reactive array of current active toasts.
- `addToast(toast: ToastDefinition)`: Spawns a new toast.
- `removeToast(id: string)`: Force removes a toast.

### `ToastDefinition` Object
- `title` (optional): The primary bold text.
- `description` (optional): The secondary muted text.
- `duration` (optional): Duration in ms before auto-dismissal. Default `5000`.
