# Menu (Dropdown)

A high-vibrancy dropdown menu using a "thick" material substrate, tight inner radii for selection items, and 1px separator lines matching Apple HIG context menus.

## Live Demo

<script setup>
import { LMenu, LButton } from 'liquid-glass-ui';
import { ref } from 'vue';

const selectedProtocol = ref('');
const menuItems = [
  { label: 'Edit Document...', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { separator: true },
  { label: 'Archive', value: 'archive' },
  { label: 'Delete', value: 'delete', disabled: true }
];
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex flex-col items-center gap-4 bg-black/5 backdrop-blur-[40px] rounded-[24px] border border-black/5 shadow-2xl">
  <LMenu :items="menuItems" @select="(v) => selectedProtocol = v">
    <template #trigger>
      <LButton variant="default" as-child>
        <button>Options <span class="pl-2">↓</span></button>
      </LButton>
    </template>
  </LMenu>
  
  <p v-if="selectedProtocol" class="text-xs text-[#8E8E93] font-medium">
    Selected: {{ selectedProtocol }}
  </p>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LMenu, LButton } from 'liquid-glass-ui';

const menuItems = [
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' }
];
</script>

<template>
  <LMenu :items="menuItems" @select="handleSelect">
    <template #trigger>
      <LButton>Account</LButton>
    </template>
  </LMenu>
</template>
```

## Props

- `items`: An array of `DropdownMenuItem` objects. `{ label?: string, value?: string, disabled?: boolean, separator?: boolean }`
- `@select`: Event emitted when an item is selected, carrying the item `value`.
- `side-offset`: The distance in pixels from the anchor element.
