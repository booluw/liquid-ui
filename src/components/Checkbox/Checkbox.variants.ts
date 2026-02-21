import { tv, type VariantProps } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    root: [
      'peer h-5 w-5 shrink-0 rounded-[5px] transition-all duration-200 ease-out active:scale-[0.95]',
      'bg-[var(--glass-base-thin)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
      'data-[state=checked]:bg-[#007AFF] data-[state=checked]:shadow-none data-[state=checked]:text-white',
      'disabled:cursor-not-allowed disabled:opacity-50'
    ],
    indicator: 'flex items-center justify-center text-current'
  }
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
