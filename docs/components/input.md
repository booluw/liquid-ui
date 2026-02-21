# LInput

A versatile text input component utilizing liquid glass styling with built-in dark mode support.

## Live Demo

<script setup>
import { ref } from 'vue';
import { LInput } from 'liquid-glass-ui';
const email = ref('');
const password = ref('');
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-8 bg-black/5 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl flex flex-col gap-6 mb-8">
  <div class="space-y-2">
    <label for="email" class="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
    <LInput id="email" v-model="email" type="email" placeholder="john@example.com" />
  </div>
  <div class="space-y-2">
    <label for="password" class="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
    <LInput id="password" v-model="password" type="password" placeholder="••••••••" />
  </div>
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { LInput } from 'liquid-glass-ui';

const email = ref('');
</script>

<template>
  <div class="space-y-2">
    <label for="email" class="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
    <LInput id="email" v-model="email" type="email" placeholder="john@example.com" />
  </div>
</template>
```

## Props

- `modelValue` (v-model): The value of the input.
- `type`: Native HTML input type (e.g., `'text'`, `'email'`, `'password'`). Defaults to `'text'`.
- `disabled`: Disables the input and applies reduced opacity.
- Supports all other native HTML `<input>` attributes like `placeholder`, `id`, `name`, etc.
