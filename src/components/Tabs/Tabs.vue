<script setup lang="ts">
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  type TabsRootProps
} from 'radix-vue';
import { cn } from '../../utils/cn';
import { tabsVariants } from './Tabs.variants';

interface TabsProps extends TabsRootProps {
  class?: string;
  items: { value: string; title: string; content?: string }[];
}

const props = defineProps<TabsProps>();

const slots = tabsVariants();
</script>

<template>
  <TabsRoot v-bind="props" :class="cn('flex flex-col', props.class)">
    <TabsList :class="slots.list()">
      <TabsTrigger v-for="item in items" :key="item.value" :value="item.value" :class="slots.trigger()">
        <slot :name="`trigger-${item.value}`">{{ item.title }}</slot>
      </TabsTrigger>
    </TabsList>

    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <TabsContent v-for="item in items" :key="item.value" :value="item.value" :class="slots.content()">
        <slot :name="item.value">{{ item.content }}</slot>
      </TabsContent>
    </template>
  </TabsRoot>
</template>
