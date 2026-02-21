<script setup lang="ts">
import { cn } from '../../utils/cn';
import { badgeVariants, type BadgeVariants } from './Badge.variants';

interface Props {
  variant?: BadgeVariants['variant'];
  class?: string;
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  as: 'div'
});
</script>

<template>
  <component :is="as" :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </component>
</template>
