# Progress Indicator

A determinate progress bar matching the classic pill-shaped glass track from macOS and iOS. 

## Live Demo

<script setup>
import { LProgress, LButton } from 'liquid-glass-ui';
import { ref } from 'vue';

const progress = ref(13);

const advance = () => {
  progress.value = Math.min(progress.value + 15, 100);
}
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex flex-col items-center gap-8 bg-black/5 backdrop-blur-[60px] rounded-[24px] border border-black/5 shadow-xl">
  <LProgress :model-value="progress" class="w-full" size="md" />
  
  <LButton variant="ghost" @click="advance" :disabled="progress >= 100">
    <span v-if="progress < 100">Advance Process +</span>
    <span v-else>Complete ✓</span>
  </LButton>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LProgress } from 'liquid-glass-ui';
</script>

<template>
  <LProgress :model-value="45" size="lg" />
</template>
```

## Props

- `model-value`: The current progress value (0 to `max`). Can be bound with `v-model`.
- `max`: The maximum progress value. Defaults to `100`.
- `size`: The vertical thickness of the bar. Options are `sm`, `md`, `lg`. Defaults to `md`.
