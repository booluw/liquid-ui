<script setup lang="ts">
import {
 PopoverRoot,
 PopoverTrigger,
 PopoverContent,
 PopoverArrow,
 PopoverPortal,
 type PopoverRootProps,
 type PopoverRootEmits,
 type PopoverContentProps,
 useForwardPropsEmits
} from'radix-vue';
import { cn } from'../../utils/cn';
import { popoverVariants } from'./Popover.variants';

interface Props extends PopoverRootProps {
 contentClass?: string;
 sideOffset?: PopoverContentProps['sideOffset'];
 showArrow?: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<PopoverRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const slots = popoverVariants();
</script>

<template>
 <PopoverRoot v-bind="forwarded">
 <PopoverTrigger as-child>
 <slot name="trigger"/>
 </PopoverTrigger>

 <PopoverPortal>
 <PopoverContent :side-offset="sideOffset ?? 8":class="cn(slots.content(), contentClass)"v-bind="$attrs">
 <slot />
 <PopoverArrow v-if="showArrow":class="slots.arrow()":width="16":height="8"/>
 </PopoverContent>
 </PopoverPortal>
 </PopoverRoot>
</template>
