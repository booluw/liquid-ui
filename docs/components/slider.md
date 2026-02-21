# Slider

A fluid track with an expanding circular thumb, mimicking Apple HIG interactions and aesthetics.

## Live Demo

<script setup>
import { LSlider } from 'liquid-glass-ui';
import { ref } from 'vue';

const volume = ref([50]);
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 bg-black/5 backdrop-blur-3xl rounded-[24px] border border-black/5 shadow-2xl">
  <div class="flex items-center space-x-4">
    <span class="text-sm font-medium">Volume</span>
    <LSlider v-model="volume" :max="100" :step="1" class="w-full" />
    <span class="text-sm font-medium text-[#8E8E93] w-8">{{ volume[0] }}</span>
  </div>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LSlider } from 'liquid-glass-ui';
import { ref } from 'vue';

const value = ref([30]);
</script>

<template>
  <LSlider v-model="value" :max="100" :step="1" />
</template>
```

## Props

- `modelValue`: Array of numbers (to support ranges). Use `v-model`. Default is `[0]`.
- `max`: Maximum slider value.
- `step`: Granularity.
- `class`: Styling classes for the root element.
