import { tv, type VariantProps } from 'tailwind-variants';

export const sliderVariants = tv({
  slots: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--glass-base-thin)] backdrop-blur-[10px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]',
    range: 'absolute h-full bg-[#007AFF] shadow-[0_0_8px_rgba(0,122,255,0.3)]',
    thumb: [
      'block h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.1)]',
      'transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/30',
      'active:scale-105 disabled:pointer-events-none disabled:opacity-50'
    ]
  }
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
