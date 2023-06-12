import{b as u,p,j as e,r as l,c as j,H as g}from"./index-628f68f4.js";import{A as y,a as N,b as v}from"./index.esm-50d56948.js";import{G as i}from"./iconBase-243533bc.js";import{a as b}from"./axios-4a70c6fc.js";window.Buffer=u.Buffer;window.process=p;function w(s){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"18",cy:"6",r:"3"}},{tag:"path",attr:{d:"M18 19H5V6h8c0-.712.153-1.387.422-2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h13c1.103 0 2-.897 2-2v-8.422A4.962 4.962 0 0 1 18 11v8z"}}]})(s)}function C(){return e.jsxs("div",{className:"flex items-center justify-between py-4 px-4 ",children:[e.jsx("main",{children:e.jsx("h5",{className:"text-sm font-semibold",children:"Welcome"})}),e.jsxs("main",{className:"flex items-center space-x-4",children:[e.jsx("a",{href:"cart.html",children:e.jsx(y,{className:"text-xl font-semibold"})}),e.jsx(w,{className:"text-xl font-semibold"})]})]})}function A({children:s}){return e.jsx("div",{className:"sm:w-full w-72 flex justify-center",style:{height:"600px"},children:e.jsxs("div",{className:"sm:w-72 w-full h-full ",children:[e.jsx(C,{}),e.jsx("div",{className:"lg:px-4 px-2 py-4 w-full",children:s})]})})}function B(s){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(s)}function E(){const[s,o]=l.useState(),[a,x]=l.useState("$Verse"),[c,n]=l.useState(!1);return console.log(a,"aa"),l.useEffect(()=>{(async()=>{const d=await chrome.storage.local.get("user"),m="http://localhost:5002/api/v1/transactions/get-balance",h={sender:d.user},f={headers:{"Content-Type":"application/json"}};try{const t=await b.post(m,h,f);console.log(t.data,"stream"),o({verse:t.data.message.balanceVerse,lcart:t.data.message.balanceLCart})}catch(t){console.log(t.message,"err"),console.log(t)}})()},[]),e.jsx("div",{className:"text-white",children:e.jsxs("div",{className:"w-full h-44 rounded-lg flex flex-col px-4 py-4 space-y-4",style:{background:"linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"},children:[e.jsxs("main",{className:"flex flex-col space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h5",{className:"flex items-center space-x-4",children:[e.jsx("span",{children:"Total Balance"}),c?e.jsx(v,{className:"text-xl font-semibold",onClick:()=>n(!1)}):e.jsx(N,{className:"text-xl font-semibold",onClick:()=>n(!0)})]}),e.jsx("a",{href:"payment.html",children:e.jsx(B,{className:"text-xl font-semibold"})})]}),c?e.jsx(e.Fragment,{children:a==="$Verse"?e.jsx("h5",{className:"text-2xl ",children:s==null?void 0:s.verse}):e.jsx("h5",{className:"text-2xl ",children:s==null?void 0:s.lCart})}):e.jsx("h5",{className:"text-2xl ",children:"XXXXXXXX"})]}),e.jsxs("main",{className:"flex items-center justify-between text-white space-x-2",children:[e.jsxs("select",{className:"text-xs font-semibold py-1.5 ",style:{background:"linear-gradient(41.05deg, #430A7C 13.91%, #6D25C6 42.71%, #8567E7 104.57%)"},onChange:r=>x(r.target.value),children:[e.jsx("option",{value:a,children:"$Verse"}),e.jsx("option",{value:a,children:"LCART"}),e.jsx("option",{value:a,children:"Flow"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("a",{href:"send.html",children:e.jsx("button",{className:"flex items-center text-xs space-x-4 rounded-lg px-4 py-1.5",style:{background:"#7F25D8"},children:"Send"})}),e.jsx("a",{href:"deposit.html",children:e.jsx("button",{className:"flex items-center text-xs space-x-4 rounded-lg px-4 py-1.5",style:{background:"#7F25D8"},children:e.jsx("span",{children:" deposit"})})})]})]})]})})}function X(){return e.jsxs("div",{className:"flex rounded-md justify-between px-6 py-3 items-center",style:{background:"rgba(0, 128, 0, 0.08)"},children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Jumia store"}),e.jsx("h5",{className:"text-xs font-light ",children:"10:30pm"})]}),e.jsx("h5",{className:"text-sm font-semibold",children:"10 $Verse"})]})}function k(){return e.jsx(A,{children:e.jsxs("div",{className:"w-full py-1 ",children:[e.jsx(E,{}),e.jsx("div",{children:e.jsx("h5",{className:"text-sm font-semibold py-4",children:"Recent Transactions"})}),e.jsx("div",{className:"flex flex-col py-4 overflow-y-scroll space-y-2",children:[1,2,3,4].map(()=>e.jsx(X,{}))})]})})}j.createRoot(document.getElementById("root")).render(e.jsx(g,{children:e.jsx(k,{})}));
