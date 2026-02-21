import { tv, type VariantProps } from 'tailwind-variants';

export const avatarVariants = tv({
  slots: {
    root: 'relative flex shrink-0 overflow-hidden rounded-full border border-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)]',
    image: 'aspect-square h-full w-full object-cover',
    fallback: [
      'flex h-full w-full items-center justify-center rounded-full font-medium text-black',
      'bg-black/5 backdrop-blur-[20px] backdrop-saturate-[180%]'
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
