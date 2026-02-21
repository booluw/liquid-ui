import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'transition-all duration-200 ease-out active:scale-[0.97] inline-flex items-center justify-center rounded-xl font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    // Liquid glass base effect:
    'backdrop-blur-[25px] backdrop-saturate-[180%] backdrop-brightness-110'
  ],
  variants: {
    variant: {
      default: [
        'bg-[var(--glass-button-bg)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]',
        'hover:bg-[var(--glass-button-hover)] hover:shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)]'
      ],
      primary: [
        'bg-[#007AFF] text-white shadow-[0_4px_12px_rgba(0,122,255,0.3)]',
        'hover:bg-[#007AFF]/90 hover:shadow-[0_8px_24px_rgba(0,122,255,0.4)]'
      ],
      ghost: [
        'bg-transparent border-transparent shadow-none backdrop-blur-none backdrop-saturate-100',
        'hover:bg-[var(--glass-base-ultra-thin)] hover:backdrop-blur-[15px] hover:backdrop-saturate-[150%] text-[var(--glass-text-primary)]'
      ]
    },
    size: {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
