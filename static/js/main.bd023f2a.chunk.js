(this["webpackJsonpredux-cart"]=this["webpackJsonpredux-cart"]||[]).push([[0],{20:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(13),n=c.n(s),i=(c(20),c(7)),a=c(2),l=c(4),o=c(1),d=function(){var e=Object(l.c)((function(e){return e.cart})).totalCount;return Object(o.jsxs)("header",{className:"sticky top-0 z-30 bg-gray-800 text-2xl flex justify-between items-center px-8 text-white py-4",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)(i.b,{className:"flex items-center",to:"/",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),Object(o.jsx)("span",{children:"My Shop"})]})}),Object(o.jsx)(i.b,{to:"/cart",children:Object(o.jsxs)("div",{className:"cart flex items-center",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(o.jsx)("span",{className:"text-yellow-400 pl-2",children:e})]})})]})},j=c(17),b=c.n(j),x=c(30),u=c(8),m=c(31),h=c.n(m),f=function(e){return{type:"ADD_TO_CART",payload:e}},O=function(e){return{type:"SET_PRODUCTS",payload:e}},p=function(e){var t=e.product,c=Object(l.b)(),s=Object(r.useState)(0),n=Object(u.a)(s,2),a=n[0],d=n[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),x=b[0],m=b[1],h=t.id,O=t.title,p=t.price,g=t.category,y=t.image,w=function(){c(f(t)),m(!0),d((function(e){return e+1}))};return Object(o.jsxs)("div",{className:"border shadow flex flex-col items-center justify-between p-2",children:[Object(o.jsxs)("div",{className:"group relative mb-1",children:[Object(o.jsx)("div",{className:"product-img",children:Object(o.jsx)("img",{src:y,alt:O})}),Object(o.jsx)("div",{className:"mt-4 flex justify-between",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"text-sm text-gray-700",children:Object(o.jsxs)("a",{href:t.href,children:[Object(o.jsx)("span",{"aria-hidden":"true"}),O]})}),Object(o.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:g}),Object(o.jsxs)("p",{className:"text-sm font-medium text-gray-900",children:["$ ",p]})]})})]},h),Object(o.jsx)("div",{className:"w-full mb-2",children:x?Object(o.jsxs)("button",{onClick:function(){return w()},type:"button",className:"inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-gray-800 ",children:["Added"," ",Object(o.jsx)("span",{className:"py-1 px-2 text-gray-800 ml-1 bg-yellow-400 rounded-full",children:a})]}):Object(o.jsx)("button",{onClick:function(){return w()},type:"button",className:"inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 ",children:"Add to Cart"})}),Object(o.jsx)(i.b,{className:"w-full",to:"/product/".concat(h),children:Object(o.jsx)("button",{type:"button",className:"inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 ",children:"View More"})})]})},g=function(e){var t=e.products;return Object(o.jsx)("section",{className:"w-11/12 mx-auto my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:t.map((function(e){return Object(o.jsx)(p,{product:e},e.id)}))})},y=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(l.b)(),i=Object(l.c)((function(e){return e.products})).products,a=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products").catch((function(e){console.log(e)}));case 2:t=e.sent,n(O(t.data)),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"min-h-screen",children:c?Object(o.jsx)("div",{className:"loader animate-spin"}):Object(o.jsx)(g,{products:i})})})},w=c(18),v=function(){var e=Object(a.g)(),t=Object(l.c)((function(t){return t.products.products[e.id-1]})),c=t.title,r=t.price,s=t.category,n=t.description,d=t.image,j=t.rating;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"w-full min-h-screen py-10 bg-gray-200",children:Object(o.jsxs)("section",{className:"sm:flex mx-auto bg-white p-4 w-10/12 shadow-lg",children:[Object(o.jsx)("div",{className:"lg:w-2/6 w-full",children:Object(o.jsx)("img",{src:d,alt:c})}),Object(o.jsxs)("div",{className:"mt-6 sm:mt-0 ml-8 flex flex-col items-start",children:[Object(o.jsx)("h1",{className:"text-xl font-bold sm:mt-20",children:c}),Object(o.jsxs)("h1",{className:"text-2xl font-bold text-gray-800",children:["$ ",r]}),Object(o.jsx)("p",{className:"bg-black w-full h-1 my-2"}),Object(o.jsxs)("div",{className:"flex items-center",children:[Array(Math.ceil(j.rate)).fill(0).map((function(e){return Object(o.jsx)("div",{className:"mr-1",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})})})})),"(",j.count,")"]}),Object(o.jsx)("p",{children:s.charAt(0).toUpperCase()+s.slice(1)}),Object(o.jsx)("p",{className:"text-justify",children:n}),Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsxs)("button",{type:"button",className:" m-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",children:[Object(o.jsx)(w.a,{className:"-ml-0.5 mr-2 h-4 w-4","aria-hidden":"true"}),"to Home"]})}),Object(o.jsx)(i.b,{to:"/cart",children:Object(o.jsxs)("button",{type:"button",className:"my-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",children:[Object(o.jsx)(w.a,{className:"-ml-0.5 mr-2 h-4 w-4","aria-hidden":"true"}),"to Cart"]})})]})]})]})})})},N=function(){var e=Object(l.c)((function(e){return e.cart})),t=e.cart,c=e.totalCount,r=e.totalPrice,s=Object(l.b)();return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"min-h-screen w-10/12 mx-auto ",children:[Object(o.jsx)("div",{className:"h-full flex flex-col bg-white shadow-xl ",children:Object(o.jsxs)("div",{className:"flex-1 py-6 overflow-y-auto px-4 sm:px-6",children:[Object(o.jsx)("div",{className:"flex items-start justify-between",children:Object(o.jsx)("h1",{className:"text-lg font-medium text-gray-900",children:"Shopping cart"})}),c<=0&&Object(o.jsx)("h1",{children:"No items in the Cart"}),Object(o.jsxs)("div",{className:"mt-8",children:[Object(o.jsx)("div",{className:"flow-root",children:Object(o.jsx)("ul",{className:"-my-6 divide-y divide-gray-200",children:t.map((function(e){var t=e.id,c=e.title,r=e.image,n=e.price,a=e.count;return Object(o.jsxs)("li",{className:"py-6 flex ",children:[Object(o.jsx)("div",{className:"flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden",children:Object(o.jsx)("img",{src:r,alt:c,className:"w-full h-full object-center object-cover"})}),Object(o.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[Object(o.jsx)(i.b,{to:"/product/".concat(t),children:Object(o.jsx)("h3",{className:"text-blue-700",children:c})},t),Object(o.jsxs)("p",{className:"ml-4",children:["$",n]})]})}),Object(o.jsxs)("div",{className:"flex-1 flex items-end justify-between text-sm",children:[Object(o.jsx)("div",{}),Object(o.jsxs)("span",{className:"relative z-0 inline-flex shadow-sm rounded-md",children:[Object(o.jsx)("button",{onClick:function(){return s(function(e){return{type:"REMOVE_FROM_CART",payload:e}}(e))},type:"button",className:"relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"-"}),Object(o.jsx)("button",{type:"button",className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:a}),Object(o.jsx)("button",{onClick:function(){return s(f(e))},type:"button",className:"-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"+"})]})]})]})]},t)}))})}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"mt-4 flex w-full justify-between items-center",children:[Object(o.jsx)("p",{children:"Total: "}),Object(o.jsxs)("p",{children:["$ ",parseFloat(r.toFixed(2))]})]})]})]})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("button",{type:"button",onClick:function(){return s({type:"CLEAR_CART"})},className:"w-full mt-4 justify-center inline-flex items-center px-2.5 py-1.5 border border-transparent text-xl font-medium rounded shadow-sm text-white bg-gray-800 hover:bg-gray-900 ",children:"Checkout"})})]})})},C=function(){return Object(o.jsxs)("footer",{className:"text-sm bg-gray-800 text-gray-400 p-4 flex items-center justify-between",children:[Object(o.jsx)("div",{className:"",children:"Copyright \u24b8 Vilay Bende"}),Object(o.jsx)("div",{className:"flex-1 bg-gray-400 h-px mx-4"}),Object(o.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/vilaybende/",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 34 34",className:"global-nav__logo",children:[Object(o.jsx)("title",{children:"LinkedIn"}),Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z",fill:"currentColor"})})]})})]})},_=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/",element:Object(o.jsx)(y,{})}),Object(o.jsx)(a.a,{path:"product/:id",element:Object(o.jsx)(v,{})}),Object(o.jsx)(a.a,{path:"cart",element:Object(o.jsx)(N,{})}),Object(o.jsx)(a.a,{path:"*",element:Object(o.jsx)(y,{})})]}),Object(o.jsx)(C,{})]})})},k=c(14),A=c(32),E={totalCount:0,totalPrice:0,cart:[]},M=c(19),T=[],R=Object(k.a)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"ADD_TO_CART":try{return r.count>=1?(r.count+=1,{totalCount:e.totalCount+1,totalPrice:e.totalPrice+parseFloat(r.price.toFixed(2)),cart:e.cart}):(r.count=1,{totalCount:e.totalCount+1,totalPrice:e.totalPrice+parseFloat(r.price.toFixed(2)),cart:[].concat(Object(A.a)(e.cart),[r])})}catch(n){}return e;case"REMOVE_FROM_CART":var s=e.cart.filter((function(e){if(e.id===r.id){if(e.count-=1,e.count<=0)return;return e}return e}));return{totalCount:e.totalCount-1,totalPrice:e.totalPrice-parseFloat(r.price.toFixed(2)),cart:s};case"CLEAR_CART":return{totalCount:0,totalPrice:0,cart:[]};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;return"SET_PRODUCTS"===c?Object(M.a)(Object(M.a)({},e),{},{products:r}):e}}),F=R,S=Object(k.b)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(o.jsx)(l.a,{store:S,children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.bd023f2a.chunk.js.map