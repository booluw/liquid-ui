import { tv, type VariantProps } from'tailwind-variants';

export const menuVariants = tv({
 slots: {
 content: [
'transition-all duration-200 ease-out active:scale-[0.98] z-50 min-w-32 overflow-hidden rounded-[12px] border border-white/20 p-1 text-black',
'bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125',
'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]',
'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
 ],
 item: [
 'transition-all duration-200 ease-out active:scale-[0.98]',
'relative flex cursor-default select-none items-center rounded-[6px] px-2 py-1.5 text-sm outline-none transition-colors duration-100',
'data-[highlighted]:bg-[#007AFF]/90 data-[highlighted]:text-white data-[highlighted]:shadow-[0_2px_10px_rgba(0,122,255,0.3)]',
'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
 ],
 separator:'-mx-1 my-1 h-px bg-black/5'
 }
});

export type MenuVariants = VariantProps<typeof menuVariants>;
