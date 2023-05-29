import { j as e, r as l, c as N, H as g } from "./index-f23b3acd.js";
import { b as y } from "./index-cc134824.js";
import { H as b, C as w } from "./index.esm-f01926fe.js";
import { d as v, c as C, b as E } from "./axios-a5ffc93b.js";
import { c as S } from "./index.esm-122e8ea8.js";
import { _ as I } from "./PulseLoader-ce3db307.js";
import { u as R } from "./user-405f8c63.js";
import { a as q } from "./index-b73709f0.js";
window.Buffer = y.Buffer;
function A({ cart: s }) {
  return (
    console.log(s, "cart pp"),
    e.jsx("div", {
      className: "w-full pt-8 pb-4",
      children: e.jsxs("div", {
        className: "flex flex-col w-full ",
        children: [
          e.jsxs("main", {
            className: "flex items-center w-full justify-between",
            children: [
              e.jsx("h5", {
                className: "text-sm font-semibold",
                children: "Items",
              }),
              e.jsx(v, {
                className: "text-xl font-semibold",
                style: { color: "#7F25D8" },
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex flex-col space-y-8 py-8",
            children:
              s == null
                ? void 0
                : s.map((t) =>
                    e.jsxs("div", {
                      className: "flex  space-x-4",
                      children: [
                        e.jsx("img", {
                          src: t.productImg,
                          className: "w-10 h-10 rounded-lg ",
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col space-y-2 w-full",
                          children: [
                            e.jsxs("main", {
                              className:
                                "flex items-center justify-between w-full",
                              children: [
                                e.jsx("h5", {
                                  className: "text-xs font-semibold ",
                                  children: t.productName,
                                }),
                                e.jsx("h5", {
                                  className: "text-sm font-semibol",
                                  children: t.price,
                                }),
                              ],
                            }),
                            e.jsxs("main", {
                              className:
                                "flex items-center justify-between w-full",
                              children: [
                                e.jsx("h5", {
                                  className: "text-xs font-light",
                                  children: t.store,
                                }),
                                e.jsx(S, {
                                  className: "text-xl font-semibold",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  ),
          }),
        ],
      }),
    })
  );
}
function D({
  setProceed: s,
  vendorWallet: t,
  cart: a,
  totalCart: o,
  setRequestId: d,
}) {
  const [c, i] = l.useState(!1);
  return e.jsx(e.Fragment, {
    children: e.jsx("div", {
      className: "pt-4",
      children: e.jsxs("div", {
        className:
          "h-28 w-full rounded-t-3xl flex flex-col space-y-4 px-4 py-4",
        style: {
          background:
            "linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)",
        },
        children: [
          e.jsxs("div", {
            className: "flex text-white w-full justify-between",
            children: [
              e.jsx("h5", {
                className: "text-sm font-semibold",
                children: "Order total",
              }),
              e.jsxs("h5", {
                className: "text-lg font-semibol",
                children: ["$", o],
              }),
            ],
          }),
          e.jsxs("button", {
            className:
              "text-white w-full bg-white py-2 rounded-full flex items-center justify-center",
            style: { color: "#7F25D8" },
            onClick: () => s(!0),
            children: [
              c && e.jsx(I, { color: "#7F25D8", loading: c }),
              !c && e.jsx("span", { children: "Proceed" }),
            ],
          }),
        ],
      }),
    }),
  });
}
function F({ vendorWallet: s, cart: t, totalCart: a }) {
  l.useEffect(() => {}, []);
  const o = async ({ requestId: d, totalCart: c }) => {
    setProceed(!0);
    const i = await chrome.storage.local.get("uid");
    console.log(i, "idddd");
    const m = "http://localhost:5002/api/v1/transactions/pay-request",
      r = { uid: i.uid, amount: c },
      f = { headers: { "Content-Type": "application/json" } };
    try {
      const n = await E.post(m, r, f);
      console.log(n.data, "stream"),
        n.data.message === "Streamed to files" && setDone(!0);
    } catch (n) {
      console.log(n.message, "err"), console.log(n);
    }
  };
  return e.jsxs("div", {
    className: "flex flex-col space-y-8 items-center px-4 py-6",
    children: [
      e.jsxs("main", {
        className: "flex flex-col space-y-4",
        children: [
          e.jsx("h5", { children: "From" }),
          e.jsxs("div", {
            className: "flex  items-center space-x-4",
            children: [
              e.jsx("img", { src: R, className: "w-6 h-6 " }),
              e.jsxs("div", {
                className: "flex flex-col ",
                children: [
                  e.jsx("h5", {
                    className: "text-xs font-semibold",
                    children: "Account 1",
                  }),
                  e.jsx("h5", {
                    className: "text-xs font-light",
                    children: "$15000",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex w-full space-x-4 items-center py-6",
            children: [
              e.jsx("h5", { className: "font-semibold", children: "Amount" }),
              e.jsxs("div", {
                className: "flex  items-center justify-between",
                children: [
                  e.jsx("input", {
                    placeholder: `${a}`,
                    className: "border-b border-slate-500 outline-none",
                  }),
                  e.jsx("select", {
                    className: "flex items-center",
                    children: e.jsxs("option", {
                      children: [
                        e.jsx(q, { className: "text-slate-400" }),
                        e.jsx("span", { children: "ETH Payment" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("main", {
        className: "flex flex-col space-y-4 ",
        children: [
          e.jsx("h5", { children: "To" }),
          e.jsxs("div", {
            className:
              "flex w-full border justify-between rounded-lg py-1 px-4 ",
            children: [
              e.jsx("input", { className: "", placeholder: s.address }),
              e.jsx(C, { className: "text-lg " }),
            ],
          }),
        ],
      }),
      e.jsx("main", {
        className: "w-full",
        children: e.jsx("button", {
          className: "w-full text-white text-sm rounded-md ",
          style: { background: "#7F25D8" },
          onClick: o,
          children: "Send",
        }),
      }),
    ],
  });
}
const P = ({ cart: s, totalCart: t }) =>
  e.jsxs("div", {
    className: "",
    children: [
      e.jsx("h5", {
        className: "text-sm font-semibold",
        children: "Payment information",
      }),
      e.jsxs("div", {
        className: "flex flex-col space-y-2",
        children: [
          e.jsxs("h5", {
            className: "flex w-full justify-between border-b py-1",
            children: [
              e.jsx("span", {
                className: "text-slate-600 ",
                children: "Total cart",
              }),
              e.jsxs("span", {
                className: "text-slate-600 ",
                children: [" $", t],
              }),
            ],
          }),
          e.jsxs("h5", {
            className: "flex w-full justify-between border-b py-1",
            children: [
              e.jsx("span", {
                className: "text-slate-600 ",
                children: "Shipping",
              }),
              e.jsx("span", { className: "text-slate-600 ", children: "$27" }),
            ],
          }),
        ],
      }),
    ],
  });
function k() {
  const [s, t] = l.useState(!1),
    [a, o] = l.useState(),
    [d, c] = l.useState(),
    [i, m] = l.useState(),
    [r, f] = l.useState();
  return (
    l.useEffect(
      () => (
        (async () => {
          const x = await chrome.storage.local.get("cart"),
            h = await chrome.storage.local.get("uid");
          console.log(h, "idddd"), console.log(x, "cart");
          const u = x.cart.message.reduce((j, p) => j + parseInt(p.price), 0);
          console.log(u), f(u), o(x.cart.message), c(x.cart.vendorWallet);
        })(),
        () => {
          chrome.storage.local.set({ cart: null }, function () {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              return;
            }
            console.log("Value is set");
          });
        }
      ),
      []
    ),
    console.log(r, "cart price"),
    e.jsx(b, {
      children: e.jsxs("div", {
        children: [
          e.jsxs("div", {
            className: "flex items-center space-x-6 ",
            children: [
              e.jsx(w, {}),
              s
                ? e.jsx("h5", {
                    className: "text-sm font-semibold ",
                    children: "Request ",
                  })
                : e.jsx("h5", {
                    className: "text-sm font-semibold ",
                    children: "Checkouts",
                  }),
            ],
          }),
          e.jsx("div", {
            children: s
              ? e.jsx(F, {
                  vendorWallet: d,
                  requestId: i,
                  cart: a,
                  totalCart: r,
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(A, { cart: a }),
                    e.jsx(P, { cart: a, totalCart: r }),
                    e.jsx(D, {
                      setProceed: t,
                      vendorWallet: d,
                      setRequestId: m,
                      cart: a,
                      totalCart: r,
                    }),
                  ],
                }),
          }),
        ],
      }),
    })
  );
}
N.createRoot(document.getElementById("root")).render(
  e.jsx(g, { children: e.jsx(k, {}) })
);
