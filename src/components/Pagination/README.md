# Pagination Component

A liquid-glass stylized pagination component built to handle navigation across multiple pages of data, incorporating `radix-vue` for robust accessibility.

## Usage

```vue
<script setup>
import { Pagination } from 'liquid-glass-ui';
</script>

<template>
  <Pagination
    :total="100"
    :sibling-count="1"
    :default-page="1"
    show-edges
  />
</template>
```

## Props

- `total`: Total number of pages (or items, if you construct items per page logic externally). The component assumes `total` means total pages for simplicity in this visual presentation. Actually Radix Vue `PaginationRoot` takes `total` as total amount of items, and you define `itemsPerPage` (default 10).
- `siblingCount`: Number of always visible pages before and after the current page.
- `defaultPage`: The page selected by default when initially rendered.
- `showEdges`: Whether to always show the first and last page buttons.
- Supports all other `radix-vue` `PaginationRootProps`.

## Slots

- `prev`: Overrides the default "previous" chevron icon.
- `next`: Overrides the default "next" chevron icon.
