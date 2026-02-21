<script setup lang="ts">
import { cardVariants } from'./Card.variants';

interface CardProps {
 title?: string;
 description?: string;
}

const props = defineProps<CardProps>();

const { root, header, title, description, content, footer } = cardVariants();
</script>

<template>
 <div :class="root()">
 <div v-if="title || description || $slots.header || $slots.title || $slots.description":class="header()">
 <slot name="header">
 <h3 v-if="title || $slots.title":class="title()">
 <slot name="title">{{ title }}</slot>
 </h3>
 <p v-if="description || $slots.description":class="description()">
 <slot name="description">{{ description }}</slot>
 </p>
 </slot>
 </div>

 <div :class="content()">
 <slot />
 </div>

 <div v-if="$slots.footer":class="footer()">
 <slot name="footer"/>
 </div>
 </div>
</template>
