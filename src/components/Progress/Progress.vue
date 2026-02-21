<script setup lang="ts">
import { ProgressRoot, ProgressIndicator, type ProgressRootProps } from 'radix-vue';
import { cn } from '../../utils/cn';
import { progressVariants, type ProgressVariants } from './Progress.variants';
import { computed } from 'vue';

interface Props extends ProgressRootProps {
  class?: string;
  size?: ProgressVariants['size'];
}

const props = defineProps<Props>();
const slots = progressVariants({ size: props.size });

// Radix progress returns null if indeterminate
const transformStyle = computed(() => {
  const value = props.modelValue ?? 0;
  const max = props.max ?? 100;
  const percentage = (value / max) * 100;
  return `translateX(-${100 - percentage}%)`;
});
</script>

<template>
  <ProgressRoot v-bind="props" :class="cn(slots.root(), props.class)">
    <ProgressIndicator :class="slots.indicator()" :style="{ transform: transformStyle }" />
  </ProgressRoot>
</template>
