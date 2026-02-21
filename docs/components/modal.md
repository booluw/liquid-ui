# LModal

A liquid glass style dialog window that handles focus management and keyboard navigation relying on `radix-vue`.

## Live Demo

<script setup>
import { ref } from 'vue';
import { LModal, LButton } from 'liquid-glass-ui';
const open = ref(false);
</script>

<ClientOnly>
<div class="p-8 bg-black/5 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl flex justify-center mb-8">
  <LModal title="Liquid Glass Settings" description="Adjust your aesthetic preferences here." v-model:open="open">
    <template #trigger>
      <LButton variant="primary">Open LModal</LButton>
    </template>
    
    <div class="py-4">
      <p class="text-black dark:text-black">
        You can put any content inside the modal. The background will be frosted glass, and animations will play smoothly.
      </p>
    </div>
  </LModal>
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { LModal, LButton } from 'liquid-glass-ui';
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <LModal title="Liquid LModal" description="This is a beautiful glass dialog." v-model:open="open">
    <template #trigger>
      <LButton>Open LModal</LButton>
    </template>
    
    <div class="py-4">
      <p class="text-black dark:text-black">
        You can put any content inside the modal.
      </p>
    </div>
  </LModal>
</template>
```

## Props

- `title`: The title of the modal, rendered inside `DialogTitle`.
- `description`: The subtitle, rendered inside `DialogDescription`.
- `open` (v-model): Controlled boolean state to open/close the modal programmatically.

## Slots

- `trigger`: Elements that open the modal (must be unstyled HTML or a component that forwards props, `as-child` is used).
- `title`: Custom title slot.
- `description`: Custom description slot.
- `default`: The main body content.
