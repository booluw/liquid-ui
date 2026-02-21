import { tv, type VariantProps } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'flex h-11 w-full rounded-xl px-4 py-2 text-sm transition-all duration-300',
    'bg-[var(--glass-base-thin)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]',
    'backdrop-blur-[15px] backdrop-saturate-[160%]',
    'placeholder:text-[var(--glass-text-tertiary)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:bg-[var(--glass-base-regular)]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium'
  ]
});

export type InputVariants = VariantProps<typeof inputVariants>;
