<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  type DropdownMenuRootProps,
  type DropdownMenuRootEmits,
  type DropdownMenuContentProps,
  useForwardPropsEmits
} from 'radix-vue';
import { cn } from '../../utils/cn';
import { menuVariants } from './Menu.variants';

interface Props extends DropdownMenuRootProps {
  items: { label: string; value: string; disabled?: boolean; separator?: boolean }[];
  contentClass?: string;
  sideOffset?: DropdownMenuContentProps['sideOffset'];
}

const props = defineProps<Props>();
const emitSelect = defineEmits<DropdownMenuRootEmits & { select: [value: string] }>();

const forwarded = useForwardPropsEmits(props, emitSelect);
const slots = menuVariants();
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <DropdownMenuTrigger as-child>
      <slot name="trigger" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent :side-offset="sideOffset ?? 8" :class="cn(slots.content(), contentClass)" v-bind="$attrs">
        <template v-for="(item, index) in items" :key="index">
          <DropdownMenuSeparator v-if="item.separator" :class="slots.separator()" />
          <DropdownMenuItem v-else :disabled="item.disabled" :class="slots.item()"
            @select="emitSelect('select', item.value)">
            {{ item.label }}
          </DropdownMenuItem>
        </template>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
