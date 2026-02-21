import { defineComponent as v, computed as S, openBlock as s, createBlock as h, unref as e, normalizeClass as a, withCtx as n, renderSlot as f, createVNode as g, createElementVNode as x, createTextVNode as _, toDisplayString as k, createCommentVNode as B, createElementBlock as p, Fragment as $, renderList as P, mergeProps as T, normalizeProps as A, guardReactiveProps as D, normalizeStyle as j } from "vue";
import { Primitive as R, DialogRoot as O, DialogTrigger as I, DialogPortal as N, DialogOverlay as q, DialogContent as G, DialogTitle as H, DialogDescription as U, DialogClose as X, AccordionRoot as J, AccordionItem as K, AccordionHeader as Q, AccordionTrigger as W, AccordionContent as Y, PaginationRoot as Z, PaginationList as ee, PaginationPrev as te, PaginationListItem as ae, PaginationEllipsis as se, PaginationNext as oe, TabsRoot as le, TabsList as ne, TabsTrigger as re, TabsContent as F, SwitchRoot as ie, SwitchThumb as de, useForwardPropsEmits as E, SliderRoot as ce, SliderTrack as ue, SliderRange as pe, SliderThumb as be, PopoverRoot as fe, PopoverTrigger as ge, PopoverPortal as he, PopoverContent as me, PopoverArrow as we, DropdownMenuRoot as xe, DropdownMenuTrigger as _e, DropdownMenuPortal as ve, DropdownMenuContent as ke, DropdownMenuSeparator as ye, DropdownMenuItem as $e, ProgressRoot as Ce, ProgressIndicator as Be } from "radix-vue";
import { clsx as Pe } from "clsx";
import { twMerge as Ve } from "tailwind-merge";
import { tv as y } from "tailwind-variants";
function V(...t) {
  return Ve(Pe(t));
}
const Te = y({
  base: [
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
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
}), ze = /* @__PURE__ */ v({
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
    const l = t, r = S(() => V(Te({ variant: l.variant, size: l.size }), l.class));
    return (i, d) => (s(), h(e(R), {
      as: t.as,
      "as-child": t.asChild,
      class: a(r.value),
      disabled: t.disabled
    }, {
      default: n(() => [
        f(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled"]));
  }
}), Se = y({
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
}), Ee = { class: "flex flex-col space-y-2" }, Le = /* @__PURE__ */ v({
  __name: "Modal",
  props: {
    title: {},
    description: {},
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: l }) {
    const r = l, { overlay: i, content: d, title: o, description: b, closeButton: c } = Se();
    return (u, m) => (s(), h(e(O), {
      open: t.open,
      "onUpdate:open": m[0] || (m[0] = (w) => r("update:open", w))
    }, {
      default: n(() => [
        g(e(I), { "as-child": "" }, {
          default: n(() => [
            f(u.$slots, "trigger")
          ]),
          _: 3
        }),
        g(e(N), null, {
          default: n(() => [
            g(e(q), {
              class: a(e(i)())
            }, null, 8, ["class"]),
            g(e(G), {
              class: a(e(d)())
            }, {
              default: n(() => [
                x("div", Ee, [
                  e(o) || u.$slots.title ? (s(), h(e(H), {
                    key: 0,
                    class: a(e(o)())
                  }, {
                    default: n(() => [
                      f(u.$slots, "title", {}, () => [
                        _(k(e(o)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0),
                  e(b) || u.$slots.description ? (s(), h(e(U), {
                    key: 1,
                    class: a(e(b)())
                  }, {
                    default: n(() => [
                      f(u.$slots, "description", {}, () => [
                        _(k(e(b)), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : B("", !0)
                ]),
                f(u.$slots, "default"),
                g(e(X), {
                  class: a(e(c)())
                }, {
                  default: n(() => [...m[1] || (m[1] = [
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
}), Ae = y({
  slots: {
    root: "w-full divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/20 bg-white/50 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_30px_rgba(0,0,0,0.1)]",
    item: "overflow-hidden",
    header: "flex",
    trigger: [
      "flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all duration-300",
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
}), De = /* @__PURE__ */ v({
  __name: "Accordion",
  props: {
    items: {},
    type: { default: "single" },
    defaultValue: {}
  },
  setup(t) {
    const { root: l, item: r, header: i, trigger: d, icon: o, content: b, contentInner: c } = Ae();
    return (u, m) => (s(), h(e(J), {
      type: t.type,
      "default-value": t.defaultValue,
      class: a(e(l)())
    }, {
      default: n(() => [
        (s(!0), p($, null, P(t.items, (w) => (s(), h(e(K), {
          key: w.value,
          value: w.value,
          class: a(e(r)())
        }, {
          default: n(() => [
            g(e(Q), {
              class: a(e(i)())
            }, {
              default: n(() => [
                g(e(W), {
                  class: a(e(d)())
                }, {
                  default: n(() => [
                    f(u.$slots, "title", { item: w }, () => [
                      _(k(w.title), 1)
                    ]),
                    (s(), p("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: a(e(o)())
                    }, [...m[0] || (m[0] = [
                      x("polyline", { points: "6 9 12 15 18 9" }, null, -1)
                    ])], 2))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1032, ["class"]),
            g(e(Y), {
              class: a(e(b)())
            }, {
              default: n(() => [
                x("div", {
                  class: a(e(c)())
                }, [
                  f(u.$slots, "content", { item: w }, () => [
                    _(k(w.content), 1)
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
}), Fe = y({
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
}), Me = /* @__PURE__ */ v({
  __name: "Card",
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const { root: l, header: r, title: i, description: d, content: o, footer: b } = Fe();
    return (c, u) => (s(), p("div", {
      class: a(e(l)())
    }, [
      e(i) || e(d) || c.$slots.header || c.$slots.title || c.$slots.description ? (s(), p("div", {
        key: 0,
        class: a(e(r)())
      }, [
        f(c.$slots, "header", {}, () => [
          e(i) || c.$slots.title ? (s(), p("h3", {
            key: 0,
            class: a(e(i)())
          }, [
            f(c.$slots, "title", {}, () => [
              _(k(e(i)), 1)
            ])
          ], 2)) : B("", !0),
          e(d) || c.$slots.description ? (s(), p("p", {
            key: 1,
            class: a(e(d)())
          }, [
            f(c.$slots, "description", {}, () => [
              _(k(e(d)), 1)
            ])
          ], 2)) : B("", !0)
        ])
      ], 2)) : B("", !0),
      x("div", {
        class: a(e(o)())
      }, [
        f(c.$slots, "default")
      ], 2),
      c.$slots.footer ? (s(), p("div", {
        key: 1,
        class: a(e(b)())
      }, [
        f(c.$slots, "footer")
      ], 2)) : B("", !0)
    ], 2));
  }
}), je = y({
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
}), Re = /* @__PURE__ */ v({
  __name: "Pagination",
  props: {
    total: {},
    siblingCount: { default: 1 },
    defaultPage: { default: 1 },
    showEdges: { type: Boolean, default: !1 }
  },
  setup(t) {
    const { root: l, list: r, item: i, trigger: d, ellipsis: o, icon: b } = je();
    return (c, u) => (s(), h(e(Z), {
      total: t.total,
      "sibling-count": t.siblingCount,
      "default-page": t.defaultPage,
      "show-edges": t.showEdges,
      class: a(e(l)())
    }, {
      default: n(() => [
        g(e(ee), {
          class: a(e(r)())
        }, {
          default: n(({ items: m }) => [
            g(e(te), {
              class: a(e(d)())
            }, {
              default: n(() => [
                f(c.$slots, "prev", {}, () => [
                  (s(), p("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: a(e(b)())
                  }, [...u[0] || (u[0] = [
                    x("polyline", { points: "15 18 9 12 15 6" }, null, -1)
                  ])], 2))
                ])
              ]),
              _: 3
            }, 8, ["class"]),
            (s(!0), p($, null, P(m, (w, C) => (s(), p($, { key: C }, [
              w.type === "page" ? (s(), h(e(ae), {
                key: 0,
                value: w.value,
                class: a(e(d)()),
                "data-selected": w.value === c.$attrs.page || w.value === t.defaultPage ? !0 : void 0
              }, {
                default: n(() => [
                  _(k(w.value), 1)
                ]),
                _: 2
              }, 1032, ["value", "class", "data-selected"])) : w.type === "ellipsis" ? (s(), h(e(se), {
                key: 1,
                class: a(e(o)())
              }, {
                default: n(() => [...u[1] || (u[1] = [
                  _(" … ", -1)
                ])]),
                _: 1
              }, 8, ["class"])) : B("", !0)
            ], 64))), 128)),
            g(e(oe), {
              class: a(e(d)())
            }, {
              default: n(() => [
                f(c.$slots, "next", {}, () => [
                  (s(), p("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: a(e(b)())
                  }, [...u[2] || (u[2] = [
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
}), Oe = y({
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
}), Ie = /* @__PURE__ */ v({
  __name: "Table",
  props: {
    columns: {},
    data: {},
    caption: {}
  },
  setup(t) {
    const { container: l, table: r, header: i, body: d, row: o, head: b, cell: c, caption: u } = Oe();
    return (m, w) => (s(), p("div", {
      class: a(e(l)())
    }, [
      x("table", {
        class: a(e(r)())
      }, [
        t.caption || m.$slots.caption ? (s(), p("caption", {
          key: 0,
          class: a(e(u)())
        }, [
          f(m.$slots, "caption", {}, () => [
            _(k(t.caption), 1)
          ])
        ], 2)) : B("", !0),
        x("thead", {
          class: a(e(i)())
        }, [
          x("tr", {
            class: a(e(o)())
          }, [
            (s(!0), p($, null, P(t.columns, (C) => (s(), p("th", {
              key: C.key,
              class: a(e(b)())
            }, [
              f(m.$slots, `header-${C.key}`, { column: C }, () => [
                _(k(C.label), 1)
              ])
            ], 2))), 128))
          ], 2)
        ], 2),
        x("tbody", {
          class: a(e(d)())
        }, [
          (s(!0), p($, null, P(t.data, (C, L) => (s(), p("tr", {
            key: L,
            class: a(e(o)())
          }, [
            (s(!0), p($, null, P(t.columns, (z) => (s(), p("td", {
              key: z.key,
              class: a(e(c)())
            }, [
              f(m.$slots, `cell-${z.key}`, {
                row: C,
                column: z,
                rowIndex: L
              }, () => [
                _(k(C[z.key]), 1)
              ])
            ], 2))), 128))
          ], 2))), 128))
        ], 2)
      ], 2)
    ], 2));
  }
}), Ne = y({
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
}), qe = ["type", "value", "disabled"], Ge = /* @__PURE__ */ v({
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    class: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const r = t, i = l, d = S(() => V(Ne(), r.class));
    return (o, b) => (s(), p("input", T({
      type: t.type,
      value: t.modelValue,
      onInput: b[0] || (b[0] = (c) => i("update:modelValue", c.target.value)),
      class: d.value,
      disabled: t.disabled
    }, o.$attrs), null, 16, qe));
  }
}), M = y({
  slots: {
    list: [
      "inline-flex h-11 items-center justify-center rounded-[12px] p-1 text-[#8E8E93]",
      "bg-white/40 backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)] border border-white/20"
    ],
    trigger: [
      "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-1.5 text-sm font-medium transition-all duration-300",
      "disabled:pointer-events-none disabled:opacity-50 hover:bg-white/20",
      "data-[state=active]:bg-white/70 :bg-black/70 data-[state=active]:text-black :text-white",
      "data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-white/40 :border-white/20"
    ],
    content: [
      "mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
    ]
  }
}), He = /* @__PURE__ */ v({
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
    const l = t, r = M();
    return (i, d) => (s(), h(e(le), T(l, {
      class: e(V)("w-full", l.class)
    }), {
      default: n(() => [
        g(e(ne), {
          class: a(e(r).list())
        }, {
          default: n(() => [
            (s(!0), p($, null, P(t.items, (o) => (s(), h(e(re), {
              key: o.value,
              value: o.value,
              class: a(e(r).trigger())
            }, {
              default: n(() => [
                _(k(o.title), 1)
              ]),
              _: 2
            }, 1032, ["value", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["class"]),
        i.$slots.default ? f(i.$slots, "default", { key: 0 }) : (s(!0), p($, { key: 1 }, P(t.items, (o) => (s(), h(e(F), {
          key: o.value,
          value: o.value,
          class: a(e(r).content())
        }, {
          default: n(() => [
            f(i.$slots, o.value, {}, () => [
              _(k(o.content), 1)
            ])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ue = /* @__PURE__ */ v({
  __name: "TabsContent",
  props: {
    value: {},
    class: {}
  },
  setup(t) {
    const l = t, r = M();
    return (i, d) => (s(), h(e(F), {
      value: t.value,
      class: a(e(V)(e(r).content(), l.class))
    }, {
      default: n(() => [
        f(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "class"]));
  }
}), Xe = y({
  slots: {
    root: [
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200",
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
}), Je = /* @__PURE__ */ v({
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
    const l = t, r = Xe();
    return (i, d) => (s(), h(e(ie), T(l, {
      class: e(V)(e(r).root(), l.class)
    }), {
      default: n(() => [
        g(e(de), {
          class: a(e(r).thumb())
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ke = y({
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
}), Qe = /* @__PURE__ */ v({
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
  setup(t, { emit: l }) {
    const r = t, d = E(r, l), o = Ke();
    return (b, c) => (s(), h(e(ce), T(e(d), {
      class: e(V)(e(o).root(), r.class)
    }), {
      default: n(() => [
        g(e(ue), {
          class: a(e(o).track())
        }, {
          default: n(() => [
            g(e(pe), {
              class: a(e(o).range())
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["class"]),
        (s(!0), p($, null, P(r.modelValue ?? [r.defaultValue], (u, m) => (s(), h(e(be), {
          key: m,
          class: a(e(o).thumb())
        }, null, 8, ["class"]))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), We = y({
  slots: {
    content: [
      "z-50 w-72 rounded-[14px] border border-white/20 p-4 text-black outline-none",
      "bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    ],
    arrow: "fill-white/70 backdrop-blur-[50px] backdrop-saturate-[200%]"
  }
}), Ye = /* @__PURE__ */ v({
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
  setup(t, { emit: l }) {
    const d = E(t, l), o = We();
    return (b, c) => (s(), h(e(fe), A(D(e(d))), {
      default: n(() => [
        g(e(ge), { "as-child": "" }, {
          default: n(() => [
            f(b.$slots, "trigger")
          ]),
          _: 3
        }),
        g(e(he), null, {
          default: n(() => [
            g(e(me), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(V)(e(o).content(), t.contentClass)
            }, b.$attrs), {
              default: n(() => [
                f(b.$slots, "default"),
                t.showArrow ? (s(), h(e(we), {
                  key: 0,
                  class: a(e(o).arrow()),
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
}), Ze = y({
  slots: {
    content: [
      "z-50 min-w-32 overflow-hidden rounded-[12px] border border-white/20 p-1 text-black",
      "bg-white/70 backdrop-blur-[50px] backdrop-saturate-[200%] backdrop-brightness-125",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_40px_-10px_rgba(0,0,0,0.3)]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    ],
    item: [
      "relative flex cursor-default select-none items-center rounded-[6px] px-2 py-1.5 text-sm outline-none transition-colors duration-100",
      "data-[highlighted]:bg-[#007AFF]/90 data-[highlighted]:text-white data-[highlighted]:shadow-[0_2px_10px_rgba(0,122,255,0.3)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    ],
    separator: "-mx-1 my-1 h-px bg-black/5"
  }
}), et = /* @__PURE__ */ v({
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
  setup(t, { emit: l }) {
    const r = t, i = l, d = E(r, i), o = Ze();
    return (b, c) => (s(), h(e(xe), A(D(e(d))), {
      default: n(() => [
        g(e(_e), { "as-child": "" }, {
          default: n(() => [
            f(b.$slots, "trigger")
          ]),
          _: 3
        }),
        g(e(ve), null, {
          default: n(() => [
            g(e(ke), T({
              "side-offset": t.sideOffset ?? 8,
              class: e(V)(e(o).content(), t.contentClass)
            }, b.$attrs), {
              default: n(() => [
                (s(!0), p($, null, P(t.items, (u, m) => (s(), p($, { key: m }, [
                  u.separator ? (s(), h(e(ye), {
                    key: 0,
                    class: a(e(o).separator())
                  }, null, 8, ["class"])) : (s(), h(e($e), {
                    key: 1,
                    disabled: u.disabled,
                    class: a(e(o).item()),
                    onSelect: (w) => i("select", u.value)
                  }, {
                    default: n(() => [
                      _(k(u.label), 1)
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
}), tt = y({
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
}), at = /* @__PURE__ */ v({
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
    const l = t, r = tt({ size: l.size }), i = S(() => {
      const d = l.modelValue ?? 0, o = l.max ?? 100;
      return `translateX(-${100 - d / o * 100}%)`;
    });
    return (d, o) => (s(), h(e(Ce), T(l, {
      class: e(V)(e(r).root(), l.class)
    }), {
      default: n(() => [
        g(e(Be), {
          class: a(e(r).indicator()),
          style: j({ transform: i.value })
        }, null, 8, ["class", "style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: De,
  Button: ze,
  Card: Me,
  Input: Ge,
  Menu: et,
  Modal: Le,
  Pagination: Re,
  Popover: Ye,
  Progress: at,
  Slider: Qe,
  Switch: Je,
  Table: Ie,
  Tabs: He,
  TabsContent: Ue
}, Symbol.toStringTag, { value: "Module" }));
function dt(t = {}) {
  const l = t.prefix ?? "L";
  return {
    install(r) {
      for (const [i, d] of Object.entries(st))
        r.component(`${l}${i}`, d);
    }
  };
}
export {
  De as LAccordion,
  ze as LButton,
  Me as LCard,
  Ge as LInput,
  et as LMenu,
  Le as LModal,
  Re as LPagination,
  Ye as LPopover,
  at as LProgress,
  Qe as LSlider,
  Je as LSwitch,
  Ie as LTable,
  He as LTabs,
  Ue as LTabsContent,
  Ae as accordionVariants,
  Te as buttonVariants,
  Fe as cardVariants,
  V as cn,
  dt as createLiquidGlass,
  Ne as inputVariants,
  Ze as menuVariants,
  Se as modalVariants,
  je as paginationVariants,
  We as popoverVariants,
  tt as progressVariants,
  Ke as sliderVariants,
  Xe as switchVariants,
  Oe as tableVariants,
  M as tabsVariants
};
