import{r as t,j as e,c as m,H as h}from"./index-f23b3acd.js";import{b as f}from"./index-cc134824.js";import{B as u,a as p}from"./index.esm-122e8ea8.js";import{A as j,a as N,b as g}from"./axios-a5ffc93b.js";import{F as w}from"./index-b73709f0.js";import{B as y}from"./index.esm-c771ae79.js";window.Buffer=f.Buffer;function b(){t.useState(!1),t.useState(!1);let[s,a]=t.useState("Explore");return console.log(s,"nav"),e.jsx("div",{className:"w-full lg:px-4 px-2 py-8  ",children:e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx("main",{children:e.jsxs("h5",{children:["Hi,",e.jsx("span",{className:"font-semibold ",children:"James"})]})}),e.jsxs("main",{className:"flex items-center space-x-2",children:[e.jsx(j,{className:"text-xl text-slate-600"}),e.jsx(u,{className:"text-xl text-slate-600"})]})]})})}function v({children:s}){return e.jsx("div",{className:"sm:w-full  w-72 flex justify-center  realtive",style:{height:"600px"},children:e.jsxs("div",{className:"sm:w-72 w-full ",children:[e.jsx(b,{}),e.jsx("div",{className:" px-2 py-8",children:s}),e.jsx("div",{className:"  absolute px-4 sm:w-72   w-full bottom-0 py-4 overflow-x-hidden",children:e.jsx(w,{})})]})})}function B(){const[s,a]=t.useState(),[C,n]=t.useState(!1),[i,c]=t.useState(!0);return t.useEffect(()=>{(async()=>{n(!0);const o=await chrome.storage.local.get("uid");console.log(o,"idddd");const r="http://localhost:5002/api/v1/transactions/get-balance",x={uid:o.uid},d={headers:{"Content-Type":"application/json"}};try{const l=await g.post(r,x,d);console.log(l.data.message,"response"),a(l.data.message.balance)}catch(l){console.log(l.message,"err"),console.log(l),n(!1)}})()},[]),e.jsx("div",{className:"",children:e.jsx("main",{className:"h-36 w-full py-4 rounded-lg  px-4",style:{background:"linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"},children:e.jsxs("div",{className:"flex flex-col space-y-6",children:[e.jsxs("main",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center w-full justify-between space-y-4",children:[e.jsxs("h5",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-white font-light text-sm ",children:"Total Balance "}),i?e.jsx(N,{className:"text-white text-sm   font-light",onClick:()=>c(!1)}):e.jsx(p,{className:"text-white text-sm   font-light",onClick:()=>c(!0)})]}),e.jsx(y,{className:"text-white "})]}),i?e.jsx("h5",{className:"text-xl font-semibold text-white ",children:"XXXXXX.XX"}):e.jsx("h5",{className:"text-xl font-semibold text-white ",children:s})]}),e.jsxs("main",{className:"flex items-center space-x-6",children:[e.jsxs("select",{className:"text-sm text-white ",style:{background:"linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"},children:[e.jsx("option",{children:"USD"}),e.jsx("option",{children:"EUR"}),e.jsx("option",{children:"NGN"})]}),e.jsxs("main",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"text-xs text-white rounded-lg px-4 text py-1 bg-purple-400 rounded-lg ",style:{background:"#7F25D8"},children:"Withdraw"}),e.jsx("button",{className:"text-xs  text-white rounded-lg px-4 py-1 bg-purple-400 rounded-lg ",style:{background:"#7F25D8"},children:"Deposit"})]})]})]})})})}function E({tx:s}){return e.jsxs("div",{className:"w-full py-2 rounded-md  flex items-center justify-between px-2",style:{background:"rgba(0, 128, 0, 0.08)"},children:[e.jsxs("main",{className:"flex flex-col ",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Scroll cart,Laptop"}),e.jsx("h5",{className:"text-xs font-light",children:"10:00pm"})]}),e.jsx("main",{children:e.jsx("h5",{className:"text-xs font-semibold",children:"$10,0000"})})]})}function S(){return e.jsx(v,{children:e.jsxs("div",{className:"",children:[e.jsx(B,{}),e.jsxs("div",{className:"py-6",children:[e.jsxs("div",{className:"flex items-center w-full justify-between",children:[e.jsx("h5",{className:"font-semibold ",children:"Transactions"}),e.jsx("h5",{className:"text-xs text-slate-300",children:"View all"})]}),e.jsx("div",{className:"flex flex-col overflow-y-scroll space-y-4 py-2 h-60",children:[1,2,3,4,5,6].map(s=>e.jsx(E,{tx:s}))})]})]})})}m.createRoot(document.getElementById("root")).render(e.jsx(h,{children:e.jsx(S,{})}));
