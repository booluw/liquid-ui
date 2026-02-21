# Modal Component

A liquid glass style dialog window that handles focus management and keyboard navigation relying on `radix-vue`.

## Usage

```vue
<script setup>
import { Modal } from 'liquid-glass-ui';
import { Button } from 'liquid-glass-ui';
</script>

<template>
  <Modal title="Liquid Modal" description="This is a beautiful glass dialog.">
    <template #trigger>
      <Button>Open Modal</Button>
    </template>
    
    <div class="py-4">
      <p class="text-slate-800 dark:text-slate-200">
        You can put any content inside the modal.
      </p>
    </div>
  </Modal>
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
