<script setup lang="ts">
import {
 AccordionRoot,
 AccordionItem,
 AccordionHeader,
 AccordionTrigger,
 AccordionContent,
 type AccordionRootProps
} from'radix-vue';
import { cn } from'../../utils/cn';
import { accordionVariants } from'./Accordion.variants';

interface AccordionProps extends /* @vue-ignore */ AccordionRootProps {
 items: { value: string; title: string; content?: string }[];
 type?:'single'|'multiple';
 defaultValue?: string | string[];
}

const props = withDefaults(defineProps<AccordionProps>(), {
 type:'single'
});

const { root, item, header, trigger, icon, content, contentInner } = accordionVariants();
</script>

<template>
 <AccordionRoot :type="type" :default-value="defaultValue" :class="root()">
 <AccordionItem v-for="i in items" :key="i.value" :value="i.value" :class="item()">
 <AccordionHeader :class="header()">
 <AccordionTrigger :class="trigger()">
 <slot name="title" :item="i">{{ i.title }}</slot>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="icon()">
 <polyline points="6 9 12 15 18 9"></polyline>
 </svg>
 </AccordionTrigger>
 </AccordionHeader>

 <AccordionContent :class="content()">
 <div :class="contentInner()">
 <slot name="content":item="i">{{ i.content }}</slot>
 </div>
 </AccordionContent>
 </AccordionItem>
 </AccordionRoot>
</template>
