# Checkbox

A standard rounded-square form control, filling with system Blue (`#007AFF`) when checked.

## Live Demo

<script setup>
import { LCheckbox } from 'liquid-glass-ui';
import { ref } from 'vue';
const terms = ref(true);
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex items-center justify-center bg-black/5 rounded-[24px] border border-black/5">
  <div class="flex items-center space-x-3">
    <LCheckbox id="terms" v-model:checked="terms" />
    <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">
      Accept terms and conditions
    </label>
  </div>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LCheckbox } from 'liquid-glass-ui';
import { ref } from 'vue';

const isChecked = ref(false);
</script>

<template>
  <div class="flex items-center space-x-2">
    <LCheckbox id="c1" v-model:checked="isChecked" />
    <label for="c1">Agree to policy</label>
  </div>
</template>
```

## Props

- `checked`: Boolean indicating the checked state. Supports `v-model:checked`.
- `disabled`: Boolean to disable the checkbox.
- `required`: Boolean indicating if the field is required for form submission.
- `name`: The name of the input.
