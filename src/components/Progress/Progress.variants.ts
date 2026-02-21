import { tv, type VariantProps } from'tailwind-variants';

export const progressVariants = tv({
 slots: {
 root:'relative w-full overflow-hidden rounded-full bg-white/30 backdrop-blur-[20px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]',
 indicator:'h-full w-full flex-1 bg-[#007AFF] shadow-[0_0_8px_rgba(0,122,255,0.5)] transition-all duration-500 ease-in-out'
 },
 variants: {
 size: {
 sm: { root:'h-1'},
 md: { root:'h-2'},
 lg: { root:'h-4'}
 }
 },
 defaultVariants: {
 size:'md'
 }
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
