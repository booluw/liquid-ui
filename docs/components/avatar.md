# Avatar

Circular profile images featuring frosted glass fallback initials. Clean and consistent.

## Live Demo

<script setup>
import { LAvatar } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex items-center justify-center gap-6 bg-black/5 rounded-[24px] border border-black/5">
  <LAvatar size="lg" src="https://i.pravatar.cc/150?u=1" alt="User 1" />
  <LAvatar size="md" src="https://i.pravatar.cc/150?u=2" alt="User 2" />
  
  <!-- Fails to load, shows fallback initials -->
  <LAvatar size="md" src="invalid-url.jpg">JS</LAvatar>
  <LAvatar size="sm">A</LAvatar>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LAvatar } from 'liquid-glass-ui';
</script>

<template>
  <LAvatar src="image.jpg" alt="Profile Picture">JD</LAvatar>
</template>
```

## Props

- `size`: The diameter of the avatar.
  - `'sm'`: 32x32px
  - `'md'` (default): 40x40px
  - `'lg'`: 56x56px
- `src`: Output URL for the profile picture.
- `alt`: Alternate text for screen readers.
- `delay-ms`: Delay before the fallback content is shown. Useful to prevent flashing. Default is `0`.
