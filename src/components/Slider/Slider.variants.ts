import { tv, type VariantProps } from'tailwind-variants';

export const sliderVariants = tv({
 slots: {
 root:'relative flex w-full touch-none select-none items-center',
 track:'relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/20 backdrop-blur-[20px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]',
 range:'absolute h-full bg-[#007AFF]/80 shadow-[0_0_8px_rgba(0,122,255,0.5)]',
 thumb: [
'block h-5 w-5 rounded-full border border-black/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)]',
'transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50',
'active:scale-110 disabled:pointer-events-none disabled:opacity-50'
 ]
 }
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
