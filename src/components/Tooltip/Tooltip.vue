<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipPortal,
  TooltipArrow,
  type TooltipRootProps,
  type TooltipContentProps,
  useForwardPropsEmits
} from 'radix-vue';
import { cn } from '../../utils/cn';
import { tooltipVariants } from './Tooltip.variants';

interface Props extends TooltipRootProps {
  contentClass?: string;
  content: string;
  sideOffset?: TooltipContentProps['sideOffset'];
  showArrow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
  showArrow: true,
  delayDuration: 300
});

const emits = defineEmits(['update:open']);
const forwarded = useForwardPropsEmits(props, emits);
const slots = tooltipVariants();
</script>

<template>
  <TooltipProvider>
    <TooltipRoot v-bind="forwarded">
      <TooltipTrigger as-child>
        <slot name="trigger" />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent :side-offset="sideOffset" :class="cn(slots.content(), contentClass)">
          <slot name="content">{{ content }}</slot>
          <TooltipArrow v-if="showArrow" :class="slots.arrow()" :width="12" :height="6" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
