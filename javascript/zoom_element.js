const zoomElement=document.querySelector(".card_profile"),fadeElement2=document.getElementById("hidewhenscroll2"),imgElement=document.querySelector(".card_profile-body"),WIDTH=document.body.clientWidth,HEIGHT=zoomElement.clientHeight,IMAGE_WIDTH=imgElement.clientWidth,IMAGE_HEIGHT=imgElement.clientHeight,ZOOM_SPEED=70,ZOOM_BREAKPOINT=WIDTH/IMAGE_WIDTH,HIDE_MOON=HEIGHT/IMAGE_HEIGHT,IMAGE_HEIGHT_MAX=IMAGE_HEIGHT*ZOOM_BREAKPOINT,ABSOLUTE=ZOOM_BREAKPOINT*ZOOM_SPEED,FADE_SPEED=300;let fade=1,prev=0;function anim(){let e=window.scrollY,t=e/ZOOM_SPEED,E=t>1?t:1;E<ZOOM_BREAKPOINT&&(imgElement.style.transform=`scale(${E})`,zoomElement.style.top="30vh",zoomElement.style.maxWidth="200%",zoomElement.style.maxHeight="200%",zoomElement.style.position="absolute"),E<HIDE_MOON-FADE_SPEED/ZOOM_SPEED?fade=1:fade+=(prev-e)/FADE_SPEED,fadeElement2.style.opacity=fade,prev=e}"scrollRestoration"in history&&(history.scrollRestoration="manual"),document.addEventListener("scroll",()=>window.requestAnimationFrame(anim)),zoomElement.style.opacity=10;