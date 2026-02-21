import { tv, type VariantProps } from 'tailwind-variants';

export const accordionVariants = tv({
  slots: {
    root: 'w-full divide-y divide-[var(--glass-border)] overflow-hidden rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]',
    item: 'overflow-hidden',
    header: 'flex',
    trigger: [
      'flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all duration-200 ease-out active:scale-[0.98]',
      'hover:bg-[var(--glass-base-ultra-thin)]',
      'text-[var(--glass-text-primary)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
      '[&[data-state=open]>svg]:rotate-180'
    ],
    icon: 'h-4 w-4 shrink-0 transition-transform duration-300 text-[var(--glass-text-secondary)]',
    content: [
      'overflow-hidden text-sm text-[var(--glass-text-secondary)] transition-all',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    ],
    contentInner: 'px-6 pb-4 pt-0'
  }
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
