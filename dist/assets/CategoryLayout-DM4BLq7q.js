import{c as d,j as e,k as x,l as p}from"./index-B6N8TYG1.js";import{r as h,d as u,L as c,R as j,u as b}from"./vendor-C52gwPh8.js";import{a as g}from"./Text-EsuYb3Lx.js";import{A as y}from"./arrow-left-CR4fgbon.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);function C({title:r,children:l,defaultExpanded:a=!1}){const[i,s]=h.useState(a);return e.jsxs("div",{className:"border-b border-gray-200 last:border-b-0",children:[e.jsxs("button",{onClick:()=>s(!i),className:"w-full py-4 flex items-center justify-between text-left",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:r}),i?e.jsx(x,{className:"w-5 h-5 text-gray-600"}):e.jsx(p,{className:"w-5 h-5 text-gray-600"})]}),e.jsx("div",{className:`transition-all duration-200 ease-in-out overflow-hidden ${i?"max-h-[1000px] opacity-100 mb-4":"max-h-0 opacity-0"}`,children:l})]})}const o={"top-tools":"Top Tools",agents:"Agents",apps:"Apps","ai-in-marketing":"AI in Marketing",video:"Video",audio:"Audio","github-repos":"GitHub Repos"},N=({className:r=""})=>{const a=u().pathname.split("/").filter(s=>s);if(a.length===0)return null;const i=()=>{const s=[{"@type":"ListItem",position:1,name:"Home",item:window.location.origin}];return a.forEach((t,n)=>{s.push({"@type":"ListItem",position:n+2,name:o[t]||t,item:`${window.location.origin}/${t}`})}),{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:s}};return e.jsxs("nav",{"aria-label":"Breadcrumb",className:`text-sm ${r}`,children:[e.jsxs("ol",{className:"flex items-center space-x-1",children:[e.jsx("li",{children:e.jsxs(c,{to:"/",className:"text-gray-500 hover:text-gray-700 flex items-center",children:[e.jsx(f,{size:16}),e.jsx("span",{className:"sr-only",children:"Home"})]})}),a.map((s,t)=>{const n=`/${a.slice(0,t+1).join("/")}`,m=t===a.length-1;return e.jsxs(j.Fragment,{children:[e.jsx("li",{className:"flex items-center",children:e.jsx(g,{size:14,className:"text-gray-400"})}),e.jsx("li",{children:m?e.jsx("span",{className:"font-medium text-gray-900","aria-current":"page",children:o[s]||s}):e.jsx(c,{to:n,className:"text-gray-500 hover:text-gray-700",children:o[s]||s})})]},n)})]}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(i())})]})};function A({title:r,icon:l,gradientClasses:a,description:i,mobileContent:s,desktopContent:t}){const n=b();return e.jsxs("div",{className:`min-h-screen ${a}`,children:[e.jsxs("header",{className:"p-4 sm:p-6 flex justify-between items-center",children:[e.jsx("button",{onClick:()=>n("/"),className:"p-2 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white/30 transition-colors",title:"Go back to home page","aria-label":"Go back to home page",children:e.jsx(y,{size:20})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center",children:l}),e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:r})]}),e.jsx("div",{className:"w-9"})]}),e.jsx("div",{className:"px-4 sm:px-6 mb-2",children:e.jsx(N,{className:"bg-white/30 backdrop-blur-sm rounded-lg py-2 px-3 inline-block"})}),e.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-4 sm:py-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-900",children:r}),e.jsx("p",{className:"text-base text-gray-700 mb-8 leading-relaxed",children:i}),e.jsx("div",{className:"md:hidden space-y-2",children:s}),e.jsx("div",{className:"hidden md:block space-y-6",children:t})]})]})}export{C,A as a};
