import { tv, type VariantProps } from'tailwind-variants';

export const tableVariants = tv({
 slots: {
 container:'relative w-full overflow-hidden rounded-[24px] border border-white/20 bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[20px] backdrop-saturate-[180%]',
 table:'w-full caption-bottom text-sm',
 header:'[&_tr]:border-b [&_tr]:border-white/10',
 body:'[&_tr:last-child]:border-0',
 footer:'border-t border-white/10 bg-white/5 font-medium [&>tr]:last:border-b-0',
 row: [
'border-b border-white/10 transition-colors',
'hover:bg-white/5',
'data-[state=selected]:bg-white/10 :bg-white/10'
 ],
 head:'h-12 px-4 text-left align-middle font-medium text-[#8E8E93] [&:has([role=checkbox])]:pr-0',
 cell:'p-4 align-middle text-black [&:has([role=checkbox])]:pr-0',
 caption:'mt-4 text-sm text-[#8E8E93]'
 }
});

export type TableVariants = VariantProps<typeof tableVariants>;
