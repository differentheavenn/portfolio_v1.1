"use strict";window.onload=(()=>{gsap.set("#scrollDist",{width:"100%",height:gsap.getProperty("#app","height"),onComplete:()=>{gsap.set("#app, #imgGroup",{position:"fixed",width:"100%",height:"100%",bottom:0,left:0,perspective:300}),gsap.set("#app img",{position:"absolute",attr:{id:(e,t,o)=>((function(e,t){const o=document.createElement("div");o.appendChild(t),document.getElementById("imgGroup").appendChild(o),gsap.set(o,{pointerEvents:"none",position:"absolute",attr:{id:"box"+e,class:"imgBox"},width:t.width,height:t.height,overflow:"hidden",top:"50%",left:"50%",x:t.dataset.x,y:t.dataset.y,xPercent:-50,yPercent:-50,perspective:500}),t.onmousedown=(()=>{gsap.to(t,{z:-25,ease:"power2"})}),t.onmouseup=(()=>gsap.to(t,{z:0,ease:"power1.inOut"}))})(e,t),"img"+e)}}),gsap.timeline({defaults:{duration:1},onUpdate:()=>{1==gsap.getProperty("opacity")&&closeDetail()},scrollTrigger:{trigger:"#scrollDist",start:"top top",end:"bottom bottom",scrub:1}}).fromTo(".imgBox",{z:-5e3},{z:350,stagger:-.3,ease:"none"},.3).fromTo(".imgBox img",{scale:3},{scale:1.15,stagger:-.3,ease:"none"},.3).to(".imgBox",{duration:0,pointerEvents:"auto",stagger:-.3},.5).from(".imgBox img",{duration:.3,opacity:0,stagger:-.3,ease:"power1.inOut"},.3).to(".imgBox img",{duration:.1,opacity:0,stagger:-.3,ease:"expo.inOut"},1.2).to(".imgBox",{duration:0,pointerEvents:"none",stagger:-.3},1.27).add("end"),gsap.from(window,{duration:1.4,scrollTo:gsap.getProperty("#scrollDist","height")/3,ease:"power2.in"}),gsap.from(".imgBox",{duration:.2,opacity:0,stagger:.06,ease:"power1.inOut"})}})});