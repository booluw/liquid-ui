import { tv, type VariantProps } from'tailwind-variants';

export const paginationVariants = tv({
 slots: {
 root:'mx-auto flex w-full justify-center',
 list:'flex flex-row items-center gap-1',
 item:'',
 trigger: [
'inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2',
'disabled:pointer-events-none disabled:opacity-50',
'backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] bg-white/70',
'hover:bg-white/50',
'text-black',
'data-[selected]:bg-white/20 data-[selected]:border-white/30 data-[selected]:shadow-[0_4px_20px_rgba(0,0,0,0.15)] data-[selected]:text-black',
':bg-white/15 :text-white :border-white/20',
 ],
 ellipsis:'flex h-9 w-9 items-center justify-center',
 icon:'h-4 w-4'
 }
});

export type PaginationVariants = VariantProps<typeof paginationVariants>;
