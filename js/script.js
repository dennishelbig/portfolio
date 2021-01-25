// Whole-Script Strict Mode Syntax
'use strict';
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/*global  _, gsap  */


function vhFunction(){
    // vh === innerHeight / 100
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
window.addEventListener('resize', _.throttle(vhFunction, 500, { 'leading': true, 'trailing': true }));
vhFunction(); // on init



// get footer link objects
let $imprintButton = document.querySelector('#imprint-button');
let $imprint = document.querySelector('#imprint');

let $privacyButton = document.querySelector('#privacy-button');
let $privacy = document.querySelector('#privacy');

let $overlays = document.querySelectorAll('.overlay');
let $closeButtons = document.querySelectorAll('button.close');



// add transition prop .overlay.is-transition -> footer.scss
function addTransition( $element ){
  $element.classList.add('is-transition');

  setTimeout(() =>{
    $element.classList.remove('is-transition');
  },500);
}



// open overlays on click
$imprintButton.addEventListener('click', ()=>{
  addTransition($imprint);
  $imprint.classList.add('is-active');
});

$privacyButton.addEventListener('click', ()=>{
  addTransition($privacy);
  $privacy.classList.add('is-active');
});



function closeOverlay(){
  $overlays.forEach( ($overlay) => {
    addTransition($overlay);
    $overlay.classList.remove('is-active');
  });
}

// close overlays on click
$closeButtons.forEach( ( $button ) =>{
  $button.addEventListener('click', () =>{
    closeOverlay();
  });
});

// close on "esc"
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
    closeOverlay();
	}
});


// open email on contact click
document.querySelectorAll('.mail').forEach(( $link )=> {
  $link.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = "mailto:post@dennishelbig.com?subject=Hello there&body=";
  });
});



// check if browser-module is in viewport
var isInViewportHalf = function (elem) {
  var bounding = elem.getBoundingClientRect();
  var height = elem.offsetHeight;
    return (
      ( bounding.top + height / 2 ) >= 0 &&
      ( bounding.bottom - height / 2 ) <= (window.innerHeight || document.documentElement.clientHeight)
    );
};



// get browser-modules
var $browsers = document.querySelectorAll('.browser');
var $videos = document.querySelectorAll('video');


// if video is in viewport -> play it
function checkBrowser(){
  $browsers.forEach( ( $browser, i ) => {
    var video = $videos[i];
    if( isInViewportHalf( $browser ) ){
      video.play();

    }else{
      if(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2){
        video.pause();
      }
    }
  });
}


/************************************************************* */
/********************    Scrolltrigger    ******************** */
/************************************************************* */


var starsNumber = 100;
var $starsContainer1 = document.querySelector('.stars.one');
var $starsContainer2 = document.querySelector('.stars.two');
var $starsContainer3 = document.querySelector('.stars.three');


// create stars for background
function createStar($container){
  var $star = document.createElement('div');
  $star.classList.add('star');
  // get random rr.r%
  $star.style.left = Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 10) + '%';
  $star.style.top = Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 10) + '%';

  $container.appendChild($star);
}

// execute create stars in background containers
function createStars(){
  var count = 0;
  var interval = setInterval(function () {

    createStar($starsContainer1);
    createStar($starsContainer2);
    createStar($starsContainer3);

    if ( ++count === starsNumber ) {
      window.clearInterval(interval);
    }
  }, 20);
}
createStars();



function parallaxStars(){
  var scrollTriggerArgs = {
    trigger: "#portfolio",
    scroller: "#dom",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom bottom",
    scrub: 0.05 // smooth scrubbing
  }

  // move container 2 by 25% to top
  gsap.fromTo('.stars.two', {
    yPercent: 0
  },{
    yPercent: -25,
    ease: "linear",
    scrollTrigger: scrollTriggerArgs
  });

  // move container 3 by 50% to top
  gsap.fromTo('.stars.three', {
    yPercent: 0
  },{
    yPercent: -50,
    ease: "linear",
    scrollTrigger: scrollTriggerArgs
  });
}


// get rows & function essentials
let $rows = document.querySelectorAll('.row');
let $dom = document.querySelector('#dom');
let $portfolio = document.querySelector('#portfolio');
let $footer = document.querySelector('footer');


// motion timeline for each row 
function scaleRowsInOut(){
  $rows.forEach(element => {
    var $inner = element.querySelector('.row-inner');
    gsap.set( $inner, {scale: 0.75})

    const tl = gsap.timeline({
      ease: "power4.inOut",
      scrollTrigger: {
        scroller: '#dom',
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
        // markers: true
      }
    });
    tl.to( $inner, {scale: 1, duration: 1}) // move in
    tl.to( $inner, {scale: 1, duration: 0.5}) // move along
    tl.to( $inner, {scale: 0.8, duration: 0.75}) // move out
  });
}



// on init
checkBrowser();



// prepare for intro
$dom.classList.add('overflow-hidden');
// throttle while browsing
$dom.addEventListener('scroll', _.throttle(checkBrowser, 500, { 'leading': true, 'trailing': true }));


// slide in content
setTimeout(()=>{
  $portfolio.classList.remove('transition-fade-slide-in'); // -> transition.scss
},3500);

// enable pointer
setTimeout(() =>{
  $footer.classList.remove('pointer-none'); // -> misc.scss
}, 4000);

// init row scale effect
setTimeout(() =>{
  $dom.classList.remove('overflow-hidden'); // -> misc.scss
  parallaxStars();
  scaleRowsInOut();
}, 4000);


