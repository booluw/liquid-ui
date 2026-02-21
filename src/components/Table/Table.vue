<script setup lang="ts">
import { tableVariants } from'./Table.variants';

interface TableProps {
 columns: { key: string; label: string }[];
 data: Record<string, any>[];
 caption?: string;
}

const props = defineProps<TableProps>();
const { container, table, header, body, row, head, cell, caption: captionClass } = tableVariants();
</script>

<template>
 <div :class="container()">
 <table :class="table()">
 <caption v-if="caption || $slots.caption":class="captionClass()">
 <slot name="caption">{{ caption }}</slot>
 </caption>
 <thead :class="header()">
 <tr :class="row()">
 <th v-for="col in columns":key="col.key":class="head()">
 <slot :name="`header-${col.key}`":column="col">
 {{ col.label }}
 </slot>
 </th>
 </tr>
 </thead>
 <tbody :class="body()">
 <tr v-for="(item, rowIndex) in data":key="rowIndex":class="row()">
 <td v-for="col in columns":key="col.key":class="cell()">
 <slot :name="`cell-${col.key}`":row="item":column="col":rowIndex="rowIndex">
 {{ item[col.key] }}
 </slot>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
</template>
