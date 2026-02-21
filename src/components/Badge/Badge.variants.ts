import { tv, type VariantProps } from 'tailwind-variants';

export const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white/40',
  variants: {
    variant: {
      default: [
        'bg-[var(--glass-base-thin)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]',
        'backdrop-blur-[10px] backdrop-saturate-[150%]'
      ],
      primary: [
        'bg-[#007AFF]/15 text-[#007AFF] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(0,122,255,0.2)]',
        'backdrop-blur-[10px]'
      ],
      destructive: [
        'bg-[#FF3B30] text-white shadow-[0_2px_8px_rgba(255,59,48,0.3)]'
      ],
      outline: [
        'text-[var(--glass-text-primary)] border border-[var(--glass-border)]'
      ]
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type BadgeVariants = Required<VariantProps<typeof badgeVariants>>;
