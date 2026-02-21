import { tv, type VariantProps } from 'tailwind-variants';

export const popoverVariants = tv({
  slots: {
    content: [
      'z-50 w-72 rounded-[14px] p-4 text-[var(--glass-text-primary)] outline-none',
      'bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[190%] backdrop-brightness-110',
      'shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
    ],
    arrow: 'fill-[var(--glass-base-thick)]'
  }
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
