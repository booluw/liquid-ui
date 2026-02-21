<script setup lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'radix-vue';
import { cn } from '../../utils/cn';
import { modalVariants } from './Modal.variants';

interface ModalProps {
  title?: string;
  description?: string;
  open?: boolean;
}

const props = defineProps<ModalProps>();
const emit = defineEmits<{
  (e: 'update:open', value: boolean): void;
}>();

const { overlay, content, title, description, closeButton } = modalVariants();
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="overlay()" />
      <DialogContent :class="content()">
        <div class="flex flex-col space-y-2">
          <DialogTitle v-if="title || $slots.title" :class="title()">
            <slot name="title">{{ title }}</slot>
          </DialogTitle>
          <DialogDescription v-if="description || $slots.description" :class="description()">
            <slot name="description">{{ description }}</slot>
          </DialogDescription>
        </div>

        <slot />

        <DialogClose :class="closeButton()">
          <span class="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
