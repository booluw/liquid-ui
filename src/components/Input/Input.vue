<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { inputVariants } from './Input.variants';

interface InputProps {
  modelValue?: string | number;
  type?: string;
  class?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const inputClass = computed(() => cn(inputVariants(), props.class));
</script>

<template>
  <input :type="type" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="inputClass" :disabled="disabled" v-bind="$attrs" />
</template>
