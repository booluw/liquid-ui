<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, type CheckboxRootProps } from 'radix-vue';
import { cn } from '../../utils/cn';
import { checkboxVariants, type CheckboxVariants } from './Checkbox.variants';
import CheckIcon from './CheckIcon.vue';

interface Props extends CheckboxRootProps {
  class?: string;
}

const props = defineProps<Props>();
const slots = checkboxVariants();
</script>

<template>
  <CheckboxRoot v-bind="props" :class="cn(slots.root(), props.class)">
    <CheckboxIndicator :class="slots.indicator()">
      <CheckIcon class="h-3.5 w-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
