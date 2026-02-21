<script setup lang="ts">
import { computed } from'vue';
import { Primitive } from'radix-vue';
import { cn } from'../../utils/cn';
import { buttonVariants, type ButtonVariants } from'./Button.variants';

interface ButtonProps {
 asChild?: boolean;
 as?: string | object;
 variant?: ButtonVariants['variant'];
 size?: ButtonVariants['size'];
 class?: string;
 disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
 asChild: false,
 as:'button',
 variant:'default',
 size:'md',
 disabled: false,
});

const buttonClass = computed(() => cn(buttonVariants({ variant: props.variant, size: props.size }), props.class));
</script>

<template>
 <Primitive :as="as":as-child="asChild":class="buttonClass":disabled="disabled">
 <slot />
 </Primitive>
</template>
