(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{17717:function(e,n,t){var r=t(554);!function(){"use strict";var n={977:function(e){function n(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,n){for(var t,r="",i=0,o=-1,c=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===c);else if(o!==a-1&&2===c){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",i=0):i=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),o=a,c=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,c=0;continue}n&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,a):r=e.slice(o+1,a),i=a-o-1;o=a,c=0}else 46===t&&-1!==c?++c:c=-1}return r}var i={resolve:function(){for(var e,i="",o=!1,c=arguments.length-1;c>=-1&&!o;c--){var a;c>=0?a=arguments[c]:(void 0===e&&(e=r.cwd()),a=e),n(a),0!==a.length&&(i=a+"/"+i,o=47===a.charCodeAt(0))}return i=t(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(n(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return n(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];n(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,t){if(n(e),n(t),e===t)return"";if((e=i.resolve(e))===(t=i.resolve(t)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var o=e.length,c=o-r,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var s=t.length-a,l=c<s?c:s,u=-1,d=0;d<=l;++d){if(d===l){if(s>l){if(47===t.charCodeAt(a+d))return t.slice(a+d+1);if(0===d)return t.slice(a+d)}else c>l&&(47===e.charCodeAt(r+d)?u=d:0===d&&(u=0));break}var f=e.charCodeAt(r+d);if(f!==t.charCodeAt(a+d))break;47===f&&(u=d)}var h="";for(d=r+u+1;d<=o;++d)d!==o&&47!==e.charCodeAt(d)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(a+u):(a+=u,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(n(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,i=-1,o=!0,c=e.length-1;c>=1;--c)if(47===(t=e.charCodeAt(c))){if(!o){i=c;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');n(e);var r,i=0,o=-1,c=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,s=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!c){i=r+1;break}}else-1===s&&(c=!1,s=r+1),a>=0&&(l===t.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=s))}return i===o?o=s:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!c){i=r+1;break}}else-1===o&&(c=!1,o=r+1);return-1===o?"":e.slice(i,o)},extname:function(e){n(e);for(var t=-1,r=0,i=-1,o=!0,c=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===i&&(o=!1,i=a+1),46===s?-1===t?t=a:1!==c&&(c=1):-1!==t&&(c=-1);else if(!o){r=a+1;break}}return-1===t||-1===i||0===c||1===c&&t===i-1&&t===r+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,n){var t=n.dir||n.root,r=n.base||(n.name||"")+(n.ext||"");return t?t===n.root?t+r:t+e+r:r}("/",e)},parse:function(e){n(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var r,i=e.charCodeAt(0),o=47===i;o?(t.root="/",r=1):r=0;for(var c=-1,a=0,s=-1,l=!0,u=e.length-1,d=0;u>=r;--u)if(47!==(i=e.charCodeAt(u)))-1===s&&(l=!1,s=u+1),46===i?-1===c?c=u:1!==d&&(d=1):-1!==c&&(d=-1);else if(!l){a=u+1;break}return-1===c||-1===s||0===d||1===d&&c===s-1&&c===a+1?-1!==s&&(t.base=t.name=0===a&&o?e.slice(1,s):e.slice(a,s)):(0===a&&o?(t.name=e.slice(1,c),t.base=e.slice(1,s)):(t.name=e.slice(a,c),t.base=e.slice(a,s)),t.ext=e.slice(c,s)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}},c=!0;try{n[e](o,o.exports,i),c=!1}finally{c&&delete t[e]}return o.exports}i.ab="//";var o=i(977);e.exports=o}()},59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),a=t(49894),s=t(93461),l=t(57384),u=t(41424),d=t(72454),f=t(28598);function h(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var p=o.forwardRef(h),m=t(32063),g=t(85019),b=t(82531),v=t(66166),x=t(3055),y=t(49125),j=t(91427),w=t(24141);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,h=e.afterHidden,k=e.afterWidth,_=e.afterWidthOverride,O=e.before,Z=e.beforeWidth,S=e.breadcrumbs,P=e.children,I=e.errors,N=e.headerMenuItems,E=e.headerOffset,A=e.mainContainerHeader,z=e.navigationItems,D=e.setErrors,H=e.subheaderChildren,T=e.title,R=e.uuid,W=(0,w.i)().width,M="dashboard_after_width_".concat(R),F="dashboard_before_width_".concat(R),B=(0,o.useRef)(null),L=(0,o.useState)(_?k:(0,j.U2)(M,k)),U=L[0],q=L[1],G=(0,o.useState)(!1),K=G[0],V=G[1],Y=(0,o.useState)(O?Math.max((0,j.U2)(F,Z),13*y.iI):null),X=Y[0],J=Y[1],Q=(0,o.useState)(!1),$=Q[0],ee=Q[1],ne=(0,o.useState)(null)[1],te=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];S?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(S))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return T}}]),(0,o.useEffect)((function(){null===B||void 0===B||!B.current||K||$||null===ne||void 0===ne||ne(B.current.getBoundingClientRect().width)}),[K,U,$,X,B,ne,W]),(0,o.useEffect)((function(){K||(0,j.t8)(M,U)}),[h,K,U,M]),(0,o.useEffect)((function(){$||(0,j.t8)(F,X)}),[$,X,F]);var ce=(0,v.Z)(k);return(0,o.useEffect)((function(){_&&ce!==k&&q(k)}),[_,k,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{title:T}),(0,f.jsx)(u.Z,{breadcrumbs:oe,menuItems:N,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===z||void 0===z?void 0:z.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:z,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:r,afterHeightOffset:x.Mz,afterHidden:h,afterMousedownActive:K,afterWidth:U,before:O,beforeHeightOffset:x.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(O?X:0),headerOffset:E,hideAfterCompletely:!0,leftOffset:O?d.k1:null,mainContainerHeader:A,mainContainerRef:B,setAfterMousedownActive:V,setAfterWidth:q,setBeforeMousedownActive:ee,setBeforeWidth:J,children:[H&&(0,f.jsx)(p,{children:H}),P]})})]}),I&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,f.jsx)(a.Z,C(C({},I),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},85307:function(e,n,t){"use strict";t.d(n,{$W:function(){return u},cl:function(){return d},cv:function(){return f},dE:function(){return s},zG:function(){return l}});var r=t(38626),i=t(23831),o=t(73942),c=t(49125),a=t(37391),s=r.default.div.withConfig({displayName:"indexstyle__SectionStyle",componentId:"sc-7a1uhf-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).popup,";\n  ")})),l=r.default.div.withConfig({displayName:"indexstyle__DocsStyle",componentId:"sc-7a1uhf-1"})(["> div{overflow:initial;}> div img{max-width:80%;background:white;padding:1rem;max-height:20vh;}"]),u=r.default.div.withConfig({displayName:"indexstyle__CodeEditorStyle",componentId:"sc-7a1uhf-2"})(["padding-top:","px;",""],c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-7a1uhf-3"})(["overflow:auto;max-height:90vh;width:100%;"," "," "," "," ",""],a.w5,(function(e){return e.hideHorizontalScrollbar&&"\n    overflow-x: hidden;\n  "}),(function(e){return e.width&&"\n    width: ".concat(e.width,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,";\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__HeaderRowStyle",componentId:"sc-7a1uhf-4"})(["padding:","px;"," "," ",""],2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme||i.Z).interactive.defaultBackground,";\n    border-bottom: ").concat(o.YF,"px ").concat(o.M8," ").concat((e.theme||i.Z).borders.medium,";\n  ")}),(function(e){return e.padding&&"\n    padding: ".concat(e.padding,"px;\n  ")}),(function(e){return e.rounded&&"\n    border-top-left-radius: ".concat(o.n_,"px;\n    border-top-right-radius: ").concat(o.n_,"px;\n  ")}))},65597:function(e,n,t){"use strict";t.d(n,{f:function(){return a}});var r=t(38626),i=t(23831),o=t(49125),c=t(73942),a=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},84392:function(e,n,t){"use strict";t.d(n,{HF:function(){return c},L6:function(){return r}});var r,i=t(46336),o=t(22341);function c(e,n,t){var c=e.owner,a=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return c&&a.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),n==i.k.MAIN&&a.push({Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),a}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(r||(r={}))},3849:function(e,n,t){"use strict";var r=t(82684),i=t(1210),o=t(82531),c=t(49125),a=t(84392),s=t(9736),l=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,u=void 0===t?[]:t,d=e.children,f=e.errors,h=e.pageName,p=e.subheaderChildren,m=o.ZP.statuses.list().data,g=(0,r.useMemo)((function(){var e,n;return null===m||void 0===m||null===(e=m.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[m]),b=(0,s.PR)()||{};return(0,l.jsx)(i.Z,{before:n,beforeWidth:n?50*c.iI:0,breadcrumbs:u,errors:f,navigationItems:(0,a.HF)(b,g,h),subheaderChildren:p,title:"Workspaces",uuid:"workspaces/index",children:d})}},46336:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2"}(r||(r={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},18776:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(38626),i=t(23831),o=t(73942),c=r.default.div.withConfig({displayName:"indexstyle__PanelStyle",componentId:"sc-1rfr5wd-0"})(["border-radius:","px;"," ",""],o.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),a=t(28598);var s=function(e){var n=e.children,t=e.fullWidth,r=void 0===t||t;return(0,a.jsx)(c,{fullWidth:r,children:n})}},87372:function(e,n,t){"use strict";var r,i,o,c,a,s,l,u,d=t(82394),f=t(26304),h=t(26653),p=t(38626),m=t(33591),g=t(23831),b=t(2005),v=t(31012),x=t(19711),y=t(49125),j=t(86673),w=t(28598),k=["children","condensed","inline","level","marketing","spacingBelow"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=(0,p.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],x.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),Z=p.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||g.Z.content).active,";\n  ")})),S=p.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],O,m.media.md(r||(r=(0,h.Z)(["\n    ","\n  "])),v.aQ),m.media.lg(i||(i=(0,h.Z)(["\n    ","\n  "])),v.aQ),m.media.xl(o||(o=(0,h.Z)(["\n    ","\n  "])),v.aQ)),P=p.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],O,v.MJ),I=p.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],O,m.media.xs(c||(c=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.sm(a||(a=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.md(s||(s=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.lg(l||(l=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.xl(u||(u=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI)),N=p.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],O,v.BL),E=p.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],O),A=p.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],O),z=p.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],O),D=p.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],O,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),H=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,a=e.spacingBelow,s=(0,f.Z)(e,k);i?n=D:0===Number(o)?n=S:1===Number(o)?n=c?I:P:2===Number(o)?n=N:3===Number(o)?n=E:4===Number(o)?n=A:5===Number(o)&&(n=z);var l=(0,w.jsxs)(n,_(_({},s),{},{level:o,children:[a&&(0,w.jsx)(j.Z,{mb:r?2:3,children:t}),!a&&t]}));return i?l:(0,w.jsx)(Z,{children:l})};H.defaultProps={level:3,weightStyle:6},n.Z=H},27664:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var r,i=t(77837),o=t(75582),c=t(38860),a=t.n(c),s=t(82684),l=t(83455),u=t(60328),d=t(47999),f=t(82394),h=t(57722),p=t(67971),m=t(87372),g=t(11135),b=t(18776),v=t(55378),x=t(86673),y=t(19711),j=t(82944),w=t(70902),k=t(82531),C=["ReadWriteOnce","ReadWriteMany","ReadOnlyMany"],_=[{label:"Workspace name",required:!0,uuid:"name"}],O=[{label:"Service account name",uuid:"service_account_name"},{label:"Ingress name",labelDescription:"If you want to add the workspace to an existing ingress, enter the name of the ingress here. Otherwise, the workspace can be accessed through the service.",uuid:"ingress_name"},{label:"Storage class name",labelDescription:"Volume claim parameters",uuid:"storage_class_name"},{label:"Storage request size (in GB)",type:"number",uuid:"storage_request_size"}],Z=t(86422);!function(e){e.K8S="k8s",e.ECS="ecs",e.CLOUD_RUN="cloud_run",e.EMR="emr"}(r||(r={}));var S=t(73899),P=t(85307),I=t(96510),N=t(90211),E=t(28598);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function(e){var n=e.clusterType,t=e.onCancel,i=e.onCreate,c=(0,s.useState)(),a=c[0],u=c[1],d=(0,s.useState)(),A=d[0],D=d[1],H=(0,s.useState)(null),T=H[0],R=H[1],W=(0,l.Db)(k.ZP.workspaces.useCreate(),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(e){e.error_message?u(e.error_message):i()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;u(r),console.log(t,r)}})}}),M=(0,o.Z)(W,2),F=M[0],B=M[1].isLoading,L=(0,s.useMemo)((function(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.Z,{level:5,children:"Kubernetes settings (optional)"}),O.map((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.labelDescription,o=e.required,c=e.type,a=e.uuid;return(0,E.jsxs)(x.Z,{mt:1,children:[i&&(0,E.jsx)(x.Z,{mb:1,children:(0,E.jsx)(y.ZP,{small:!0,children:i})}),(0,E.jsx)(j.Z,{autoComplete:n,disabled:t,label:r,onChange:function(e){R((function(n){return z(z({},n),{},(0,f.Z)({},a,e.target.value))}))},primary:!0,required:o,setContentOnMount:!0,type:c,value:(null===T||void 0===T?void 0:T[a])||""})]},a)})),(0,E.jsx)(x.Z,{mt:1,children:(0,E.jsx)(v.Z,{label:"Access mode",onChange:function(e){e.preventDefault(),R((function(n){return z(z({},n),{},{storage_access_mode:e.target.value})}))},placeholder:"Access mode",value:null===T||void 0===T?void 0:T.storage_access_mode,children:C.map((function(e){return(0,E.jsx)("option",{value:e,children:e},e)}))})}),(0,E.jsx)(x.Z,{mt:2,children:(0,E.jsxs)(p.ZP,{alignItems:"center",children:[(0,E.jsx)(y.ZP,{default:!0,monospace:!0,small:!0,children:"Configure container"}),(0,E.jsx)(x.Z,{ml:1}),(0,E.jsx)(w.Z,{checked:A,onCheck:function(){return D((function(e){return!e}))}})]})}),A&&(0,E.jsx)(x.Z,{mt:1,children:(0,E.jsx)(P.$W,{children:(0,E.jsx)(h.Z,{autoHeight:!0,fontSize:12,language:Z.t6.YAML,onChange:function(e){R((function(n){return z(z({},n),{},{container_config:e})}))},tabSize:2,value:null===T||void 0===T?void 0:T.container_config,width:"100%"})})})]})}),[A,T]);return(0,E.jsx)(b.Z,{children:(0,E.jsx)("div",{style:{width:"500px"},children:(0,E.jsxs)(x.Z,{p:2,children:[(0,E.jsx)(p.ZP,{justifyContent:"center",children:(0,E.jsx)(m.Z,{level:4,children:"Create new workspace"})}),(0,E.jsxs)("form",{children:[_.map((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.required,o=e.type,c=e.uuid;return(0,E.jsx)(x.Z,{mt:2,children:(0,E.jsx)(j.Z,{autoComplete:n,disabled:t,label:r,onChange:function(e){R((function(n){return z(z({},n),{},(0,f.Z)({},c,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:o,value:(null===T||void 0===T?void 0:T[c])||""})},c)})),n===r.K8S&&(0,E.jsx)(x.Z,{mt:2,children:L})]}),B&&(0,E.jsx)(x.Z,{mt:1,children:(0,E.jsx)(y.ZP,{small:!0,warning:!0,children:"This may take up to a few minutes... Once the service is created, it may take another 5-10 minutes for the service to be accessible."})}),!B&&a&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(x.Z,{mt:1,children:(0,E.jsx)(y.ZP,{danger:!0,small:!0,children:"Failed to create instance, see error below."})}),(0,E.jsx)(x.Z,{mt:1,children:(0,E.jsx)(y.ZP,{danger:!0,small:!0,children:a})})]}),(0,E.jsx)(x.Z,{my:2,children:(0,E.jsxs)(p.ZP,{children:[(0,E.jsx)(g.ZP,{background:S.a$,bold:!0,inline:!0,loading:B,onClick:function(){var e=T||{},t=e.name,r=e.container_config;if(t){var i=z({},T);i.name=function(e){return"ecs"===n?(0,N.We)(e,"_"):(0,N.We)(e,"-")}(t),i.container_config=A&&r,F({workspace:z(z({},i),{},{cluster_type:n})})}else u("Please enter a valid name!")},uuid:"workspaces/create",children:"Create"}),(0,E.jsx)(x.Z,{ml:1}),(0,E.jsx)(g.ZP,{bold:!0,inline:!0,onClick:t,uuid:"workspaces/cancel",children:"Cancel"})]})})]})})})},H=t(62084),T=t(41788),R=t(87815),W=t(3849),M=t(22341),F=t(73942),B=t(99994),L=t(65597),U=t(49125),q=t(84392),G=t(99497);function K(e){var n=e.fetchWorkspaces,t=e.instance,r=e.clusterType,i=(0,s.useRef)(null),c=(0,s.useState)(),a=c[0],f=c[1],h=(0,s.useState)(),m=h[0],g=h[1],b=t.name,v=(t.task_arn,{cluster_type:r}),j=(0,l.Db)(k.ZP.workspaces.useUpdate(b,v),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(){n(),f(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),w=(0,o.Z)(j,1)[0],C=(0,l.Db)(k.ZP.workspaces.useDelete(b,v),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(){n(),f(!1)},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),_=(0,o.Z)(C,1)[0],O=(0,s.useMemo)((function(){var e=t.status,n=[{label:function(){return(0,E.jsx)(y.ZP,{children:"Delete workspace"})},onClick:function(){return g(!0)},uuid:"delete_workspace"}];return"ecs"===r&&("STOPPED"===e?n.unshift({label:function(){return(0,E.jsx)(y.ZP,{children:"Resume instance"})},onClick:function(){return w({workspace:{action:"resume",cluster_type:r,name:t.name,task_arn:t.task_arn}})},uuid:"resume_instance"}):"RUNNING"===e&&n.unshift({label:function(){return(0,E.jsx)(y.ZP,{children:"Stop instance"})},onClick:function(){return w({workspace:{action:"stop",cluster_type:r,name:t.name,task_arn:t.task_arn}})},uuid:"stop_instance"})),n}),[r,t,w]);return(0,E.jsx)(E.Fragment,{children:["ecs","k8s"].includes(r)&&(0,E.jsxs)("div",{ref:i,style:{position:"relative",zIndex:"1"},children:[(0,E.jsx)(u.Z,{iconOnly:!0,onClick:function(){return f(!a)},children:(0,E.jsx)(M.mH,{size:2*U.iI})}),(0,E.jsx)(d.Z,{disableEscape:!0,onClickOutside:function(){f(!1),g(!1)},open:a,children:m?(0,E.jsxs)(L.f,{leftOffset:30*-U.iI,topOffset:3*-U.iI,width:30*U.iI,children:[(0,E.jsx)(y.ZP,{children:"Are you sure you want to delete"}),(0,E.jsx)(y.ZP,{children:"this instance? You may not be"}),(0,E.jsx)(y.ZP,{children:"able to recover your data."}),(0,E.jsx)(x.Z,{mt:1}),(0,E.jsxs)(p.ZP,{children:[(0,E.jsx)(u.Z,{danger:!0,onClick:_,children:"Confirm"}),(0,E.jsx)(x.Z,{ml:1}),(0,E.jsx)(u.Z,{default:!0,onClick:function(){return g(!1)},children:"Cancel"})]})]}):(0,E.jsx)(H.Z,{items:O,left:25*-U.iI,open:a,parentRef:i,topOffset:3*-U.iI,uuid:"workspaces/more_actions",width:25*U.iI})})]})})}function V(){var e=k.ZP.statuses.list().data,n=(0,s.useMemo)((function(){var n,t;return(null===e||void 0===e||null===(n=e.statuses)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.instance_type)||"ecs"}),[e]),t=k.ZP.workspaces.list({cluster_type:n},{refreshInterval:1e4,revalidateOnFocus:!0}),r=t.data,i=t.mutate,c=(0,s.useMemo)((function(){var e;return null===r||void 0===r||null===(e=r.workspaces)||void 0===e?void 0:e.filter((function(e){return e.name}))}),[r]),a=(0,G.dd)((function(){return(0,E.jsx)(D,{clusterType:n,onCancel:f,onCreate:function(){i(),f()}})}),{},[n,i],{background:!0,uuid:"configure_workspace"}),l=(0,o.Z)(a,2),d=l[0],f=l[1];return(0,E.jsx)(W.Z,{breadcrumbs:[{bold:!0,label:function(){return"Workspaces"}}],pageName:q.L6.WORKSPACES,subheaderChildren:(0,E.jsx)(g.ZP,{background:B.eW,beforeElement:(0,E.jsx)(M.mm,{size:2.5*U.iI}),bold:!0,inline:!0,onClick:function(){return d()},uuid:"workspaces/new",children:"Create new workspace"}),children:(0,E.jsx)(R.Z,{columnFlex:[2,4,2,3,1,null],columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"Public IP address"},{uuid:"Open"},{label:function(){return""},uuid:"Actions"}],rows:null===c||void 0===c?void 0:c.map((function(e){var t=e.instance,r=t.ip,o=t.name,c=t.status,a=t.type,s="http://".concat(r);return"ecs"===n&&(s="http://".concat(r,":6789")),[(0,E.jsx)(u.Z,{borderRadius:F.D7,danger:"STOPPED"===c,default:"PROVISIONING"===c,notClickable:!0,padding:"6px",primary:"RUNNING"===c,warning:"PENDING"===c,children:(0,N.vg)(c)},"status"),(0,E.jsx)(y.ZP,{children:o},"name"),(0,E.jsx)(y.ZP,{children:(0,N.vg)(a)},"type"),(0,E.jsx)(y.ZP,{children:r},"ip"),(0,E.jsx)(u.Z,{disabled:!r,iconOnly:!0,onClick:function(){return window.open(s)},children:(0,E.jsx)(M.M0,{size:2*U.iI})},"open_button"),(0,E.jsx)(K,{clusterType:n,fetchWorkspaces:i,instance:t},"more_actions")]}))})})}V.getInitialProps=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var Y=(0,T.Z)(V)},13157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(27664)}])}},function(e){e.O(0,[844,9902,8789,1424,1005,7815,6422,7722,9774,2888,179],(function(){return n=13157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);