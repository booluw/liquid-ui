import { tv, type VariantProps } from'tailwind-variants';

export const buttonVariants = tv({
 base: [
'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
'disabled:pointer-events-none disabled:opacity-50',
 // Liquid glass base effect:
'backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_30px_rgba(0,0,0,0.1)]'
 ],
 variants: {
 variant: {
 default: [
'bg-white/70 text-black border border-white/20',
'hover:bg-white/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]',
''
 ],
 primary: [
'bg-[#007AFF]/20 text-[#00408A] border-[#007AFF]/30',
'hover:bg-[#007AFF]/30 hover:shadow-[0_8px_32px_rgba(0,122,255,0.2)]'
 ],
 ghost: [
'bg-transparent border-transparent shadow-none backdrop-blur-none backdrop-saturate-100',
'hover:bg-white/15 hover:backdrop-blur-[20px] hover:backdrop-saturate-[180%]',
''
 ]
 },
 size: {
 sm:'h-9 px-4 text-sm',
 md:'h-11 px-6 text-base',
 lg:'h-14 px-8 text-lg'
 }
 },
 defaultVariants: {
 variant:'default',
 size:'md'
 }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
