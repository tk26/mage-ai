"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{1210:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(82394),r=t(21831),o=t(82684),l=t(47999),c=t(49894),u=t(93461),s=t(57384),a=t(41424),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),b=t(32063),m=t(85019),g=t(82531),y=t(66166),v=t(3055),O=t(49125),j=t(91427),S=t(24141);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,p=e.afterHidden,I=e.afterWidth,w=e.afterWidthOverride,P=e.before,N=e.beforeWidth,k=e.breadcrumbs,Z=e.children,_=e.errors,M=e.headerMenuItems,E=e.headerOffset,C=e.mainContainerHeader,H=e.navigationItems,z=e.setErrors,L=e.subheaderChildren,R=e.title,B=e.uuid,T=(0,S.i)().width,D="dashboard_after_width_".concat(B),G="dashboard_before_width_".concat(B),A=(0,o.useRef)(null),F=(0,o.useState)(w?I:(0,j.U2)(D,I)),W=F[0],U=F[1],K=(0,o.useState)(!1),Y=K[0],q=K[1],Q=(0,o.useState)(P?Math.max((0,j.U2)(G,N),13*O.iI):null),J=Q[0],X=Q[1],V=(0,o.useState)(!1),$=V[0],ee=V[1],ne=(0,o.useState)(null)[1],te=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===te||void 0===te?void 0:te.projects,re={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];k?(t&&oe.push(re),oe.push.apply(oe,(0,r.Z)(k))):(null===ie||void 0===ie?void 0:ie.length)>=1&&oe.push.apply(oe,[re,{bold:!0,label:function(){return R}}]),(0,o.useEffect)((function(){null===A||void 0===A||!A.current||Y||$||null===ne||void 0===ne||ne(A.current.getBoundingClientRect().width)}),[Y,W,$,J,A,ne,T]),(0,o.useEffect)((function(){Y||(0,j.t8)(D,W)}),[p,Y,W,D]),(0,o.useEffect)((function(){$||(0,j.t8)(G,J)}),[$,J,G]);var le=(0,y.Z)(I);return(0,o.useEffect)((function(){w&&le!==I&&U(I)}),[w,I,le]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:R}),(0,f.jsx)(a.Z,{breadcrumbs:oe,menuItems:M,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(n=ie[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===H||void 0===H?void 0:H.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(m.Z,{navigationItems:H,showMore:!0})}),(0,f.jsx)(u.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:i,afterHeightOffset:v.Mz,afterHidden:p,afterMousedownActive:Y,afterWidth:W,before:P,beforeHeightOffset:v.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(P?J:0),headerOffset:E,hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerHeader:C,mainContainerRef:A,setAfterMousedownActive:q,setAfterWidth:U,setBeforeMousedownActive:ee,setBeforeWidth:X,children:[L&&(0,f.jsx)(h,{children:L}),Z]})})]}),_&&(0,f.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===z||void 0===z?void 0:z(null)},children:(0,f.jsx)(c.Z,x(x({},_),{},{onClose:function(){return null===z||void 0===z?void 0:z(null)}}))})]})}},59920:function(e,n,t){var i;t.d(n,{M:function(){return i}}),function(e){e.BACKFILLS="backfills",e.BLOCK_RUNS="block_runs",e.EDIT="edit",e.MONITOR="monitor",e.PIPELINE_LOGS="pipeline_logs",e.PIPELINE_RUNS="pipeline_runs",e.RUNS="runs",e.SETTINGS="settings",e.SYNCS="syncs",e.TRIGGERS="triggers"}(i||(i={}))},60547:function(e,n,t){t.d(n,{Z:function(){return N}});var i=t(82394),r=t(21831),o=t(82684),l=t(34376),c=t(47999),u=t(1210),s=t(34744),a=t(49894),d=t(67971),f=t(87372),p=t(86673),h=t(82531),b=t(38626),m=t(23831),g=t(73942),y=t(49125),v=b.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],g.n_,3*y.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||m.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),O=t(3055),j=t(36405),S=t(96510),I=t(24141),x=t(28598);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(e){var n=e.after,t=e.afterHidden,i=e.afterWidth,b=e.before,m=e.beforeWidth,g=e.breadcrumbs,w=e.buildSidekick,N=e.children,k=e.errors,Z=e.headline,_=e.pageName,M=e.pipeline,E=e.setErrors,C=e.subheader,H=e.subheaderBackground,z=e.subheaderBackgroundImage,L=e.subheaderButton,R=e.subheaderText,B=e.title,T=e.uuid,D=(0,I.i)().height,G=(0,l.useRouter)().query.pipeline,A=M.uuid,F=h.ZP.pipelines.detail(A,{includes_outputs:!1},{revalidateOnFocus:!1}).data,W=null===F||void 0===F?void 0:F.pipeline;(0,o.useEffect)((function(){(0,S.bB)(F,E)}),[F,E]);var U=(0,o.useMemo)((function(){return n||(w?w({height:D,heightOffset:O.Mz,pipeline:W}):null)}),[n,w,D,W]),K=i||(U?50*y.iI:null),Y=(0,o.useMemo)((function(){var e=[];return W?(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),g?(e.push({label:function(){return W.uuid},linkProps:{as:"/pipelines/".concat(A,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,r.Z)(g)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return W.name}})):null!==F&&void 0!==F&&F.error&&e.push({bold:!0,danger:!0,label:function(){return"Error loading pipeline"}}),e}),[g,null===F||void 0===F?void 0:F.error,W,A]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.Z,{after:U,afterHidden:t,afterWidth:K,before:b,beforeWidth:m,breadcrumbs:Y,navigationItems:(0,j.H)(_,W,G),subheaderChildren:"undefined"!==typeof C&&C,title:W?B?B(W):W.name:null,uuid:T,children:[(L||R)&&(0,x.jsx)(p.Z,{mb:y.Mq,mt:y.cd,mx:y.cd,children:(0,x.jsx)(v,{background:H,backgroundImage:z,children:(0,x.jsxs)(d.ZP,{alignItems:"center",children:[L,R&&(0,x.jsx)(p.Z,{ml:3}),R]})})}),Z&&(0,x.jsx)(p.Z,{p:y.cd,children:(0,x.jsxs)(p.Z,{mt:y.cd,px:y.cd,children:[(0,x.jsx)(f.Z,{level:5,children:Z}),(0,x.jsx)(s.Z,{light:!0,mt:y.cd,short:!0})]})}),N]}),k&&(0,x.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===E||void 0===E?void 0:E(null)},children:(0,x.jsx)(a.Z,P(P({},k),{},{onClose:function(){return null===E||void 0===E?void 0:E(null)}}))})]})}},36405:function(e,n,t){t.d(n,{H:function(){return c}});var i=t(98781),r=t(22341),o=t(59920),l=t(9736);function c(e,n,t){var c=(n||{}).uuid||t,u=[{Icon:r.Bf,id:o.M.TRIGGERS,isSelected:function(){return o.M.TRIGGERS===e},label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(c,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{Icon:r.Pf,id:o.M.RUNS,isSelected:function(){return o.M.RUNS===e},label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(c,"/runs"),href:"/pipelines/[pipeline]/runs"}},{Icon:r.dE,id:o.M.BACKFILLS,isSelected:function(){return o.M.BACKFILLS===e},label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(c,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{Icon:r.UL,id:o.M.PIPELINE_LOGS,isSelected:function(){return o.M.PIPELINE_LOGS===e},label:function(){return"Logs"},linkProps:{as:"/pipelines/".concat(c,"/logs"),href:"/pipelines/[pipeline]/logs"}},{Icon:r.ug,id:o.M.MONITOR,isSelected:function(){return o.M.MONITOR===e},label:function(){return"Monitor"},linkProps:{as:"/pipelines/".concat(c,"/monitors"),href:"/pipelines/[pipeline]/monitors"}}];return i.qL.INTEGRATION===(null===n||void 0===n?void 0:n.type)&&u.unshift({Icon:r.Nt,id:o.M.SYNCS,isSelected:function(){return o.M.SYNCS===e},label:function(){return"Syncs"},linkProps:{as:"/pipelines/".concat(c,"/syncs"),href:"/pipelines/[pipeline]/syncs"}}),(0,l.Ct)()||(u.unshift({Icon:r.EK,disabled:!c,id:o.M.EDIT,isSelected:function(){return o.M.EDIT===e},label:function(){return"Edit pipeline"},linkProps:{as:"/pipelines/".concat(c,"/edit"),href:"/pipelines/[pipeline]/edit"}}),u.push({Icon:r.Zr,id:o.M.SETTINGS,isSelected:function(){return o.M.SETTINGS===e},label:function(){return"Pipeline settings"},linkProps:{as:"/pipelines/".concat(c,"/settings"),href:"/pipelines/[pipeline]/settings"}})),u}},87372:function(e,n,t){var i,r,o,l,c,u,s,a,d=t(82394),f=t(26304),p=t(26653),h=t(38626),b=t(33591),m=t(23831),g=t(2005),y=t(31012),v=t(19711),O=t(49125),j=t(86673),S=t(28598),I=["children","condensed","inline","level","marketing","spacingBelow"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||m.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(g.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(g.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(g.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),N=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||m.Z.content).active,";\n  ")})),k=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,b.media.md(i||(i=(0,p.Z)(["\n    ","\n  "])),y.aQ),b.media.lg(r||(r=(0,p.Z)(["\n    ","\n  "])),y.aQ),b.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),y.aQ)),Z=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,y.MJ),_=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,b.media.xs(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),b.media.sm(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),b.media.md(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),b.media.lg(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),b.media.xl(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI)),M=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,y.BL),E=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),C=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),H=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),z=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(y.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(y.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),L=function(e){var n,t=e.children,i=e.condensed,r=e.inline,o=e.level,l=e.marketing,c=e.spacingBelow,u=(0,f.Z)(e,I);r?n=z:0===Number(o)?n=k:1===Number(o)?n=l?_:Z:2===Number(o)?n=M:3===Number(o)?n=E:4===Number(o)?n=C:5===Number(o)&&(n=H);var s=(0,S.jsxs)(n,w(w({},u),{},{level:o,children:[c&&(0,S.jsx)(j.Z,{mb:i?2:3,children:t}),!c&&t]}));return r?s:(0,S.jsx)(N,{children:s})};L.defaultProps={level:3,weightStyle:6},n.Z=L}}]);