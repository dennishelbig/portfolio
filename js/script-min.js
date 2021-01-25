"use strict";function vhFunction(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}window.addEventListener("resize",_.throttle(vhFunction,500,{leading:!0,trailing:!0})),vhFunction();var $imprintButton=document.querySelector("#imprint-button"),$imprint=document.querySelector("#imprint"),$privacyButton=document.querySelector("#privacy-button"),$privacy=document.querySelector("#privacy"),$overlays=document.querySelectorAll(".overlay"),$closeButtons=document.querySelectorAll("button.close");function addTransition(e){e.classList.add("is-transition"),setTimeout((function(){e.classList.remove("is-transition")}),500)}function closeOverlay(){$overlays.forEach((function(e){addTransition(e),e.classList.remove("is-active")}))}$imprintButton.addEventListener("click",(function(){addTransition($imprint),$imprint.classList.add("is-active")})),$privacyButton.addEventListener("click",(function(){addTransition($privacy),$privacy.classList.add("is-active")})),$closeButtons.forEach((function(e){e.addEventListener("click",(function(){closeOverlay()}))})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&closeOverlay()})),document.querySelectorAll(".mail").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),window.location.href="mailto:post@dennishelbig.com?subject=Hello there&body="}))}));var isInViewportHalf=function(e){var t=e.getBoundingClientRect(),o=e.offsetHeight;return t.top+o/2>=0&&t.bottom-o/2<=(window.innerHeight||document.documentElement.clientHeight)},$browsers=document.querySelectorAll(".browser"),$videos=document.querySelectorAll("video");function checkBrowser(){$browsers.forEach((function(e,t){var o=$videos[t];isInViewportHalf(e)?o.play():o.currentTime>0&&!o.paused&&!o.ended&&o.readyState>2&&o.pause()}))}var starsNumber=100,$starsContainer1=document.querySelector(".stars.one"),$starsContainer2=document.querySelector(".stars.two"),$starsContainer3=document.querySelector(".stars.three");function createStar(e){var t=document.createElement("div");t.classList.add("star"),t.style.left=Math.floor(100*Math.random())+"."+Math.floor(10*Math.random())+"%",t.style.top=Math.floor(100*Math.random())+"."+Math.floor(10*Math.random())+"%",e.appendChild(t)}function createStars(){var e=0,t=setInterval((function(){createStar($starsContainer1),createStar($starsContainer2),createStar($starsContainer3),++e===starsNumber&&window.clearInterval(t)}),20)}function parallaxStars(){var e={trigger:"#portfolio",scroller:"#dom",start:"top top",end:"bottom bottom",scrub:.05};gsap.fromTo(".stars.two",{yPercent:0},{yPercent:-25,ease:"linear",scrollTrigger:e}),gsap.fromTo(".stars.three",{yPercent:0},{yPercent:-50,ease:"linear",scrollTrigger:e})}createStars();var $rows=document.querySelectorAll(".row"),$dom=document.querySelector("#dom"),$portfolio=document.querySelector("#portfolio"),$footer=document.querySelector("footer");function scaleRowsInOut(){$rows.forEach((function(e){var t=e.querySelector(".row-inner");gsap.set(t,{scale:.75});var o=gsap.timeline({ease:"power4.inOut",scrollTrigger:{scroller:"#dom",trigger:e,start:"top bottom",end:"bottom top",scrub:!0}});o.to(t,{scale:1,duration:1}),o.to(t,{scale:1,duration:.5}),o.to(t,{scale:.8,duration:.75})}))}checkBrowser(),$dom.classList.add("overflow-hidden"),$dom.addEventListener("scroll",_.throttle(checkBrowser,500,{leading:!0,trailing:!0})),setTimeout((function(){$portfolio.classList.remove("transition-fade-slide-in")}),3500),setTimeout((function(){$footer.classList.remove("pointer-none")}),4e3),setTimeout((function(){$dom.classList.remove("overflow-hidden"),parallaxStars(),scaleRowsInOut()}),4e3);
//# sourceMappingURL=script-min.js.map