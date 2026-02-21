# Input Component

A versatile text input component utilizing liquid glass styling with built-in dark mode support.

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { Input } from 'liquid-glass-ui';

const email = ref('');
</script>

<template>
  <div class="space-y-2">
    <label for="email" class="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
    <Input id="email" v-model="email" type="email" placeholder="john@example.com" />
  </div>
</template>
```

## Props

- `modelValue` (v-model): The value of the input.
- `type`: Native HTML input type (e.g., `'text'`, `'email'`, `'password'`). Defaults to `'text'`.
- `disabled`: Disables the input and applies reduced opacity.
- Supports all other native HTML `<input>` attributes like `placeholder`, `id`, `name`, etc.
