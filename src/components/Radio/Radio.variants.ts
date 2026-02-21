import { tv, type VariantProps } from 'tailwind-variants';

export const radioVariants = tv({
  slots: {
    item: [
      'peer aspect-square h-5 w-5 rounded-full transition-all duration-200 ease-out active:scale-[0.95]',
      'bg-[var(--glass-base-thin)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
      'data-[state=checked]:border-[#007AFF] data-[state=checked]:bg-[var(--glass-base-thin)]',
      'disabled:cursor-not-allowed disabled:opacity-50'
    ],
    indicator: 'flex items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-[#007AFF] after:transition-transform after:animate-in after:zoom-in-50'
  }
});

export type RadioVariants = VariantProps<typeof radioVariants>;
