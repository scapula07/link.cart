import{b as g,p as w,j as e,r as l,c as v,H as C}from"./index-628f68f4.js";import{M as y,O as S}from"./OtherLayout-aeb3f800.js";import{c as k,a as E,b as I,d as O}from"./index.esm-50d56948.js";import{B}from"./index.esm-98c1f8c2.js";import{M as T,s as V}from"./success-b01e2827.js";import{a as $}from"./axios-4a70c6fc.js";import{S as F}from"./ScaleLoader-493873db.js";import"./iconBase-243533bc.js";window.Buffer=g.Buffer;window.process=w;const L=({c:s})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("main",{className:"flex items-center space-x-2",children:[e.jsx("img",{src:s==null?void 0:s.productImg,className:"rounded-lg h-6 w-6"}),e.jsxs("h5",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xs font-semibold",children:s==null?void 0:s.productName}),e.jsx("span",{className:"text-xs font-light",children:s==null?void 0:s.store})]})]}),e.jsx("main",{children:e.jsxs("h5",{children:[s.price," $Verse"]})})]});function P({cart:s}){return e.jsxs("div",{className:"py-4",children:[e.jsxs("main",{className:"flex items-center justify-between",children:[e.jsx("h5",{className:"text-sm font-semibold",children:"Items"}),e.jsx(k,{className:"text-lg font-semibold",style:{color:"#8567E7"}})]}),e.jsx("div",{className:"flex flex-col overflow-y-scroll h-36 space-y-4 py-4",children:s.map(t=>e.jsx(L,{c:t}))})]})}function A({total:s}){return e.jsxs("div",{className:"py-4",children:[e.jsx("h5",{className:"text-sm font-semibold",children:"Payment information"}),e.jsxs("main",{className:"flex flex-col space-y-4",children:[e.jsxs("h5",{className:"flex items-center justify-between text-slate-500 font-light text-xs border-b border-slate-300 py-1",children:[e.jsx("span",{children:"Total cart"}),e.jsxs("span",{children:[s,"$Verse"]})]}),e.jsxs("h5",{className:"flex items-center justify-between text-slate-500 font-light text-xs border-b border-slate-300 py-1",children:[e.jsx("span",{children:"Shipping"}),e.jsx("span",{children:"$Verse"})]})]})]})}function M({total:s,vendorAddress:t,user:o}){console.log(o);const[h,a]=l.useState(!1),[f,x]=l.useState(!1),[c,j]=l.useState(""),[u,m]=l.useState(!1),[n,p]=l.useState(""),d=async()=>{a(!0);const r="http://localhost:5002/api/v1/transactions/send-token",N={sender:o,receiver:t,amount:s,assest:c},b={headers:{"Content-Type":"application/json"}};try{const i=await $.post(r,N,b);console.log(i.data,"stream"),m(!0)}catch(i){console.log(i.message,"err"),console.log(i),a(!1),p(i.message),m(!0)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("main",{className:"flex items-center space-x-4",children:[e.jsx(y,{className:"text-xl font-semibold"}),e.jsx("h5",{className:"text-sm font-semibold",children:"Checkout"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 py-8 px-4",children:[e.jsxs("main",{className:"flex flex-col space-y-4",children:[e.jsx("h5",{className:"font-semibold ",children:"From"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(B,{className:"text-slate-600 font-semibold text-xl"}),e.jsxs("main",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-sm font-semibold",children:"Account 1"}),e.jsxs("select",{className:"text-xs font-light ",onChange:r=>j(r.target.value),children:[e.jsx("option",{value:c,children:"15000 $Verse"}),e.jsx("option",{value:c,children:"15000 LCART"})]})]})]})]}),e.jsxs("main",{className:"flex flex-col space-y-6 ",children:[e.jsxs("h5",{className:"text-lg font-semibold flex items-center space-x-8",children:[e.jsx("span",{className:"",children:"  Amount:"}),e.jsxs("span",{className:"",children:[s," $verse"]})]}),e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("h5",{className:"font-semibold ",children:"To"}),f?e.jsxs("h5",{className:"flex  items-center space-x-6",children:[e.jsx("span",{className:"text-xs font-semibold",children:(t==null?void 0:t.slice(0,11))+"..."+(t==null?void 0:t.slice(-3))}),e.jsx(I,{className:"text-slate-500 text-xl font-semibold",onClick:()=>x(!1)})]}):e.jsxs("h5",{className:"flex  items-center space-x-6",children:[e.jsx("span",{className:"text-sm font-semibold",children:"Vendor's Wallet Address"}),e.jsx(E,{className:"text-slate-500 text-xl font-semibold",onClick:()=>x(!0)})]})]})]}),e.jsxs("main",{className:"py-8 w-full",children:[e.jsx("button",{className:"w-full rounded-lg py-2  font-semibold text-white",style:{background:"#7F25D8"},onClick:d,children:h?e.jsx(F,{color:"white"}):"Confirm"}),n]})]})]}),e.jsx(T,{trigger:u,cname:"w-3/4 h-56 rounded-sm py-4  px-4",children:e.jsxs("div",{className:"py-4",children:[e.jsx("button",{onClick:()=>m(!1),children:e.jsx(O,{className:"text-md font-thin text-slate-500"})}),e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-4",children:[e.jsx("img",{src:V}),e.jsx("h5",{className:"text-sm font-semibold",children:"Transaction successful"})]})]})})]})}function R(){const[s,t]=l.useState(!1),[o,h]=l.useState([]),[a,f]=l.useState(),[x,c]=l.useState([]),[j,u]=l.useState([]);return l.useEffect(()=>{(async()=>{const n=await chrome.storage.local.get("cart"),p=await chrome.storage.local.get("user");u(p.user),h(n.cart.message),c(n.cart.vendorAddress);const d=n.cart.message.reduce((r,N)=>r+Number(N.price),0);console.log(d,"user"),f(d)})()},[]),e.jsx(S,{children:s?e.jsx(M,{vendorAddress:x,total:a,user:j}):e.jsxs("div",{className:"py-4",children:[e.jsxs("main",{className:"flex items-center space-x-4",children:[e.jsx(y,{className:"text-xl font-semibold"}),e.jsx("h5",{className:"text-sm font-semibold",children:"Carts"})]}),e.jsx("div",{className:"flex flex-col",children:e.jsx(P,{cart:o})}),e.jsxs("div",{className:"flex flex-col space-y-10",children:[e.jsx(A,{total:a}),e.jsxs("div",{className:"rounded-t-3xl  flex flex-col space-y-4 px-4 text-white py-4 h-28",style:{background:"linear-gradient(252.96deg, #650EBB 14.09%, #8567E7 113.24%)"},children:[e.jsxs("main",{className:"flex items-center justify-between ",children:[e.jsx("h5",{children:"Order total"}),e.jsxs("h5",{children:[a,"$Verse"]})]}),e.jsx("main",{className:"w-full",children:e.jsx("button",{className:"text-purple-800 bg-white px-4 py-2 rounded-full w-full",onClick:()=>t(!0),children:"Proceed "})})]})]})]})})}v.createRoot(document.getElementById("root")).render(e.jsx(C,{children:e.jsx(R,{})}));