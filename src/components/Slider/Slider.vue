<script setup lang="ts">
import {
 SliderRoot,
 SliderTrack,
 SliderRange,
 SliderThumb,
 type SliderRootProps,
 type SliderRootEmits
} from'radix-vue';
import { cn } from'../../utils/cn';
import { sliderVariants } from'./Slider.variants';
import { useForwardPropsEmits } from'radix-vue';

const props = defineProps<SliderRootProps & { class?: string }>();
const emits = defineEmits<SliderRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const slots = sliderVariants();
</script>

<template>
 <SliderRoot v-bind="forwarded":class="cn(slots.root(), props.class)">
 <SliderTrack :class="slots.track()">
 <SliderRange :class="slots.range()"/>
 </SliderTrack>
 <!-- Depending on modelValue length, render thumbs -->
 <SliderThumb v-for="(_, index) in props.modelValue ?? [props.defaultValue]":key="index":class="slots.thumb()"/>
 </SliderRoot>
</template>
