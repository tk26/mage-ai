"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6532],{44162:function(n,e,t){t.d(e,{HC:function(){return g},Kf:function(){return s},Nk:function(){return f},PY:function(){return p},gE:function(){return h},jv:function(){return b},nz:function(){return v},oh:function(){return a},qn:function(){return d},t1:function(){return m},y9:function(){return k}});var o=t(9518),r=t(23831),i=t(86422),c=t(73942),u=t(49125),l=t(90880),a=68;function d(n,e){var t,o,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||r.Z.borders).light,u=((null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,l=e||{},a=l.blockColor,d=l.isSelected,s=l.theme;return d?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||a===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,u=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||a===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,u=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||a===i.Lq.BLUE?(c=(s||r.Z).accent.blue,u=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,u=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||a===i.Lq.PINK?(c=(s||r.Z).accent.pink,u=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,u=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||a===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,u=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):(i.tf.SCRATCHPAD===n||a===i.Lq.GREY||i.tf.CUSTOM===n&&!a)&&(c=(s||r.Z).content.default,u=(s||r.Z).accent.contentDefaultTransparent),{accent:c,accentLight:u}}var s=(0,o.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(d(n.blockType,n).accent,";\n    }\n  ")})),v=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||r.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),b=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),h=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")})),m=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),k=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],u.cd*u.iI,u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:a,"px;\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},75968:function(n,e,t){t.d(e,{J8:function(){return f},MS:function(){return p},Ts:function(){return s},_o:function(){return v},eY:function(){return d}});var o=t(82394),r=t(86422),i=t(90211),c=t(33766),u=t(60701);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var d=function(n,e){var t=(null===e||void 0===e?void 0:e.upstream_blocks)||[];return r.iZ.includes(null===n||void 0===n?void 0:n.type)||r.iZ.includes(null===e||void 0===e?void 0:e.type)||r.tf.DATA_LOADER===(null===e||void 0===e?void 0:e.type)&&r.tf.SENSOR!==n.type||t.push(n.uuid),t},s=function(n,e,t,o){for(var c,u=[],l=e.findIndex((function(e){return e.uuid===n.uuid}));!c&&l>=0;){var a;c=e[l-1],r.tf.SCRATCHPAD===(null===(a=c)||void 0===a?void 0:a.type)&&(c=null),l-=1}return c&&u.push(c.uuid),r.Ut.map((function(e){return{label:function(){return"Convert to ".concat((0,i.wX)(r.V4[e]))},onClick:function(){return o({converted_from_type:e,converted_from_uuid:n.uuid,type:e,upstream_blocks:u})},uuid:"".concat(t,"/convert_to/").concat(e)}}))},f=function(n,e,t,o,i,l){var d=n||{},s=d.configuration,f=d.downstream_blocks,p=d.has_callback,v=d.upstream_blocks,b=s||{},h=b.dynamic,m=b.reduce_output,k=r.tf.DBT===(null===n||void 0===n?void 0:n.type),g=[];if(![r.tf.CALLBACK,r.tf.EXTENSION,r.tf.MARKDOWN].includes(n.type)){g.push({label:function(){return k?"Execute and run upstream blocks":"Execute with upstream blocks"},onClick:function(){return e({block:n,runUpstream:!0})},uuid:"execute_upstream"}),k||g.push({label:function(){return"Execute block and run tests"},onClick:function(){return e({block:n,runTests:!0})},uuid:"run_tests"});var y=l||{},E=y.blocksMapping,A=y.fetchFileTree,O=y.fetchPipeline,T=y.savePipelineContent,x=y.updatePipeline,R=[];if(f.forEach((function(n){var e=null===E||void 0===E?void 0:E[n];e&&e.upstream_blocks.forEach((function(n){var e,t;null!==E&&void 0!==E&&null!==(e=E[n])&&void 0!==e&&null!==(t=e.configuration)&&void 0!==t&&t.dynamic&&R.push(E[n])}))})),k&&g.unshift.apply(g,[{label:function(){return"Run model"},onClick:function(){return e({block:n,runSettings:{run_model:!0}})},tooltip:function(){return"Execute command dbt run."},uuid:"run_model"},{label:function(){return"Test model"},onClick:function(){return e({block:n,runSettings:{test_model:!0}})},tooltip:function(){return"Execute command dbt test."},uuid:"test_model"},{label:function(){return"Build model"},onClick:function(){return e({block:n,runSettings:{build_model:!0}})},tooltip:function(){return"Execute command dbt build."},uuid:"build_model"},{label:function(){return"Add upstream models"},onClick:function(){x({pipeline:{add_upstream_for_block_uuid:null===n||void 0===n?void 0:n.uuid}})},tooltip:function(){return"Add upstream models for this model to the pipeline."},uuid:"add_upstream_models"}]),k||!T||!h&&0!==R.length||g.push({label:function(){return h?"Disable block as dynamic":"Set block as dynamic"},onClick:function(){return T({block:a(a({},n),{},{configuration:a(a({},s),{},{dynamic:!h})})})},uuid:"dynamic"}),E)(null===v||void 0===v?void 0:v.find((function(n){var e,t;return null===E||void 0===E||null===(e=E[n])||void 0===e||null===(t=e.configuration)||void 0===t?void 0:t.dynamic})))&&g.push({label:function(){return m?"Don\u2019t reduce output":"Reduce output"},onClick:function(){return T({block:a(a({},n),{},{configuration:a(a({},s),{},{reduce_output:!m})})})},uuid:"reduce_output"});g.push({label:function(){return p?"Remove callback":"Add callback"},onClick:function(){if(p)return T({block:a(a({},n),{},{has_callback:!p})}).then((function(){A(),O()}));(0,c.u7)({sideview:u.cH.CALLBACKS})},uuid:"has_callback"})}return g.push({label:function(){return"Delete block"},onClick:function(){t(n),o(!1)},uuid:"delete_block"}),i?[g.pop()]:g};function p(n){var e=n.tags,t=[];return null===e||void 0===e||e.forEach((function(n){r.L8.DYNAMIC===n?t.push({description:"This block will create N blocks for each of its downstream blocks.",title:(0,i.vg)(r.L8.DYNAMIC)}):r.L8.DYNAMIC_CHILD===n?t.push({description:"This block is dynamically created by its upstream parent block that is dynamic.",title:(0,i.vg)(r.L8.DYNAMIC_CHILD)}):r.L8.REDUCE_OUTPUT===n?t.push({description:"Reduce output from all dynamically created blocks into a single array output.",title:(0,i.vg)(r.L8.REDUCE_OUTPUT)}):t.push({title:n})})),t}function v(n){var e=n.block,t=n.dynamic,o=n.dynamicUpstreamBlock,r=n.hasError,i=(n.reduceOutput,n.reduceOutputUpstreamBlock),c=n.selected,u=o&&!i;return{borderColorShareProps:{blockColor:null===e||void 0===e?void 0:e.color,blockType:null===e||void 0===e?void 0:e.type,dynamicBlock:t,dynamicChildBlock:u,hasError:r,selected:c},tags:p(e)}}},86532:function(n,e,t){t.d(e,{Z:function(){return en}});var o,r=t(21831),i=t(82394),c=t(75582),u=t(77837),l=t(38860),a=t.n(l),d=t(51774),s=t.n(d),f=t(9518),p=t(4804),v=t(82684),b=t(83455),h=t(86422),m=t(67971),k=t(18283),g=t(16634),y=t(86673),E=t(54283),A=t(19711),O=t(23831),T=t(10503),x=t(49125),R=(x.iI,{height:10,width:10}),C=[h.tf.DATA_EXPORTER,h.tf.SENSOR],S=[h.Lq.GREY,h.Lq.PINK,h.Lq.TEAL,h.Lq.YELLOW];!function(n){n.NORTH="NORTH",n.SOUTH="SOUTH"}(o||(o={}));var D=t(73942),_=t(37391),P=f.default.div.withConfig({displayName:"indexstyle__GraphContainerStyle",componentId:"sc-bc2ei5-0"})(["div:only-child{","}",""],_.w5,(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),Z=f.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-bc2ei5-1"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;"," "," "," "," ",""],D.BG,(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||O.Z.content).active,";\n  ")}),(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||O.Z.content).active,";\n    border-style: dashed;\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),L=f.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-bc2ei5-2"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*x.iI),N=t(75968),j=t(44162),w=t(25958),I=t(90211),B=function(n){var e=n/1e3,t=4-Math.floor(e).toString().length,o=(0,I.QV)(e,t>=0?t:0),r="s";return o>1e3&&(o=(0,I.QV)(o/60,0),r="m"),"".concat(o).concat(r)},M=function(n,e){var t=n||{},r=t.id,i=t.side,c=null===e||void 0===e?void 0:e.id;return i===o.NORTH?null===r||void 0===r?void 0:r.endsWith("".concat(c,"-to")):i===o.SOUTH&&(null===r||void 0===r?void 0:r.startsWith(c))},U=t(28598);var H=function(n){var e=n.block,t=n.bodyText,o=n.children,r=n.disabled,i=n.hasFailed,c=n.height,u=n.hideStatus,l=n.isCancelled,a=n.isInProgress,d=n.isQueued,s=n.isSuccessful,p=(n.onClick,n.runtime),b=n.selected,R=(0,v.useContext)(f.ThemeContext),D=e.color,_=e.type,P=e.uuid,I=(0,N.MS)(e),M=!(a||d||i||s||l),H=s&&!(a||d),K=i&&!(a||d),X="";M?X="No status":H?X="Successful execution":K?X="Failed execution":a?X="Currently executiing":l&&(X="Cancelled execution");var F,q=C.includes(_)||S.includes(D);return h.tf.DBT===_&&(F=(0,w.IU)(e).project),(0,U.jsx)(Z,{backgroundColor:(0,j.qn)(_,{blockColor:D,theme:R}).accent,disabled:r,height:c,isCancelled:l,selected:b,children:(0,U.jsxs)(m.Z,{alignItems:"center",fullHeight:!0,children:[p&&(0,U.jsx)(L,{backgroundColor:(0,j.qn)(_,{blockColor:D,theme:R}).accent,children:(0,U.jsx)(m.Z,{justifyContent:"center",children:(0,U.jsx)(A.ZP,{inverted:C.includes(_)||S.includes(D),xsmall:!0,children:B(p)})})}),!p&&(0,U.jsx)(y.Z,{ml:2}),!u&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(m.Z,{alignItems:"center",justifyContent:"center",style:{height:2*x.iI,width:2*x.iI},title:X,children:[a&&(0,U.jsx)(E.Z,{color:(R||O.Z).content.active,small:!0}),H&&(0,U.jsx)(T.Jr,{size:2*x.iI,success:!0}),K&&(0,U.jsx)(T.x8,{danger:!0,size:1.5*x.iI}),M&&(0,U.jsx)(g.Z,{borderSize:1,size:1*x.iI})]}),(0,U.jsx)(y.Z,{ml:1})]}),(0,U.jsxs)(m.Z,{flexDirection:"column",justifyContent:"center",style:{height:"100%",padding:"8px 0"},children:[F&&(0,U.jsx)(A.ZP,{bold:!0,inverted:q,monospace:!0,xsmall:!0,children:F}),t&&(0,U.jsx)(A.ZP,{inverted:q,monospace:!0,small:!0,children:t}),o,(null===I||void 0===I?void 0:I.length)>=1&&(0,U.jsx)(m.Z,{alignItems:"center",children:I.reduce((function(n,e,t){var o=e.title;return t>=1&&n.push((0,U.jsx)("div",{children:"\xa0"},"space-".concat(o))),n.push((0,U.jsx)(k.Z,{inverted:!q,xxsmall:!0,children:o},"badge-".concat(o))),n}),[])})]})]})},P)},K=t(11135),X=t(98781),F=t(82531),q=t(66050),G=t(24224),V=t(96510),Y=t(87323);function W(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function Q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var z=s()((0,u.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(3873)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Canvas);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),J=s()((0,u.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(3873)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Node);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),$=s()((0,u.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(3873)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Edge);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),nn=(s()((0,u.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(3873)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.MarkerArrow);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),s()((0,u.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(3873)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Port);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}));var en=function(n){var e=n.blockRefs,t=n.blockStatus,i=n.disabled,u=n.editingBlock,l=n.enablePorts,a=void 0!==l&&l,d=n.fetchPipeline,s=n.height,k=n.heightOffset,g=void 0===k?10*x.iI:k,E=n.noStatus,O=n.onClickNode,T=n.pannable,C=void 0===T||T,S=n.pipeline,D=n.runningBlocks,_=void 0===D?[]:D,Z=n.selectedBlock,L=n.setEditingBlock,N=n.setErrors,I=n.setSelectedBlock,B=n.showDynamicBlocks,W=void 0!==B&&B,en=n.zoomable,tn=void 0===en||en,on=(0,v.useContext)(f.ThemeContext),rn=(0,v.useState)([]),cn=rn[0],un=rn[1],ln=(0,v.useState)(!1),an=ln[0],dn=ln[1],sn=(0,v.useState)(null),fn=sn[0],pn=sn[1],vn=a&&an,bn=(null===u||void 0===u?void 0:u.upstreamBlocks)||{},hn=bn.block,mn=bn.values,kn=void 0===mn?[]:mn,gn=(0,v.useMemo)((function(){return kn.length}),[kn]),yn=(0,v.useMemo)((function(){var n;return(null===S||void 0===S||null===(n=S.blocks)||void 0===n?void 0:n.filter((function(n){var e=n.type;return!h.iZ.includes(e)})))||[]}),[null===S||void 0===S?void 0:S.blocks]),En=((0,G.HK)((0,Y.cU)(yn,yn),(function(n){return n.block.uuid})),(0,v.useMemo)((function(){return yn}),[yn,W])),An=(0,v.useMemo)((function(){return(0,G.HK)(En,(function(n){return n.uuid}))}),[En]),On=(0,v.useMemo)((function(){return(0,G.HK)(_,(function(n){return n.uuid}))}),[_]),Tn=(0,b.Db)(F.ZP.blocks.pipelines.useUpdate(null===S||void 0===S?void 0:S.uuid,encodeURIComponent(null===hn||void 0===hn?void 0:hn.uuid)),{onSuccess:function(n){return(0,V.wD)(n,{callback:function(){L({upstreamBlocks:null}),null===d||void 0===d||d()},onErrorCallback:function(n,e){return null===N||void 0===N?void 0:N({errors:e,response:n})}})}}),xn=(0,c.Z)(Tn,2),Rn=xn[0],Cn=xn[1].isLoading,Sn=(0,b.Db)((function(n){var e=n.fromBlock,t=n.portSide,r=n.toBlock,i=n.removeDependency,c=r,u=r.upstream_blocks.concat(e.uuid);return i||t!==o.NORTH||(c=e,u=e.upstream_blocks.concat(r.uuid)),F.ZP.blocks.pipelines.useUpdate(null===S||void 0===S?void 0:S.uuid,encodeURIComponent(c.uuid))({block:Q(Q({},c),{},{upstream_blocks:i?r.upstream_blocks.filter((function(n){return n!==e.uuid})):u})})}),{onSuccess:function(n){return(0,V.wD)(n,{callback:function(){null===d||void 0===d||d()},onErrorCallback:function(n,e){return null===N||void 0===N?void 0:N({errors:e,response:n})}})}}),Dn=(0,c.Z)(Sn,1)[0],_n=(0,v.useCallback)((function(n){var t=n.type,o=n.uuid;if(null===I||void 0===I||I(n),un([]),null!==e&&void 0!==e&&e.current){var r,i=e.current["".concat(t,"s/").concat(o,".py")];null===i||void 0===i||null===(r=i.current)||void 0===r||r.scrollIntoView()}}),[e,I]),Pn=(0,v.useCallback)((function(n){un([]),L((function(e){var t=e.upstreamBlocks.values||[],o=t.findIndex((function(e){var t=e.uuid;return n.uuid===t}));return Q(Q({},e),{},{upstreamBlocks:Q(Q({},e.upstreamBlocks),{},{values:o>=0?(0,G.oM)(t,o):t.concat(n)})})}))}),[L]),Zn=(0,v.useMemo)((function(){var n={};return En.forEach((function(e){e.upstream_blocks.forEach((function(t){n[t]||(n[t]=[]),n[t].push(e)}))})),n}),[En]),Ln=(0,v.useCallback)((function(n){var e,t;if(X.qL.INTEGRATION===(null===S||void 0===S?void 0:S.type)&&h.tf.TRANSFORMER!==n.type){var o,r={};if(h.t6.YAML===n.language&&(r=(0,p.Qc)(n.content)),h.tf.DATA_LOADER===n.type)e="".concat(n.uuid,": ").concat(null===(o=r)||void 0===o?void 0:o.source);else if(h.tf.DATA_EXPORTER===n.type){var i;e="".concat(n.uuid,": ").concat(null===(i=r)||void 0===i?void 0:i.destination)}}else if(h.tf.DBT===n.type&&h.t6.SQL===n.language){var c=(0,w.IU)(n);e=c.name,t=c.project}return e||(e=n.uuid),{displayText:e,kicker:t,subtitle:undefined}}),[S]),Nn=(0,v.useMemo)((function(){var n=[],e=[];return En.forEach((function(c){var u,l=Ln(c),a=l.displayText,d=l.kicker,s=l.subtitle,f=c.tags,p=void 0===f?[]:f,v=(c.type,c.upstream_blocks),b=void 0===v?[]:v,h=c.uuid,m=Zn[h],k=[];m?k.push.apply(k,(0,r.Z)(m.map((function(n){return Q(Q({},R),{},{id:"".concat(h,"-").concat(n.uuid,"-from"),side:o.SOUTH})})))):k.push(Q(Q({},R),{},{id:"".concat(h,"-from"),side:o.SOUTH})),0===b.length&&k.push(Q(Q({},R),{},{id:"".concat(h,"-to"),side:o.NORTH})),null===b||void 0===b||b.forEach((function(n){k.push(Q(Q({},R),{},{id:"".concat(n,"-").concat(h,"-to"),side:o.NORTH})),e.push({from:n,fromPort:"".concat(n,"-").concat(h,"-from"),id:"".concat(n,"-").concat(h),to:h,toPort:"".concat(n,"-").concat(h,"-to")})}));var g=37;(null===p||void 0===p?void 0:p.length)>=1&&(g+=26),d&&(g+=26),s&&(g+=26);var y=a;[d,s].forEach((function(n){n&&n.length>y.length&&(y=n)})),n.push({data:{block:c},height:g,id:h,ports:k,width:y.length*x.KF+(i?0:5*x.iI)+((null===hn||void 0===hn?void 0:hn.uuid)===c.uuid?19*x.KF:0)+(null!==t&&void 0!==t&&null!==(u=t[c.uuid])&&void 0!==u&&u.runtime?50:0)})})),{edges:e,nodes:n}}),[null===hn||void 0===hn?void 0:hn.uuid,t,En,i,Ln,Zn]),jn=Nn.edges,wn=Nn.nodes,In=(0,v.useCallback)((function(n){if(E)return{};if(t){var e=t[n.uuid]||{},o=e.status,r=e.runtime;return{hasFailed:q.V.FAILED===o,isCancelled:q.V.CANCELLED===o,isInProgress:q.V.RUNNING===o,isQueued:q.V.INITIAL===o,isSuccessful:q.V.COMPLETED===o,runtime:r}}var i;return{hasFailed:h.DA.FAILED===n.status,isInProgress:On[n.uuid],isQueued:On[n.uuid]&&(null===(i=_[0])||void 0===i?void 0:i.uuid)!==n.uuid,isSuccessful:h.DA.EXECUTED===n.status}}),[t,E,_,On]),Bn=(0,v.useMemo)((function(){var n=0;return s&&(n+=s),g&&(n-=g),Math.max(0,n)}),[s,g]);return(0,U.jsxs)(U.Fragment,{children:[hn&&(0,U.jsxs)(y.Z,{my:3,px:x.cd,children:[(0,U.jsxs)(y.Z,{mb:x.cd,children:[(0,U.jsxs)(A.ZP,{children:["Select parent block(s) for ",(0,U.jsx)(A.ZP,{color:(0,j.qn)(hn.type,{blockColor:hn.color,theme:on}).accent,inline:!0,monospace:!0,children:hn.uuid}),":"]}),(0,U.jsx)(y.Z,{mt:1,children:kn.map((function(n,e){var t,o,r=n.uuid;return(0,U.jsxs)(A.ZP,{color:(0,j.qn)(null===(t=An[r])||void 0===t?void 0:t.type,{blockColor:null===(o=An[r])||void 0===o?void 0:o.type,theme:on}).accent,inline:!0,monospace:!0,children:[r,gn>=2&&e<=gn-2?(0,U.jsx)(A.ZP,{inline:!0,children:",\xa0"}):null]},r)}))})]}),(0,U.jsxs)(m.Z,{alignItems:"center",children:[(0,U.jsx)(K.ZP,{compact:!0,inline:!0,loading:Cn,onClick:function(){return Rn({block:Q(Q({},hn),{},{upstream_blocks:kn.map((function(n){return n.uuid}))})})},uuid:"DependencyGraph/save_parents",children:"Save dependencies"}),(0,U.jsx)(y.Z,{ml:1}),(0,U.jsx)(K.ZP,{compact:!0,inline:!0,noBackground:!0,onClick:function(){un([]),L({upstreamBlocks:null})},uuid:"DependencyGraph/cancel_save_parents",children:"Cancel"})]})]}),(0,U.jsx)(P,{height:Bn,children:(0,U.jsx)(z,{arrow:null,disabled:i,edge:function(n){var e,t=An[n.source];return(0,U.jsx)($,Q(Q({},n),{},{onClick:function(n,e){pn(null),un([e.id])},onRemove:function(n,e){var t=An[e.from],o=An[e.to];Dn({fromBlock:t,removeDependency:!0,toBlock:o}),un([])},removable:a&&!(null!==u&&void 0!==u&&u.upstreamBlocks),style:{stroke:null===(e=(0,j.qn)(null===t||void 0===t?void 0:t.type,{blockColor:null===t||void 0===t?void 0:t.color,theme:on}))||void 0===e?void 0:e.accent}}))},edges:jn,fit:!0,maxHeight:1e4,maxWidth:1e4,node:function(n){var e,t,o,r,c,l;return(0,U.jsx)(J,Q(Q({},n),{},{dragType:"port",linkable:!0,onClick:function(n,e){var t=e.data.block;pn(null),(null===hn||void 0===hn?void 0:hn.uuid)===t.uuid||(hn?Pn(t):(null===O||void 0===O||O({block:t}),setTimeout((function(){_n(t)}),1)))},onEnter:function(){null!==u&&void 0!==u&&u.upstreamBlocks||dn(!0)},onLeave:function(){return dn(!1)},port:vn&&(null===fn||M(fn,n))?(0,U.jsx)(nn,{onDrag:function(){return dn(!0)},onDragEnd:function(){dn(!1),pn(null)},onDragStart:function(n,e,t){var o=null===t||void 0===t?void 0:t.side;pn({id:null===t||void 0===t?void 0:t.id,side:o})},onEnter:function(){return dn(!0)},rx:10,ry:10,style:{fill:(0,j.qn)(null===n||void 0===n||null===(e=n.properties)||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.block)||void 0===o?void 0:o.type,{blockColor:null===n||void 0===n||null===(r=n.properties)||void 0===r||null===(c=r.data)||void 0===c||null===(l=c.block)||void 0===l?void 0:l.color,theme:on}).accent,stroke:"white",strokeWidth:"1px"}}):null,style:{fill:"transparent",stroke:"transparent",strokeWidth:0},children:function(n){var e=n.height,t=n.node.data.block,o=In(t),r=Ln(t).displayText;return(0,U.jsx)("foreignObject",{height:e,style:{pointerEvents:"none"},width:n.width,x:0,y:0,children:(0,U.jsx)(H,Q({block:t,bodyText:"".concat(r).concat((null===hn||void 0===hn?void 0:hn.uuid)===t.uuid?" (editing)":""),disabled:(null===hn||void 0===hn?void 0:hn.uuid)===t.uuid,height:e,hideStatus:i,selected:hn?!!(0,G.sE)(kn,(function(n){return n.uuid===t.uuid})):(null===Z||void 0===Z?void 0:Z.uuid)===t.uuid},o),t.uuid)})}}))},nodes:wn,onNodeLink:function(n,e,t,r){var i,c=An[e.id],u=An[t.id],l=(null===S||void 0===S?void 0:S.type)===X.qL.INTEGRATION&&((null===c||void 0===c?void 0:c.type)===h.tf.DATA_EXPORTER||(null===c||void 0===c?void 0:c.type)===h.tf.DATA_LOADER&&(null===u||void 0===u?void 0:u.type)===h.tf.DATA_EXPORTER);if(!(null!==c&&void 0!==c&&null!==(i=c.upstream_blocks)&&void 0!==i&&i.includes(u.uuid)||e.id===t.id||l)){var a=null===r||void 0===r?void 0:r.side;Dn({fromBlock:c,portSide:a||o.SOUTH,toBlock:u})}},onNodeLinkCheck:function(n,e,t){return!jn.some((function(n){return n.from===e.id&&n.to===t.id}))},pannable:C,selections:cn,zoomable:tn})})]})}},60701:function(n,e,t){t.d(e,{Qq:function(){return f},Z7:function(){return p},cH:function(){return r},du:function(){return d},fp:function(){return a},j5:function(){return s},uM:function(){return l}});var o,r,i=t(82394),c=t(10503),u=t(24224),l="sideview",a=90;!function(n){n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(r||(r={}));r.CALLBACKS,r.CHARTS,r.DATA,r.EXTENSIONS,r.REPORTS,r.TREE;var d=[r.DATA,r.REPORTS,r.GRAPHS],s=[{key:r.TREE,label:"Tree"},{buildLabel:function(n){var e=(n.pipeline||{}).widgets,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:r.CHARTS},{buildLabel:function(n){var e=n.variables;return(null===e||void 0===e?void 0:e.length)>=1?"Variables (".concat(e.length,")"):"Variables"},key:r.VARIABLES},{buildLabel:function(n){var e=n.secrets;return(null===e||void 0===e?void 0:e.length)>=1?"Secrets (".concat(e.length,")"):"Secrets"},key:r.SECRETS},{buildLabel:function(n){var e=(n.pipeline||{}).callbacks,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Callbacks (".concat(t.length,")"):"Callbacks"},key:r.CALLBACKS},{buildLabel:function(n){var e=(n.pipeline||{}).extensions,t=void 0===e?{}:e,o=0;return Object.values(t).forEach((function(n){var e=n.blocks;o+=(null===e||void 0===e?void 0:e.length)||0})),o>=1?"Power ups (".concat(o,")"):"Power ups"},key:r.EXTENSIONS},{key:r.DATA,label:"Data"},{key:r.TERMINAL,label:"Terminal"}],f=(0,u.HK)(s,(function(n){return n.key})),p=(o={},(0,i.Z)(o,r.CALLBACKS,c.AQ),(0,i.Z)(o,r.CHARTS,c.GQ),(0,i.Z)(o,r.DATA,c.iA),(0,i.Z)(o,r.EXTENSIONS,c.Bf),(0,i.Z)(o,r.GRAPHS,c.GQ),(0,i.Z)(o,r.REPORTS,c.Do),(0,i.Z)(o,r.SECRETS,c.Yo),(0,i.Z)(o,r.SETTINGS,c.Zr),(0,i.Z)(o,r.TERMINAL,c.oI),(0,i.Z)(o,r.TREE,c.mp),(0,i.Z)(o,r.VARIABLES,c.LO),o)},66050:function(n,e,t){var o;t.d(e,{V:function(){return o}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(o||(o={}))},86422:function(n,e,t){t.d(e,{$W:function(){return p},DA:function(){return f},HX:function(){return h},J8:function(){return b},L8:function(){return c},Lq:function(){return d},Qj:function(){return m},Ut:function(){return E},V4:function(){return y},VZ:function(){return v},dO:function(){return s},f2:function(){return g},iZ:function(){return k},t6:function(){return u},tf:function(){return a}});var o,r,i,c,u,l=t(82394);!function(n){n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var a,d,s=(o={},(0,l.Z)(o,u.MARKDOWN,"MD"),(0,l.Z)(o,u.PYTHON,"PY"),(0,l.Z)(o,u.R,"R"),(0,l.Z)(o,u.SQL,"SQL"),(0,l.Z)(o,u.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(a||(a={})),function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(d||(d={}));var f,p=[a.CHART,a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN,a.TRANSFORMER],v=[a.DATA_EXPORTER,a.DATA_LOADER],b=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],h=[a.DATA_EXPORTER,a.DATA_LOADER,a.DBT,a.TRANSFORMER],m=[a.CHART,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN],k=[a.CALLBACK,a.CHART,a.EXTENSION,a.SCRATCHPAD,a.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(f||(f={}));var g=[a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],y=(r={},(0,l.Z)(r,a.EXTENSION,"Callback"),(0,l.Z)(r,a.CUSTOM,"Custom"),(0,l.Z)(r,a.DATA_EXPORTER,"Data exporter"),(0,l.Z)(r,a.DATA_LOADER,"Data loader"),(0,l.Z)(r,a.EXTENSION,"Extension"),(0,l.Z)(r,a.SCRATCHPAD,"Scratchpad"),(0,l.Z)(r,a.SENSOR,"Sensor"),(0,l.Z)(r,a.MARKDOWN,"Markdown"),(0,l.Z)(r,a.TRANSFORMER,"Transformer"),r),E=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER,a.SENSOR];i={},(0,l.Z)(i,a.DATA_EXPORTER,"DE"),(0,l.Z)(i,a.DATA_LOADER,"DL"),(0,l.Z)(i,a.SCRATCHPAD,"SP"),(0,l.Z)(i,a.SENSOR,"SR"),(0,l.Z)(i,a.MARKDOWN,"MD"),(0,l.Z)(i,a.TRANSFORMER,"TF")},18283:function(n,e,t){var o=t(82394),r=t(26304),i=(t(82684),t(9518)),c=t(23831),u=t(73942),l=t(2005),a=t(49125),d=t(31012),s=t(28598),f=["children"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=i.default.p.withConfig({displayName:"Badge__BadgeStyle",componentId:"sc-tfqsp0-0"})(["border-radius:","px;display:inline;font-family:",";margin:0;",";"," "," ",";",";"," "," "," "," "," "," ",""],u.BG,l.ry,d.iD,(function(n){return n.small&&"\n    ".concat(d.HC,";\n  ")}),(function(n){return n.xxsmall&&"\n    font-size: ".concat(d.VK,"px;\n    line-height: ").concat(d.VK,"px;\n  ")}),(function(n){return!n.regular&&"\n    padding: 2px 4px;\n  "}),(function(n){return n.regular&&"\n    padding: ".concat(1*a.iI,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(n){return n.noVerticalPadding&&"\n    padding-bottom: 0;\n    padding-top: 0;\n  "}),(function(n){return!n.disabled&&!n.inverted&&"\n    background-color: ".concat((n.theme||c.Z).background.row,";\n    color: ").concat((n.theme||c.Z).content.default,";\n  ")}),(function(n){return!n.disabled&&n.inverted&&"\n    background-color: ".concat((n.theme||c.Z).background.dark,";\n    color: ").concat((n.theme||c.Z).content.inverted,";\n  ")}),(function(n){return n.cyan&&"\n    background-color: ".concat((n.theme||c.Z).accent.cyan,";\n    color: ").concat((n.theme||c.Z).monotone.black,";\n  ")}),(function(n){return n.disabled&&"\n    background-color: ".concat((n.theme||c.Z).feature.disabled,";\n    color: ").concat((n.theme||c.Z).content.disabled,";\n  ")}),(function(n){return n.quantifier&&"\n    border-radius: 34px;\n    line-height: 10px;\n    padding: 4px 6px;\n  "}),(function(n){return n.monospace&&"\n    font-family: ".concat(l.Vp,";\n    word-break: break-all;\n  ")}));e.Z=function(n){var e=n.children,t=(0,r.Z)(n,f);return(0,s.jsx)(b,v(v({},t),{},{children:e}))}},87323:function(n,e,t){t.d(e,{cU:function(){return c}});var o=t(82684),r=t(24224);function i(n,e){return function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{includeAllNodes:!1},i=(0,r.HK)(t,(function(n){return n.uuid})),c=(o||{}).includeAllNodes,u=[];function l(t){if(t){var o=(t[e]||[]).reduce((function(e,t){return n.uuid===t?e:e.concat(i[t])}),[]);(0===o.length||c&&n.uuid!==t.uuid)&&u.push(t),o.forEach((function(n){l(n)}))}}return l(n),u}(n,"upstream_blocks",e,{includeAllNodes:!0})}function c(n,e){return(0,o.useMemo)((function(){return n.map((function(t){var o=function(n,e){var t=i(n,e),o=t.filter((function(e){var t=e.configuration,o=e.uuid;return(null===t||void 0===t?void 0:t.dynamic)&&o!==(null===n||void 0===n?void 0:n.uuid)})),r=t.filter((function(e){var t=e.configuration,o=e.uuid;return(null===t||void 0===t?void 0:t.reduce_output)&&o!==(null===n||void 0===n?void 0:n.uuid)}));return{dynamicUpstreamBlock:o[0],dynamicUpstreamBlocks:o,reduceOutputUpstreamBlock:r[0],reduceOutputUpstreamBlocks:r}}(t,e),r=o.dynamicUpstreamBlock,c=o.dynamicUpstreamBlocks,u=o.reduceOutputUpstreamBlock,l=o.reduceOutputUpstreamBlocks,a=(t||{}).configuration||{},d=a.dynamic,s=a.reduce_output;return{block:t,blocksToUse:n,dynamic:!!d,dynamicUpstreamBlock:r,dynamicUpstreamBlocks:c,reduceOutput:!!s,reduceOutputUpstreamBlock:u,reduceOutputUpstreamBlocks:l}}))}),[e,null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.dynamic})),null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.reduce_output})),null===e||void 0===e?void 0:e.map((function(n){return n.upstream_blocks}))])}},25958:function(n,e,t){t.d(e,{$1:function(){return i},Dy:function(){return r},IU:function(){return c}});var o=t(17717),r="--full-refresh";function i(n,e){var t,r=null===e||void 0===e?void 0:e.fullPath,i=null===n||void 0===n||null===(t=n.configuration)||void 0===t?void 0:t.file_path;if(r)return null===n||void 0===n?void 0:n.uuid;if(i){var c=i.split(o.sep),u=c[c.length-1].split(".");return u.pop(),u.join(".")}}function c(n){var e,t=null===n||void 0===n||null===(e=n.configuration)||void 0===e?void 0:e.file_path;if(t){var r=t.split(o.sep),i=r[0],c=r[r.length-1].split(".");return c.pop(),{directory:r.slice(1,r.length-1).join(o.sep),filePath:t,name:c.join("."),project:i}}return{filePath:t}}},33766:function(n,e,t){t.d(e,{O2:function(){return s},g_:function(){return p},u7:function(){return f}});var o=t(75582),r=t(82394),i=t(34376),c=t.n(i),u=t(59e3),l=t(24224);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s="_offset";function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.preserveParams,r=e.pushHistory,i=e.replaceParams,l=(0,u.iV)(),a={};t&&t.forEach((function(n){l[n]&&(a[n]=l[n])}));var s,f=i?a:l;s=window.location.pathname;var p=r?c().push:c().replace,v=d(d({},f),n);Object.entries(n).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1];"undefined"!==typeof r&&null!==r||delete v[t]}));var b=(0,u.uM)(v);b.length>=1&&(b="?".concat(b));var h="".concat(s.split("?")[0]).concat(b);return p(c().router.pathname,h,{shallow:!0})}function p(n,e,t){var r=t.addingMultipleValues,i=t.isList,c=t.itemsPerPage,u=t.pushHistory,a=void 0!==u&&u,p=t.resetLimitParams,v=d({},n);r?Object.entries(e).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1];if(Array.isArray(r)){var i="".concat(t,"[]");v[i]=r.map(String)}})):i?Object.entries(e).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1],i=String(r),c="".concat(t,"[]"),u=v[c];u&&Array.isArray(u)?(u=u.map(String)).includes(i)?v[c]=(0,l.Od)(u,(function(n){return n===i})):v[c]=u.concat(i):v[c]=[i]})):v=d(d({},v),e),p&&(v._limit=c||20,v[s]=0),f(v,{pushHistory:a})}}}]);