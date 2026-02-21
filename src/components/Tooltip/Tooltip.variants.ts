import { tv, type VariantProps } from 'tailwind-variants';

export const tooltipVariants = tv({
  slots: {
    content: [
      'z-50 overflow-hidden rounded-[8px] border border-white/10 px-3 py-1.5 text-xs text-white',
      'bg-black/80 backdrop-blur-[20px] backdrop-saturate-[180%]',
      'shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
    ],
    arrow: 'fill-black/80'
  }
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
