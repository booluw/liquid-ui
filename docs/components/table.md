# LTable

A responsive, glassmorphism-styled table component for displaying structured data.

## Live Demo

<script setup>
import { LTable } from 'liquid-glass-ui';
const columns = [
  { key: 'invoice', label: 'Invoice' },
  { key: 'status', label: 'Status' },
  { key: 'method', label: 'Method' },
  { key: 'amount', label: 'Amount' },
];

const data = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
];
</script>

<ClientOnly>
<div class="p-8 bg-black/5 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl mb-8">
  <LTable :columns="columns" :data="data" caption="A list of your recent invoices." />
</div>
</ClientOnly>

## Usage

```vue
<script setup>
import { LTable } from 'liquid-glass-ui';

const columns = [
  { key: 'invoice', label: 'Invoice' },
  { key: 'status', label: 'Status' },
  { key: 'method', label: 'Method' },
  { key: 'amount', label: 'Amount' },
];

const data = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
];
</script>

<template>
  <LTable :columns="columns" :data="data" caption="A list of your recent invoices." />
</template>
```

## Props

- `columns`: Array of objects containing `key` (for data lookup) and `label` (for column header).
- `data`: Array of objects representing the rows in the table. Keys should match the `columns` property.
- `caption`: Optional text description that describes the table contents.

## Slots

For advanced customization, you can override how specific cells or headers are rendered based on their column key.

- `caption`: Slot to customize the caption area.
- `header-{key}`: Slot to customize a specific column header. Exposes `{ column }`.
- `cell-{key}`: Slot to customize a specific data cell. Exposes `{ row, column, rowIndex }`.

```vue
<LTable :columns="columns" :data="data">
  <template #cell-status="{ row }">
    <span :class="{'text-green-500': row.status === 'Paid', 'text-yellow-500': row.status === 'Pending'}">
      {{ row.status }}
    </span>
  </template>
  <template #cell-amount="{ row }">
    <strong>{{ row.amount }}</strong>
  </template>
</LTable>
```
