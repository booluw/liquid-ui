# Switch (Toggle)

A smooth, Apple-inspired glass toggle for binary states. Features a vibrant active state and a solid, perfectly-shadowed thumb.

## Live Demo

<script setup>
import { LSwitch, LCard } from 'liquid-glass-ui';
import { ref } from 'vue';

const airplaneMode = ref(false);
const notifications = ref(true);
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-8 mb-8 space-y-4">
  <LCard class="rounded-2xl !p-4 !space-y-0">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Airplane Mode</span>
      <LSwitch v-model:checked="airplaneMode" />
    </div>
  </LCard>
  
  <LCard class="rounded-2xl !p-4 !space-y-0">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Notifications</span>
      <LSwitch v-model:checked="notifications" />
    </div>
  </LCard>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LSwitch } from 'liquid-glass-ui';
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
  <div class="flex items-center space-x-2">
    <LSwitch id="airplane-mode" v-model:checked="isActive" />
    <label for="airplane-mode">Airplane Mode</label>
  </div>
</template>
```

## Props

- `checked`: Boolean indicating if the switch is on. Supports `v-model:checked`.
- `disabled`: Disables the switch.
- `class`: Optional wrapper styling classes.
