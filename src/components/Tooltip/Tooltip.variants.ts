import { tv, type VariantProps } from 'tailwind-variants';

export const tooltipVariants = tv({
  slots: {
    content: [
      'z-50 overflow-hidden rounded-[8px] px-3 py-1.5 text-xs text-white',
      'bg-black/80 backdrop-blur-[12px] backdrop-saturate-[180%]',
      'shadow-[0_4px_12px_rgba(0,0,0,0.2)]',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
    ],
    arrow: 'fill-black/80'
  }
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
