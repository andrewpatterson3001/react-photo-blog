(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},Wbzz:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));r("xfY5");var n=r("q1tI"),a=r.n(n),i=r("+ZDr"),o=r.n(i);r.d(t,"a",(function(){return o.a}));r("lw3w"),r("emEt").default.enqueue;var u=a.a.createContext({});function c(e){var t=e.staticQueryData,r=e.data,n=e.query,i=e.render,o=r?r.data:t[n]&&t[n].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,r=e.query,n=e.render,i=e.children;return a.a.createElement(u.Consumer,null,(function(e){return a.a.createElement(c,{data:t,query:r,render:n||i,staticQueryData:e})}))}},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},qncB:function(e,t,r){var n=r("XKFU"),a=r("vhPU"),i=r("eeVq"),o=r("/e88"),u="["+o+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(e,t,r){var a={},u=i((function(){return!!o[e]()||"​"!="​"[e]()})),c=a[e]=u?t(s):o[e];r&&(a[r]=c),n(n.P+n.F*u,"String",a)},s=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("q1tI"),a=r.n(n),i=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(i.a,Object.assign({location:t,pageResources:r},r.json)):null}},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),a=r("aagx"),i=r("LZWt"),o=r("Xbzi"),u=r("apmT"),c=r("eeVq"),l=r("kJMx").f,f=r("EemH").f,s=r("hswa").f,m=r("qncB").trim,d=n.Number,v=d,p=d.prototype,E="Number"==i(r("Kuth")(p)),g="trim"in String.prototype,h=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=g?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,c=t.slice(2),l=0,f=c.length;l<f;l++)if((o=c.charCodeAt(l))<48||o>a)return NaN;return parseInt(c,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(E?c((function(){p.valueOf.call(r)})):"Number"!=i(r))?o(new v(h(t)),r,d):h(t)};for(var I,N=r("nh4g")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)a(v,I=N[y])&&!a(d,I)&&s(d,I,f(v,I));d.prototype=p,p.constructor=d,r("KroJ")(n,"Number",d)}},yihx:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return o}));var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o="2191500633";t.default=function(e){var t=e.data,r=e.pageContext,n=r.next,o=r.prev,u=t.markdownRemark,c=u.frontmatter.title,l=u.frontmatter.imageSource,f=u.html;return a.a.createElement("div",null,a.a.createElement("h1",{style:{fontFamily:"avenir"}},c),a.a.createElement("div",{className:"blogpost",dangerouslySetInnerHTML:{__html:f},style:{fontFamily:"avenir"}}),a.a.createElement("img",{style:{height:"auto",maxWidth:"100%"},src:l}),a.a.createElement("div",{style:{marginBottom:"1rem",fontFamily:"avenir"}},n&&a.a.createElement(i.a,{to:n.frontmatter.path},"Next: ",""+n.frontmatter.title)),a.a.createElement("div",{style:{fontFamily:"avenir"}},o&&a.a.createElement(i.a,{to:o.frontmatter.path},"Prev: ",""+o.frontmatter.title)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-595c5ee5d769ca7b212b.js.map