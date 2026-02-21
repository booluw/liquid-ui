<script setup lang="ts">
import { RadioGroupItem, RadioGroupIndicator, type RadioGroupItemProps } from 'radix-vue';
import { cn } from '../../utils/cn';
import { radioVariants } from './Radio.variants';

interface Props extends RadioGroupItemProps {
  class?: string;
  id?: string;
}

const props = defineProps<Props>();
const slots = radioVariants();
</script>

<template>
  <RadioGroupItem v-bind="props" :class="cn(slots.item(), props.class)">
    <RadioGroupIndicator :class="slots.indicator()" />
  </RadioGroupItem>
</template>
