# Tooltip

A transient text label mimicking macOS "Help Tags". Distinct from Popovers, these use a darker, highly transparent slate background (`bg-black/80`) and very tight radii (6-8px) to appear quickly without heavy drop shadows.

## Live Demo

<script setup>
import { LTooltip, LButton } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex justify-center bg-black/5 rounded-[24px] border border-black/5">
  <LTooltip content="Archive this document">
    <template #trigger>
      <LButton variant="default" as-child>
        <button>Hover Me</button>
      </LButton>
    </template>
  </LTooltip>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LTooltip, LButton } from 'liquid-glass-ui';
</script>

<template>
  <LTooltip content="Add to favorites" side-offset="8">
    <template #trigger>
      <LButton as-child>
        <button>Favorite</button>
      </LButton>
    </template>
  </LTooltip>
</template>
```

## Props

- `content`: The text string to display inside the tooltip. Option to use default slot instead for rich content.
- `show-arrow`: Boolean to show the directional glass arrow tail. Default is `true`.
- `side-offset`: The distance in pixels from the anchor element. Default is `4`.
- `content-class`: Styling overrides for the content box.
- `delay-duration`: The duration in ms before the tooltip appears on hover. Default is `300`.
