import { tv, type VariantProps } from 'tailwind-variants';

export const tabsVariants = tv({
  slots: {
    list: [
      'inline-flex h-11 items-center justify-center rounded-[12px] p-1 text-[var(--glass-text-secondary)]',
      'bg-[var(--glass-base-regular)] backdrop-blur-[30px] backdrop-saturate-[180%]',
      'shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]'
    ],
    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98]',
      'disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--glass-base-ultra-thin)]',
      'data-[state=active]:bg-[var(--glass-base-thick)] data-[state=active]:text-[var(--glass-text-primary)]',
      'data-[state=active]:shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_0_1px_0_var(--glass-highlight)]'
    ],
    content: [
      'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'
    ]
  }
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
