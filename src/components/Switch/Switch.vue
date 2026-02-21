<script setup lang="ts">
import { SwitchRoot, SwitchThumb, type SwitchRootProps } from'radix-vue';
import { cn } from'../../utils/cn';
import { switchVariants } from'./Switch.variants';

interface SwitchProps extends SwitchRootProps {
 class?: string;
}

const props = defineProps<SwitchProps>();
const slots = switchVariants();
</script>

<template>
 <SwitchRoot v-bind="props":class="cn(slots.root(), props.class)">
 <SwitchThumb :class="slots.thumb()"/>
 </SwitchRoot>
</template>
