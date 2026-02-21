<script setup lang="ts">
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
  type PaginationRootProps
} from 'radix-vue';
import { paginationVariants } from './Pagination.variants';

interface PaginationProps extends /* @vue-ignore */ PaginationRootProps {
  total: number;
  siblingCount?: number;
  defaultPage?: number;
  showEdges?: boolean;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  siblingCount: 1,
  defaultPage: 1,
  showEdges: false
});

const { root, list, item, trigger, ellipsis, icon } = paginationVariants();
</script>

<template>
  <PaginationRoot :total="total" :sibling-count="siblingCount" :default-page="defaultPage" :show-edges="showEdges"
    :class="root()">
    <PaginationList v-slot="{ items }" :class="list()">

      <PaginationPrev :class="trigger()">
        <slot name="prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="icon()">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </slot>
      </PaginationPrev>

      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem v-if="page.type === 'page'" :value="page.value" :class="trigger()"
          :data-selected="page.value === $attrs.page || page.value === defaultPage ? true : undefined">
          {{ page.value }}
        </PaginationListItem>

        <PaginationEllipsis v-else-if="page.type === 'ellipsis'" :class="ellipsis()">
          &#8230;
        </PaginationEllipsis>
      </template>

      <PaginationNext :class="trigger()">
        <slot name="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="icon()">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </slot>
      </PaginationNext>

    </PaginationList>
  </PaginationRoot>
</template>
