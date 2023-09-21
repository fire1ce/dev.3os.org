"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{45695:function(e,t,s){s.r(t),s.d(t,{diagram:function(){return V}});var r=s(20436),a=s(45625),i=s(59373),l=s(49124),o=s(79990);s(27484),s(17967),s(27856),s(42494),s(39354);let d="rect",n="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",x="----",$=`${x}${w}`,m=`${x}${f}`,T="fill:none",S="fill: #333",k="text",D="normal",A={},v=0;function B(e="",t=0,s="",r=x){let a=null!==s&&s.length>0?`${r}${s}`:"";return`state-${e}${a}-${t}`}let E=(e,t,s,a,i,o)=>{var c;let b=s.id,x=null==(c=a[b])?"":c.classes?c.classes.join(" "):"";if("root"!==b){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==r.D&&(t=s.type),A[b]||(A[b]={id:b,shape:t,description:l.e.sanitizeText(b,(0,l.c)()),classes:`${x} ${p}`});let a=A[b];s.description&&(Array.isArray(a.description)?(a.shape=n,a.description.push(s.description)):a.description.length>0?(a.shape=n,a.description===b?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=d,a.description=s.description),a.description=l.e.sanitizeTextOrArray(a.description,(0,l.c)())),1===a.description.length&&a.shape===n&&(a.shape=d),!a.type&&s.doc&&(l.l.info("Setting cluster for ",b,C(s)),a.type="group",a.dir=C(s),a.shape=s.type===r.a?"divider":"roundedWithTitle",a.classes=a.classes+" "+u+" "+(o?y:""));let i={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:b,dir:a.dir,domId:B(b,v),type:a.type,padding:15};if(i.centerLabel=!0,s.note){let t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:b+$+"-"+v,domId:B(b,v,w),type:a.type,padding:15},r={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:a.classes,style:"",id:b+m,domId:B(b,v,f),type:"group",padding:0};v++;let l=b+m;e.setNode(l,r),e.setNode(t.id,t),e.setNode(b,i),e.setParent(b,l),e.setParent(t.id,l);let o=b,d=t.id;"left of"===s.note.position&&(o=t.id,d=b),e.setEdge(o,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else e.setNode(b,i)}t&&"root"!==t.id&&(l.l.trace("Setting node ",b," to be child of its parent ",t.id),e.setParent(b,t.id)),s.doc&&(l.l.trace("Adding nodes children "),N(e,s,s.doc,a,i,!o))},N=(e,t,s,a,i,o)=>{l.l.trace("items",s),s.forEach(s=>{switch(s.stmt){case r.b:case r.D:E(e,t,s,a,i,o);break;case r.S:{E(e,t,s.state1,a,i,o),E(e,t,s.state2,a,i,o);let r={id:"edge"+v,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:l.e.sanitizeText(s.description,(0,l.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:b};e.setEdge(s.state1.id,s.state2.id,r,v),v++}}})},C=(e,t=r.c)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){let r=e.doc[t];"dir"===r.stmt&&(s=r.value)}return s},R=async function(e,t,s,r){let n;l.l.info("Drawing state diagram (v2)",t),A={},r.db.getDirection();let{securityLevel:p,state:b}=(0,l.c)(),g=b.nodeSpacing||50,h=b.rankSpacing||50;l.l.info(r.db.getRootDocV2()),r.db.extract(r.db.getRootDocV2()),l.l.info(r.db.getRootDocV2());let u=r.db.getStates(),y=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:C(r.db.getRootDocV2()),nodesep:g,ranksep:h,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});E(y,void 0,r.db.getRootDocV2(),u,r.db,!0),"sandbox"===p&&(n=(0,i.Ys)("#i"+t));let f="sandbox"===p?(0,i.Ys)(n.nodes()[0].contentDocument.body):(0,i.Ys)("body"),w=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await (0,o.r)(x,y,["barb"],c,t),l.u.insertTitle(w,"statediagramTitleText",b.titleTopMargin,r.db.getDiagramTitle());let $=w.node().getBBox(),m=$.width+16,T=$.height+16;w.attr("class",c);let S=w.node().getBBox();(0,l.i)(w,T,m,b.useMaxWidth);let k=`${S.x-8} ${S.y-8} ${m} ${T}`;l.l.debug(`viewBox ${k}`),w.attr("viewBox",k);let D=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let e of D){let t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",d);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}},V={parser:r.p,db:r.d,renderer:{setConf:function(e){let t=Object.keys(e);for(let s of t)e[s]},getClasses:function(e,t){l.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(e){return e}},draw:R},styles:r.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,r.d.clear()}}}}]);