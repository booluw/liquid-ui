import { defineComponent as g, computed as S, openBlock as o, createBlock as c, unref as e, normalizeClass as l, withCtx as n, renderSlot as b, createVNode as u, createElementVNode as x, createTextVNode as k, toDisplayString as $, createCommentVNode as B, createElementBlock as h, Fragment as C, renderList as V, mergeProps as T, normalizeProps as L, guardReactiveProps as R, normalizeStyle as O, resolveDynamicComponent as q, ref as G } from "vue";
import { Primitive as N, DialogRoot as U, DialogTrigger as H, DialogPortal as K, DialogOverlay as X, DialogContent as J, DialogTitle as Q, DialogDescription as W, DialogClose as Y, AccordionRoot as Z, AccordionItem as ee, AccordionHeader as te, AccordionTrigger as ae, AccordionContent as se, PaginationRoot as oe, PaginationList as le, PaginationPrev as ne, PaginationListItem as re, PaginationEllipsis as ie, PaginationNext as de, TabsRoot as ce, TabsList as ue, TabsTrigger as pe, TabsContent as j, SwitchRoot as fe, SwitchThumb as be, useForwardPropsEmits as z, SliderRoot as he, SliderTrack as me, SliderRange as ge, SliderThumb as xe, PopoverRoot as we, PopoverTrigger as _e, PopoverPortal as ve, PopoverContent as ke, PopoverArrow as ye, DropdownMenuRoot as $e, DropdownMenuTrigger as Be, DropdownMenuPortal as Ce, DropdownMenuContent as Te, DropdownMenuSeparator as Ve, DropdownMenuItem as Pe, ProgressRoot as ze, ProgressIndicator as Ae, TooltipProvider as Fe, TooltipRoot as Le, TooltipTrigger as Re, TooltipPortal as Se, TooltipContent as Ee, TooltipArrow as je, CheckboxRoot as Me, CheckboxIndicator as De, RadioGroupRoot as Ie, RadioGroupItem as Oe, RadioGroupIndicator as qe, ToastRoot as Ge, ToastTitle as Ne, ToastDescription as Ue, ToastClose as He, ToastProvider as Ke, ToastViewport as Xe, AvatarRoot as Je, AvatarImage as Qe, AvatarFallback as We } from "radix-vue";
import { clsx as Ye } from "clsx";
import { twMerge as Ze } from "tailwind-merge";
import { tv as w } from "tailwind-variants";
function y(...t) {
  return Ze(Ye(t));
}
const et = w({
  base: [
    "transition-all duration-200 ease-out active:scale-[0.98] inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    // Liquid glass base effect:
    "backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_30px_rgba(0,0,0,0.1)]"
  ],
  variants: {
    variant: {
      default: [
        "bg-white/70 text-black border border-white/20",
        "hover:bg-white/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
        ""
      ],
      primary: [
        "bg-[#007AFF]/20 text-[#00408A] border-[#007AFF]/30",
        "hover:bg-[#007AFF]/30 hover:shadow-[0_8px_32px_rgba(0,122,255,0.2)]"
      ],
      ghost: [
        "bg-transparent border-transparent shadow-none backdrop-blur-none backdrop-saturate-100",
        "hover:bg-white/15 hover:backdrop-blur-[20px] hover:backdrop-saturate-[180%]",
        ""
      ]
    },
    size: {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), tt = /* @__PURE__ */ g({
  __name: "Button",
  props: {
    asChild: { type: Boolean, default: !1 },
    as: { default: "button" },
    variant: { default: "default" },
    size: { default: "md" },
    class: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, s = S(() => y(et({ variant: a.variant, size: a.size }), a.class));
    return (i, d) => (o(), c(e(N), {
      as: t.as,
      "as-child": t.asChild,
      class: l(s.value),
      disabled: t.disabled
    }, {
      default: n(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled"]));
  }
}), at = w({
  slots: {
    overlay: [
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[10px] backdrop-saturate-[150%]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    ],
    content: [
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
      "rounded-[32px] border border-white/20 bg-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-[30px] backdrop-saturate-[180%] backdrop-brightness-110",
      ""
    ],
    title: "text-lg font-semibold leading-none tracking-tight text-black",
    description: "text-sm text-[#8E8E93]",
    closeButton: [
      "absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-opacity",
      "hover:opacity-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      "text-black"
    ]
  }
}), st = { class: "flex flex-col space-y-2" }, ot = /* @__PURE__ */ g({
  __name: "Modal",
  props: {
    title: {},
    description: {},
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = a, { overlay: i, content: d, title: r, description: p, closeButton: f } = at();
    return (m, _) => (o(), c(e(U), {
      open: t.open,
      "onUpdate:open": _[0] || (_[0] = (v) => s("update:open", v))
    }, {
      default: n(() => [
        u(e(H), { "as-child": "" }, {
          default: n(() => [
            b(m.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(K), null, {
          default: n(() => [
            u(e(X), {
              class: l(e(i)())
            }, null, 8, ["class"]),
            u(e(J), {
              class: l(e(d)())
            }, {
              default: n(() => [
                x("div", st, [
                  e(r) || m.$slots.title ? (o(), c(e(Q), {
                    key: 0,
                    class: l(e(r)())
                  }, {
                    default: n(() => [
                      b(m.$slots, "title", {}, () => [
                        k($(e(r)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0),
                  e(p) || m.$slots.description ? (o(), c(e(W), {
                    key: 1,
                    class: l(e(p)())
                  }, {
                    default: n(() => [
                      b(m.$slots, "description", {}, () => [
                        k($(e(p)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0)
                ]),
                b(m.$slots, "default"),
                u(e(Y), {
                  class: l(e(f)())
                }, {
                  default: n(() => [..._[1] || (_[1] = [
                    x("span", { class: "sr-only" }, "Close", -1),
                    x("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "h-4 w-4"
                    }, [
                      x("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      x("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 3
            }, 8, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), lt = w({
  slots: {
    root: "w-full divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/20 bg-white/50 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_30px_rgba(0,0,0,0.1)]",
    item: "overflow-hidden",
    header: "flex",
    trigger: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "transition-all duration-200 ease-out active:scale-[0.98] flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all duration-300",
      "hover:bg-white/10",
      "text-black",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:bg-white/10",
      "[&[data-state=open]>svg]:rotate-180"
    ],
    icon: "h-4 w-4 shrink-0 transition-transform duration-300 text-[#8E8E93]",
    content: [
      "overflow-hidden text-sm text-[#8E8E93] transition-all",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ],
    contentInner: "px-6 pb-4 pt-0"
  }
}), nt = /* @__PURE__ */ g({
  __name: "Accordion",
  props: {
    items: {},
    type: { default: "single" },
    defaultValue: {}
  },
  setup(t) {
    const { root: a, item: s, header: i, trigger: d, icon: r, content: p, contentInner: f } = lt();
    return (m, _) => (o(), c(e(Z), {
      type: t.type,
      "default-value": t.defaultValue,
      class: l(e(a)())
    }, {
      default: n(() => [
        (o(!0), h(C, null, V(t.items, (v) => (o(), c(e(ee), {
          key: v.value,
          value: v.value,
          class: l(e(s)())
        }, {
          default: n(() => [
            u(e(te), {
              class: l(e(i)())
            }, {
              default: n(() => [
                u(e(ae), {
                  class: l(e(d)())
                }, {
                  default: n(() => [
                    b(m.$slots, "title", { item: v }, () => [
                      k($(v.title), 1)
                    ]),
                    (o(), h("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: l(e(r)())
                    }, [..._[0] || (_[0] = [
                      x("polyline", { points: "6 9 12 15 18 9" }, null, -1)
                    ])], 2))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1032, ["class"]),
            u(e(se), {
              class: l(e(p)())
            }, {
              default: n(() => [
                x("div", {
                  class: l(e(f)())
                }, [
                  b(m.$slots, "content", { item: v }, () => [
                    k($(v.content), 1)
                  ])
                ], 2)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128))
      ]),
      _: 3
    }, 8, ["type", "default-value", "class"]));
  }
}), rt = w({
  slots: {
    root: [
      "rounded-[24px] border border-white/20 bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[20px] backdrop-saturate-[180%]",
      "overflow-hidden"
    ],
    header: "flex flex-col space-y-1.5 p-6",
    title: "font-semibold tracking-tight text-xl text-black",
    description: "text-sm text-[#8E8E93]",
    content: "p-6 pt-0 text-black",
    footer: "flex items-center p-6 pt-0"
  }
}), it = /* @__PURE__ */ g({
  __name: "Card",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const { root: a, header: s, title: i, description: d, content: r, footer: p } = rt();
    return (f, m) => (o(), h("div", {
      class: l(e(a)())
    }, [
      e(i) || e(d) || f.$slots.header || f.$slots.title || f.$slots.description ? (o(), h("div", {
        key: 0,
        class: l(e(s)())
      }, [
        b(f.$slots, "header", {}, () => [
          e(i) || f.$slots.title ? (o(), h("h3", {
            key: 0,
            class: l(e(i)())
          }, [
            b(f.$slots, "title", {}, () => [
              k($(e(i)), 1)
            ])
          ], 2)) : B("", !0),
          e(d) || f.$slots.description ? (o(), h("p", {
            key: 1,
            class: l(e(d)())
          }, [
            b(f.$slots, "description", {}, () => [
              k($(e(d)), 1)
            ])
          ], 2)) : B("", !0)
        ])
      ], 2)) : B("", !0),
      x("div", {
        class: l(e(r)())
      }, [
        b(f.$slots, "default")
      ], 2),
      f.$slots.footer ? (o(), h("div", {
        key: 1,
        class: l(e(p)())
      }, [
        b(f.$slots, "footer")
      ], 2)) : B("", !0)
    ], 2));
  }
}), dt = w({
  slots: {
    root: "mx-auto flex w-full justify-center",
    list: "flex flex-row items-center gap-1",
    item: "",
    trigger: [
      "inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] bg-white/70",
      "hover:bg-white/50",
      "text-black",
      "data-[selected]:bg-white/20 data-[selected]:border-white/30 data-[selected]:shadow-[0_4px_20px_rgba(0,0,0,0.15)] data-[selected]:text-black",
      ":bg-white/15 :text-white :border-white/20"
    ],
    ellipsis: "flex h-9 w-9 items-center justify-center",
    icon: "h-4 w-4"
  }
}), ct = /* @__PURE__ */ g({
  __name: "Pagination",
  props: {
    total: {},
    siblingCount: { default: 1 },
    defaultPage: { default: 1 },
    showEdges: { type: Boolean, default: !1 }
  },
  setup(t) {
    const { root: a, list: s, item: i, trigger: d, ellipsis: r, icon: p } = dt();
    return (f, m) => (o(), c(e(oe), {
      total: t.total,
      "sibling-count": t.siblingCount,
      "default-page": t.defaultPage,
      "show-edges": t.showEdges,
      class: l(e(a)())
    }, {
      default: n(() => [
        u(e(le), {
          class: l(e(s)())
        }, {
          default: n(({ items: _ }) => [
            u(e(ne), {
              class: l(e(d)())
            }, {
              default: n(() => [
                b(f.$slots, "prev", {}, () => [
                  (o(), h("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: l(e(p)())
                  }, [...m[0] || (m[0] = [
                    x("polyline", { points: "15 18 9 12 15 6" }, null, -1)
                  ])], 2))
                ])
              ]),
              _: 3
            }, 8, ["class"]),
            (o(!0), h(C, null, V(_, (v, P) => (o(), h(C, { key: P }, [
              v.type === "page" ? (o(), c(e(re), {
                key: 0,
                value: v.value,
                class: l(e(d)()),
                "data-selected": v.value === f.$attrs.page || v.value === t.defaultPage ? !0 : void 0
              }, {
                default: n(() => [
                  k($(v.value), 1)
                ]),
                _: 2
              }, 1032, ["value", "class", "data-selected"])) : v.type === "ellipsis" ? (o(), c(e(ie), {
                key: 1,
                class: l(e(r)())
              }, {
                default: n(() => [...m[1] || (m[1] = [
                  k(" … ", -1)
                ])]),
                _: 1
              }, 8, ["class"])) : B("", !0)
            ], 64))), 128)),
            u(e(de), {
              class: l(e(d)())
            }, {
              default: n(() => [
                b(f.$slots, "next", {}, () => [
                  (o(), h("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: l(e(p)())
                  }, [...m[2] || (m[2] = [
                    x("polyline", { points: "9 18 15 12 9 6" }, null, -1)
                  ])], 2))
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["total", "sibling-count", "default-page", "show-edges", "class"]));
  }
}), ut = w({
  slots: {
    container: "relative w-full overflow-hidden rounded-[24px] border border-white/20 bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[20px] backdrop-saturate-[180%]",
    table: "w-full caption-bottom text-sm",
    header: "[&_tr]:border-b [&_tr]:border-white/10",
    body: "[&_tr:last-child]:border-0",
    footer: "border-t border-white/10 bg-white/5 font-medium [&>tr]:last:border-b-0",
    row: [
      "border-b border-white/10 transition-colors",
      "hover:bg-white/5",
      "data-[state=selected]:bg-white/10 :bg-white/10"
    ],
    head: "h-12 px-4 text-left align-middle font-medium text-[#8E8E93] [&:has([role=checkbox])]:pr-0",
    cell: "p-4 align-middle text-black [&:has([role=checkbox])]:pr-0",
    caption: "mt-4 text-sm text-[#8E8E93]"
  }
}), pt = /* @__PURE__ */ g({
  __name: "Table",
  props: {
    columns: {},
    data: {},
    caption: {}
  },
  setup(t) {
    const { container: a, table: s, header: i, body: d, row: r, head: p, cell: f, caption: m } = ut();
    return (_, v) => (o(), h("div", {
      class: l(e(a)())
    }, [
      x("table", {
        class: l(e(s)())
      }, [
        t.caption || _.$slots.caption ? (o(), h("caption", {
          key: 0,
          class: l(e(m)())
        }, [
          b(_.$slots, "caption", {}, () => [
            k($(t.caption), 1)
          ])
        ], 2)) : B("", !0),
        x("thead", {
          class: l(e(i)())
        }, [
          x("tr", {
            class: l(e(r)())
          }, [
            (o(!0), h(C, null, V(t.columns, (P) => (o(), h("th", {
              key: P.key,
              class: l(e(p)())
            }, [
              b(_.$slots, `header-${P.key}`, { column: P }, () => [
                k($(P.label), 1)
              ])
            ], 2))), 128))
          ], 2)
        ], 2),
        x("tbody", {
          class: l(e(d)())
        }, [
          (o(!0), h(C, null, V(t.data, (P, E) => (o(), h("tr", {
            key: E,
            class: l(e(r)())
          }, [
            (o(!0), h(C, null, V(t.columns, (A) => (o(), h("td", {
              key: A.key,
              class: l(e(f)())
            }, [
              b(_.$slots, `cell-${A.key}`, {
                row: P,
                column: A,
                rowIndex: E
              }, () => [
                k($(P[A.key]), 1)
              ])
            ], 2))), 128))
          ], 2))), 128))
        ], 2)
      ], 2)
    ], 2));
  }
}), ft = w({
  base: [
    "flex h-11 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm transition-all duration-300",
    "backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)] bg-white/70",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-[#8E8E93]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
    "focus-visible:bg-white/10",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "text-black"
  ]
}), bt = ["type", "value", "disabled"], ht = /* @__PURE__ */ g({
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    class: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, i = a, d = S(() => y(ft(), s.class));
    return (r, p) => (o(), h("input", T({
      type: t.type,
      value: t.modelValue,
      onInput: p[0] || (p[0] = (f) => i("update:modelValue", f.target.value)),
      class: d.value,
      disabled: t.disabled
    }, r.$attrs), null, 16, bt));
  }
}), M = w({
  slots: {
    list: [
      "inline-flex h-11 items-center justify-center rounded-[12px] p-1 text-[#8E8E93]",
      "bg-white/40 backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)] border border-white/20"
    ],
    trigger: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "transition-all duration-200 ease-out active:scale-[0.98] inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-1.5 text-sm font-medium transition-all duration-300",
      "disabled:pointer-events-none disabled:opacity-50 hover:bg-white/20",
      "data-[state=active]:bg-white/70 :bg-black/70 data-[state=active]:text-black :text-white",
      "data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-white/40 :border-white/20"
    ],
    content: [
      "mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
    ]
  }
}), mt = /* @__PURE__ */ g({
  __name: "Tabs",
  props: {
    class: {},
    items: {},
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t, s = M();
    return (i, d) => (o(), c(e(ce), T(a, {
      class: e(y)("w-full", a.class)
    }), {
      default: n(() => [
        u(e(ue), {
          class: l(e(s).list())
        }, {
          default: n(() => [
            (o(!0), h(C, null, V(t.items, (r) => (o(), c(e(pe), {
              key: r.value,
              value: r.value,
              class: l(e(s).trigger())
            }, {
              default: n(() => [
                k($(r.title), 1)
              ]),
              _: 2
            }, 1032, ["value", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["class"]),
        i.$slots.default ? b(i.$slots, "default", { key: 0 }) : (o(!0), h(C, { key: 1 }, V(t.items, (r) => (o(), c(e(j), {
          key: r.value,
          value: r.value,
          class: l(e(s).content())
        }, {
          default: n(() => [
            b(i.$slots, r.value, {}, () => [
              k($(r.content), 1)
            ])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gt = /* @__PURE__ */ g({
  __name: "TabsContent",
  props: {
    value: {},
    class: {}
  },
  setup(t) {
    const a = t, s = M();
    return (i, d) => (o(), c(e(j), {
      value: t.value,
      class: l(e(y)(e(s).content(), a.class))
    }, {
      default: n(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "class"]));
  }
}), xt = w({
  slots: {
    root: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "transition-all duration-200 ease-out active:scale-[0.98] peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "bg-white/30 backdrop-blur-[30px] backdrop-saturate-[180%] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]",
      "data-[state=checked]:bg-[#34C759]/80 :bg-[#34C759]/70 data-[state=checked]:shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]"
    ],
    thumb: [
      "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.2)] ring-0 transition-transform duration-200",
      "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ]
  }
}), wt = /* @__PURE__ */ g({
  __name: "Switch",
  props: {
    class: {},
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t, s = xt();
    return (i, d) => (o(), c(e(fe), T(a, {
      class: e(y)(e(s).root(), a.class)
    }), {
      default: n(() => [
        u(e(be), {
          class: l(e(s).thumb())
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), _t = w({
  slots: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/20 backdrop-blur-[20px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]",
    range: "absolute h-full bg-[#007AFF]/80 shadow-[0_0_8px_rgba(0,122,255,0.5)]",
    thumb: [
      "block h-5 w-5 rounded-full border border-black/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)]",
      "transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
      "active:scale-110 disabled:pointer-events-none disabled:opacity-50"
    ]
  }
}), vt = /* @__PURE__ */ g({
  __name: "Slider",
  props: {
    name: {},
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(t, { emit: a }) {
    const s = t, d = z(s, a), r = _t();
    return (p, f) => (o(), c(e(he), T(e(d), {
      class: e(y)(e(r).root(), s.class)
    }), {
      default: n(() => [
        u(e(me), {
          class: l(e(r).track())
        }, {
          default: n(() => [
            u(e(ge), {
              class: l(e(r).range())
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["class"]),
        (o(!0), h(C, null, V(s.modelValue ?? [s.defaultValue], (m, _) => (o(), c(e(xe), {
          key: _,
          class: l(e(r).thumb())
        }, null, 8, ["class"]))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), kt = w({
  slots: {
    content: [
      "z-50 w-72 rounded-[14px] border border-white/20 p-4 text-black outline-none",
      "bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    ],
    arrow: "fill-white/70 backdrop-blur-[50px] backdrop-saturate-[200%]"
  }
}), yt = /* @__PURE__ */ g({
  __name: "Popover",
  props: {
    contentClass: {},
    sideOffset: {},
    showArrow: { type: Boolean },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const d = z(t, a), r = kt();
    return (p, f) => (o(), c(e(we), L(R(e(d))), {
      default: n(() => [
        u(e(_e), { "as-child": "" }, {
          default: n(() => [
            b(p.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(ve), null, {
          default: n(() => [
            u(e(ke), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(y)(e(r).content(), t.contentClass)
            }, p.$attrs), {
              default: n(() => [
                b(p.$slots, "default"),
                t.showArrow ? (o(), c(e(ye), {
                  key: 0,
                  class: l(e(r).arrow()),
                  width: 16,
                  height: 8
                }, null, 8, ["class"])) : B("", !0)
              ]),
              _: 3
            }, 16, ["side-offset", "class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), $t = w({
  slots: {
    content: [
      "transition-all duration-200 ease-out active:scale-[0.98] z-50 min-w-32 overflow-hidden rounded-[12px] border border-white/20 p-1 text-black",
      "bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    ],
    item: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "relative flex cursor-default select-none items-center rounded-[6px] px-2 py-1.5 text-sm outline-none transition-colors duration-100",
      "data-[highlighted]:bg-[#007AFF]/90 data-[highlighted]:text-white data-[highlighted]:shadow-[0_2px_10px_rgba(0,122,255,0.3)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ],
    separator: "-mx-1 my-1 h-px bg-black/5"
  }
}), Bt = /* @__PURE__ */ g({
  __name: "Menu",
  props: {
    items: {},
    contentClass: {},
    sideOffset: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open", "select"],
  setup(t, { emit: a }) {
    const s = t, i = a, d = z(s, i), r = $t();
    return (p, f) => (o(), c(e($e), L(R(e(d))), {
      default: n(() => [
        u(e(Be), { "as-child": "" }, {
          default: n(() => [
            b(p.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(Ce), null, {
          default: n(() => [
            u(e(Te), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(y)(e(r).content(), t.contentClass)
            }, p.$attrs), {
              default: n(() => [
                (o(!0), h(C, null, V(t.items, (m, _) => (o(), h(C, { key: _ }, [
                  m.separator ? (o(), c(e(Ve), {
                    key: 0,
                    class: l(e(r).separator())
                  }, null, 8, ["class"])) : (o(), c(e(Pe), {
                    key: 1,
                    disabled: m.disabled,
                    class: l(e(r).item()),
                    onSelect: (v) => i("select", m.value)
                  }, {
                    default: n(() => [
                      k($(m.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "class", "onSelect"]))
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["side-offset", "class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16));
  }
}), Ct = w({
  slots: {
    root: "relative w-full overflow-hidden rounded-full bg-white/30 backdrop-blur-[20px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]",
    indicator: "h-full w-full flex-1 bg-[#007AFF] shadow-[0_0_8px_rgba(0,122,255,0.5)] transition-all duration-500 ease-in-out"
  },
  variants: {
    size: {
      sm: { root: "h-1" },
      md: { root: "h-2" },
      lg: { root: "h-4" }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Tt = /* @__PURE__ */ g({
  __name: "Progress",
  props: {
    class: {},
    size: {},
    modelValue: {},
    max: {},
    getValueLabel: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t, s = Ct({ size: a.size }), i = S(() => {
      const d = a.modelValue ?? 0, r = a.max ?? 100;
      return `translateX(-${100 - d / r * 100}%)`;
    });
    return (d, r) => (o(), c(e(ze), T(a, {
      class: e(y)(e(s).root(), a.class)
    }), {
      default: n(() => [
        u(e(Ae), {
          class: l(e(s).indicator()),
          style: O({ transform: i.value })
        }, null, 8, ["class", "style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Vt = w({
  slots: {
    content: [
      "z-50 overflow-hidden rounded-[8px] border border-white/10 px-3 py-1.5 text-xs text-white",
      "bg-black/80 backdrop-blur-[20px] backdrop-saturate-[180%]",
      "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    ],
    arrow: "fill-black/80"
  }
}), Pt = /* @__PURE__ */ g({
  __name: "Tooltip",
  props: {
    contentClass: {},
    content: {},
    sideOffset: { default: 4 },
    showArrow: { type: Boolean, default: !0 },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const d = z(t, a), r = Vt();
    return (p, f) => (o(), c(e(Fe), null, {
      default: n(() => [
        u(e(Le), L(R(e(d))), {
          default: n(() => [
            u(e(Re), { "as-child": "" }, {
              default: n(() => [
                b(p.$slots, "trigger")
              ]),
              _: 3
            }),
            u(e(Se), null, {
              default: n(() => [
                u(e(Ee), {
                  "side-offset": t.sideOffset,
                  class: l(e(y)(e(r).content(), t.contentClass))
                }, {
                  default: n(() => [
                    b(p.$slots, "default", {}, () => [
                      k($(t.content), 1)
                    ]),
                    t.showArrow ? (o(), c(e(je), {
                      key: 0,
                      class: l(e(r).arrow()),
                      width: 12,
                      height: 6
                    }, null, 8, ["class"])) : B("", !0)
                  ]),
                  _: 3
                }, 8, ["side-offset", "class"])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), zt = w({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-black/10 text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-[10px]",
      primary: "border-transparent bg-[#007AFF]/15 text-[#007AFF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-[10px]",
      destructive: "border-transparent bg-[#FF3B30] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(255,59,48,0.3)]",
      outline: "text-black border-black/20"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), At = /* @__PURE__ */ g({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    class: {},
    as: { default: "div" }
  },
  setup(t) {
    const a = t;
    return (s, i) => (o(), c(q(t.as), {
      class: l(e(y)(e(zt)({ variant: t.variant }), a.class))
    }, {
      default: n(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = w({
  slots: {
    root: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "transition-all duration-200 ease-out active:scale-[0.98] peer h-5 w-5 shrink-0 rounded-[4px] border border-black/20 bg-black/5 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
      "data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF] data-[state=checked]:text-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
    ],
    indicator: "flex items-center justify-center text-current"
  }
}), Lt = (t, a) => {
  const s = t.__vccOpts || t;
  for (const [i, d] of a)
    s[i] = d;
  return s;
}, Rt = {}, St = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Et(t, a) {
  return o(), h("svg", St, [...a[0] || (a[0] = [
    x("path", { d: "M20 6 9 17l-5-5" }, null, -1)
  ])]);
}
const jt = /* @__PURE__ */ Lt(Rt, [["render", Et]]), Mt = /* @__PURE__ */ g({
  __name: "Checkbox",
  props: {
    class: {},
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t, s = Ft();
    return (i, d) => (o(), c(e(Me), T(a, {
      class: e(y)(e(s).root(), a.class)
    }), {
      default: n(() => [
        u(e(De), {
          class: l(e(s).indicator())
        }, {
          default: n(() => [
            u(jt, { class: "h-3.5 w-3.5" })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Dt = /* @__PURE__ */ g({
  __name: "RadioGroup",
  props: {
    class: {},
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, i) => (o(), c(e(Ie), T(a, {
      class: e(y)("grid gap-2", a.class)
    }), {
      default: n(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), It = w({
  slots: {
    item: [
      "transition-all duration-200 ease-out active:scale-[0.98]",
      "transition-all duration-200 ease-out active:scale-[0.98] peer aspect-square h-5 w-5 rounded-full border border-black/20 bg-black/5 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
      "data-[state=checked]:border-[#007AFF] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
    ],
    indicator: "flex items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-[#007AFF] after:transition-transform after:animate-in after:zoom-in-50"
  }
}), Ot = /* @__PURE__ */ g({
  __name: "RadioItem",
  props: {
    class: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t, s = It();
    return (i, d) => (o(), c(e(Oe), T(a, {
      class: e(y)(e(s).item(), a.class)
    }), {
      default: n(() => [
        u(e(qe), {
          class: l(e(s).indicator())
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), D = w({
  slots: {
    viewport: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
    root: [
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[16px] border border-black/5 p-4 pr-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all",
      "bg-white/70 backdrop-blur-[50px] backdrop-saturate-[180%]",
      /* Apple 'Thick' Material */
      "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full"
    ],
    title: "text-sm font-semibold text-black",
    description: "text-sm opacity-90 text-[#8E8E93]",
    close: "absolute right-2 top-2 rounded-md p-1 text-black/50 opacity-0 transition-opacity hover:text-black focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
  }
}), qt = { class: "grid gap-1" }, I = /* @__PURE__ */ g({
  __name: "Toast",
  props: {
    title: {},
    description: {},
    class: {},
    defaultOpen: { type: Boolean },
    forceMount: { type: Boolean },
    type: {},
    open: { type: Boolean },
    duration: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = t, d = z(s, a), r = D();
    return (p, f) => (o(), c(e(Ge), T(e(d), {
      class: e(y)(e(r).root(), s.class)
    }), {
      default: n(() => [
        x("div", qt, [
          t.title ? (o(), c(e(Ne), {
            key: 0,
            class: l(e(r).title())
          }, {
            default: n(() => [
              k($(t.title), 1)
            ]),
            _: 1
          }, 8, ["class"])) : B("", !0),
          t.description ? (o(), c(e(Ue), {
            key: 1,
            class: l(e(r).description())
          }, {
            default: n(() => [
              k($(t.description), 1)
            ]),
            _: 1
          }, 8, ["class"])) : B("", !0),
          b(p.$slots, "default")
        ]),
        u(e(He), {
          class: l(e(r).close())
        }, {
          default: n(() => [...f[0] || (f[0] = [
            x("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              x("path", { d: "M18 6 6 18" }),
              x("path", { d: "m6 6 12 12" })
            ], -1)
          ])]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F = G([]);
function Gt() {
  return {
    toasts: F,
    addToast: (s) => {
      const i = Math.random().toString(36).substring(2, 9);
      return F.value.push({ ...s, id: i }), i;
    },
    removeToast: (s) => {
      F.value = F.value.filter((i) => i.id !== s);
    }
  };
}
const Nt = /* @__PURE__ */ g({
  __name: "ToastProvider",
  props: {
    class: {},
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const a = t, s = D();
    return (i, d) => (o(), c(e(Ke), L(R(a)), {
      default: n(() => [
        b(i.$slots, "default"),
        u(e(Xe), {
          class: l(e(y)(e(s).viewport(), a.class))
        }, null, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Ut = /* @__PURE__ */ g({
  __name: "Toaster",
  setup(t) {
    const { toasts: a, removeToast: s } = Gt();
    return (i, d) => (o(), c(Nt, null, {
      default: n(() => [
        (o(!0), h(C, null, V(e(a), (r) => (o(), c(I, {
          key: r.id,
          title: r.title,
          description: r.description,
          duration: r.duration ?? 5e3,
          "onUpdate:open": (p) => !p && e(s)(r.id)
        }, null, 8, ["title", "description", "duration", "onUpdate:open"]))), 128))
      ]),
      _: 1
    }));
  }
}), Ht = w({
  slots: {
    root: "relative flex shrink-0 overflow-hidden rounded-full border border-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
    image: "aspect-square h-full w-full object-cover",
    fallback: [
      "flex h-full w-full items-center justify-center rounded-full font-medium text-black",
      "bg-black/5 backdrop-blur-[20px] backdrop-saturate-[180%]"
    ]
  },
  variants: {
    size: {
      sm: { root: "h-8 w-8", fallback: "text-xs" },
      md: { root: "h-10 w-10", fallback: "text-sm" },
      lg: { root: "h-14 w-14", fallback: "text-base" }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Kt = /* @__PURE__ */ g({
  __name: "Avatar",
  props: {
    src: {},
    alt: {},
    delayMs: { default: 0 },
    size: { default: "md" },
    class: {}
  },
  setup(t) {
    const a = t, s = Ht({ size: a.size });
    return (i, d) => (o(), c(e(Je), {
      class: l(e(y)(e(s).root(), a.class))
    }, {
      default: n(() => [
        t.src ? (o(), c(e(Qe), {
          key: 0,
          src: t.src,
          alt: t.alt,
          class: l(e(s).image())
        }, null, 8, ["src", "alt", "class"])) : B("", !0),
        u(e(We), {
          "delay-ms": t.delayMs,
          class: l(e(s).fallback())
        }, {
          default: n(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["delay-ms", "class"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: nt,
  Avatar: Kt,
  Badge: At,
  Button: tt,
  Card: it,
  Checkbox: Mt,
  Input: ht,
  Menu: Bt,
  Modal: ot,
  Pagination: ct,
  Popover: yt,
  Progress: Tt,
  RadioGroup: Dt,
  RadioItem: Ot,
  Slider: vt,
  Switch: wt,
  Table: pt,
  Tabs: mt,
  TabsContent: gt,
  Toast: I,
  Toaster: Ut,
  Tooltip: Pt
}, Symbol.toStringTag, { value: "Module" }));
function ea(t = {}) {
  const a = t.prefix ?? "L";
  return {
    install(s) {
      for (const [i, d] of Object.entries(Xt))
        s.component(`${a}${i}`, d);
    }
  };
}
export {
  nt as LAccordion,
  Kt as LAvatar,
  At as LBadge,
  tt as LButton,
  it as LCard,
  Mt as LCheckbox,
  ht as LInput,
  Bt as LMenu,
  ot as LModal,
  ct as LPagination,
  yt as LPopover,
  Tt as LProgress,
  Dt as LRadioGroup,
  Ot as LRadioItem,
  vt as LSlider,
  wt as LSwitch,
  pt as LTable,
  mt as LTabs,
  gt as LTabsContent,
  I as LToast,
  Ut as LToaster,
  Pt as LTooltip,
  lt as accordionVariants,
  Ht as avatarVariants,
  zt as badgeVariants,
  et as buttonVariants,
  rt as cardVariants,
  Ft as checkboxVariants,
  y as cn,
  ea as createLiquidGlass,
  ft as inputVariants,
  $t as menuVariants,
  at as modalVariants,
  dt as paginationVariants,
  kt as popoverVariants,
  Ct as progressVariants,
  It as radioVariants,
  _t as sliderVariants,
  xt as switchVariants,
  ut as tableVariants,
  M as tabsVariants,
  D as toastVariants,
  Vt as tooltipVariants,
  Gt as useToast
};
