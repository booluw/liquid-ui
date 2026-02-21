import { tv, type VariantProps } from 'tailwind-variants';

export const avatarVariants = tv({
  slots: {
    root: 'relative flex shrink-0 overflow-hidden rounded-full shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]',
    image: 'aspect-square h-full w-full object-cover',
    fallback: [
      'flex h-full w-full items-center justify-center rounded-full font-medium text-[var(--glass-text-primary)]',
      'bg-[var(--glass-base-thin)] backdrop-blur-[10px] backdrop-saturate-[160%]'
    ]
  },
  variants: {
    size: {
      sm: { root: 'h-8 w-8', fallback: 'text-xs' },
      md: { root: 'h-10 w-10', fallback: 'text-sm' },
      lg: { root: 'h-14 w-14', fallback: 'text-base' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
