import { tv, type VariantProps } from'tailwind-variants';

export const inputVariants = tv({
 base: [
'flex h-11 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm transition-all duration-300',
'backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)] bg-white/70',
'file:border-0 file:bg-transparent file:text-sm file:font-medium',
'placeholder:text-[#8E8E93]',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2',
'focus-visible:bg-white/10',
'disabled:cursor-not-allowed disabled:opacity-50',
'text-black'
 ]
});

export type InputVariants = VariantProps<typeof inputVariants>;
