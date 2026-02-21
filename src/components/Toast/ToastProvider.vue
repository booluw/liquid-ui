<script setup lang="ts">
import { ToastProvider, ToastViewport, type ToastProviderProps } from 'radix-vue';
import { cn } from '../../utils/cn';
import { toastVariants } from './Toast.variants';

interface Props extends ToastProviderProps {
  class?: string;
}

const props = defineProps<Props>();
const slots = toastVariants();
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
    <ToastViewport :class="cn(slots.viewport(), props.class)" />
  </ToastProvider>
</template>
