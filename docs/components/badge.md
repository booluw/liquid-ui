# Badge

Small pill-shaped status indicators mimicking iOS notification badges (`#FF3B30` red) or soft primary tinted tags for categorization.

## Live Demo

<script setup>
import { LBadge } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-12 mb-8 flex items-center justify-center gap-4 bg-black/5 rounded-[24px] border border-black/5">
  <LBadge>Default</LBadge>
  <LBadge variant="primary">New Feature</LBadge>
  <LBadge variant="destructive">99+</LBadge>
  <LBadge variant="outline">Verified</LBadge>
</div>
</ClientOnly>

## Basics

```vue
<script setup>
import { LBadge } from 'liquid-glass-ui';
</script>

<template>
  <div class="space-x-2">
    <LBadge variant="default">Pending</LBadge>
    <LBadge variant="primary">Processing</LBadge>
    <LBadge variant="destructive">Failed</LBadge>
  </div>
</template>
```

## Props

- `variant`: The visual style of the badge.
  - `'default'` (default): Soft transparent gray.
  - `'primary'`: Soft transparent system blue (`#007AFF`).
  - `'destructive'`: Solid system red (`#FF3B30`) for alerts.
  - `'outline'`: Transparent with a border.
- `as`: The HTML element to render as. Default is `div` (can be `span`, etc).
