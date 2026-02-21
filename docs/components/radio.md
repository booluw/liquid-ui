# Radio Group

Circular options for mutually exclusive selections, featuring a solid center dot when active.

## Live Demo

<script setup>
import { LRadioGroup, LRadioItem } from 'liquid-glass-ui';
import { ref } from 'vue';
const option = ref('default');
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex justify-center bg-black/5 rounded-[24px] border border-black/5">
  <LRadioGroup v-model="option">
    <div class="flex items-center space-x-3">
      <LRadioItem id="r1" value="default" />
      <label for="r1" class="text-sm font-medium leading-none text-black">Default Glass</label>
    </div>
    <div class="flex items-center space-x-3">
      <LRadioItem id="r2" value="comfortable" />
      <label for="r2" class="text-sm font-medium leading-none text-black">Comfortable</label>
    </div>
    <div class="flex items-center space-x-3">
      <LRadioItem id="r3" value="compact" disabled />
      <label for="r3" class="text-sm font-medium leading-none opacity-50 text-black">Compact (Disabled)</label>
    </div>
  </LRadioGroup>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LRadioGroup, LRadioItem } from 'liquid-glass-ui';
import { ref } from 'vue';

const frequency = ref('weekly');
</script>

<template>
  <LRadioGroup v-model="frequency">
    <div class="flex items-center space-x-2">
      <LRadioItem id="daily" value="daily" />
      <label for="daily">Daily</label>
    </div>
    <div class="flex items-center space-x-2">
      <LRadioItem id="weekly" value="weekly" />
      <label for="weekly">Weekly</label>
    </div>
  </LRadioGroup>
</template>
```

## Props

### RadioGroup
- `name`: Name of the group.
- `dir`: Reading direction (`ltr` | `rtl`).
- `disabled`: Disables all radios in the group.
- `required`: Marks the group as required.

### RadioItem
- `value`: The underlying string value.
- `disabled`: Disables the specific radio.
