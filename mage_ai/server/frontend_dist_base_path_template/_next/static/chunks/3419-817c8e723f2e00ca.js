"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3419],{23192:function(n,e,t){t.d(e,{fi:function(){return B},lG:function(){return Y}});var r=t(82394),o=t(75582),i=t(82684),u=t(12691),c=t.n(u),l=t(34376),a=t.n(l),d=t(38626),s=t(69864),p=t(40761),f=t(41143),v=t(71180),b=t(39867),h=t(55485),m=t(48670),g=t(57653),j=t(38276),O=t(75499),x=t(30160),P=t(12468),y=t(35686),Z=t(89706),_=t(11498),k=t(72473),S=t(81655),T=t(70515),C=t(3917),L=t(55283),w=t(86735),D=t(72619),R=t(74052),E=t(69419),M=t(70320),A=t(28598);function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Y=[0,1,3,4,5],B={0:"status",1:"block_uuid",3:"created_at",4:"started_at",5:"completed_at"};e.ZP=function(n){var e=n.blockRuns,t=n.onClickRow,r=n.pipeline,u=n.selectedRun,l=n.setErrors,I=n.sortableColumnIndexes,Y=(0,M.qB)(),B=(0,i.useContext)(d.ThemeContext),U=(0,i.useState)(null),X=U[0],F=U[1],Q=(0,i.useState)(null),H=Q[0],G=Q[1],J=r||{},z=J.uuid,K=J.type,V=(0,i.useMemo)((function(){return r.blocks||[]}),[r]),q=(0,i.useMemo)((function(){return(0,w.HK)(V,(function(n){return n.uuid}))}),[V]),$=(0,i.useMemo)((function(){return g.qL.INTEGRATION===K}),[K]),W=(0,i.useMemo)((function(){return g.qL.PYTHON===K}),[K]),nn=(0,E.iV)(),en=null===nn||void 0===nn?void 0:nn[S.lG.SORT_COL_IDX],tn=(0,i.useMemo)((function(){return en?{columnIndex:+en,sortDirection:(null===nn||void 0===nn?void 0:nn[S.lG.SORT_DIRECTION])||S.sh.ASC}:void 0}),[nn,en]),rn=(0,i.useMemo)((function(){var n,e;return null===(n=new p.Z)||void 0===n||null===(e=n.decodedToken)||void 0===e?void 0:e.token}),[]),on=(0,s.Db)((function(n){var e=n.blockUUID,t=n.pipelineRunId;return y.ZP.block_outputs.pipelines.downloads.detailAsync(null===r||void 0===r?void 0:r.uuid,e,{pipeline_run_id:t,token:rn},{onDownloadProgress:function(n){return F((Number((null===n||void 0===n?void 0:n.loaded)||0)/1e6).toFixed(3))},responseType:_.Eg.BLOB})}),{onSuccess:function(n){return(0,D.wD)(n,{callback:function(n){G(null),(0,R.uS)(n,"block_output.".concat(Z.Lu.CSV))},onErrorCallback:function(n,e){return null===l||void 0===l?void 0:l({errors:e,response:n})}})}}),un=(0,o.Z)(on,2),cn=un[0],ln=un[1].isLoading,an=Y?S.O$:{},dn=[{uuid:"Status"},{uuid:"Block"},{uuid:"Trigger"},N(N({},an),{},{uuid:"Created at"}),N(N({},an),{},{uuid:"Started at"}),N(N({},an),{},{uuid:"Completed at"}),{uuid:"Logs"}];return W&&dn.push({uuid:"Output"}),(0,A.jsx)(O.Z,{columnFlex:[1,2,2,1,1,1,null,null],columns:dn,isSelectedRow:function(n){return e[n].id===(null===u||void 0===u?void 0:u.id)},onClickRow:t,rows:null===e||void 0===e?void 0:e.map((function(n){var e,t,r,o,u=n||{},l=u.block_uuid,d=u.completed_at,s=u.created_at,p=u.id,g=u.pipeline_run_id,O=u.pipeline_schedule_id,y=u.pipeline_schedule_name,Z=u.started_at,_=u.status,w=l,D=w.split(":"),R=H===p&&ln;$&&(w=D[0],r=D[1],o=D[2]);var E=q[w];E||(E=q[D[0]]);var M=[(0,i.createElement)(x.ZP,N(N({},(0,S.NC)(_)),{},{key:"".concat(p,"_status")}),_),(0,A.jsx)(c(),{as:"/pipelines/".concat(z,"/edit?block_uuid=").concat(w),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,A.jsxs)(m.Z,{bold:!0,fitContentWidth:!0,verticalAlignContent:!0,children:[(0,A.jsx)(b.Z,{color:(0,L.qn)(null===(e=E)||void 0===e?void 0:e.type,{blockColor:null===(t=E)||void 0===t?void 0:t.color,theme:B}).accent,size:1.5*T.iI,square:!0}),(0,A.jsx)(j.Z,{mr:1}),(0,A.jsxs)(x.ZP,{monospace:!0,sky:!0,children:[w,r&&":",r&&(0,A.jsx)(x.ZP,{default:!0,inline:!0,monospace:!0,children:r}),o>=0&&":",o>=0&&(0,A.jsx)(x.ZP,{default:!0,inline:!0,monospace:!0,children:o})]})]})},"".concat(p,"_block_uuid")),(0,A.jsx)(c(),{as:"/pipelines/".concat(z,"/triggers/").concat(O),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,A.jsx)(m.Z,{bold:!0,sky:!0,children:y})},"".concat(p,"_trigger")),(0,A.jsx)(x.ZP,{default:!0,monospace:!0,small:!0,title:s?(0,C._6)(s):null,children:Y?(0,C.XG)(s,Y):(0,C.d$)(s,{includeSeconds:!0})},"".concat(p,"_created_at")),(0,A.jsx)(x.ZP,{default:!0,monospace:!0,small:!0,title:Z?(0,C._6)(Z):null,children:Z?Y?(0,C.XG)(Z,Y):(0,C.d$)(Z,{includeSeconds:!0}):(0,A.jsx)(A.Fragment,{children:"\u2014"})},"".concat(p,"_started_at")),(0,A.jsx)(x.ZP,{default:!0,monospace:!0,small:!0,title:d?(0,C._6)(d):null,children:d?Y?(0,C.XG)(d,Y):(0,C.d$)(d,{includeSeconds:!0}):(0,A.jsx)(A.Fragment,{children:"\u2014"})},"".concat(p,"_completed_at")),(0,A.jsx)(v.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return a().push("/pipelines/".concat(z,"/logs?block_run_id[]=").concat(p))},children:(0,A.jsx)(k.UL,{default:!0,size:2*T.iI})},"".concat(p,"_logs"))];return W&&M.push((0,A.jsx)(h.ZP,{alignItems:"center",justifyContent:"center",children:(0,A.jsx)(P.Z,{appearBefore:!0,autoHide:!R,block:!0,forceVisible:R,label:R?"".concat(X||0,"mb downloaded..."):"Save block run output as CSV file (not supported for dynamic blocks)",size:null,children:(0,A.jsx)(v.ZP,{default:!0,disabled:!W||!(f.V.COMPLETED===_)||ln,iconOnly:!0,loading:R,noBackground:!0,onClick:function(){F(null),G(p),cn({blockUUID:w,pipelineRunId:g})},children:(0,A.jsx)(k.vc,{default:!0,size:2*T.iI})})})},"".concat(p,"_save_output"))),M})),sortableColumnIndexes:I,sortedColumn:tn,uuid:"block-runs"})}},74052:function(n,e,t){t.d(e,{Dp:function(){return g},OF:function(){return j},Q9:function(){return x},Rt:function(){return b},Rz:function(){return y},h8:function(){return O},k1:function(){return h},uS:function(){return P},zv:function(){return Z}});var r=t(21831),o=t(82394),i=t(92083),u=t.n(i),c=t(48339),l=t(53808),a=t(3917),d=t(86735),s=t(81728),p=t(70320);function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n){var e={},t={};return null===n||void 0===n||n.forEach((function(n){var r=n.content,o=n.outputs,i=n.type,u=n.uuid;(null===o||void 0===o?void 0:o.length)>=1&&(e[u]=o.map((function(n){if("object"===typeof n){var e=n||{},t=e.sample_data,r=e.shape,o=e.text_data,i=e.type;return t?{data:v({shape:r},t),type:i}:o&&(0,s.Pb)(o)?JSON.parse(o):o}return{data:String(n),type:c.Gi.TEXT}}))),t[i]||(t[i]={}),t[i][u]=r})),{content:t,messages:e}}function h(n,e,t){n.forEach((function(n){(0,l.t8)("".concat(t,"/").concat(n.uuid,"/codeCollapsed"),(0,l.Od)("".concat(e,"/").concat(n.uuid,"/codeCollapsed"))),(0,l.t8)("".concat(t,"/").concat(n.uuid,"/outputCollapsed"),(0,l.Od)("".concat(e,"/").concat(n.uuid,"/outputCollapsed")))}))}function m(n){return"".concat(n,"/").concat(l.kP)}function g(n){return(0,l.U2)(m(n),[])}function j(n,e){var t=g(n);t.includes(e)||(0,l.t8)(m(n),[].concat((0,r.Z)(t),[e]))}function O(n,e){var t=g(n).filter((function(n){return n!==e}));(0,l.t8)(m(n),t)}function x(n,e){var t=(0,d.HK)(e,(function(n){return n.uuid}));return n.map((function(n){return t[n]})).filter((function(n){return!!n}))}var P=function(n,e){var t=window.URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),r.remove()};function y(n,e){var t,r=(0,p.qB)(),o=null===e||void 0===e?void 0:e.isPipelineUpdating,i=null===e||void 0===e?void 0:e.pipelineContentTouched,c=null===e||void 0===e?void 0:e.pipelineLastSaved;if(i)t="Unsaved changes";else if(o)t="Saving changes...";else if(c){var l=u()().utc().unix();if(null!==e&&void 0!==e&&e.displayRelative&&l-c<3600){var d=u().unix(l-(l-c)).utc().fromNow();t="Saved ".concat(d)}else{var s=(0,a.JX)(c/1e3);null!==n&&void 0!==n&&n.updated_at&&(s=(0,a.XG)(null===n||void 0===n?void 0:n.updated_at,r)),t="Last saved ".concat(s)}}else t="All changes saved";return t}function Z(n){var e=n.type,t=n.uuid;return"".concat(e,"s/").concat(t,".py")}},8955:function(n,e,t){t.d(e,{G7:function(){return P},ZP:function(){return y},u$:function(){return j}});var r=t(75582),o=t(82394),i=t(26304),u=t(90299),c=t(9134),l=t(24138),a=t(38276),d=t(30160),s=t(75499),p=t(70515),f=t(16488),v=t(42122),b=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j=44,O={uuid:"Run details"},x={uuid:"Dependency tree"},P=[x,O];function y(n){var e=n.height,t=n.heightOffset,o=n.pipeline,m=n.selectedRun,y=n.selectedTab,Z=n.setSelectedTab,_=g({},(0,i.Z)(n,h));m?_.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):_.noStatus=!0;var k=(0,v.Kn)(null===m||void 0===m?void 0:m.variables)?g({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},S=null===m||void 0===m?void 0:m.event_variables;if(S&&(0,v.Kn)(S)&&!(0,v.Qr)(S))if((0,v.Kn)(k)&&k.hasOwnProperty("event")){var T=(0,v.Kn)(k.event)?k.event:{};k.event=g(g({},T),S)}else k.event=g({},S);var C=[];k&&JSON.stringify(k,null,2).split("\n").forEach((function(n){C.push("    ".concat(n))}));var L=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,b.jsx)(c.Z,{language:"json",small:!0,source:C.join("\n")},"variable_value")]],w=m&&(0,b.jsx)(a.Z,{pb:p.cd,px:p.cd,children:(0,b.jsx)(s.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(n){return 1===n?"100px":null},rows:L.map((function(n,e){var t=(0,r.Z)(n,2),o=t[0],i=t[1];return[(0,b.jsx)(d.ZP,{monospace:!0,muted:!0,children:o},"key_".concat(e)),(0,b.jsx)(d.ZP,{monospace:!0,textOverflow:!0,children:i},"val_".concat(e))]})),uuid:"LogDetail"})}),D=y&&Z;return(0,b.jsxs)(b.Fragment,{children:[D&&(0,b.jsx)(a.Z,{py:p.cd,children:(0,b.jsx)(u.Z,{onClickTab:Z,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:P,underlineStyle:!0})}),(!D||x.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,b.jsx)(l.ZP,g(g({},_),{},{height:e,heightOffset:(t||0)+(D?j:0),pipeline:o})),O.uuid===(null===y||void 0===y?void 0:y.uuid)&&w]})}},55072:function(n,e,t){t.d(e,{Et:function(){return p},Q:function(){return s}});t(82684);var r=t(71180),o=t(55485),i=t(38276),u=t(31748),c=t(72473),l=t(79633),a=t(70515),d=t(28598),s=30,p=9;e.ZP=function(n){var e=n.page,t=n.maxPages,s=n.onUpdate,p=n.totalPages,f=[],v=t;if(v>p)f=Array.from({length:p},(function(n,e){return e}));else{var b=Math.floor(v/2),h=e-b;e+b>=p?(h=p-v+2,v-=2):e-b<=0?(h=0,v-=2):(v-=4,h=e-Math.floor(v/2)),f=Array.from({length:v},(function(n,e){return e+h}))}return(0,d.jsx)(d.Fragment,{children:p>0&&(0,d.jsxs)(o.ZP,{alignItems:"center",children:[(0,d.jsx)(r.ZP,{disabled:0===e,onClick:function(){return s(e-1)},children:(0,d.jsx)(c.Hd,{size:1.5*a.iI,stroke:u.Av})}),!f.includes(0)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(0)},children:1})},0),!f.includes(1)&&(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(n){return(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(r.ZP,{backgroundColor:n===e&&l.a$,borderLess:!0,noBackground:!0,notClickable:n===e,onClick:function(){n!==e&&s(n)},children:n+1})},n)})),!f.includes(p-1)&&(0,d.jsxs)(d.Fragment,{children:[!f.includes(p-2)&&(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,d.jsx)(i.Z,{ml:1,children:(0,d.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(p-1)},children:p})},p-1)]}),(0,d.jsx)(i.Z,{ml:1}),(0,d.jsx)(r.ZP,{disabled:e===p-1,onClick:function(){return s(e+1)},children:(0,d.jsx)(c.Kw,{size:1.5*a.iI,stroke:u.Av})})]})})}},89706:function(n,e,t){t.d(e,{BB:function(){return p},JD:function(){return x},Lu:function(){return c},PF:function(){return g},aZ:function(){return u},d2:function(){return m},dT:function(){return l},n6:function(){return f},nB:function(){return O},oy:function(){return j},tE:function(){return v},xF:function(){return h}});var r,o,i,u,c,l,a,d=t(82394),s=t(44425);!function(n){n.DBT="dbt"}(u||(u={})),function(n){n.CSV="csv",n.JSON="json",n.MD="md",n.PY="py",n.R="r",n.SH="sh",n.SQL="sql",n.TXT="txt",n.YAML="yaml",n.YML="yml"}(c||(c={})),function(n){n.INIT_PY="__init__.py",n.METADATA_YAML="metadata.yaml",n.REQS_TXT="requirements.txt"}(l||(l={})),function(n){n.EXCLUDE_DIR_PATTERN="exclude_dir_pattern",n.EXCLUDE_PATTERN="exclude_pattern",n.PATTERN="pattern"}(a||(a={}));var p=(r={},(0,d.Z)(r,a.EXCLUDE_PATTERN,"a^"),(0,d.Z)(r,a.EXCLUDE_DIR_PATTERN,"a^"),r),f=[c.PY,c.SQL],v=[c.MD,c.PY,c.R,c.SQL,c.YAML],b=[c.JSON,c.MD,c.PY,c.R,c.SH,c.SQL,c.TXT,c.YAML,c.YML],h=new RegExp(b.map((function(n){return".".concat(n,"$")})).join("|")),m=new RegExp([c.CSV,c.JSON,c.MD,c.PY,c.R,c.SH,c.SQL,c.TXT,c.YAML,c.YML].map((function(n){return".".concat(n,"$")})).join("|")),g="charts",j="pipelines",O=(o={},(0,d.Z)(o,c.MD,s.t6.MARKDOWN),(0,d.Z)(o,c.JSON,c.JSON),(0,d.Z)(o,c.PY,s.t6.PYTHON),(0,d.Z)(o,c.R,s.t6.R),(0,d.Z)(o,c.SQL,s.t6.SQL),(0,d.Z)(o,c.TXT,"text"),(0,d.Z)(o,c.YAML,s.t6.YAML),(0,d.Z)(o,c.YML,s.t6.YAML),o),x=(i={},(0,d.Z)(i,s.t6.MARKDOWN,c.MD),(0,d.Z)(i,s.t6.PYTHON,c.PY),(0,d.Z)(i,s.t6.R,c.R),(0,d.Z)(i,s.t6.SQL,c.SQL),(0,d.Z)(i,s.t6.YAML,c.YAML),(0,d.Z)(i,"text",c.TXT),i)},9134:function(n,e,t){var r=t(82684),o=t(21124),i=t(68432),u=t(38626),c=t(65292),l=t(44897),a=t(95363),d=t(70515),s=t(28598);e.Z=function(n){var e=n.language,t=n.maxWidth,p=n.showLineNumbers,f=n.small,v=n.source,b=n.wrapLines,h=(0,r.useContext)(u.ThemeContext);function m(n){var r=n.value;return(0,s.jsx)(i.Z,{customStyle:{backgroundColor:(h.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*d.iI,paddingTop:2*d.iI},language:e,lineNumberStyle:{color:(h.content||l.Z.content).muted},showLineNumbers:p,style:c._4,useInlineStyles:!0,wrapLines:b,children:r})}return(0,s.jsx)(o.D,{components:{code:function(n){var e=n.children;return(0,s.jsx)(m,{value:e})}},children:v})}}}]);