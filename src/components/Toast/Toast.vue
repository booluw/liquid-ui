<script setup lang="ts">
import { ToastRoot, ToastTitle, ToastDescription, ToastClose, type ToastRootProps, useForwardPropsEmits } from 'radix-vue';
import { cn } from '../../utils/cn';
import { toastVariants } from './Toast.variants';

interface Props extends ToastRootProps {
  title?: string;
  description?: string;
  class?: string;
}

const props = defineProps<Props>();
const emits = defineEmits(['update:open']);

const forwarded = useForwardPropsEmits(props, emits);
const slots = toastVariants();
</script>

<template>
  <ToastRoot v-bind="forwarded" :class="cn(slots.root(), props.class)">
    <div class="grid gap-1">
      <ToastTitle v-if="title" :class="slots.title()">
        {{ title }}
      </ToastTitle>
      <ToastDescription v-if="description" :class="slots.description()">
        {{ description }}
      </ToastDescription>
      <slot />
    </div>

    <ToastClose :class="slots.close()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </ToastClose>
  </ToastRoot>
</template>
