import { tv, type VariantProps } from'tailwind-variants';

export const modalVariants = tv({
 slots: {
 overlay: [
'fixed inset-0 z-50 bg-black/40 backdrop-blur-[10px] backdrop-saturate-[150%]',
'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
 ],
 content: [
'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200',
'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
'rounded-[32px] border border-white/20 bg-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-[30px] backdrop-saturate-[180%] backdrop-brightness-110',
''
 ],
 title:'text-lg font-semibold leading-none tracking-tight text-black',
 description:'text-sm text-[#8E8E93]',
 closeButton: [
'absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-opacity',
'hover:opacity-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
'disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
'text-black'
 ]
 }
});

export type ModalVariants = VariantProps<typeof modalVariants>;
