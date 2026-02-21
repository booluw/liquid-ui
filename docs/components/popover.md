# Popover

A quintessential floating glass component providing transient information. Features a highly blurred "thickest" material ensuring maximum legibility over complex backgrounds.

## Live Demo

<script setup>
import { LPopover, LButton, LInput } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex justify-center bg-black/5 backdrop-blur-xl rounded-[24px] border border-black/5">
  <LPopover :show-arrow="true">
    <template #trigger>
      <LButton variant="default" as-child>
        <button>Edit Dimensions</button>
      </LButton>
    </template>
    
    <div class="space-y-4">
      <h4 class="font-medium leading-none">Dimensions</h4>
      <p class="text-sm text-[#8E8E93]">Update the dimensions for the component.</p>
      
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <label class="text-sm" for="width">Width</label>
          <LInput id="width" default-value="100%" class="col-span-2 h-8" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label class="text-sm" for="height">Height</label>
          <LInput id="height" default-value="25px" class="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </LPopover>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LPopover, LButton } from 'liquid-glass-ui';
</script>

<template>
  <LPopover>
    <template #trigger>
      <LButton>Open Popover</LButton>
    </template>
    
    <div>
      This is the popover content.
    </div>
  </LPopover>
</template>
```

## Props

- `show-arrow`: Boolean to show the directional glass arrow tail.
- `side-offset`: The distance in pixels from the anchor element.
- `content-class`: Styling overrides for the content box.
