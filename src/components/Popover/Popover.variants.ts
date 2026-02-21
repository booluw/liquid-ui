import { tv, type VariantProps } from'tailwind-variants';

export const popoverVariants = tv({
 slots: {
 content: [
'z-50 w-72 rounded-[14px] border border-white/20 p-4 text-black outline-none',
'bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125',
'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]',
'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
 ],
 arrow:'fill-white/70 backdrop-blur-[50px] backdrop-saturate-[200%]'
 }
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
