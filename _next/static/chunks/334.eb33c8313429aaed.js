"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{86334:function(t,e,a){let i;a.r(e),a.d(e,{diagram:function(){return L}});var r=a(20436),d=a(59373),n=a(42494),s=a(45625),o=a(49124);a(27484),a(17967),a(27856);let c={},l=(t,e)=>{c[t]=e},g=t=>c[t],p=()=>Object.keys(c),h={get:g,set:l,keys:p,size:()=>p().length},x=t=>t.append("circle").attr("class","start-state").attr("r",(0,o.c)().state.sizeUnit).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit),u=t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,o.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,o.c)().state.textHeight).attr("y1",0).attr("y2",0),f=(t,e)=>{let a=t.append("text").attr("x",2*(0,o.c)().state.padding).attr("y",(0,o.c)().state.textHeight+2*(0,o.c)().state.padding).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding).attr("width",i.width+2*(0,o.c)().state.padding).attr("height",i.height+2*(0,o.c)().state.padding).attr("rx",(0,o.c)().state.radius),a},y=(t,e)=>{let a=function(t,e,a){let i=t.append("tspan").attr("x",2*(0,o.c)().state.padding).text(e);a||i.attr("dy",(0,o.c)().state.textHeight)},i=t.append("text").attr("x",2*(0,o.c)().state.padding).attr("y",(0,o.c)().state.textHeight+1.3*(0,o.c)().state.padding).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.descriptions[0]),r=i.node().getBBox(),d=r.height,n=t.append("text").attr("x",(0,o.c)().state.padding).attr("y",d+.4*(0,o.c)().state.padding+(0,o.c)().state.dividerMargin+(0,o.c)().state.textHeight).attr("class","state-description"),s=!0,c=!0;e.descriptions.forEach(function(t){s||(a(n,t,c),c=!1),s=!1});let l=t.append("line").attr("x1",(0,o.c)().state.padding).attr("y1",(0,o.c)().state.padding+d+(0,o.c)().state.dividerMargin/2).attr("y2",(0,o.c)().state.padding+d+(0,o.c)().state.dividerMargin/2).attr("class","descr-divider"),g=n.node().getBBox(),p=Math.max(g.width,r.width);return l.attr("x2",p+3*(0,o.c)().state.padding),t.insert("rect",":first-child").attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding).attr("width",p+2*(0,o.c)().state.padding).attr("height",g.height+d+2*(0,o.c)().state.padding).attr("rx",(0,o.c)().state.radius),t},w=(t,e,a)=>{let i;let r=(0,o.c)().state.padding,d=2*(0,o.c)().state.padding,n=t.node().getBBox(),s=n.width,c=n.x,l=t.append("text").attr("x",0).attr("y",(0,o.c)().state.titleShift).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.id),g=l.node().getBBox(),p=g.width+d,h=Math.max(p,s);h===s&&(h+=d);let x=t.node().getBBox();e.doc,i=c-r,p>s&&(i=(s-h)/2+r),Math.abs(c-x.x)<r&&p>s&&(i=c-(p-s)/2);let u=1-(0,o.c)().state.textHeight;return t.insert("rect",":first-child").attr("x",i).attr("y",u).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",x.height+(0,o.c)().state.textHeight+(0,o.c)().state.titleShift+1).attr("rx","0"),l.attr("x",i+r),p<=s&&l.attr("x",c+(h-d)/2-p/2+r),t.insert("rect",":first-child").attr("x",i).attr("y",(0,o.c)().state.titleShift-(0,o.c)().state.textHeight-(0,o.c)().state.padding).attr("width",h).attr("height",3*(0,o.c)().state.textHeight).attr("rx",(0,o.c)().state.radius),t.insert("rect",":first-child").attr("x",i).attr("y",(0,o.c)().state.titleShift-(0,o.c)().state.textHeight-(0,o.c)().state.padding).attr("width",h).attr("height",x.height+3+2*(0,o.c)().state.textHeight).attr("rx",(0,o.c)().state.radius),t},b=t=>(t.append("circle").attr("class","end-state-outer").attr("r",(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,o.c)().state.sizeUnit).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+2).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+2)),m=(t,e)=>{let a=(0,o.c)().state.forkWidth,i=(0,o.c)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding)},B=(t,e,a,i)=>{let r=0,d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let n=t.replace(/\r\n/g,"<br/>");n=n.replace(/\n/g,"<br/>");let s=n.split(o.e.lineBreakRegex),c=1.25*(0,o.c)().state.noteMargin;for(let t of s){let i=t.trim();if(i.length>0){let t=d.append("tspan");if(t.text(i),0===c){let e=t.node().getBBox();c+=e.height}r+=c,t.attr("x",e+(0,o.c)().state.noteMargin),t.attr("y",a+r+1.25*(0,o.c)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:r}},k=(t,e)=>{e.attr("class","state-note");let a=e.append("rect").attr("x",0).attr("y",(0,o.c)().state.padding),i=e.append("g"),{textWidth:r,textHeight:d}=B(t,0,0,i);return a.attr("height",d+2*(0,o.c)().state.noteMargin),a.attr("width",r+2*(0,o.c)().state.noteMargin),a},N=function(t,e){let a=e.id,i={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&x(r),"end"===e.type&&b(r),("fork"===e.type||"join"===e.type)&&m(r,e),"note"===e.type&&k(e.note.text,r),"divider"===e.type&&u(r),"default"===e.type&&0===e.descriptions.length&&f(r,e),"default"===e.type&&e.descriptions.length>0&&y(r,e);let d=r.node().getBBox();return i.width=d.width+2*(0,o.c)().state.padding,i.height=d.height+2*(0,o.c)().state.padding,h.set(a,i),i},E=0,M=function(t,e,a){e.points=e.points.filter(t=>!Number.isNaN(t.y));let i=e.points,n=(0,d.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d.$0Z),s=t.append("path").attr("d",n(i)).attr("id","edge"+E).attr("class","transition"),c="";if((0,o.c)().state.arrowMarkerAbsolute&&(c=(c=(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),s.attr("marker-end","url("+c+"#"+function(t){switch(t){case r.d.relationType.AGGREGATION:return"aggregation";case r.d.relationType.EXTENSION:return"extension";case r.d.relationType.COMPOSITION:return"composition";case r.d.relationType.DEPENDENCY:return"dependency"}}(r.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){let i=t.append("g").attr("class","stateLabel"),{x:r,y:d}=o.u.calcLabelPosition(e.points),n=o.e.getRows(a.title),s=0,c=[],l=0,g=0;for(let t=0;t<=n.length;t++){let e=i.append("text").attr("text-anchor","middle").text(n[t]).attr("x",r).attr("y",d+s),a=e.node().getBBox();if(l=Math.max(l,a.width),g=Math.min(g,a.x),o.l.info(a.x,r,d+s),0===s){let t=e.node().getBBox();s=t.height,o.l.info("Title height",s,d)}c.push(e)}let p=s*n.length;if(n.length>1){let t=(n.length-1)*s*.5;c.forEach((e,a)=>e.attr("y",d+a*s-t)),p=s*n.length}let h=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",r-l/2-(0,o.c)().state.padding/2).attr("y",d-p/2-(0,o.c)().state.padding/2-3.5).attr("width",l+(0,o.c)().state.padding).attr("height",p+(0,o.c)().state.padding),o.l.info(h)}E++},v={},S=function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},z=t=>t?t.length*i.fontSizeFactor:1,H=(t,e,a,r,d,c,l)=>{let g;let p=new s.k({compound:!0,multigraph:!0}),h=!0;for(g=0;g<t.length;g++)if("relation"===t[g].stmt){h=!1;break}a?p.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:h?1:i.edgeLengthFactor,nodeSep:h?1:50,isMultiGraph:!0}):p.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:h?1:i.edgeLengthFactor,nodeSep:h?1:50,ranker:"tight-tree",isMultiGraph:!0}),p.setDefaultEdgeLabel(function(){return{}}),l.db.extract(t);let x=l.db.getStates(),u=l.db.getRelations(),f=Object.keys(x);for(let t of f){let n;let s=x[t];if(a&&(s.parentId=a),s.doc){let t=e.append("g").attr("id",s.id).attr("class","stateGroup");n=H(s.doc,t,s.id,!r,d,c,l);{let e=(t=w(t,s,r)).node().getBBox();n.width=e.width,n.height=e.height+i.padding/2,v[s.id]={y:i.compositTitleSize}}}else n=N(e,s);if(s.note){let t={descriptions:[],id:s.id+"-note",note:s.note,type:"note"},a=N(e,t);"left of"===s.note.position?(p.setNode(n.id+"-note",a),p.setNode(n.id,n)):(p.setNode(n.id,n),p.setNode(n.id+"-note",a)),p.setParent(n.id,n.id+"-group"),p.setParent(n.id+"-note",n.id+"-group")}else p.setNode(n.id,n)}o.l.debug("Count=",p.nodeCount(),p);let y=0;u.forEach(function(t){y++,o.l.debug("Setting edge",t),p.setEdge(t.id1,t.id2,{relation:t,width:z(t.title),height:i.labelHeight*o.e.getRows(t.title).length,labelpos:"c"},"id"+y)}),(0,n.bK)(p),o.l.debug("Graph after layout",p.nodes());let b=e.node();p.nodes().forEach(function(t){if(void 0!==t&&void 0!==p.node(t)){o.l.warn("Node "+t+": "+JSON.stringify(p.node(t))),d.select("#"+b.id+" #"+t).attr("transform","translate("+(p.node(t).x-p.node(t).width/2)+","+(p.node(t).y+(v[t]?v[t].y:0)-p.node(t).height/2)+" )"),d.select("#"+b.id+" #"+t).attr("data-x-shift",p.node(t).x-p.node(t).width/2);let e=c.querySelectorAll("#"+b.id+" #"+t+" .divider");e.forEach(t=>{let e=t.parentElement,a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),Number.isNaN(i=parseInt(e.getAttribute("data-x-shift"),10))&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)})}else o.l.debug("No Node "+t+": "+JSON.stringify(p.node(t)))});let m=b.getBBox();p.edges().forEach(function(t){void 0!==t&&void 0!==p.edge(t)&&(o.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(p.edge(t))),M(e,p.edge(t),p.edge(t).relation))}),m=b.getBBox();let B={id:a||"root",label:a||"root",width:0,height:0};return B.width=m.width+2*i.padding,B.height=m.height+2*i.padding,o.l.debug("Doc rendered",B,p),B},L={parser:r.p,db:r.d,renderer:{setConf:function(){},draw:function(t,e,a,r){let n;i=(0,o.c)().state;let c=(0,o.c)().securityLevel;"sandbox"===c&&(n=(0,d.Ys)("#i"+e));let l="sandbox"===c?(0,d.Ys)(n.nodes()[0].contentDocument.body):(0,d.Ys)("body"),g="sandbox"===c?n.nodes()[0].contentDocument:document;o.l.debug("Rendering diagram "+t);let p=l.select(`[id='${e}']`);S(p);let h=new s.k({multigraph:!0,compound:!0,rankdir:"RL"});h.setDefaultEdgeLabel(function(){return{}});let x=r.db.getRootDoc();H(x,p,void 0,!1,l,g,r);let u=i.padding,f=p.node().getBBox(),y=f.width+2*u,w=f.height+2*u;(0,o.i)(p,w,1.75*y,i.useMaxWidth),p.attr("viewBox",`${f.x-i.padding}  ${f.y-i.padding} `+y+" "+w)}},styles:r.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}}}]);