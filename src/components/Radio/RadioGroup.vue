<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootProps } from 'radix-vue';
import { cn } from '../../utils/cn';

interface Props extends RadioGroupRootProps {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RadioGroupRoot v-bind="props" :class="cn('grid gap-2', props.class)">
    <slot />
  </RadioGroupRoot>
</template>
