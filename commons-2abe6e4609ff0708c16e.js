"use strict";(self.webpackChunkjodie=self.webpackChunkjodie||[]).push([[351],{795:function(e,r,t){t.d(r,{X6:function(){return v},rU:function(){return m}});var n=t(2443),a=t(917),i=t(7294),o=t(3431);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=["__themeKey","__css","variant","css","sx","as"],c=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],b=function(e){return c.includes(e)},p=(0,i.forwardRef)((function(e,r){var t=(0,n.u)(),i=e,d=i.__themeKey,b=void 0===d?"variants":d,p=i.__css,g=i.variant,h=i.css,m=i.sx,v=i.as,y=void 0===v?"div":v,w=l(i,u),k=(0,o.iv)(p)(t),x=(0,o.U2)(t,b+"."+g)||(0,o.U2)(t,g),I=x&&(0,o.iv)(x)(t),Z=(0,o.iv)(m)(t),F=(0,o.iv)(function(e){for(var r,t={},n=s(c);!(r=n()).done;){var a=r.value;t[a]=e[a]}return t}(w))(t),S=[{boxSizing:"border-box",margin:0,minWidth:0},k,I,Z,F,h];return c.forEach((function(e){delete w[e]})),(0,a.tZ)(y,f({ref:r,css:S},w))})),g=function(e){return function(r){var t={};for(var n in r)e(n||"")&&(t[n]=r[n]);return t}},h=/^m[trblxy]?$/;g((function(e){return h.test(e)})),g((function(e){return!h.test(e)}));var m=i.forwardRef((function(e,r){return i.createElement(p,f({ref:r,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),v=i.forwardRef((function(e,r){return i.createElement(p,f({ref:r,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),y=["size"],w=i.forwardRef((function(e,r){var t=e.size,n=void 0===t?24:t,a=f({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"currentcolor"},l(e,y));return i.createElement(p,f({ref:r,as:"svg"},a))}));w.displayName="SVG";(0,a.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),g(b),g((function(e){return!b(e)}))},7197:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(8733),a=t(3431),i=t(7294),o=t(917);var f=e=>{let{children:r}=e;return(0,n.tZ)("div",{sx:{display:"grid",gridTemplateColumns:e=>["1fr","1fr","1fr",(0,a.U2)(e,"sidebar.normal")+" 1fr",(0,a.U2)(e,"sidebar.wide")+" 1fr"]}},r)},l=t(4160),d=t(3702);var s=()=>i.createElement("img",{src:"https://github.com/neherdata.png?size=70"}),u=t(4933);var c=()=>(0,l.useStaticQuery)("1922044513").jodieConfig;var b=e=>{let{bg:r}=e;const{navigation:t,basePath:a}=c();return(0,n.tZ)("nav",{"aria-label":"Primary Navigation",sx:{a:{color:(0,d.XV)(r),textDecoration:"none",fontSize:[1,2,2,3],marginLeft:[2,3,3,0],"&:hover,&:focus":{color:(0,d.XV)(r,"primary","primaryLight",!1)}},ul:{margin:0,padding:0,li:{listStyle:"none",display:["inline-block","inline-block","inline-block","block"]}},variant:"navigation"}},(0,n.tZ)("ul",null,t.map((e=>{return(0,n.tZ)("li",{key:e.slug},(0,n.tZ)(l.Link,{sx:e=>{var r;return{...null===(r=e.styles)||void 0===r?void 0:r.a}},to:(r="/"+a+"/"+e.slug,r.replace(/\/\/+/g,"/"))},e.name));var r}))))};var p=e=>{let{bg:r}=e;const{siteTitle:t}=(0,u.Z)(),{basePath:i}=c();return(0,n.tZ)("header",{sx:{p:[3,3,4],width:e=>["100%","100%","100%",(0,a.U2)(e,"sidebar.normal"),(0,a.U2)(e,"sidebar.wide")],backgroundColor:r,position:["relative","relative","relative","fixed"],height:"100%",display:"flex",flexDirection:["row","row","row","column"],alignItems:["center","center","center","flex-start"],justifyContent:["space-between","space-between","space-between","flex-start"],svg:{fill:(0,d.XV)(r)},variant:"sidebar"},"data-testid":"sidebar"},(0,n.tZ)(l.Link,{to:i,"aria-label":t+", Back to Home",sx:{width:["3rem","4rem","4.5rem","5rem"]}},(0,n.tZ)(s,null)),(0,n.tZ)("div",{sx:{py:4,display:["none","none","none","block"]}}),(0,n.tZ)(b,{bg:r}))},g=t(2396),h=t(795);var m=e=>{let{bg:r}=e;const{siteTitle:t}=(0,u.Z)(),{theme:{rawColors:i}}=(0,g.B7)(),o=(0,d.XV)(r,i.textMuted,i.textMutedLight);return(0,n.tZ)("footer",{sx:{position:["relative","relative","relative","fixed"],width:e=>["100%","100%","100%",(0,a.U2)(e,"sidebar.normal"),(0,a.U2)(e,"sidebar.wide")],bottom:0,color:o,fontSize:0,p:[3,3,4],background:r,a:{color:(0,d.XV)(r),"&:hover,&:focus":{color:(0,d.XV)(r,"primary","primaryLight",!1)}},variant:"footer"}},(0,n.tZ)("div",null,"© ",(new Date).getFullYear()," by ",t,"."),(0,n.tZ)("div",null,(0,n.tZ)(h.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"},"Theme")," ","by"," ",(0,n.tZ)(h.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme"},"LekoArts")))};const v={...t(3653).j,position:"fixed",zIndex:9999999,top:4,left:4,padding:4,borderRadius:"default",background:"white",color:"text",textDecoration:"none",boxShadow:"lg","&:focus":{width:"auto",height:"auto",clip:"auto"},variant:"skip-nav"},y="skip-here";function w(e){let{children:r="Skip to content",targetId:t=y}=e;const[a,o]=i.useState(!1);return i.useLayoutEffect((()=>{const e=document.getElementById(t);!!e!==a&&o(!!e)}),[t,a]),a?(0,n.tZ)("a",{href:"#"+t,sx:v},r):null}function k(e){let{targetId:r=y}=e;return(0,n.tZ)("div",{id:r,style:{contain:"none"}})}var x=e=>{let{children:r,color:t="white"}=e;return(0,n.tZ)(i.Fragment,null,(0,n.tZ)(o.xB,{styles:e=>({"*,*:after,*:before":{boxSizing:"border-box"},html:{fontSize:"18px",WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{background:(0,a.U2)(e,"colors.primary"),color:(0,a.U2)(e,"colors.white")},"ul > li > code, ol > li > code, p > code":{color:"#393A34",background:"#f6f8fa",padding:2},"@media(max-width: 600px)":{html:{fontSize:"16px"}}})}),(0,n.tZ)(w,null),(0,n.tZ)(f,null,(0,n.tZ)(p,{bg:t}),(0,n.tZ)("main",{sx:{gridColumnStart:[1,1,1,2]}},(0,n.tZ)(k,null),r),(0,n.tZ)(m,{bg:t})))}},4933:function(e,r,t){var n=t(4160);r.Z=()=>(0,n.useStaticQuery)("2450661609").site.siteMetadata},3653:function(e,r,t){t.d(r,{j:function(){return n}});const n={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute"}},3702:function(e,r,t){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{XV:function(){return z},DZ:function(){return C}});var a=t(7326),i=t(4578),o=t(2146);var f=function(e){function r(r){var t;return t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,(0,a.Z)(t)}return(0,i.Z)(r,e),r}((0,o.Z)(Error));function l(e){return Math.round(255*e)}function d(e,r,t){return l(e)+","+l(r)+","+l(t)}function s(e,r,t,n){if(void 0===n&&(n=d),0===r)return n(t,t,t);var a=(e%360+360)%360/60,i=(1-Math.abs(2*t-1))*r,o=i*(1-Math.abs(a%2-1)),f=0,l=0,s=0;a>=0&&a<1?(f=i,l=o):a>=1&&a<2?(f=o,l=i):a>=2&&a<3?(l=i,s=o):a>=3&&a<4?(l=o,s=i):a>=4&&a<5?(f=o,s=i):a>=5&&a<6&&(f=i,s=o);var u=t-i/2;return n(f+u,l+u,s+u)}var u={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var c=/^#[a-fA-F0-9]{6}$/,b=/^#[a-fA-F0-9]{8}$/,p=/^#[a-fA-F0-9]{3}$/,g=/^#[a-fA-F0-9]{4}$/,h=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,m=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,v=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,y=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function w(e){if("string"!=typeof e)throw new f(3);var r=function(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return u[r]?"#"+u[r]:e}(e);if(r.match(c))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(b)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(p))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(g)){var n=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:n}}var a=h.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var i=m.exec(r.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var o=v.exec(r);if(o){var l="rgb("+s(parseInt(""+o[1],10),parseInt(""+o[2],10)/100,parseInt(""+o[3],10)/100)+")",d=h.exec(l);if(!d)throw new f(4,r,l);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10)}}var w=y.exec(r.substring(0,50));if(w){var k="rgb("+s(parseInt(""+w[1],10),parseInt(""+w[2],10)/100,parseInt(""+w[3],10)/100)+")",x=h.exec(k);if(!x)throw new f(4,r,k);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+w[4])>1?parseFloat(""+w[4])/100:parseFloat(""+w[4])}}throw new f(5)}var k=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function x(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function I(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return k("#"+x(e)+x(r)+x(t));if("object"==typeof e&&void 0===r&&void 0===t)return k("#"+x(e.red)+x(e.green)+x(e.blue));throw new f(6)}function Z(e,r,t,n){if("string"==typeof e&&"number"==typeof r){var a=w(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof n)return n>=1?I(e,r,t):"rgba("+e+","+r+","+t+","+n+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===n)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new f(7)}function F(e,r,t){return function(){var n=t.concat(Array.prototype.slice.call(arguments));return n.length>=r?e.apply(this,n):F(e,r,n)}}function S(e){return F(e,e.length,[])}function j(e,r,t){return Math.max(e,Math.min(r,t))}function A(e){if("transparent"===e)return 0;var r=w(e),t=Object.keys(r).map((function(e){var t=r[e]/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),n=t[0],a=t[1],i=t[2];return parseFloat((.2126*n+.7152*a+.0722*i).toFixed(3))}function _(e,r){var t=A(e),n=A(r);return parseFloat((t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)).toFixed(2))}var L="#000",U="#fff";function z(e,r,t,n){void 0===r&&(r=L),void 0===t&&(t=U),void 0===n&&(n=!0);var a=A(e)>.179,i=a?r:t;return!n||_(e,i)>=4.5?i:a?L:U}function O(e,r){if("transparent"===r)return r;var t=w(r);return Z(n({},t,{alpha:j(0,1,+(100*("number"==typeof t.alpha?t.alpha:1)-100*parseFloat(e)).toFixed(2)/100)}))}var C=S(O)},8733:function(e,r,t){t.d(r,{tZ:function(){return n}});var n=t(2396).tZ}}]);
//# sourceMappingURL=commons-2abe6e4609ff0708c16e.js.map