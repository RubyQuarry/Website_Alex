/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*! jQuery UI - v1.11.2 - 2014-11-30
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, effect.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {
  /*!
  * jQuery UI Core 1.11.2
  * http://jqueryui.com
  *
  * Copyright 2014 jQuery Foundation and other contributors
  * Released under the MIT license.
  * http://jquery.org/license
  *
  * http://api.jqueryui.com/category/ui-core/
  */


  // $.ui might exist from components with no dependencies, e.g., $.ui.position
  $.ui = $.ui || {};

  $.extend( $.ui, {
    version: "1.11.2",

    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  });

  // plugins
  $.fn.extend({
    scrollParent: function( includeHidden ) {
      var position = this.css( "position" ),
      excludeStaticParent = position === "absolute",
      overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      scrollParent = this.parents().filter( function() {
        var parent = $( this );
        if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
          return false;
        }
        return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
      }).eq( 0 );

      return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
    },

    uniqueId: (function() {
      var uuid = 0;

      return function() {
        return this.each(function() {
          if ( !this.id ) {
            this.id = "ui-id-" + ( ++uuid );
          }
        });
      };
    })(),

    removeUniqueId: function() {
      return this.each(function() {
        if ( /^ui-id-\d+$/.test( this.id ) ) {
          $( this ).removeAttr( "id" );
        }
      });
    }
  });

  // selectors
  function focusable( element, isTabIndexNotNaN ) {
    var map, mapName, img,
    nodeName = element.nodeName.toLowerCase();
    if ( "area" === nodeName ) {
      map = element.parentNode;
      mapName = map.name;
      if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
        return false;
      }
      img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
      return !!img && visible( img );
    }
    return ( /input|select|textarea|button|object/.test( nodeName ) ?
    !element.disabled :
    "a" === nodeName ?
    element.href || isTabIndexNotNaN :
    isTabIndexNotNaN) &&
    // the element and all of its ancestors must be visible
    visible( element );
  }

  function visible( element ) {
    return $.expr.filters.visible( element ) &&
    !$( element ).parents().addBack().filter(function() {
      return $.css( this, "visibility" ) === "hidden";
    }).length;
  }

  $.extend( $.expr[ ":" ], {
    data: $.expr.createPseudo ?
    $.expr.createPseudo(function( dataName ) {
      return function( elem ) {
        return !!$.data( elem, dataName );
      };
    }) :
    // support: jQuery <1.8
    function( elem, i, match ) {
      return !!$.data( elem, match[ 3 ] );
    },

    focusable: function( element ) {
      return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
    },

    tabbable: function( element ) {
      var tabIndex = $.attr( element, "tabindex" ),
      isTabIndexNaN = isNaN( tabIndex );
      return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
    }
  });

  // support: jQuery <1.8
  if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
    $.each( [ "Width", "Height" ], function( i, name ) {
      var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
      type = name.toLowerCase(),
      orig = {
        innerWidth: $.fn.innerWidth,
        innerHeight: $.fn.innerHeight,
        outerWidth: $.fn.outerWidth,
        outerHeight: $.fn.outerHeight
      };

      function reduce( elem, size, border, margin ) {
        $.each( side, function() {
          size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
          if ( border ) {
            size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
          }
          if ( margin ) {
            size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
          }
        });
        return size;
      }

      $.fn[ "inner" + name ] = function( size ) {
        if ( size === undefined ) {
          return orig[ "inner" + name ].call( this );
        }

        return this.each(function() {
          $( this ).css( type, reduce( this, size ) + "px" );
        });
      };

      $.fn[ "outer" + name] = function( size, margin ) {
        if ( typeof size !== "number" ) {
          return orig[ "outer" + name ].call( this, size );
        }

        return this.each(function() {
          $( this).css( type, reduce( this, size, true, margin ) + "px" );
        });
      };
    });
  }

  // support: jQuery <1.8
  if ( !$.fn.addBack ) {
    $.fn.addBack = function( selector ) {
      return this.add( selector == null ?
        this.prevObject : this.prevObject.filter( selector )
      );
    };
  }

  // support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
  if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
    $.fn.removeData = (function( removeData ) {
      return function( key ) {
        if ( arguments.length ) {
          return removeData.call( this, $.camelCase( key ) );
        } else {
          return removeData.call( this );
        }
      };
    })( $.fn.removeData );
  }

  // deprecated
  $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

  $.fn.extend({
    focus: (function( orig ) {
      return function( delay, fn ) {
        return typeof delay === "number" ?
        this.each(function() {
          var elem = this;
          setTimeout(function() {
            $( elem ).focus();
            if ( fn ) {
              fn.call( elem );
            }
          }, delay );
        }) :
        orig.apply( this, arguments );
      };
    })( $.fn.focus ),

    disableSelection: (function() {
      var eventType = "onselectstart" in document.createElement( "div" ) ?
      "selectstart" :
      "mousedown";

      return function() {
        return this.bind( eventType + ".ui-disableSelection", function( event ) {
          event.preventDefault();
        });
      };
    })(),

    enableSelection: function() {
      return this.unbind( ".ui-disableSelection" );
    },

    zIndex: function( zIndex ) {
      if ( zIndex !== undefined ) {
        return this.css( "zIndex", zIndex );
      }

      if ( this.length ) {
        var elem = $( this[ 0 ] ), position, value;
        while ( elem.length && elem[ 0 ] !== document ) {
          // Ignore z-index if position is set to a value where z-index is ignored by the browser
          // This makes behavior of this function consistent across browsers
          // WebKit always returns auto if the element is positioned
          position = elem.css( "position" );
          if ( position === "absolute" || position === "relative" || position === "fixed" ) {
            // IE returns 0 when zIndex is not specified
            // other browsers return a string
            // we ignore the case of nested elements with an explicit value of 0
            // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
            value = parseInt( elem.css( "zIndex" ), 10 );
            if ( !isNaN( value ) && value !== 0 ) {
              return value;
            }
          }
          elem = elem.parent();
        }
      }

      return 0;
    }
  });

  // $.ui.plugin is deprecated. Use $.widget() extensions instead.
  $.ui.plugin = {
    add: function( module, option, set ) {
      var i,
      proto = $.ui[ module ].prototype;
      for ( i in set ) {
        proto.plugins[ i ] = proto.plugins[ i ] || [];
        proto.plugins[ i ].push( [ option, set[ i ] ] );
      }
    },
    call: function( instance, name, args, allowDisconnected ) {
      var i,
      set = instance.plugins[ name ];

      if ( !set ) {
        return;
      }

      if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
        return;
      }

      for ( i = 0; i < set.length; i++ ) {
        if ( instance.options[ set[ i ][ 0 ] ] ) {
          set[ i ][ 1 ].apply( instance.element, args );
        }
      }
    }
  };


  /*!
  * jQuery UI Widget 1.11.2
  * http://jqueryui.com
  *
  * Copyright 2014 jQuery Foundation and other contributors
  * Released under the MIT license.
  * http://jquery.org/license
  *
  * http://api.jqueryui.com/jQuery.widget/
  */


  var widget_uuid = 0,
  widget_slice = Array.prototype.slice;

  $.cleanData = (function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; (elem = elems[i]) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  })( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var fullName, existingConstructor, constructor, basePrototype,
    // proxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    proxiedPrototype = {},
    namespace = name.split( "." )[ 0 ];

    name = name.split( "." )[ 1 ];
    fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    // create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {
      // allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };
    // extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,
      // copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),
      // track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    });

    basePrototype = new base();
    // we need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = (function() {
        var _super = function() {
          return base.prototype[ prop ].apply( this, arguments );
        },
        _superApply = function( args ) {
          return base.prototype[ prop ].apply( this, args );
        };
        return function() {
          var __super = this._super,
          __superApply = this._superApply,
          returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      })();
    });
    constructor.prototype = $.widget.extend( basePrototype, {
      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    });

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
      });
      // remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widget_slice.call( arguments, 1 ),
    inputIndex = 0,
    inputLength = input.length,
    key,
    value;
    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
            $.widget.extend( {}, target[ key ], value ) :
            // Don't extend strings, arrays, etc. with objects
            $.widget.extend( {}, value );
            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string",
      args = widget_slice.call( arguments, 1 ),
      returnValue = this;

      // allow multiple hashes to be passed on init
      options = !isMethodCall && args.length ?
      $.widget.extend.apply( null, [ options ].concat(args) ) :
      options;

      if ( isMethodCall ) {
        this.each(function() {
          var methodValue,
          instance = $.data( this, fullName );
          if ( options === "instance" ) {
            returnValue = instance;
            return false;
          }
          if ( !instance ) {
            return $.error( "cannot call methods on " + name + " prior to initialization; " +
            "attempted to call method '" + options + "'" );
          }
          if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
            return $.error( "no such method '" + options + "' for " + name + " widget instance" );
          }
          methodValue = instance[ options ].apply( instance, args );
          if ( methodValue !== instance && methodValue !== undefined ) {
            returnValue = methodValue && methodValue.jquery ?
            returnValue.pushStack( methodValue.get() ) :
            methodValue;
            return false;
          }
        });
      } else {
        this.each(function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        });
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: false,

      // callbacks
      create: null
    },
    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widget_uuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        });
        this.document = $( element.style ?
          // element within the document
          element.ownerDocument :
          // element is window or document
          element.document || element );
          this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
        }

        this.options = $.widget.extend( {},
          this.options,
          this._getCreateOptions(),
          options );

          this._create();
          this._trigger( "create", null, this._getCreateEventData() );
          this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function() {
          this._destroy();
          // we can probably remove the unbind calls in 2.0
          // all event bindings should go through this._on()
          this.element
          .unbind( this.eventNamespace )
          .removeData( this.widgetFullName )
          // support: jquery <1.6.3
          // http://bugs.jquery.com/ticket/9413
          .removeData( $.camelCase( this.widgetFullName ) );
          this.widget()
          .unbind( this.eventNamespace )
          .removeAttr( "aria-disabled" )
          .removeClass(
            this.widgetFullName + "-disabled " +
            "ui-state-disabled" );

            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
          },
          _destroy: $.noop,

          widget: function() {
            return this.element;
          },

          option: function( key, value ) {
            var options = key,
            parts,
            curOption,
            i;

            if ( arguments.length === 0 ) {
              // don't return a reference to the internal hash
              return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {
              // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
              options = {};
              parts = key.split( "." );
              key = parts.shift();
              if ( parts.length ) {
                curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                for ( i = 0; i < parts.length - 1; i++ ) {
                  curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                  curOption = curOption[ parts[ i ] ];
                }
                key = parts.pop();
                if ( arguments.length === 1 ) {
                  return curOption[ key ] === undefined ? null : curOption[ key ];
                }
                curOption[ key ] = value;
              } else {
                if ( arguments.length === 1 ) {
                  return this.options[ key ] === undefined ? null : this.options[ key ];
                }
                options[ key ] = value;
              }
            }

            this._setOptions( options );

            return this;
          },
          _setOptions: function( options ) {
            var key;

            for ( key in options ) {
              this._setOption( key, options[ key ] );
            }

            return this;
          },
          _setOption: function( key, value ) {
            this.options[ key ] = value;

            if ( key === "disabled" ) {
              this.widget()
              .toggleClass( this.widgetFullName + "-disabled", !!value );

              // If the widget is becoming disabled, then nothing is interactive
              if ( value ) {
                this.hoverable.removeClass( "ui-state-hover" );
                this.focusable.removeClass( "ui-state-focus" );
              }
            }

            return this;
          },

          enable: function() {
            return this._setOptions({ disabled: false });
          },
          disable: function() {
            return this._setOptions({ disabled: true });
          },

          _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
            instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
              handlers = element;
              element = suppressDisabledCheck;
              suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if ( !handlers ) {
              handlers = element;
              element = this.element;
              delegateElement = this.widget();
            } else {
              element = delegateElement = $( element );
              this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
              function handlerProxy() {
                // allow widgets to customize the disabled handling
                // - disabled as an array instead of boolean
                // - disabled class as method for disabling individual parts
                if ( !suppressDisabledCheck &&
                  ( instance.options.disabled === true ||
                    $( this ).hasClass( "ui-state-disabled" ) ) ) {
                      return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
                  }

                  // copy the guid so direct unbinding works
                  if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                    handler.guid || handlerProxy.guid || $.guid++;
                  }

                  var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
                  eventName = match[1] + instance.eventNamespace,
                  selector = match[2];
                  if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                  } else {
                    element.bind( eventName, handlerProxy );
                  }
                });
              },

              _off: function( element, eventName ) {
                eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
                this.eventNamespace;
                element.unbind( eventName ).undelegate( eventName );

                // Clear the stack to avoid memory leaks (#10056)
                this.bindings = $( this.bindings.not( element ).get() );
                this.focusable = $( this.focusable.not( element ).get() );
                this.hoverable = $( this.hoverable.not( element ).get() );
              },

              _delay: function( handler, delay ) {
                function handlerProxy() {
                  return ( typeof handler === "string" ? instance[ handler ] : handler )
                  .apply( instance, arguments );
                }
                var instance = this;
                return setTimeout( handlerProxy, delay || 0 );
              },

              _hoverable: function( element ) {
                this.hoverable = this.hoverable.add( element );
                this._on( element, {
                  mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                  },
                  mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                  }
                });
              },

              _focusable: function( element ) {
                this.focusable = this.focusable.add( element );
                this._on( element, {
                  focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                  },
                  focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                  }
                });
              },

              _trigger: function( type, event, data ) {
                var prop, orig,
                callback = this.options[ type ];

                data = data || {};
                event = $.Event( event );
                event.type = ( type === this.widgetEventPrefix ?
                  type :
                  this.widgetEventPrefix + type ).toLowerCase();
                  // the original event may come from any element
                  // so we need to reset the target on the new event
                  event.target = this.element[ 0 ];

                  // copy original event properties over to the new event
                  orig = event.originalEvent;
                  if ( orig ) {
                    for ( prop in orig ) {
                      if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                      }
                    }
                  }

                  this.element.trigger( event, data );
                  return !( $.isFunction( callback ) &&
                  callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
                  event.isDefaultPrevented() );
                }
              };

              $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
                $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
                  if ( typeof options === "string" ) {
                    options = { effect: options };
                  }
                  var hasOptions,
                  effectName = !options ?
                  method :
                  options === true || typeof options === "number" ?
                  defaultEffect :
                  options.effect || defaultEffect;
                  options = options || {};
                  if ( typeof options === "number" ) {
                    options = { duration: options };
                  }
                  hasOptions = !$.isEmptyObject( options );
                  options.complete = callback;
                  if ( options.delay ) {
                    element.delay( options.delay );
                  }
                  if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                    element[ method ]( options );
                  } else if ( effectName !== method && element[ effectName ] ) {
                    element[ effectName ]( options.duration, options.easing, callback );
                  } else {
                    element.queue(function( next ) {
                      $( this )[ method ]();
                      if ( callback ) {
                        callback.call( element[ 0 ] );
                      }
                      next();
                    });
                  }
                };
              });

              var widget = $.widget;


              /*!
              * jQuery UI Mouse 1.11.2
              * http://jqueryui.com
              *
              * Copyright 2014 jQuery Foundation and other contributors
              * Released under the MIT license.
              * http://jquery.org/license
              *
              * http://api.jqueryui.com/mouse/
              */


              var mouseHandled = false;
              $( document ).mouseup( function() {
                mouseHandled = false;
              });

              var mouse = $.widget("ui.mouse", {
                version: "1.11.2",
                options: {
                  cancel: "input,textarea,button,select,option",
                  distance: 1,
                  delay: 0
                },
                _mouseInit: function() {
                  var that = this;

                  this.element
                  .bind("mousedown." + this.widgetName, function(event) {
                    return that._mouseDown(event);
                  })
                  .bind("click." + this.widgetName, function(event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                      $.removeData(event.target, that.widgetName + ".preventClickEvent");
                      event.stopImmediatePropagation();
                      return false;
                    }
                  });

                  this.started = false;
                },

                // TODO: make sure destroying one instance of mouse doesn't mess with
                // other instances of mouse
                _mouseDestroy: function() {
                  this.element.unbind("." + this.widgetName);
                  if ( this._mouseMoveDelegate ) {
                    this.document
                    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                  }
                },

                _mouseDown: function(event) {
                  // don't let more than one widget handle mouseStart
                  if ( mouseHandled ) {
                    return;
                  }

                  this._mouseMoved = false;

                  // we may have missed mouseup (out of window)
                  (this._mouseStarted && this._mouseUp(event));

                  this._mouseDownEvent = event;

                  var that = this,
                  btnIsLeft = (event.which === 1),
                  // event.target.nodeName works around a bug in IE 8 with
                  // disabled inputs (#7620)
                  elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
                  if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                    return true;
                  }

                  this.mouseDelayMet = !this.options.delay;
                  if (!this.mouseDelayMet) {
                    this._mouseDelayTimer = setTimeout(function() {
                      that.mouseDelayMet = true;
                    }, this.options.delay);
                  }

                  if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                    this._mouseStarted = (this._mouseStart(event) !== false);
                    if (!this._mouseStarted) {
                      event.preventDefault();
                      return true;
                    }
                  }

                  // Click event may never have fired (Gecko & Opera)
                  if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                    $.removeData(event.target, this.widgetName + ".preventClickEvent");
                  }

                  // these delegates are required to keep context
                  this._mouseMoveDelegate = function(event) {
                    return that._mouseMove(event);
                  };
                  this._mouseUpDelegate = function(event) {
                    return that._mouseUp(event);
                  };

                  this.document
                  .bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                  .bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

                  event.preventDefault();

                  mouseHandled = true;
                  return true;
                },

                _mouseMove: function(event) {
                  // Only check for mouseups outside the document if you've moved inside the document
                  // at least once. This prevents the firing of mouseup in the case of IE<9, which will
                  // fire a mousemove event if content is placed under the cursor. See #7778
                  // Support: IE <9
                  if ( this._mouseMoved ) {
                    // IE mouseup check - mouseup happened when mouse was out of window
                    if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                      return this._mouseUp(event);

                      // Iframe mouseup check - mouseup occurred in another document
                    } else if ( !event.which ) {
                      return this._mouseUp( event );
                    }
                  }

                  if ( event.which || event.button ) {
                    this._mouseMoved = true;
                  }

                  if (this._mouseStarted) {
                    this._mouseDrag(event);
                    return event.preventDefault();
                  }

                  if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                    this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                    (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
                  }

                  return !this._mouseStarted;
                },

                _mouseUp: function(event) {
                  this.document
                  .unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                  .unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

                  if (this._mouseStarted) {
                    this._mouseStarted = false;

                    if (event.target === this._mouseDownEvent.target) {
                      $.data(event.target, this.widgetName + ".preventClickEvent", true);
                    }

                    this._mouseStop(event);
                  }

                  mouseHandled = false;
                  return false;
                },

                _mouseDistanceMet: function(event) {
                  return (Math.max(
                    Math.abs(this._mouseDownEvent.pageX - event.pageX),
                    Math.abs(this._mouseDownEvent.pageY - event.pageY)
                  ) >= this.options.distance
                );
              },

              _mouseDelayMet: function(/* event */) {
                return this.mouseDelayMet;
              },

              // These are placeholder methods, to be overriden by extending plugin
              _mouseStart: function(/* event */) {},
              _mouseDrag: function(/* event */) {},
              _mouseStop: function(/* event */) {},
              _mouseCapture: function(/* event */) { return true; }
            });


            /*!
            * jQuery UI Position 1.11.2
            * http://jqueryui.com
            *
            * Copyright 2014 jQuery Foundation and other contributors
            * Released under the MIT license.
            * http://jquery.org/license
            *
            * http://api.jqueryui.com/position/
            */

            (function() {

              $.ui = $.ui || {};

              var cachedScrollbarWidth, supportsOffsetFractions,
              max = Math.max,
              abs = Math.abs,
              round = Math.round,
              rhorizontal = /left|center|right/,
              rvertical = /top|center|bottom/,
              roffset = /[\+\-]\d+(\.[\d]+)?%?/,
              rposition = /^\w+/,
              rpercent = /%$/,
              _position = $.fn.position;

              function getOffsets( offsets, width, height ) {
                return [
                parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
                parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
                ];
              }

              function parseCss( element, property ) {
                return parseInt( $.css( element, property ), 10 ) || 0;
              }

              function getDimensions( elem ) {
                var raw = elem[0];
                if ( raw.nodeType === 9 ) {
                  return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                  };
                }
                if ( $.isWindow( raw ) ) {
                  return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                  };
                }
                if ( raw.preventDefault ) {
                  return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                  };
                }
                return {
                  width: elem.outerWidth(),
                  height: elem.outerHeight(),
                  offset: elem.offset()
                };
              }

              $.position = {
                scrollbarWidth: function() {
                  if ( cachedScrollbarWidth !== undefined ) {
                    return cachedScrollbarWidth;
                  }
                  var w1, w2,
                  div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
                  innerDiv = div.children()[0];

                  $( "body" ).append( div );
                  w1 = innerDiv.offsetWidth;
                  div.css( "overflow", "scroll" );

                  w2 = innerDiv.offsetWidth;

                  if ( w1 === w2 ) {
                    w2 = div[0].clientWidth;
                  }

                  div.remove();

                  return (cachedScrollbarWidth = w1 - w2);
                },
                getScrollInfo: function( within ) {
                  var overflowX = within.isWindow || within.isDocument ? "" :
                  within.element.css( "overflow-x" ),
                  overflowY = within.isWindow || within.isDocument ? "" :
                  within.element.css( "overflow-y" ),
                  hasOverflowX = overflowX === "scroll" ||
                  ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
                  hasOverflowY = overflowY === "scroll" ||
                  ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
                  return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                  };
                },
                getWithinInfo: function( element ) {
                  var withinElement = $( element || window ),
                  isWindow = $.isWindow( withinElement[0] ),
                  isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
                  return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: withinElement.offset() || { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),

                    // support: jQuery 1.6.x
                    // jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
                    width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
                    height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
                  };
                }
              };

              $.fn.position = function( options ) {
                if ( !options || !options.of ) {
                  return _position.apply( this, arguments );
                }

                // make a copy, we don't want to modify arguments
                options = $.extend( {}, options );

                var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $( options.of ),
                within = $.position.getWithinInfo( options.within ),
                scrollInfo = $.position.getScrollInfo( within ),
                collision = ( options.collision || "flip" ).split( " " ),
                offsets = {};

                dimensions = getDimensions( target );
                if ( target[0].preventDefault ) {
                  // force left top to allow flipping
                  options.at = "left top";
                }
                targetWidth = dimensions.width;
                targetHeight = dimensions.height;
                targetOffset = dimensions.offset;
                // clone to reuse original targetOffset later
                basePosition = $.extend( {}, targetOffset );

                // force my and at to have valid horizontal and vertical positions
                // if a value is missing or invalid, it will be converted to center
                $.each( [ "my", "at" ], function() {
                  var pos = ( options[ this ] || "" ).split( " " ),
                  horizontalOffset,
                  verticalOffset;

                  if ( pos.length === 1) {
                    pos = rhorizontal.test( pos[ 0 ] ) ?
                    pos.concat( [ "center" ] ) :
                    rvertical.test( pos[ 0 ] ) ?
                    [ "center" ].concat( pos ) :
                    [ "center", "center" ];
                  }
                  pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
                  pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

                  // calculate offsets
                  horizontalOffset = roffset.exec( pos[ 0 ] );
                  verticalOffset = roffset.exec( pos[ 1 ] );
                  offsets[ this ] = [
                  horizontalOffset ? horizontalOffset[ 0 ] : 0,
                  verticalOffset ? verticalOffset[ 0 ] : 0
                  ];

                  // reduce to just the positions without the offsets
                  options[ this ] = [
                  rposition.exec( pos[ 0 ] )[ 0 ],
                  rposition.exec( pos[ 1 ] )[ 0 ]
                  ];
                });

                // normalize collision option
                if ( collision.length === 1 ) {
                  collision[ 1 ] = collision[ 0 ];
                }

                if ( options.at[ 0 ] === "right" ) {
                  basePosition.left += targetWidth;
                } else if ( options.at[ 0 ] === "center" ) {
                  basePosition.left += targetWidth / 2;
                }

                if ( options.at[ 1 ] === "bottom" ) {
                  basePosition.top += targetHeight;
                } else if ( options.at[ 1 ] === "center" ) {
                  basePosition.top += targetHeight / 2;
                }

                atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
                basePosition.left += atOffset[ 0 ];
                basePosition.top += atOffset[ 1 ];

                return this.each(function() {
                  var collisionPosition, using,
                  elem = $( this ),
                  elemWidth = elem.outerWidth(),
                  elemHeight = elem.outerHeight(),
                  marginLeft = parseCss( this, "marginLeft" ),
                  marginTop = parseCss( this, "marginTop" ),
                  collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
                  collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
                  position = $.extend( {}, basePosition ),
                  myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

                  if ( options.my[ 0 ] === "right" ) {
                    position.left -= elemWidth;
                  } else if ( options.my[ 0 ] === "center" ) {
                    position.left -= elemWidth / 2;
                  }

                  if ( options.my[ 1 ] === "bottom" ) {
                    position.top -= elemHeight;
                  } else if ( options.my[ 1 ] === "center" ) {
                    position.top -= elemHeight / 2;
                  }

                  position.left += myOffset[ 0 ];
                  position.top += myOffset[ 1 ];

                  // if the browser doesn't support fractions, then round for consistent results
                  if ( !supportsOffsetFractions ) {
                    position.left = round( position.left );
                    position.top = round( position.top );
                  }

                  collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                  };

                  $.each( [ "left", "top" ], function( i, dir ) {
                    if ( $.ui.position[ collision[ i ] ] ) {
                      $.ui.position[ collision[ i ] ][ dir ]( position, {
                        targetWidth: targetWidth,
                        targetHeight: targetHeight,
                        elemWidth: elemWidth,
                        elemHeight: elemHeight,
                        collisionPosition: collisionPosition,
                        collisionWidth: collisionWidth,
                        collisionHeight: collisionHeight,
                        offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                        my: options.my,
                        at: options.at,
                        within: within,
                        elem: elem
                      });
                    }
                  });

                  if ( options.using ) {
                    // adds feedback as second argument to using callback, if present
                    using = function( props ) {
                      var left = targetOffset.left - position.left,
                      right = left + targetWidth - elemWidth,
                      top = targetOffset.top - position.top,
                      bottom = top + targetHeight - elemHeight,
                      feedback = {
                        target: {
                          element: target,
                          left: targetOffset.left,
                          top: targetOffset.top,
                          width: targetWidth,
                          height: targetHeight
                        },
                        element: {
                          element: elem,
                          left: position.left,
                          top: position.top,
                          width: elemWidth,
                          height: elemHeight
                        },
                        horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                        vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                      };
                      if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                        feedback.horizontal = "center";
                      }
                      if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                        feedback.vertical = "middle";
                      }
                      if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                        feedback.important = "horizontal";
                      } else {
                        feedback.important = "vertical";
                      }
                      options.using.call( this, props, feedback );
                    };
                  }

                  elem.offset( $.extend( position, { using: using } ) );
                });
              };

              $.ui.position = {
                fit: {
                  left: function( position, data ) {
                    var within = data.within,
                    withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                    outerWidth = within.width,
                    collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                    overLeft = withinOffset - collisionPosLeft,
                    overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                    newOverRight;

                    // element is wider than within
                    if ( data.collisionWidth > outerWidth ) {
                      // element is initially over the left side of within
                      if ( overLeft > 0 && overRight <= 0 ) {
                        newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                        position.left += overLeft - newOverRight;
                        // element is initially over right side of within
                      } else if ( overRight > 0 && overLeft <= 0 ) {
                        position.left = withinOffset;
                        // element is initially over both left and right sides of within
                      } else {
                        if ( overLeft > overRight ) {
                          position.left = withinOffset + outerWidth - data.collisionWidth;
                        } else {
                          position.left = withinOffset;
                        }
                      }
                      // too far left -> align with left edge
                    } else if ( overLeft > 0 ) {
                      position.left += overLeft;
                      // too far right -> align with right edge
                    } else if ( overRight > 0 ) {
                      position.left -= overRight;
                      // adjust based on position and margin
                    } else {
                      position.left = max( position.left - collisionPosLeft, position.left );
                    }
                  },
                  top: function( position, data ) {
                    var within = data.within,
                    withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                    outerHeight = data.within.height,
                    collisionPosTop = position.top - data.collisionPosition.marginTop,
                    overTop = withinOffset - collisionPosTop,
                    overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                    newOverBottom;

                    // element is taller than within
                    if ( data.collisionHeight > outerHeight ) {
                      // element is initially over the top of within
                      if ( overTop > 0 && overBottom <= 0 ) {
                        newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                        position.top += overTop - newOverBottom;
                        // element is initially over bottom of within
                      } else if ( overBottom > 0 && overTop <= 0 ) {
                        position.top = withinOffset;
                        // element is initially over both top and bottom of within
                      } else {
                        if ( overTop > overBottom ) {
                          position.top = withinOffset + outerHeight - data.collisionHeight;
                        } else {
                          position.top = withinOffset;
                        }
                      }
                      // too far up -> align with top
                    } else if ( overTop > 0 ) {
                      position.top += overTop;
                      // too far down -> align with bottom edge
                    } else if ( overBottom > 0 ) {
                      position.top -= overBottom;
                      // adjust based on position and margin
                    } else {
                      position.top = max( position.top - collisionPosTop, position.top );
                    }
                  }
                },
                flip: {
                  left: function( position, data ) {
                    var within = data.within,
                    withinOffset = within.offset.left + within.scrollLeft,
                    outerWidth = within.width,
                    offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                    collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                    overLeft = collisionPosLeft - offsetLeft,
                    overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                    myOffset = data.my[ 0 ] === "left" ?
                    -data.elemWidth :
                    data.my[ 0 ] === "right" ?
                    data.elemWidth :
                    0,
                    atOffset = data.at[ 0 ] === "left" ?
                    data.targetWidth :
                    data.at[ 0 ] === "right" ?
                    -data.targetWidth :
                    0,
                    offset = -2 * data.offset[ 0 ],
                    newOverRight,
                    newOverLeft;

                    if ( overLeft < 0 ) {
                      newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                      if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                        position.left += myOffset + atOffset + offset;
                      }
                    } else if ( overRight > 0 ) {
                      newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                      if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                        position.left += myOffset + atOffset + offset;
                      }
                    }
                  },
                  top: function( position, data ) {
                    var within = data.within,
                    withinOffset = within.offset.top + within.scrollTop,
                    outerHeight = within.height,
                    offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                    collisionPosTop = position.top - data.collisionPosition.marginTop,
                    overTop = collisionPosTop - offsetTop,
                    overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                    top = data.my[ 1 ] === "top",
                    myOffset = top ?
                    -data.elemHeight :
                    data.my[ 1 ] === "bottom" ?
                    data.elemHeight :
                    0,
                    atOffset = data.at[ 1 ] === "top" ?
                    data.targetHeight :
                    data.at[ 1 ] === "bottom" ?
                    -data.targetHeight :
                    0,
                    offset = -2 * data.offset[ 1 ],
                    newOverTop,
                    newOverBottom;
                    if ( overTop < 0 ) {
                      newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                      if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
                        position.top += myOffset + atOffset + offset;
                      }
                    } else if ( overBottom > 0 ) {
                      newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                      if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
                        position.top += myOffset + atOffset + offset;
                      }
                    }
                  }
                },
                flipfit: {
                  left: function() {
                    $.ui.position.flip.left.apply( this, arguments );
                    $.ui.position.fit.left.apply( this, arguments );
                  },
                  top: function() {
                    $.ui.position.flip.top.apply( this, arguments );
                    $.ui.position.fit.top.apply( this, arguments );
                  }
                }
              };

              // fraction support test
              (function() {
                var testElement, testElementParent, testElementStyle, offsetLeft, i,
                body = document.getElementsByTagName( "body" )[ 0 ],
                div = document.createElement( "div" );

                //Create a "fake body" for testing based on method used in jQuery.support
                testElement = document.createElement( body ? "div" : "body" );
                testElementStyle = {
                  visibility: "hidden",
                  width: 0,
                  height: 0,
                  border: 0,
                  margin: 0,
                  background: "none"
                };
                if ( body ) {
                  $.extend( testElementStyle, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                  });
                }
                for ( i in testElementStyle ) {
                  testElement.style[ i ] = testElementStyle[ i ];
                }
                testElement.appendChild( div );
                testElementParent = body || document.documentElement;
                testElementParent.insertBefore( testElement, testElementParent.firstChild );

                div.style.cssText = "position: absolute; left: 10.7432222px;";

                offsetLeft = $( div ).offset().left;
                supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

                testElement.innerHTML = "";
                testElementParent.removeChild( testElement );
              })();

            })();

            var position = $.ui.position;


            /*!
            * jQuery UI Effects 1.11.2
            * http://jqueryui.com
            *
            * Copyright 2014 jQuery Foundation and other contributors
            * Released under the MIT license.
            * http://jquery.org/license
            *
            * http://api.jqueryui.com/category/effects-core/
            */


            var dataSpace = "ui-effects-",

            // Create a local jQuery because jQuery Color relies on it and the
            // global may not exist with AMD and a custom build (#10199)
            jQuery = $;

            $.effects = {
              effect: {}
            };

            /*!
            * jQuery Color Animations v2.1.2
            * https://github.com/jquery/jquery-color
            *
            * Copyright 2014 jQuery Foundation and other contributors
            * Released under the MIT license.
            * http://jquery.org/license
            *
            * Date: Wed Jan 16 08:47:09 2013 -0600
            */
            (function( jQuery, undefined ) {

              var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

              // plusequals test for += 100 -= 100
              rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
              // a set of RE's that can match strings and generate color tuples.
              stringParsers = [ {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                  return [
                  execResult[ 1 ],
                  execResult[ 2 ],
                  execResult[ 3 ],
                  execResult[ 4 ]
                  ];
                }
              }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                  return [
                  execResult[ 1 ] * 2.55,
                  execResult[ 2 ] * 2.55,
                  execResult[ 3 ] * 2.55,
                  execResult[ 4 ]
                  ];
                }
              }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function( execResult ) {
                  return [
                  parseInt( execResult[ 1 ], 16 ),
                  parseInt( execResult[ 2 ], 16 ),
                  parseInt( execResult[ 3 ], 16 )
                  ];
                }
              }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function( execResult ) {
                  return [
                  parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                  parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                  parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                  ];
                }
              }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function( execResult ) {
                  return [
                  execResult[ 1 ],
                  execResult[ 2 ] / 100,
                  execResult[ 3 ] / 100,
                  execResult[ 4 ]
                  ];
                }
              } ],

              // jQuery.Color( )
              color = jQuery.Color = function( color, green, blue, alpha ) {
                return new jQuery.Color.fn.parse( color, green, blue, alpha );
              },
              spaces = {
                rgba: {
                  props: {
                    red: {
                      idx: 0,
                      type: "byte"
                    },
                    green: {
                      idx: 1,
                      type: "byte"
                    },
                    blue: {
                      idx: 2,
                      type: "byte"
                    }
                  }
                },

                hsla: {
                  props: {
                    hue: {
                      idx: 0,
                      type: "degrees"
                    },
                    saturation: {
                      idx: 1,
                      type: "percent"
                    },
                    lightness: {
                      idx: 2,
                      type: "percent"
                    }
                  }
                }
              },
              propTypes = {
                "byte": {
                  floor: true,
                  max: 255
                },
                "percent": {
                  max: 1
                },
                "degrees": {
                  mod: 360,
                  floor: true
                }
              },
              support = color.support = {},

              // element for support tests
              supportElem = jQuery( "<p>" )[ 0 ],

              // colors = jQuery.Color.names
              colors,

              // local aliases of functions called often
              each = jQuery.each;

              // determine rgba support immediately
              supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
              support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

              // define cache name and alpha properties
              // for rgba and hsla spaces
              each( spaces, function( spaceName, space ) {
                space.cache = "_" + spaceName;
                space.props.alpha = {
                  idx: 3,
                  type: "percent",
                  def: 1
                };
              });

              function clamp( value, prop, allowEmpty ) {
                var type = propTypes[ prop.type ] || {};

                if ( value == null ) {
                  return (allowEmpty || !prop.def) ? null : prop.def;
                }

                // ~~ is an short way of doing floor for positive numbers
                value = type.floor ? ~~value : parseFloat( value );

                // IE will pass in empty strings as value for alpha,
                // which will hit this case
                if ( isNaN( value ) ) {
                  return prop.def;
                }

                if ( type.mod ) {
                  // we add mod before modding to make sure that negatives values
                  // get converted properly: -10 -> 350
                  return (value + type.mod) % type.mod;
                }

                // for now all property types without mod have min and max
                return 0 > value ? 0 : type.max < value ? type.max : value;
              }

              function stringParse( string ) {
                var inst = color(),
                rgba = inst._rgba = [];

                string = string.toLowerCase();

                each( stringParsers, function( i, parser ) {
                  var parsed,
                  match = parser.re.exec( string ),
                  values = match && parser.parse( match ),
                  spaceName = parser.space || "rgba";

                  if ( values ) {
                    parsed = inst[ spaceName ]( values );

                    // if this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                    rgba = inst._rgba = parsed._rgba;

                    // exit each( stringParsers ) here because we matched
                    return false;
                  }
                });

                // Found a stringParser that handled it
                if ( rgba.length ) {

                  // if this came from a parsed string, force "transparent" when alpha is 0
                  // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                  if ( rgba.join() === "0,0,0,0" ) {
                    jQuery.extend( rgba, colors.transparent );
                  }
                  return inst;
                }

                // named colors
                return colors[ string ];
              }

              color.fn = jQuery.extend( color.prototype, {
                parse: function( red, green, blue, alpha ) {
                  if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                  }
                  if ( red.jquery || red.nodeType ) {
                    red = jQuery( red ).css( green );
                    green = undefined;
                  }

                  var inst = this,
                  type = jQuery.type( red ),
                  rgba = this._rgba = [];

                  // more than 1 argument specified - assume ( red, green, blue, alpha )
                  if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                  }

                  if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                  }

                  if ( type === "array" ) {
                    each( spaces.rgba.props, function( key, prop ) {
                      rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    });
                    return this;
                  }

                  if ( type === "object" ) {
                    if ( red instanceof color ) {
                      each( spaces, function( spaceName, space ) {
                        if ( red[ space.cache ] ) {
                          inst[ space.cache ] = red[ space.cache ].slice();
                        }
                      });
                    } else {
                      each( spaces, function( spaceName, space ) {
                        var cache = space.cache;
                        each( space.props, function( key, prop ) {

                          // if the cache doesn't exist, and we know how to convert
                          if ( !inst[ cache ] && space.to ) {

                            // if the value was null, we don't need to copy it
                            // if the key was alpha, we don't need to copy it either
                            if ( key === "alpha" || red[ key ] == null ) {
                              return;
                            }
                            inst[ cache ] = space.to( inst._rgba );
                          }

                          // this is the only case where we allow nulls for ALL properties.
                          // call clamp with alwaysAllowEmpty
                          inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                        });

                        // everything defined but alpha?
                        if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
                          // use the default of 1
                          inst[ cache ][ 3 ] = 1;
                          if ( space.from ) {
                            inst._rgba = space.from( inst[ cache ] );
                          }
                        }
                      });
                    }
                    return this;
                  }
                },
                is: function( compare ) {
                  var is = color( compare ),
                  same = true,
                  inst = this;

                  each( spaces, function( _, space ) {
                    var localCache,
                    isCache = is[ space.cache ];
                    if (isCache) {
                      localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                      each( space.props, function( _, prop ) {
                        if ( isCache[ prop.idx ] != null ) {
                          same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                          return same;
                        }
                      });
                    }
                    return same;
                  });
                  return same;
                },
                _space: function() {
                  var used = [],
                  inst = this;
                  each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                      used.push( spaceName );
                    }
                  });
                  return used.pop();
                },
                transition: function( other, distance ) {
                  var end = color( other ),
                  spaceName = end._space(),
                  space = spaces[ spaceName ],
                  startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                  start = startColor[ space.cache ] || space.to( startColor._rgba ),
                  result = start.slice();

                  end = end[ space.cache ];
                  each( space.props, function( key, prop ) {
                    var index = prop.idx,
                    startValue = start[ index ],
                    endValue = end[ index ],
                    type = propTypes[ prop.type ] || {};

                    // if null, don't override start value
                    if ( endValue === null ) {
                      return;
                    }
                    // if null - use end
                    if ( startValue === null ) {
                      result[ index ] = endValue;
                    } else {
                      if ( type.mod ) {
                        if ( endValue - startValue > type.mod / 2 ) {
                          startValue += type.mod;
                        } else if ( startValue - endValue > type.mod / 2 ) {
                          startValue -= type.mod;
                        }
                      }
                      result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                  });
                  return this[ spaceName ]( result );
                },
                blend: function( opaque ) {
                  // if we are already opaque - return ourself
                  if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                  }

                  var rgb = this._rgba.slice(),
                  a = rgb.pop(),
                  blend = color( opaque )._rgba;

                  return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                  }));
                },
                toRgbaString: function() {
                  var prefix = "rgba(",
                  rgba = jQuery.map( this._rgba, function( v, i ) {
                    return v == null ? ( i > 2 ? 1 : 0 ) : v;
                  });

                  if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                  }

                  return prefix + rgba.join() + ")";
                },
                toHslaString: function() {
                  var prefix = "hsla(",
                  hsla = jQuery.map( this.hsla(), function( v, i ) {
                    if ( v == null ) {
                      v = i > 2 ? 1 : 0;
                    }

                    // catch 1 and 2
                    if ( i && i < 3 ) {
                      v = Math.round( v * 100 ) + "%";
                    }
                    return v;
                  });

                  if ( hsla[ 3 ] === 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                  }
                  return prefix + hsla.join() + ")";
                },
                toHexString: function( includeAlpha ) {
                  var rgba = this._rgba.slice(),
                  alpha = rgba.pop();

                  if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                  }

                  return "#" + jQuery.map( rgba, function( v ) {

                    // default to 0 when nulls exist
                    v = ( v || 0 ).toString( 16 );
                    return v.length === 1 ? "0" + v : v;
                  }).join("");
                },
                toString: function() {
                  return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
                }
              });
              color.fn.parse.prototype = color.fn;

              // hsla conversions adapted from:
              // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

              function hue2rgb( p, q, h ) {
                h = ( h + 1 ) % 1;
                if ( h * 6 < 1 ) {
                  return p + ( q - p ) * h * 6;
                }
                if ( h * 2 < 1) {
                  return q;
                }
                if ( h * 3 < 2 ) {
                  return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
                }
                return p;
              }

              spaces.hsla.to = function( rgba ) {
                if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                  return [ null, null, null, rgba[ 3 ] ];
                }
                var r = rgba[ 0 ] / 255,
                g = rgba[ 1 ] / 255,
                b = rgba[ 2 ] / 255,
                a = rgba[ 3 ],
                max = Math.max( r, g, b ),
                min = Math.min( r, g, b ),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;

                if ( min === max ) {
                  h = 0;
                } else if ( r === max ) {
                  h = ( 60 * ( g - b ) / diff ) + 360;
                } else if ( g === max ) {
                  h = ( 60 * ( b - r ) / diff ) + 120;
                } else {
                  h = ( 60 * ( r - g ) / diff ) + 240;
                }

                // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
                // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
                if ( diff === 0 ) {
                  s = 0;
                } else if ( l <= 0.5 ) {
                  s = diff / add;
                } else {
                  s = diff / ( 2 - add );
                }
                return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
              };

              spaces.hsla.from = function( hsla ) {
                if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                  return [ null, null, null, hsla[ 3 ] ];
                }
                var h = hsla[ 0 ] / 360,
                s = hsla[ 1 ],
                l = hsla[ 2 ],
                a = hsla[ 3 ],
                q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
                p = 2 * l - q;

                return [
                Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
                Math.round( hue2rgb( p, q, h ) * 255 ),
                Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
                a
                ];
              };

              each( spaces, function( spaceName, space ) {
                var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;

                // makes rgba() and hsla()
                color.fn[ spaceName ] = function( value ) {

                  // generate a cache for this space if it doesn't exist
                  if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                  }
                  if ( value === undefined ) {
                    return this[ cache ].slice();
                  }

                  var ret,
                  type = jQuery.type( value ),
                  arr = ( type === "array" || type === "object" ) ? value : arguments,
                  local = this[ cache ].slice();

                  each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                      val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                  });

                  if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                  } else {
                    return color( local );
                  }
                };

                // makes red() green() blue() alpha() hue() saturation() lightness()
                each( props, function( key, prop ) {
                  // alpha is included in more than one space
                  if ( color.fn[ key ] ) {
                    return;
                  }
                  color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                    fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                    local = this[ fn ](),
                    cur = local[ prop.idx ],
                    match;

                    if ( vtype === "undefined" ) {
                      return cur;
                    }

                    if ( vtype === "function" ) {
                      value = value.call( this, cur );
                      vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                      return this;
                    }
                    if ( vtype === "string" ) {
                      match = rplusequals.exec( value );
                      if ( match ) {
                        value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                      }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                  };
                });
              });

              // add cssHook and .fx.step function for each named hook.
              // accept a space separated string of properties
              color.hook = function( hook ) {
                var hooks = hook.split( " " );
                each( hooks, function( i, hook ) {
                  jQuery.cssHooks[ hook ] = {
                    set: function( elem, value ) {
                      var parsed, curElem,
                      backgroundColor = "";

                      if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
                        value = color( parsed || value );
                        if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                          curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                          while (
                            (backgroundColor === "" || backgroundColor === "transparent") &&
                            curElem && curElem.style
                          ) {
                            try {
                              backgroundColor = jQuery.css( curElem, "backgroundColor" );
                              curElem = curElem.parentNode;
                            } catch ( e ) {
                            }
                          }

                          value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                          backgroundColor :
                          "_default" );
                        }

                        value = value.toRgbaString();
                      }
                      try {
                        elem.style[ hook ] = value;
                      } catch ( e ) {
                        // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                      }
                    }
                  };
                  jQuery.fx.step[ hook ] = function( fx ) {
                    if ( !fx.colorInit ) {
                      fx.start = color( fx.elem, hook );
                      fx.end = color( fx.end );
                      fx.colorInit = true;
                    }
                    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
                  };
                });

              };

              color.hook( stepHooks );

              jQuery.cssHooks.borderColor = {
                expand: function( value ) {
                  var expanded = {};

                  each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                    expanded[ "border" + part + "Color" ] = value;
                  });
                  return expanded;
                }
              };

              // Basic color names only.
              // Usage of any of the other color names requires adding yourself or including
              // jquery.color.svg-names.js.
              colors = jQuery.Color.names = {
                // 4.1. Basic color keywords
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",

                // 4.2.3. "transparent" color keyword
                transparent: [ null, null, null, 0 ],

                _default: "#ffffff"
              };

            })( jQuery );

            /******************************************************************************/
            /****************************** CLASS ANIMATIONS ******************************/
            /******************************************************************************/
            (function() {

              var classAnimationActions = [ "add", "remove", "toggle" ],
              shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
              };

              $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
                $.fx.step[ prop ] = function( fx ) {
                  if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
                    jQuery.style( fx.elem, prop, fx.end );
                    fx.setAttr = true;
                  }
                };
              });

              function getElementStyles( elem ) {
                var key, len,
                style = elem.ownerDocument.defaultView ?
                elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
                elem.currentStyle,
                styles = {};

                if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
                  len = style.length;
                  while ( len-- ) {
                    key = style[ len ];
                    if ( typeof style[ key ] === "string" ) {
                      styles[ $.camelCase( key ) ] = style[ key ];
                    }
                  }
                  // support: Opera, IE <9
                } else {
                  for ( key in style ) {
                    if ( typeof style[ key ] === "string" ) {
                      styles[ key ] = style[ key ];
                    }
                  }
                }

                return styles;
              }

              function styleDifference( oldStyle, newStyle ) {
                var diff = {},
                name, value;

                for ( name in newStyle ) {
                  value = newStyle[ name ];
                  if ( oldStyle[ name ] !== value ) {
                    if ( !shorthandStyles[ name ] ) {
                      if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
                        diff[ name ] = value;
                      }
                    }
                  }
                }

                return diff;
              }

              // support: jQuery <1.8
              if ( !$.fn.addBack ) {
                $.fn.addBack = function( selector ) {
                  return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter( selector )
                  );
                };
              }

              $.effects.animateClass = function( value, duration, easing, callback ) {
                var o = $.speed( duration, easing, callback );

                return this.queue( function() {
                  var animated = $( this ),
                  baseClass = animated.attr( "class" ) || "",
                  applyClassChange,
                  allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

                  // map the animated objects to store the original styles.
                  allAnimations = allAnimations.map(function() {
                    var el = $( this );
                    return {
                      el: el,
                      start: getElementStyles( this )
                    };
                  });

                  // apply class change
                  applyClassChange = function() {
                    $.each( classAnimationActions, function(i, action) {
                      if ( value[ action ] ) {
                        animated[ action + "Class" ]( value[ action ] );
                      }
                    });
                  };
                  applyClassChange();

                  // map all animated objects again - calculate new styles and diff
                  allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles( this.el[ 0 ] );
                    this.diff = styleDifference( this.start, this.end );
                    return this;
                  });

                  // apply original class
                  animated.attr( "class", baseClass );

                  // map all animated objects again - this time collecting a promise
                  allAnimations = allAnimations.map(function() {
                    var styleInfo = this,
                    dfd = $.Deferred(),
                    opts = $.extend({}, o, {
                      queue: false,
                      complete: function() {
                        dfd.resolve( styleInfo );
                      }
                    });

                    this.el.animate( this.diff, opts );
                    return dfd.promise();
                  });

                  // once all animations have completed:
                  $.when.apply( $, allAnimations.get() ).done(function() {

                    // set the final class
                    applyClassChange();

                    // for each animated element,
                    // clear all css properties that were animated
                    $.each( arguments, function() {
                      var el = this.el;
                      $.each( this.diff, function(key) {
                        el.css( key, "" );
                      });
                    });

                    // this is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call( animated[ 0 ] );
                  });
                });
              };

              $.fn.extend({
                addClass: (function( orig ) {
                  return function( classNames, speed, easing, callback ) {
                    return speed ?
                    $.effects.animateClass.call( this,
                      { add: classNames }, speed, easing, callback ) :
                      orig.apply( this, arguments );
                    };
                  })( $.fn.addClass ),

                  removeClass: (function( orig ) {
                    return function( classNames, speed, easing, callback ) {
                      return arguments.length > 1 ?
                      $.effects.animateClass.call( this,
                        { remove: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                      };
                    })( $.fn.removeClass ),

                    toggleClass: (function( orig ) {
                      return function( classNames, force, speed, easing, callback ) {
                        if ( typeof force === "boolean" || force === undefined ) {
                          if ( !speed ) {
                            // without speed parameter
                            return orig.apply( this, arguments );
                          } else {
                            return $.effects.animateClass.call( this,
                              (force ? { add: classNames } : { remove: classNames }),
                              speed, easing, callback );
                            }
                          } else {
                            // without force parameter
                            return $.effects.animateClass.call( this,
                              { toggle: classNames }, force, speed, easing );
                            }
                          };
                        })( $.fn.toggleClass ),

                        switchClass: function( remove, add, speed, easing, callback) {
                          return $.effects.animateClass.call( this, {
                            add: add,
                            remove: remove
                          }, speed, easing, callback );
                        }
                      });

                    })();

                    /******************************************************************************/
                    /*********************************** EFFECTS **********************************/
                    /******************************************************************************/

                    (function() {

                      $.extend( $.effects, {
                        version: "1.11.2",

                        // Saves a set of properties in a data storage
                        save: function( element, set ) {
                          for ( var i = 0; i < set.length; i++ ) {
                            if ( set[ i ] !== null ) {
                              element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                            }
                          }
                        },

                        // Restores a set of previously saved properties from a data storage
                        restore: function( element, set ) {
                          var val, i;
                          for ( i = 0; i < set.length; i++ ) {
                            if ( set[ i ] !== null ) {
                              val = element.data( dataSpace + set[ i ] );
                              // support: jQuery 1.6.2
                              // http://bugs.jquery.com/ticket/9917
                              // jQuery 1.6.2 incorrectly returns undefined for any falsy value.
                              // We can't differentiate between "" and 0 here, so we just assume
                              // empty string since it's likely to be a more common value...
                              if ( val === undefined ) {
                                val = "";
                              }
                              element.css( set[ i ], val );
                            }
                          }
                        },

                        setMode: function( el, mode ) {
                          if (mode === "toggle") {
                            mode = el.is( ":hidden" ) ? "show" : "hide";
                          }
                          return mode;
                        },

                        // Translates a [top,left] array into a baseline value
                        // this should be a little more flexible in the future to handle a string & hash
                        getBaseline: function( origin, original ) {
                          var y, x;
                          switch ( origin[ 0 ] ) {
                            case "top": y = 0; break;
                            case "middle": y = 0.5; break;
                            case "bottom": y = 1; break;
                            default: y = origin[ 0 ] / original.height;
                          }
                          switch ( origin[ 1 ] ) {
                            case "left": x = 0; break;
                            case "center": x = 0.5; break;
                            case "right": x = 1; break;
                            default: x = origin[ 1 ] / original.width;
                          }
                          return {
                            x: x,
                            y: y
                          };
                        },

                        // Wraps the element around a wrapper that copies position properties
                        createWrapper: function( element ) {

                          // if the element is already wrapped, return it
                          if ( element.parent().is( ".ui-effects-wrapper" )) {
                            return element.parent();
                          }

                          // wrap the element
                          var props = {
                            width: element.outerWidth(true),
                            height: element.outerHeight(true),
                            "float": element.css( "float" )
                          },
                          wrapper = $( "<div></div>" )
                          .addClass( "ui-effects-wrapper" )
                          .css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                          }),
                          // Store the size in case width/height are defined in % - Fixes #5245
                          size = {
                            width: element.width(),
                            height: element.height()
                          },
                          active = document.activeElement;

                          // support: Firefox
                          // Firefox incorrectly exposes anonymous content
                          // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                          try {
                            active.id;
                          } catch ( e ) {
                            active = document.body;
                          }

                          element.wrap( wrapper );

                          // Fixes #7595 - Elements lose focus when wrapped.
                          if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                            $( active ).focus();
                          }

                          wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

                          // transfer positioning properties to the wrapper
                          if ( element.css( "position" ) === "static" ) {
                            wrapper.css({ position: "relative" });
                            element.css({ position: "relative" });
                          } else {
                            $.extend( props, {
                              position: element.css( "position" ),
                              zIndex: element.css( "z-index" )
                            });
                            $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                              props[ pos ] = element.css( pos );
                              if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                                props[ pos ] = "auto";
                              }
                            });
                            element.css({
                              position: "relative",
                              top: 0,
                              left: 0,
                              right: "auto",
                              bottom: "auto"
                            });
                          }
                          element.css(size);

                          return wrapper.css( props ).show();
                        },

                        removeWrapper: function( element ) {
                          var active = document.activeElement;

                          if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                            element.parent().replaceWith( element );

                            // Fixes #7595 - Elements lose focus when wrapped.
                            if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                              $( active ).focus();
                            }
                          }

                          return element;
                        },

                        setTransition: function( element, list, factor, value ) {
                          value = value || {};
                          $.each( list, function( i, x ) {
                            var unit = element.cssUnit( x );
                            if ( unit[ 0 ] > 0 ) {
                              value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
                            }
                          });
                          return value;
                        }
                      });

                      // return an effect options object for the given parameters:
                      function _normalizeArguments( effect, options, speed, callback ) {

                        // allow passing all options as the first parameter
                        if ( $.isPlainObject( effect ) ) {
                          options = effect;
                          effect = effect.effect;
                        }

                        // convert to an object
                        effect = { effect: effect };

                        // catch (effect, null, ...)
                        if ( options == null ) {
                          options = {};
                        }

                        // catch (effect, callback)
                        if ( $.isFunction( options ) ) {
                          callback = options;
                          speed = null;
                          options = {};
                        }

                        // catch (effect, speed, ?)
                        if ( typeof options === "number" || $.fx.speeds[ options ] ) {
                          callback = speed;
                          speed = options;
                          options = {};
                        }

                        // catch (effect, options, callback)
                        if ( $.isFunction( speed ) ) {
                          callback = speed;
                          speed = null;
                        }

                        // add options to effect
                        if ( options ) {
                          $.extend( effect, options );
                        }

                        speed = speed || options.duration;
                        effect.duration = $.fx.off ? 0 :
                        typeof speed === "number" ? speed :
                        speed in $.fx.speeds ? $.fx.speeds[ speed ] :
                        $.fx.speeds._default;

                        effect.complete = callback || options.complete;

                        return effect;
                      }

                      function standardAnimationOption( option ) {
                        // Valid standard speeds (nothing, number, named speed)
                        if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
                          return true;
                        }

                        // Invalid strings - treat as "normal" speed
                        if ( typeof option === "string" && !$.effects.effect[ option ] ) {
                          return true;
                        }

                        // Complete callback
                        if ( $.isFunction( option ) ) {
                          return true;
                        }

                        // Options hash (but not naming an effect)
                        if ( typeof option === "object" && !option.effect ) {
                          return true;
                        }

                        // Didn't match any standard API
                        return false;
                      }

                      $.fn.extend({
                        effect: function( /* effect, options, speed, callback */ ) {
                          var args = _normalizeArguments.apply( this, arguments ),
                          mode = args.mode,
                          queue = args.queue,
                          effectMethod = $.effects.effect[ args.effect ];

                          if ( $.fx.off || !effectMethod ) {
                            // delegate to the original method (e.g., .show()) if possible
                            if ( mode ) {
                              return this[ mode ]( args.duration, args.complete );
                            } else {
                              return this.each( function() {
                                if ( args.complete ) {
                                  args.complete.call( this );
                                }
                              });
                            }
                          }

                          function run( next ) {
                            var elem = $( this ),
                            complete = args.complete,
                            mode = args.mode;

                            function done() {
                              if ( $.isFunction( complete ) ) {
                                complete.call( elem[0] );
                              }
                              if ( $.isFunction( next ) ) {
                                next();
                              }
                            }

                            // If the element already has the correct final state, delegate to
                            // the core methods so the internal tracking of "olddisplay" works.
                            if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
                              elem[ mode ]();
                              done();
                            } else {
                              effectMethod.call( elem[0], args, done );
                            }
                          }

                          return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
                        },

                        show: (function( orig ) {
                          return function( option ) {
                            if ( standardAnimationOption( option ) ) {
                              return orig.apply( this, arguments );
                            } else {
                              var args = _normalizeArguments.apply( this, arguments );
                              args.mode = "show";
                              return this.effect.call( this, args );
                            }
                          };
                        })( $.fn.show ),

                        hide: (function( orig ) {
                          return function( option ) {
                            if ( standardAnimationOption( option ) ) {
                              return orig.apply( this, arguments );
                            } else {
                              var args = _normalizeArguments.apply( this, arguments );
                              args.mode = "hide";
                              return this.effect.call( this, args );
                            }
                          };
                        })( $.fn.hide ),

                        toggle: (function( orig ) {
                          return function( option ) {
                            if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
                              return orig.apply( this, arguments );
                            } else {
                              var args = _normalizeArguments.apply( this, arguments );
                              args.mode = "toggle";
                              return this.effect.call( this, args );
                            }
                          };
                        })( $.fn.toggle ),

                        // helper functions
                        cssUnit: function(key) {
                          var style = this.css( key ),
                          val = [];

                          $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
                            if ( style.indexOf( unit ) > 0 ) {
                              val = [ parseFloat( style ), unit ];
                            }
                          });
                          return val;
                        }
                      });

                    })();

                    /******************************************************************************/
                    /*********************************** EASING ***********************************/
                    /******************************************************************************/

                    (function() {

                      // based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

                      var baseEasings = {};

                      $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
                        baseEasings[ name ] = function( p ) {
                          return Math.pow( p, i + 2 );
                        };
                      });

                      $.extend( baseEasings, {
                        Sine: function( p ) {
                          return 1 - Math.cos( p * Math.PI / 2 );
                        },
                        Circ: function( p ) {
                          return 1 - Math.sqrt( 1 - p * p );
                        },
                        Elastic: function( p ) {
                          return p === 0 || p === 1 ? p :
                          -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
                        },
                        Back: function( p ) {
                          return p * p * ( 3 * p - 2 );
                        },
                        Bounce: function( p ) {
                          var pow2,
                          bounce = 4;

                          while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
                            return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
                          }
                        });

                        $.each( baseEasings, function( name, easeIn ) {
                          $.easing[ "easeIn" + name ] = easeIn;
                          $.easing[ "easeOut" + name ] = function( p ) {
                            return 1 - easeIn( 1 - p );
                          };
                          $.easing[ "easeInOut" + name ] = function( p ) {
                            return p < 0.5 ?
                            easeIn( p * 2 ) / 2 :
                            1 - easeIn( p * -2 + 2 ) / 2;
                          };
                        });

                      })();

                      var effect = $.effects;


                      /*!
                      * jQuery UI Effects Highlight 1.11.2
                      * http://jqueryui.com
                      *
                      * Copyright 2014 jQuery Foundation and other contributors
                      * Released under the MIT license.
                      * http://jquery.org/license
                      *
                      * http://api.jqueryui.com/highlight-effect/
                      */


                      var effectHighlight = $.effects.effect.highlight = function( o, done ) {
                        var elem = $( this ),
                        props = [ "backgroundImage", "backgroundColor", "opacity" ],
                        mode = $.effects.setMode( elem, o.mode || "show" ),
                        animation = {
                          backgroundColor: elem.css( "backgroundColor" )
                        };

                        if (mode === "hide") {
                          animation.opacity = 0;
                        }

                        $.effects.save( elem, props );

                        elem
                        .show()
                        .css({
                          backgroundImage: "none",
                          backgroundColor: o.color || "#ffff99"
                        })
                        .animate( animation, {
                          queue: false,
                          duration: o.duration,
                          easing: o.easing,
                          complete: function() {
                            if ( mode === "hide" ) {
                              elem.hide();
                            }
                            $.effects.restore( elem, props );
                            done();
                          }
                        });
                      };


                      /*!
                      * jQuery UI Effects Size 1.11.2
                      * http://jqueryui.com
                      *
                      * Copyright 2014 jQuery Foundation and other contributors
                      * Released under the MIT license.
                      * http://jquery.org/license
                      *
                      * http://api.jqueryui.com/size-effect/
                      */


                      var effectSize = $.effects.effect.size = function( o, done ) {

                        // Create element
                        var original, baseline, factor,
                        el = $( this ),
                        props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

                        // Always restore
                        props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

                        // Copy for children
                        props2 = [ "width", "height", "overflow" ],
                        cProps = [ "fontSize" ],
                        vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
                        hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

                        // Set options
                        mode = $.effects.setMode( el, o.mode || "effect" ),
                        restore = o.restore || mode !== "effect",
                        scale = o.scale || "both",
                        origin = o.origin || [ "middle", "center" ],
                        position = el.css( "position" ),
                        props = restore ? props0 : props1,
                        zero = {
                          height: 0,
                          width: 0,
                          outerHeight: 0,
                          outerWidth: 0
                        };

                        if ( mode === "show" ) {
                          el.show();
                        }
                        original = {
                          height: el.height(),
                          width: el.width(),
                          outerHeight: el.outerHeight(),
                          outerWidth: el.outerWidth()
                        };

                        if ( o.mode === "toggle" && mode === "show" ) {
                          el.from = o.to || zero;
                          el.to = o.from || original;
                        } else {
                          el.from = o.from || ( mode === "show" ? zero : original );
                          el.to = o.to || ( mode === "hide" ? zero : original );
                        }

                        // Set scaling factor
                        factor = {
                          from: {
                            y: el.from.height / original.height,
                            x: el.from.width / original.width
                          },
                          to: {
                            y: el.to.height / original.height,
                            x: el.to.width / original.width
                          }
                        };

                        // Scale the css box
                        if ( scale === "box" || scale === "both" ) {

                          // Vertical props scaling
                          if ( factor.from.y !== factor.to.y ) {
                            props = props.concat( vProps );
                            el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
                            el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
                          }

                          // Horizontal props scaling
                          if ( factor.from.x !== factor.to.x ) {
                            props = props.concat( hProps );
                            el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
                            el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
                          }
                        }

                        // Scale the content
                        if ( scale === "content" || scale === "both" ) {

                          // Vertical props scaling
                          if ( factor.from.y !== factor.to.y ) {
                            props = props.concat( cProps ).concat( props2 );
                            el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
                            el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
                          }
                        }

                        $.effects.save( el, props );
                        el.show();
                        $.effects.createWrapper( el );
                        el.css( "overflow", "hidden" ).css( el.from );

                        // Adjust
                        if (origin) { // Calculate baseline shifts
                          baseline = $.effects.getBaseline( origin, original );
                          el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
                          el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
                          el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
                          el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
                        }
                        el.css( el.from ); // set top & left

                        // Animate
                        if ( scale === "content" || scale === "both" ) { // Scale the children

                          // Add margins/font-size
                          vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
                          hProps = hProps.concat([ "marginLeft", "marginRight" ]);
                          props2 = props0.concat(vProps).concat(hProps);

                          el.find( "*[width]" ).each( function() {
                            var child = $( this ),
                            c_original = {
                              height: child.height(),
                              width: child.width(),
                              outerHeight: child.outerHeight(),
                              outerWidth: child.outerWidth()
                            };
                            if (restore) {
                              $.effects.save(child, props2);
                            }

                            child.from = {
                              height: c_original.height * factor.from.y,
                              width: c_original.width * factor.from.x,
                              outerHeight: c_original.outerHeight * factor.from.y,
                              outerWidth: c_original.outerWidth * factor.from.x
                            };
                            child.to = {
                              height: c_original.height * factor.to.y,
                              width: c_original.width * factor.to.x,
                              outerHeight: c_original.height * factor.to.y,
                              outerWidth: c_original.width * factor.to.x
                            };

                            // Vertical props scaling
                            if ( factor.from.y !== factor.to.y ) {
                              child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
                              child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
                            }

                            // Horizontal props scaling
                            if ( factor.from.x !== factor.to.x ) {
                              child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
                              child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
                            }

                            // Animate children
                            child.css( child.from );
                            child.animate( child.to, o.duration, o.easing, function() {

                              // Restore children
                              if ( restore ) {
                                $.effects.restore( child, props2 );
                              }
                            });
                          });
                        }

                        // Animate
                        el.animate( el.to, {
                          queue: false,
                          duration: o.duration,
                          easing: o.easing,
                          complete: function() {
                            if ( el.to.opacity === 0 ) {
                              el.css( "opacity", el.from.opacity );
                            }
                            if ( mode === "hide" ) {
                              el.hide();
                            }
                            $.effects.restore( el, props );
                            if ( !restore ) {

                              // we need to calculate our new positioning based on the scaling
                              if ( position === "static" ) {
                                el.css({
                                  position: "relative",
                                  top: el.to.top,
                                  left: el.to.left
                                });
                              } else {
                                $.each([ "top", "left" ], function( idx, pos ) {
                                  el.css( pos, function( _, str ) {
                                    var val = parseInt( str, 10 ),
                                    toRef = idx ? el.to.left : el.to.top;

                                    // if original was "auto", recalculate the new value from wrapper
                                    if ( str === "auto" ) {
                                      return toRef + "px";
                                    }

                                    return val + toRef + "px";
                                  });
                                });
                              }
                            }

                            $.effects.removeWrapper( el );
                            done();
                          }
                        });

                      };


                      /*!
                      * jQuery UI Effects Scale 1.11.2
                      * http://jqueryui.com
                      *
                      * Copyright 2014 jQuery Foundation and other contributors
                      * Released under the MIT license.
                      * http://jquery.org/license
                      *
                      * http://api.jqueryui.com/scale-effect/
                      */


                      var effectScale = $.effects.effect.scale = function( o, done ) {

                        // Create element
                        var el = $( this ),
                        options = $.extend( true, {}, o ),
                        mode = $.effects.setMode( el, o.mode || "effect" ),
                        percent = parseInt( o.percent, 10 ) ||
                        ( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
                        direction = o.direction || "both",
                        origin = o.origin,
                        original = {
                          height: el.height(),
                          width: el.width(),
                          outerHeight: el.outerHeight(),
                          outerWidth: el.outerWidth()
                        },
                        factor = {
                          y: direction !== "horizontal" ? (percent / 100) : 1,
                          x: direction !== "vertical" ? (percent / 100) : 1
                        };

                        // We are going to pass this effect to the size effect:
                        options.effect = "size";
                        options.queue = false;
                        options.complete = done;

                        // Set default origin and restore for show/hide
                        if ( mode !== "effect" ) {
                          options.origin = origin || [ "middle", "center" ];
                          options.restore = true;
                        }

                        options.from = o.from || ( mode === "show" ? {
                          height: 0,
                          width: 0,
                          outerHeight: 0,
                          outerWidth: 0
                        } : original );
                        options.to = {
                          height: original.height * factor.y,
                          width: original.width * factor.x,
                          outerHeight: original.outerHeight * factor.y,
                          outerWidth: original.outerWidth * factor.x
                        };

                        // Fade option to support puff
                        if ( options.fade ) {
                          if ( mode === "show" ) {
                            options.from.opacity = 0;
                            options.to.opacity = 1;
                          }
                          if ( mode === "hide" ) {
                            options.from.opacity = 1;
                            options.to.opacity = 0;
                          }
                        }

                        // Animate
                        el.effect( options );

                      };


                      /*!
                      * jQuery UI Effects Puff 1.11.2
                      * http://jqueryui.com
                      *
                      * Copyright 2014 jQuery Foundation and other contributors
                      * Released under the MIT license.
                      * http://jquery.org/license
                      *
                      * http://api.jqueryui.com/puff-effect/
                      */


                      var effectPuff = $.effects.effect.puff = function( o, done ) {
                        var elem = $( this ),
                        mode = $.effects.setMode( elem, o.mode || "hide" ),
                        hide = mode === "hide",
                        percent = parseInt( o.percent, 10 ) || 150,
                        factor = percent / 100,
                        original = {
                          height: elem.height(),
                          width: elem.width(),
                          outerHeight: elem.outerHeight(),
                          outerWidth: elem.outerWidth()
                        };

                        $.extend( o, {
                          effect: "scale",
                          queue: false,
                          fade: true,
                          mode: mode,
                          complete: done,
                          percent: hide ? percent : 100,
                          from: hide ?
                          original :
                          {
                            height: original.height * factor,
                            width: original.width * factor,
                            outerHeight: original.outerHeight * factor,
                            outerWidth: original.outerWidth * factor
                          }
                        });

                        elem.effect( o );
                      };


                      /*!
                      * jQuery UI Effects Pulsate 1.11.2
                      * http://jqueryui.com
                      *
                      * Copyright 2014 jQuery Foundation and other contributors
                      * Released under the MIT license.
                      * http://jquery.org/license
                      *
                      * http://api.jqueryui.com/pulsate-effect/
                      */


                      var effectPulsate = $.effects.effect.pulsate = function( o, done ) {
                        var elem = $( this ),
                        mode = $.effects.setMode( elem, o.mode || "show" ),
                        show = mode === "show",
                        hide = mode === "hide",
                        showhide = ( show || mode === "hide" ),

                        // showing or hiding leaves of the "last" animation
                        anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
                        duration = o.duration / anims,
                        animateTo = 0,
                        queue = elem.queue(),
                        queuelen = queue.length,
                        i;

                        if ( show || !elem.is(":visible")) {
                          elem.css( "opacity", 0 ).show();
                          animateTo = 1;
                        }

                        // anims - 1 opacity "toggles"
                        for ( i = 1; i < anims; i++ ) {
                          elem.animate({
                            opacity: animateTo
                          }, duration, o.easing );
                          animateTo = 1 - animateTo;
                        }

                        elem.animate({
                          opacity: animateTo
                        }, duration, o.easing);

                        elem.queue(function() {
                          if ( hide ) {
                            elem.hide();
                          }
                          done();
                        });

                        // We just queued up "anims" animations, we need to put them next in the queue
                        if ( queuelen > 1 ) {
                          queue.splice.apply( queue,
                            [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
                          }
                          elem.dequeue();
                        };


                        /*!
                        * jQuery UI Effects Shake 1.11.2
                        * http://jqueryui.com
                        *
                        * Copyright 2014 jQuery Foundation and other contributors
                        * Released under the MIT license.
                        * http://jquery.org/license
                        *
                        * http://api.jqueryui.com/shake-effect/
                        */


                        var effectShake = $.effects.effect.shake = function( o, done ) {

                          var el = $( this ),
                          props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
                          mode = $.effects.setMode( el, o.mode || "effect" ),
                          direction = o.direction || "left",
                          distance = o.distance || 20,
                          times = o.times || 3,
                          anims = times * 2 + 1,
                          speed = Math.round( o.duration / anims ),
                          ref = (direction === "up" || direction === "down") ? "top" : "left",
                          positiveMotion = (direction === "up" || direction === "left"),
                          animation = {},
                          animation1 = {},
                          animation2 = {},
                          i,

                          // we will need to re-assemble the queue to stack our animations in place
                          queue = el.queue(),
                          queuelen = queue.length;

                          $.effects.save( el, props );
                          el.show();
                          $.effects.createWrapper( el );

                          // Animation
                          animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
                          animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
                          animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

                          // Animate
                          el.animate( animation, speed, o.easing );

                          // Shakes
                          for ( i = 1; i < times; i++ ) {
                            el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
                          }
                          el
                          .animate( animation1, speed, o.easing )
                          .animate( animation, speed / 2, o.easing )
                          .queue(function() {
                            if ( mode === "hide" ) {
                              el.hide();
                            }
                            $.effects.restore( el, props );
                            $.effects.removeWrapper( el );
                            done();
                          });

                          // inject all the animations we just queued to be first in line (after "inprogress")
                          if ( queuelen > 1) {
                            queue.splice.apply( queue,
                              [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
                            }
                            el.dequeue();

                          };


                          /*!
                          * jQuery UI Effects Slide 1.11.2
                          * http://jqueryui.com
                          *
                          * Copyright 2014 jQuery Foundation and other contributors
                          * Released under the MIT license.
                          * http://jquery.org/license
                          *
                          * http://api.jqueryui.com/slide-effect/
                          */


                          var effectSlide = $.effects.effect.slide = function( o, done ) {

                            // Create element
                            var el = $( this ),
                            props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
                            mode = $.effects.setMode( el, o.mode || "show" ),
                            show = mode === "show",
                            direction = o.direction || "left",
                            ref = (direction === "up" || direction === "down") ? "top" : "left",
                            positiveMotion = (direction === "up" || direction === "left"),
                            distance,
                            animation = {};

                            // Adjust
                            $.effects.save( el, props );
                            el.show();
                            distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

                            $.effects.createWrapper( el ).css({
                              overflow: "hidden"
                            });

                            if ( show ) {
                              el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
                            }

                            // Animation
                            animation[ ref ] = ( show ?
                              ( positiveMotion ? "+=" : "-=") :
                              ( positiveMotion ? "-=" : "+=")) +
                              distance;

                              // Animate
                              el.animate( animation, {
                                queue: false,
                                duration: o.duration,
                                easing: o.easing,
                                complete: function() {
                                  if ( mode === "hide" ) {
                                    el.hide();
                                  }
                                  $.effects.restore( el, props );
                                  $.effects.removeWrapper( el );
                                  done();
                                }
                              });
                            };


                            /*!
                            * jQuery UI Effects Transfer 1.11.2
                            * http://jqueryui.com
                            *
                            * Copyright 2014 jQuery Foundation and other contributors
                            * Released under the MIT license.
                            * http://jquery.org/license
                            *
                            * http://api.jqueryui.com/transfer-effect/
                            */


                            var effectTransfer = $.effects.effect.transfer = function( o, done ) {
                              var elem = $( this ),
                              target = $( o.to ),
                              targetFixed = target.css( "position" ) === "fixed",
                              body = $("body"),
                              fixTop = targetFixed ? body.scrollTop() : 0,
                              fixLeft = targetFixed ? body.scrollLeft() : 0,
                              endPosition = target.offset(),
                              animation = {
                                top: endPosition.top - fixTop,
                                left: endPosition.left - fixLeft,
                                height: target.innerHeight(),
                                width: target.innerWidth()
                              },
                              startPosition = elem.offset(),
                              transfer = $( "<div class='ui-effects-transfer'></div>" )
                              .appendTo( document.body )
                              .addClass( o.className )
                              .css({
                                top: startPosition.top - fixTop,
                                left: startPosition.left - fixLeft,
                                height: elem.innerHeight(),
                                width: elem.innerWidth(),
                                position: targetFixed ? "fixed" : "absolute"
                              })
                              .animate( animation, o.duration, o.easing, function() {
                                transfer.remove();
                                done();
                              });
                            };



                          }));
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on("pageshow.rails", function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.querySelector('head').childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var buildTestsUsing, createDocumentUsingDOM, createDocumentUsingFragment, createDocumentUsingParser, createDocumentUsingWrite, docTest, docTests, e, _i, _len;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    createDocumentUsingFragment = function(html) {
      var body, doc, head, htmlWrapper, _ref, _ref1;
      head = ((_ref = html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)) != null ? _ref[0] : void 0) || '<head></head>';
      body = ((_ref1 = html.match(/<body[^>]*>([\s\S.]*)<\/body>/i)) != null ? _ref1[0] : void 0) || '<body></body>';
      htmlWrapper = document.createElement('html');
      htmlWrapper.innerHTML = head + body;
      doc = document.createDocumentFragment();
      doc.appendChild(htmlWrapper);
      return doc;
    };
    buildTestsUsing = function(createMethod) {
      var buildTest, formNestingTest, structureTest;
      buildTest = function(fallback, passes) {
        return {
          passes: passes(),
          fallback: fallback
        };
      };
      structureTest = buildTest(createDocumentUsingWrite, (function(_this) {
        return function() {
          var _ref, _ref1;
          return ((_ref = createMethod('<html><body><p>test')) != null ? (_ref1 = _ref.body) != null ? _ref1.childNodes.length : void 0 : void 0) === 1;
        };
      })(this));
      formNestingTest = buildTest(createDocumentUsingFragment, (function(_this) {
        return function() {
          var _ref, _ref1;
          return ((_ref = createMethod('<html><body><form></form><div></div></body></html>')) != null ? (_ref1 = _ref.body) != null ? _ref1.childNodes.length : void 0 : void 0) === 2;
        };
      })(this));
      return [structureTest, formNestingTest];
    };
    try {
      if (window.DOMParser) {
        docTests = buildTestsUsing(createDocumentUsingParser);
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      docTests = buildTestsUsing(createDocumentUsingDOM);
      return createDocumentUsingDOM;
    } finally {
      for (_i = 0, _len = docTests.length; _i < _len; _i++) {
        docTest = docTests[_i];
        if (!docTest.passes) {
          return docTest.fallback;
        }
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = __bind(this._trickle, this);
      this.value = 0;
      this.opacity = 1;
      this.content = '';
      this.speed = 300;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var _ref;
      if ((value > (_ref = this.value) && _ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = 1;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return "" + this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
(function(l){l.fn.rssfeed=function(b,h,w){h=l.extend({limit:10,offset:1,header:!0,titletag:"h4",date:!0,dateformat:"datetime",content:!0,snippet:!0,media:!0,showerror:!0,errormsg:"",key:null,ssl:!1,linktarget:"_self",linkredirect:"",linkcontent:!1,sort:"",sortasc:!0,historical:!1},h);return this.each(function(z,q){var u=l(q),f="";h.ssl&&(f="s");u.hasClass("rssFeed")||u.addClass("rssFeed");if(null==b)return!1;0<h.offset&&(h.offset-=1);h.limit+=h.offset;f="http"+f+"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+
encodeURIComponent(b);f+="&num="+h.limit;h.historical&&(f+="&scoring=h");null!=h.key&&(f+="&key="+h.key);l.getJSON(f+"&output=json_xml",function(b){if(200==b.responseStatus){var f=b.responseData,e=h;if(b=f.feed){var j=[],d=0,m="",v="odd";if(e.media){var n=f.xmlString;"Microsoft Internet Explorer"==navigator.appName?(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(n)):d=(new DOMParser).parseFromString(n,"text/xml");n=d.getElementsByTagName("item")}e.header&&(m+='<div class="rssHeader"><a href="'+
b.link+'" title="'+b.description+'">'+b.title+"</a></div>");m+='<div class="rssBody"><ul>';for(f=e.offset;f<b.entries.length;f++){d=f-e.offset;j[d]=[];var g=b.entries[f],a,c="",k=g.link;switch(e.sort){case "title":c=g.title;break;case "date":c=g.publishedDate}j[d].sort=c;if(g.publishedDate)switch(c=new Date(g.publishedDate),a=c.toLocaleDateString()+" "+c.toLocaleTimeString(),e.dateformat){case "datetime":break;case "date":a=c.toLocaleDateString();break;case "time":a=c.toLocaleTimeString();break;case "timeline":a=
new Date(c);a=Math.round(((new Date).getTime()-a.getTime())/1E3);60>a?a="< 1 min":(3600>a?(a=Math.round(a/60)-1,c="min"):86400>a?(a=Math.round(a/3600)-1,c="hour"):604800>a?(a=Math.round(a/86400)-1,c="day"):(a=Math.round(a/604800)-1,c="week"),1<a&&(c+="s"),a=a+" "+c);break;default:a=c,c=new Date(a),a=e.dateformat,a=a.replace("dd",p(c.getDate())),a=a.replace("MMMM",x(c.getMonth())),a=a.replace("MM",p(c.getMonth()+1)),a=a.replace("yyyy",c.getFullYear()),a=a.replace("hh",p(c.getHours())),a=a.replace("mm",
p(c.getMinutes())),a=a.replace("ss",p(c.getSeconds()))}e.linkredirect&&(k=encodeURIComponent(k));j[d].html="<"+e.titletag+'><a href="'+e.linkredirect+k+'" title="View this feed at '+b.title+'">'+g.title+"</a></"+e.titletag+">";e.date&&a&&(j[d].html+="<div>"+a+"</div>");e.content&&(g=e.snippet&&""!=g.contentSnippet?g.contentSnippet:g.content,e.linkcontent&&(g='<a href="'+e.linkredirect+k+'" title="View this feed at '+b.title+'">'+g+"</a>"),j[d].html+="<p>"+g+"</p>");if(e.media&&0<n.length&&(k=n[f].getElementsByTagName("enclosure"),
0<k.length)){j[d].html+='<div class="rssMedia"><div>Media files</div><ul>';for(g=0;g<k.length;g++){var r=k[g].getAttribute("url"),s=k[g].getAttribute("type"),t=k[g].getAttribute("length"),c=j[d],y=j[d].html,r='<li><a href="'+r+'" title="Download this media">'+r.split("/").pop()+"</a> ("+s+", ",s=Math.floor(Math.log(t)/Math.log(1024)),t=(t/Math.pow(1024,Math.floor(s))).toFixed(2)+" "+"bytes kb MB GB TB PB".split(" ")[s];c.html=y+(r+t+")</li>")}j[d].html+="</ul></div>"}}e.sort&&j.sort(function(a,c){if(e.sortasc)var b=
  a.sort,d=c.sort;else b=c.sort,d=a.sort;if("date"==e.sort)return new Date(b)-new Date(d);b=b.toLowerCase();d=d.toLowerCase();return b<d?-1:b>d?1:0});l.each(j,function(a){m+='<li class="rssRow '+v+'">'+j[a].html+"</li>";v="odd"==v?"even":"odd"});m+="</ul></div>";l(q).html(m);l("a",q).attr("target",e.linktarget)}l.isFunction(w)&&w.call(this,u)}else h.showerror&&(d=""!=h.errormsg?h.errormsg:b.responseDetails),l(q).html('<div class="rssError"><p>'+d+"</p></div>")})})};var p=function(b){b+="";2>b.length&&
  (b="0"+b);return b},x=function(b){return"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[b]}})(jQuery);
(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//










///  NOT USED: //= require owl.carousel.min
//
$(document).ready(function() {
    $('#quote').rssfeed('http://www.quotesdaddy.com/feed/tagged/Inspirational', {
      limit: 1,
      snippet:false,
      content: false,
      header: false,
      media : false,
      date: false,
      titletag : "p"
    });
});
