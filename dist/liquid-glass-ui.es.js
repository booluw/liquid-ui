import { defineComponent as v, computed as S, openBlock as o, createBlock as c, unref as e, normalizeClass as l, withCtx as r, renderSlot as g, createVNode as u, createElementVNode as m, createTextVNode as y, toDisplayString as $, createCommentVNode as B, createElementBlock as b, Fragment as C, renderList as V, mergeProps as T, normalizeProps as L, guardReactiveProps as R, normalizeStyle as q, resolveDynamicComponent as G, ref as E } from "vue";
import { Primitive as N, DialogRoot as U, DialogTrigger as H, DialogPortal as K, DialogOverlay as X, DialogContent as J, DialogTitle as Q, DialogDescription as W, DialogClose as Y, AccordionRoot as Z, AccordionItem as ee, AccordionHeader as te, AccordionTrigger as ae, AccordionContent as se, PaginationRoot as oe, PaginationList as le, PaginationPrev as re, PaginationListItem as ne, PaginationEllipsis as ie, PaginationNext as de, TabsRoot as ce, TabsList as ue, TabsTrigger as pe, TabsContent as M, SwitchRoot as ge, SwitchThumb as fe, useForwardPropsEmits as z, SliderRoot as be, SliderTrack as he, SliderRange as ve, SliderThumb as me, PopoverRoot as _e, PopoverTrigger as xe, PopoverPortal as we, PopoverContent as ye, PopoverArrow as ke, DropdownMenuRoot as $e, DropdownMenuTrigger as Be, DropdownMenuPortal as Ce, DropdownMenuContent as Te, DropdownMenuSeparator as Ve, DropdownMenuItem as Pe, ProgressRoot as ze, ProgressIndicator as Ae, TooltipProvider as Fe, TooltipRoot as Le, TooltipTrigger as Re, TooltipPortal as Se, TooltipContent as je, TooltipArrow as Me, CheckboxRoot as De, CheckboxIndicator as Ie, RadioGroupRoot as Oe, RadioGroupItem as qe, RadioGroupIndicator as Ge, ToastRoot as Ee, ToastTitle as Ne, ToastDescription as Ue, ToastClose as He, ToastProvider as Ke, ToastViewport as Xe, AvatarRoot as Je, AvatarImage as Qe, AvatarFallback as We } from "radix-vue";
import { clsx as Ye } from "clsx";
import { twMerge as Ze } from "tailwind-merge";
import { tv as _ } from "tailwind-variants";
function k(...t) {
  return Ze(Ye(t));
}
const et = _({
  base: [
    "transition-all duration-200 ease-out active:scale-[0.97] inline-flex items-center justify-center rounded-xl font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    // Liquid glass base effect:
    "backdrop-blur-[25px] backdrop-saturate-[180%] backdrop-brightness-110"
  ],
  variants: {
    variant: {
      default: [
        "bg-[var(--glass-button-bg)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]",
        "hover:bg-[var(--glass-button-hover)] hover:shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)]"
      ],
      primary: [
        "bg-[#007AFF] text-white shadow-[0_4px_12px_rgba(0,122,255,0.3)]",
        "hover:bg-[#007AFF]/90 hover:shadow-[0_8px_24px_rgba(0,122,255,0.4)]"
      ],
      ghost: [
        "bg-transparent border-transparent shadow-none backdrop-blur-none backdrop-saturate-100",
        "hover:bg-[var(--glass-base-ultra-thin)] hover:backdrop-blur-[15px] hover:backdrop-saturate-[150%] text-[var(--glass-text-primary)]"
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
}), tt = /* @__PURE__ */ v({
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
    const a = t, s = S(() => k(et({ variant: a.variant, size: a.size }), a.class));
    return (i, d) => (o(), c(e(N), {
      as: t.as,
      "as-child": t.asChild,
      class: l(s.value),
      disabled: t.disabled
    }, {
      default: r(() => [
        g(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled"]));
  }
}), at = _({
  slots: {
    overlay: [
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-[12px] backdrop-saturate-[150%]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    ],
    content: [
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
      "rounded-[32px] bg-[var(--glass-base-thick)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)] backdrop-blur-[40px] backdrop-saturate-[190%] backdrop-brightness-110"
    ],
    title: "text-lg font-semibold leading-none tracking-tight text-[var(--glass-text-primary)]",
    description: "text-sm text-[var(--glass-text-secondary)]",
    closeButton: [
      "absolute right-4 top-4 rounded-full p-2 opacity-70 transition-opacity",
      "hover:opacity-100 hover:bg-[var(--glass-base-thin)] focus:outline-none focus:ring-2 focus:ring-white/30",
      "disabled:pointer-events-none text-[var(--glass-text-primary)]"
    ]
  }
}), st = { class: "flex flex-col space-y-2" }, ot = /* @__PURE__ */ v({
  __name: "Modal",
  props: {
    title: {},
    description: {},
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = a, { overlay: i, content: d, title: n, description: p, closeButton: f } = at();
    return (h, x) => (o(), c(e(U), {
      open: t.open,
      "onUpdate:open": x[0] || (x[0] = (w) => s("update:open", w))
    }, {
      default: r(() => [
        u(e(H), { "as-child": "" }, {
          default: r(() => [
            g(h.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(K), null, {
          default: r(() => [
            u(e(X), {
              class: l(e(i)())
            }, null, 8, ["class"]),
            u(e(J), {
              class: l(e(d)())
            }, {
              default: r(() => [
                m("div", st, [
                  e(n) || h.$slots.title ? (o(), c(e(Q), {
                    key: 0,
                    class: l(e(n)())
                  }, {
                    default: r(() => [
                      g(h.$slots, "title", {}, () => [
                        y($(e(n)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0),
                  e(p) || h.$slots.description ? (o(), c(e(W), {
                    key: 1,
                    class: l(e(p)())
                  }, {
                    default: r(() => [
                      g(h.$slots, "description", {}, () => [
                        y($(e(p)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0)
                ]),
                g(h.$slots, "default"),
                u(e(Y), {
                  class: l(e(f)())
                }, {
                  default: r(() => [...x[1] || (x[1] = [
                    m("span", { class: "sr-only" }, "Close", -1),
                    m("svg", {
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
                      m("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      m("line", {
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
}), lt = _({
  slots: {
    root: "w-full divide-y divide-[var(--glass-border)] overflow-hidden rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]",
    item: "overflow-hidden",
    header: "flex",
    trigger: [
      "flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all duration-200 ease-out active:scale-[0.98]",
      "hover:bg-[var(--glass-base-ultra-thin)]",
      "text-[var(--glass-text-primary)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
      "[&[data-state=open]>svg]:rotate-180"
    ],
    icon: "h-4 w-4 shrink-0 transition-transform duration-300 text-[var(--glass-text-secondary)]",
    content: [
      "overflow-hidden text-sm text-[var(--glass-text-secondary)] transition-all",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ],
    contentInner: "px-6 pb-4 pt-0"
  }
}), rt = /* @__PURE__ */ v({
  __name: "Accordion",
  props: {
    items: {},
    type: { default: "single" },
    defaultValue: {}
  },
  setup(t) {
    const { root: a, item: s, header: i, trigger: d, icon: n, content: p, contentInner: f } = lt();
    return (h, x) => (o(), c(e(Z), {
      type: t.type,
      "default-value": t.defaultValue,
      class: l(e(a)())
    }, {
      default: r(() => [
        (o(!0), b(C, null, V(t.items, (w) => (o(), c(e(ee), {
          key: w.value,
          value: w.value,
          class: l(e(s)())
        }, {
          default: r(() => [
            u(e(te), {
              class: l(e(i)())
            }, {
              default: r(() => [
                u(e(ae), {
                  class: l(e(d)())
                }, {
                  default: r(() => [
                    g(h.$slots, "title", { item: w }, () => [
                      y($(w.title), 1)
                    ]),
                    (o(), b("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: l(e(n)())
                    }, [...x[0] || (x[0] = [
                      m("polyline", { points: "6 9 12 15 18 9" }, null, -1)
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
              default: r(() => [
                m("div", {
                  class: l(e(f)())
                }, [
                  g(h.$slots, "content", { item: w }, () => [
                    y($(w.content), 1)
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
}), nt = _({
  slots: {
    root: [
      "rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]",
      "overflow-hidden"
    ],
    header: "flex flex-col space-y-1.5 p-6",
    title: "font-semibold tracking-tight text-xl text-[var(--glass-text-primary)]",
    description: "text-sm text-[var(--glass-text-secondary)]",
    content: "p-6 pt-0 text-[var(--glass-text-primary)]",
    footer: "flex items-center p-6 pt-0"
  }
}), it = /* @__PURE__ */ v({
  __name: "Card",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const { root: a, header: s, title: i, description: d, content: n, footer: p } = nt();
    return (f, h) => (o(), b("div", {
      class: l(e(a)())
    }, [
      e(i) || e(d) || f.$slots.header || f.$slots.title || f.$slots.description ? (o(), b("div", {
        key: 0,
        class: l(e(s)())
      }, [
        g(f.$slots, "header", {}, () => [
          e(i) || f.$slots.title ? (o(), b("h3", {
            key: 0,
            class: l(e(i)())
          }, [
            g(f.$slots, "title", {}, () => [
              y($(e(i)), 1)
            ])
          ], 2)) : B("", !0),
          e(d) || f.$slots.description ? (o(), b("p", {
            key: 1,
            class: l(e(d)())
          }, [
            g(f.$slots, "description", {}, () => [
              y($(e(d)), 1)
            ])
          ], 2)) : B("", !0)
        ])
      ], 2)) : B("", !0),
      m("div", {
        class: l(e(n)())
      }, [
        g(f.$slots, "default")
      ], 2),
      f.$slots.footer ? (o(), b("div", {
        key: 1,
        class: l(e(p)())
      }, [
        g(f.$slots, "footer")
      ], 2)) : B("", !0)
    ], 2));
  }
}), dt = _({
  slots: {
    root: "mx-auto flex w-full justify-center",
    list: "flex flex-row items-center gap-1",
    item: "",
    trigger: [
      "inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] bg-white/70",
      "hover:bg-white/50",
      "text-black",
      "data-[selected]:bg-white/20 data-[selected]:border-white/30 data-[selected]:shadow-[0_4px_20px_rgba(0,0,0,0.15)] data-[selected]:text-black"
    ],
    ellipsis: "flex h-9 w-9 items-center justify-center",
    icon: "h-4 w-4"
  }
}), ct = /* @__PURE__ */ v({
  __name: "Pagination",
  props: {
    total: {},
    siblingCount: { default: 1 },
    defaultPage: { default: 1 },
    showEdges: { type: Boolean, default: !1 }
  },
  setup(t) {
    const { root: a, list: s, item: i, trigger: d, ellipsis: n, icon: p } = dt();
    return (f, h) => (o(), c(e(oe), {
      total: t.total,
      "sibling-count": t.siblingCount,
      "default-page": t.defaultPage,
      "show-edges": t.showEdges,
      class: l(e(a)())
    }, {
      default: r(() => [
        u(e(le), {
          class: l(e(s)())
        }, {
          default: r(({ items: x }) => [
            u(e(re), {
              class: l(e(d)())
            }, {
              default: r(() => [
                g(f.$slots, "prev", {}, () => [
                  (o(), b("svg", {
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
                  }, [...h[0] || (h[0] = [
                    m("polyline", { points: "15 18 9 12 15 6" }, null, -1)
                  ])], 2))
                ])
              ]),
              _: 3
            }, 8, ["class"]),
            (o(!0), b(C, null, V(x, (w, P) => (o(), b(C, { key: P }, [
              w.type === "page" ? (o(), c(e(ne), {
                key: 0,
                value: w.value,
                class: l(e(d)()),
                "data-selected": w.value === f.$attrs.page || w.value === t.defaultPage ? !0 : void 0
              }, {
                default: r(() => [
                  y($(w.value), 1)
                ]),
                _: 2
              }, 1032, ["value", "class", "data-selected"])) : w.type === "ellipsis" ? (o(), c(e(ie), {
                key: 1,
                class: l(e(n)())
              }, {
                default: r(() => [...h[1] || (h[1] = [
                  y(" … ", -1)
                ])]),
                _: 1
              }, 8, ["class"])) : B("", !0)
            ], 64))), 128)),
            u(e(de), {
              class: l(e(d)())
            }, {
              default: r(() => [
                g(f.$slots, "next", {}, () => [
                  (o(), b("svg", {
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
                  }, [...h[2] || (h[2] = [
                    m("polyline", { points: "9 18 15 12 9 6" }, null, -1)
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
}), ut = _({
  slots: {
    container: "relative w-full overflow-hidden rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]",
    table: "w-full caption-bottom text-sm",
    header: "[&_tr]:border-b [&_tr]:border-[var(--glass-border)]",
    body: "[&_tr:last-child]:border-0",
    footer: "border-t border-[var(--glass-border)] bg-[var(--glass-base-ultra-thin)] font-medium [&>tr]:last:border-b-0",
    row: [
      "border-b border-white/10 transition-colors",
      "hover:bg-white/5",
      "data-[state=selected]:bg-white/10"
    ],
    head: "h-12 px-4 text-left align-middle font-medium text-[var(--glass-text-secondary)] [&:has([role=checkbox])]:pr-0",
    cell: "p-4 align-middle text-[var(--glass-text-primary)] [&:has([role=checkbox])]:pr-0",
    caption: "mt-4 text-sm text-[var(--glass-text-secondary)]"
  }
}), pt = /* @__PURE__ */ v({
  __name: "Table",
  props: {
    columns: {},
    data: {},
    caption: {}
  },
  setup(t) {
    const { container: a, table: s, header: i, body: d, row: n, head: p, cell: f, caption: h } = ut();
    return (x, w) => (o(), b("div", {
      class: l(e(a)())
    }, [
      m("table", {
        class: l(e(s)())
      }, [
        t.caption || x.$slots.caption ? (o(), b("caption", {
          key: 0,
          class: l(e(h)())
        }, [
          g(x.$slots, "caption", {}, () => [
            y($(t.caption), 1)
          ])
        ], 2)) : B("", !0),
        m("thead", {
          class: l(e(i)())
        }, [
          m("tr", {
            class: l(e(n)())
          }, [
            (o(!0), b(C, null, V(t.columns, (P) => (o(), b("th", {
              key: P.key,
              class: l(e(p)())
            }, [
              g(x.$slots, `header-${P.key}`, { column: P }, () => [
                y($(P.label), 1)
              ])
            ], 2))), 128))
          ], 2)
        ], 2),
        m("tbody", {
          class: l(e(d)())
        }, [
          (o(!0), b(C, null, V(t.data, (P, j) => (o(), b("tr", {
            key: j,
            class: l(e(n)())
          }, [
            (o(!0), b(C, null, V(t.columns, (A) => (o(), b("td", {
              key: A.key,
              class: l(e(f)())
            }, [
              g(x.$slots, `cell-${A.key}`, {
                row: P,
                column: A,
                rowIndex: j
              }, () => [
                y($(P[A.key]), 1)
              ])
            ], 2))), 128))
          ], 2))), 128))
        ], 2)
      ], 2)
    ], 2));
  }
}), gt = _({
  base: [
    "flex h-11 w-full rounded-xl px-4 py-2 text-sm transition-all duration-300",
    "bg-[var(--glass-base-thin)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]",
    "backdrop-blur-[15px] backdrop-saturate-[160%]",
    "placeholder:text-[var(--glass-text-tertiary)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:bg-[var(--glass-base-regular)]",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium"
  ]
}), ft = ["type", "value", "disabled"], bt = /* @__PURE__ */ v({
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    class: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, i = a, d = S(() => k(gt(), s.class));
    return (n, p) => (o(), b("input", T({
      type: t.type,
      value: t.modelValue,
      onInput: p[0] || (p[0] = (f) => i("update:modelValue", f.target.value)),
      class: d.value,
      disabled: t.disabled
    }, n.$attrs), null, 16, ft));
  }
}), D = _({
  slots: {
    list: [
      "inline-flex h-11 items-center justify-center rounded-[12px] p-1 text-[var(--glass-text-secondary)]",
      "bg-[var(--glass-base-regular)] backdrop-blur-[30px] backdrop-saturate-[180%]",
      "shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]"
    ],
    trigger: [
      "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98]",
      "disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--glass-base-ultra-thin)]",
      "data-[state=active]:bg-[var(--glass-base-thick)] data-[state=active]:text-[var(--glass-text-primary)]",
      "data-[state=active]:shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_0_1px_0_var(--glass-highlight)]"
    ],
    content: [
      "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    ]
  }
}), ht = /* @__PURE__ */ v({
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
    const a = t, s = D();
    return (i, d) => (o(), c(e(ce), T(a, {
      class: e(k)("flex flex-col", a.class)
    }), {
      default: r(() => [
        u(e(ue), {
          class: l(e(s).list())
        }, {
          default: r(() => [
            (o(!0), b(C, null, V(t.items, (n) => (o(), c(e(pe), {
              key: n.value,
              value: n.value,
              class: l(e(s).trigger())
            }, {
              default: r(() => [
                g(i.$slots, `trigger-${n.value}`, {}, () => [
                  y($(n.title), 1)
                ])
              ]),
              _: 2
            }, 1032, ["value", "class"]))), 128))
          ]),
          _: 3
        }, 8, ["class"]),
        i.$slots.default ? g(i.$slots, "default", { key: 0 }) : (o(!0), b(C, { key: 1 }, V(t.items, (n) => (o(), c(e(M), {
          key: n.value,
          value: n.value,
          class: l(e(s).content())
        }, {
          default: r(() => [
            g(i.$slots, n.value, {}, () => [
              y($(n.content), 1)
            ])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vt = /* @__PURE__ */ v({
  __name: "TabsContent",
  props: {
    value: {},
    class: {}
  },
  setup(t) {
    const a = t, s = D();
    return (i, d) => (o(), c(e(M), {
      value: t.value,
      class: l(e(k)(e(s).content(), a.class))
    }, {
      default: r(() => [
        g(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "class"]));
  }
}), mt = _({
  slots: {
    root: [
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 ease-out active:scale-[0.98]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "bg-[var(--glass-base-thick)] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1),inset_0_1px_0_var(--glass-highlight)]",
      "data-[state=checked]:bg-[#34C759] data-[state=checked]:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
    ],
    thumb: [
      "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.1)] transition-transform duration-200",
      "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ]
  }
}), _t = /* @__PURE__ */ v({
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
    const a = t, s = mt();
    return (i, d) => (o(), c(e(ge), T(a, {
      class: e(k)(e(s).root(), a.class)
    }), {
      default: r(() => [
        u(e(fe), {
          class: l(e(s).thumb())
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), xt = _({
  slots: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--glass-base-thin)] backdrop-blur-[10px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]",
    range: "absolute h-full bg-[#007AFF] shadow-[0_0_8px_rgba(0,122,255,0.3)]",
    thumb: [
      "block h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.1)]",
      "transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/30",
      "active:scale-105 disabled:pointer-events-none disabled:opacity-50"
    ]
  }
}), wt = /* @__PURE__ */ v({
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
    const s = t, d = z(s, a), n = xt();
    return (p, f) => (o(), c(e(be), T(e(d), {
      class: e(k)(e(n).root(), s.class)
    }), {
      default: r(() => [
        u(e(he), {
          class: l(e(n).track())
        }, {
          default: r(() => [
            u(e(ve), {
              class: l(e(n).range())
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["class"]),
        (o(!0), b(C, null, V(s.modelValue ?? [s.defaultValue], (h, x) => (o(), c(e(me), {
          key: x,
          class: l(e(n).thumb())
        }, null, 8, ["class"]))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yt = _({
  slots: {
    content: [
      "z-50 w-72 rounded-[14px] p-4 text-[var(--glass-text-primary)] outline-none",
      "bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[190%] backdrop-brightness-110",
      "shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
    ],
    arrow: "fill-[var(--glass-base-thick)]"
  }
}), kt = /* @__PURE__ */ v({
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
    const d = z(t, a), n = yt();
    return (p, f) => (o(), c(e(_e), L(R(e(d))), {
      default: r(() => [
        u(e(xe), { "as-child": "" }, {
          default: r(() => [
            g(p.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(we), null, {
          default: r(() => [
            u(e(ye), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(k)(e(n).content(), t.contentClass)
            }, p.$attrs), {
              default: r(() => [
                g(p.$slots, "default"),
                t.showArrow ? (o(), c(e(ke), {
                  key: 0,
                  class: l(e(n).arrow()),
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
}), $t = _({
  slots: {
    content: [
      "z-50 min-w-32 overflow-hidden rounded-[12px] p-1 text-[var(--glass-text-primary)] transition-all duration-200 ease-out active:scale-[0.98]",
      "bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[190%] backdrop-brightness-110",
      "shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
    ],
    item: [
      "relative flex cursor-default select-none items-center rounded-[6px] px-2 py-1.5 text-sm outline-none transition-all duration-200 ease-out active:scale-[0.98]",
      "data-[highlighted]:bg-[#007AFF] data-[highlighted]:text-white data-[highlighted]:shadow-[0_2px_8px_rgba(0,122,255,0.3)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ],
    separator: "-mx-1 my-1 h-px bg-[var(--glass-border)]"
  }
}), Bt = /* @__PURE__ */ v({
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
    const s = t, i = a, d = z(s, i), n = $t();
    return (p, f) => (o(), c(e($e), L(R(e(d))), {
      default: r(() => [
        u(e(Be), { "as-child": "" }, {
          default: r(() => [
            g(p.$slots, "trigger")
          ]),
          _: 3
        }),
        u(e(Ce), null, {
          default: r(() => [
            u(e(Te), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(k)(e(n).content(), t.contentClass)
            }, p.$attrs), {
              default: r(() => [
                (o(!0), b(C, null, V(t.items, (h, x) => (o(), b(C, { key: x }, [
                  h.separator ? (o(), c(e(Ve), {
                    key: 0,
                    class: l(e(n).separator())
                  }, null, 8, ["class"])) : (o(), c(e(Pe), {
                    key: 1,
                    disabled: h.disabled,
                    class: l(e(n).item()),
                    onSelect: (w) => i("select", h.value)
                  }, {
                    default: r(() => [
                      y($(h.label), 1)
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
}), Ct = _({
  slots: {
    root: "relative w-full overflow-hidden rounded-full bg-[var(--glass-base-thin)] backdrop-blur-[10px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_var(--glass-highlight)]",
    indicator: "h-full w-full flex-1 bg-[#007AFF] shadow-[0_0_8px_rgba(0,122,255,0.3)] transition-all duration-500 ease-in-out"
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
}), Tt = /* @__PURE__ */ v({
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
      const d = a.modelValue ?? 0, n = a.max ?? 100;
      return `translateX(-${100 - d / n * 100}%)`;
    });
    return (d, n) => (o(), c(e(ze), T(a, {
      class: e(k)(e(s).root(), a.class)
    }), {
      default: r(() => [
        u(e(Ae), {
          class: l(e(s).indicator()),
          style: q({ transform: i.value })
        }, null, 8, ["class", "style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Vt = _({
  slots: {
    content: [
      "z-50 overflow-hidden rounded-[8px] px-3 py-1.5 text-xs text-white",
      "bg-black/80 backdrop-blur-[12px] backdrop-saturate-[180%]",
      "shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
    ],
    arrow: "fill-black/80"
  }
}), Pt = /* @__PURE__ */ v({
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
    const d = z(t, a), n = Vt();
    return (p, f) => (o(), c(e(Fe), null, {
      default: r(() => [
        u(e(Le), L(R(e(d))), {
          default: r(() => [
            u(e(Re), { "as-child": "" }, {
              default: r(() => [
                g(p.$slots, "trigger")
              ]),
              _: 3
            }),
            u(e(Se), null, {
              default: r(() => [
                u(e(je), {
                  "side-offset": t.sideOffset,
                  class: l(e(k)(e(n).content(), t.contentClass))
                }, {
                  default: r(() => [
                    g(p.$slots, "content", {}, () => [
                      y($(t.content), 1)
                    ]),
                    t.showArrow ? (o(), c(e(Me), {
                      key: 0,
                      class: l(e(n).arrow()),
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
}), zt = _({
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white/40",
  variants: {
    variant: {
      default: [
        "bg-[var(--glass-base-thin)] text-[var(--glass-text-primary)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]",
        "backdrop-blur-[10px] backdrop-saturate-[150%]"
      ],
      primary: [
        "bg-[#007AFF]/15 text-[#007AFF] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(0,122,255,0.2)]",
        "backdrop-blur-[10px]"
      ],
      destructive: [
        "bg-[#FF3B30] text-white shadow-[0_2px_8px_rgba(255,59,48,0.3)]"
      ],
      outline: [
        "text-[var(--glass-text-primary)] border border-[var(--glass-border)]"
      ]
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), At = /* @__PURE__ */ v({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    class: {},
    as: { default: "div" }
  },
  setup(t) {
    const a = t;
    return (s, i) => (o(), c(G(t.as), {
      class: l(e(k)(e(zt)({ variant: t.variant }), a.class))
    }, {
      default: r(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = _({
  slots: {
    root: [
      "peer h-5 w-5 shrink-0 rounded-[5px] transition-all duration-200 ease-out active:scale-[0.95]",
      "bg-[var(--glass-base-thin)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
      "data-[state=checked]:bg-[#007AFF] data-[state=checked]:shadow-none data-[state=checked]:text-white",
      "disabled:cursor-not-allowed disabled:opacity-50"
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
function jt(t, a) {
  return o(), b("svg", St, [...a[0] || (a[0] = [
    m("path", { d: "M20 6 9 17l-5-5" }, null, -1)
  ])]);
}
const Mt = /* @__PURE__ */ Lt(Rt, [["render", jt]]), Dt = /* @__PURE__ */ v({
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
    return (i, d) => (o(), c(e(De), T(a, {
      class: e(k)(e(s).root(), a.class)
    }), {
      default: r(() => [
        u(e(Ie), {
          class: l(e(s).indicator())
        }, {
          default: r(() => [
            u(Mt, { class: "h-3.5 w-3.5" })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), It = /* @__PURE__ */ v({
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
    return (s, i) => (o(), c(e(Oe), T(a, {
      class: e(k)("grid gap-2", a.class)
    }), {
      default: r(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ot = _({
  slots: {
    item: [
      "peer aspect-square h-5 w-5 rounded-full transition-all duration-200 ease-out active:scale-[0.95]",
      "bg-[var(--glass-base-thin)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border)]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
      "data-[state=checked]:border-[#007AFF] data-[state=checked]:bg-[var(--glass-base-thin)]",
      "disabled:cursor-not-allowed disabled:opacity-50"
    ],
    indicator: "flex items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-[#007AFF] after:transition-transform after:animate-in after:zoom-in-50"
  }
}), qt = /* @__PURE__ */ v({
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
    const a = t, s = Ot();
    return (i, d) => (o(), c(e(qe), T(a, {
      class: e(k)(e(s).item(), a.class)
    }), {
      default: r(() => [
        u(e(Ge), {
          class: l(e(s).indicator())
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), I = _({
  slots: {
    viewport: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
    root: [
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[16px] p-4 pr-8 transition-all",
      "bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[180%] backdrop-brightness-110",
      "shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]",
      "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full"
    ],
    title: "text-sm font-semibold text-[var(--glass-text-primary)]",
    description: "text-sm text-[var(--glass-text-secondary)]",
    close: "absolute right-2 top-2 rounded-md p-1 text-[var(--glass-text-secondary)] opacity-0 transition-opacity hover:text-[var(--glass-text-primary)] focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
  }
}), Gt = { class: "grid gap-1" }, O = /* @__PURE__ */ v({
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
    const s = t, d = z(s, a), n = I();
    return (p, f) => (o(), c(e(Ee), T(e(d), {
      class: e(k)(e(n).root(), s.class)
    }), {
      default: r(() => [
        m("div", Gt, [
          t.title ? (o(), c(e(Ne), {
            key: 0,
            class: l(e(n).title())
          }, {
            default: r(() => [
              y($(t.title), 1)
            ]),
            _: 1
          }, 8, ["class"])) : B("", !0),
          t.description ? (o(), c(e(Ue), {
            key: 1,
            class: l(e(n).description())
          }, {
            default: r(() => [
              y($(t.description), 1)
            ]),
            _: 1
          }, 8, ["class"])) : B("", !0),
          g(p.$slots, "default")
        ]),
        u(e(He), {
          class: l(e(n).close())
        }, {
          default: r(() => [...f[0] || (f[0] = [
            m("svg", {
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
              m("path", { d: "M18 6 6 18" }),
              m("path", { d: "m6 6 12 12" })
            ], -1)
          ])]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F = E([]);
function Et() {
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
const Nt = /* @__PURE__ */ v({
  __name: "ToastProvider",
  props: {
    class: {},
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const a = t, s = I();
    return (i, d) => (o(), c(e(Ke), L(R(a)), {
      default: r(() => [
        g(i.$slots, "default"),
        u(e(Xe), {
          class: l(e(k)(e(s).viewport(), a.class))
        }, null, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Ut = /* @__PURE__ */ v({
  __name: "Toaster",
  setup(t) {
    const { toasts: a, removeToast: s } = Et();
    return (i, d) => (o(), c(Nt, null, {
      default: r(() => [
        (o(!0), b(C, null, V(e(a), (n) => (o(), c(O, {
          key: n.id,
          title: n.title,
          description: n.description,
          duration: n.duration ?? 5e3,
          "onUpdate:open": (p) => !p && e(s)(n.id)
        }, null, 8, ["title", "description", "duration", "onUpdate:open"]))), 128))
      ]),
      _: 1
    }));
  }
}), Ht = _({
  slots: {
    root: "relative flex shrink-0 overflow-hidden rounded-full shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-sm)]",
    image: "aspect-square h-full w-full object-cover",
    fallback: [
      "flex h-full w-full items-center justify-center rounded-full font-medium text-[var(--glass-text-primary)]",
      "bg-[var(--glass-base-thin)] backdrop-blur-[10px] backdrop-saturate-[160%]"
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
}), Kt = /* @__PURE__ */ v({
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
      class: l(e(k)(e(s).root(), a.class))
    }, {
      default: r(() => [
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
          default: r(() => [
            g(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["delay-ms", "class"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: rt,
  Avatar: Kt,
  Badge: At,
  Button: tt,
  Card: it,
  Checkbox: Dt,
  Input: bt,
  Menu: Bt,
  Modal: ot,
  Pagination: ct,
  Popover: kt,
  Progress: Tt,
  RadioGroup: It,
  RadioItem: qt,
  Slider: wt,
  Switch: _t,
  Table: pt,
  Tabs: ht,
  TabsContent: vt,
  Toast: O,
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
  rt as LAccordion,
  Kt as LAvatar,
  At as LBadge,
  tt as LButton,
  it as LCard,
  Dt as LCheckbox,
  bt as LInput,
  Bt as LMenu,
  ot as LModal,
  ct as LPagination,
  kt as LPopover,
  Tt as LProgress,
  It as LRadioGroup,
  qt as LRadioItem,
  wt as LSlider,
  _t as LSwitch,
  pt as LTable,
  ht as LTabs,
  vt as LTabsContent,
  O as LToast,
  Ut as LToaster,
  Pt as LTooltip,
  lt as accordionVariants,
  Ht as avatarVariants,
  zt as badgeVariants,
  et as buttonVariants,
  nt as cardVariants,
  Ft as checkboxVariants,
  k as cn,
  ea as createLiquidGlass,
  gt as inputVariants,
  $t as menuVariants,
  at as modalVariants,
  dt as paginationVariants,
  yt as popoverVariants,
  Ct as progressVariants,
  Ot as radioVariants,
  xt as sliderVariants,
  mt as switchVariants,
  ut as tableVariants,
  D as tabsVariants,
  I as toastVariants,
  Vt as tooltipVariants,
  Et as useToast
};
