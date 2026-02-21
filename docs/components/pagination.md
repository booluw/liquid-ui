# LPagination

A liquid-glass stylized pagination component built to handle navigation across multiple pages of data, incorporating `radix-vue` for robust accessibility.

## Live Demo

<script setup>
import { LPagination } from 'liquid-glass-ui';
</script>

<ClientOnly>
<div class="p-8 bg-black/5 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl flex justify-center mb-8">
  <LPagination
    :total="100"
    :sibling-count="1"
    :default-page="1"
    show-edges
  />
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { LPagination } from 'liquid-glass-ui';
</script>

<template>
  <LPagination
    :total="100"
    :sibling-count="1"
    :default-page="1"
    show-edges
  />
</template>
```

## Props

- `total`: Total number of pages (or items, if you construct items per page logic externally). The component assumes `total` means total pages for simplicity in this visual presentation. Actually Radix Vue `LPaginationRoot` takes `total` as total amount of items, and you define `itemsPerPage` (default 10).
- `siblingCount`: Number of always visible pages before and after the current page.
- `defaultPage`: The page selected by default when initially rendered.
- `showEdges`: Whether to always show the first and last page buttons.
- Supports all other `radix-vue` `LPaginationRootProps`.

## Slots

- `prev`: Overrides the default "previous" chevron icon.
- `next`: Overrides the default "next" chevron icon.
