<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue';
import { cn } from '../../utils/cn';
import { avatarVariants, type AvatarVariants } from './Avatar.variants';

interface Props {
  src?: string;
  alt?: string;
  delayMs?: number;
  size?: AvatarVariants['size'];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  delayMs: 0,
  size: 'md'
});

const slots = avatarVariants({ size: props.size });
</script>

<template>
  <AvatarRoot :class="cn(slots.root(), props.class)">
    <AvatarImage v-if="src" :src="src" :alt="alt" :class="slots.image()" />
    <AvatarFallback :delay-ms="delayMs" :class="slots.fallback()">
      <slot />
    </AvatarFallback>
  </AvatarRoot>
</template>
