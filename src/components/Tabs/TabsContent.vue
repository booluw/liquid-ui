<script setup lang="ts">
import { TabsContent as RadixTabsContent } from'radix-vue';
import { cn } from'../../utils/cn';
import { tabsVariants } from'./Tabs.variants';

interface TabsContentProps {
 value: string;
 class?: string;
}

const props = defineProps<TabsContentProps>();
const slots = tabsVariants();
</script>

<template>
 <RadixTabsContent :value="value":class="cn(slots.content(), props.class)">
 <slot />
 </RadixTabsContent>
</template>
