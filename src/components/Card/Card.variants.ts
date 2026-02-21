import { tv, type VariantProps } from 'tailwind-variants';

export const cardVariants = tv({
  slots: {
    root: [
      'rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]',
      'overflow-hidden'
    ],
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'font-semibold tracking-tight text-xl text-[var(--glass-text-primary)]',
    description: 'text-sm text-[var(--glass-text-secondary)]',
    content: 'p-6 pt-0 text-[var(--glass-text-primary)]',
    footer: 'flex items-center p-6 pt-0'
  }
});

export type CardVariants = VariantProps<typeof cardVariants>;
