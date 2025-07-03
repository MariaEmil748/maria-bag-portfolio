// Import dependencies
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

gsap.registerPlugin(ScrollTrigger);

// // Responsive values for movement
// function getBagPath() {
//   const container = document.querySelector('.scroll-container');
//   const containerHeight = container ? container.offsetHeight : window.innerHeight * 4;
//   const sectionHeight = containerHeight / 5;
//   const yStep = sectionHeight;
//   // Responsive horizontal positions (relative to the left edge of the scroll-container)
//   const xLeft = 0;
//   const xMiddle = 400;
//   const xRight = 800;
//   return [
//     { x: xLeft,   y: 0 },                // 1. Start (left)
//     { x: xMiddle, y: yStep },            // 2. Down + middle
//     { x: xRight,  y: yStep * 2 },        // 3. Down + right
//     { x: xMiddle, y: yStep * 3 },        // 4. Down + middle
//     { x: xLeft,   y: yStep * 4 }         // 5. Down + left (end)
//   ];
// }

// function animateBagStack() {
//   const path = getBagPath();
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '#bagStack',
//       start: 'top center',
//       end: '+=3000', // Ensures enough scroll distance for all sections
//       scrub: 1,
//       pin: false,
//       invalidateOnRefresh: true,
//     }
//   });
//   // Animate through the 5 points (4 transitions)
//   tl.to('#bagStack', {
//     x: path[1].x,
//     y: path[1].y,
//     duration: 1,
//     ease: 'power2.inOut',
//   }, 0.0)
//   .to('#bagStack', {
//     x: path[2].x,
//     y: path[2].y,
//     duration: 1,
//     ease: 'power2.inOut',
//   }, 0.25)
//   .to('#bagStack', {
//     x: path[3].x,
//     y: path[3].y,
//     duration: 1,
//     ease: 'power2.inOut',
//   }, 0.5)
//   .to('#bagStack', {
//     x: path[4].x,
//     y: path[4].y,
//     duration: 1,
//     ease: 'power2.inOut',
//   }, 0.75);
// }

// // Run on load and resize
// animateBagStack();
// window.addEventListener('resize', () => {
//   gsap.killTweensOf('#bagStack');
//   animateBagStack();
// });

// // Envelope slides up and fades in (starts after bag moves a bit)
// gsap.fromTo('#bagEnvelope',
//   { y: 60, opacity: 0 },
//   { y: -60, opacity: 1, duration: 1, ease: 'power2.inOut' },
//   0.3
// )

// // Second bag fades in (after envelope is visible)
// gsap.fromTo('#bagLayer2',
//   { opacity: 0 },
//   { opacity: 1, duration: 0.7, ease: 'power2.inOut' },
//   0.6
// );

window.addEventListener('DOMContentLoaded', () => {



  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-container',
      start: 'top 25%',
      end: `+=${6000}`,
      scrub: 1,
      markers: true,
    },
  });
  tl.to('.bag-stack', {
    x: 800,
    y: 1000,
    ease: 'none',
    duration: 1,
    rotate: 15,
  }, 0);
  // Delay after step 1
  tl.to({}, { duration: 0.5 }, 1);

  tl.to('.bag-stack', {
    x: 200,
    y: 2000,
    ease: 'none',
    duration: 1,
    rotate: -15,
  }, 1.5);

  // Delay after step 2
  tl.to({}, { duration: 0.5 }, 2.5);

  tl.to('.bag-stack', {
    x: 800,
    y: 3000,
    ease: 'none',
    duration: 1,
    rotate: 15,
  }, 3);

  // Delay after step 3
  tl.to({}, { duration: 0.5 }, 4);

  tl.to('.bag-stack', {
    x: 200,
    y: 4000,
    ease: 'none',
    duration: 1,
    rotate: -15,
  }, 4.5);

  // Delay after step 4
  tl.to({}, { duration: 0.5 }, 5.5);
  
  tl.to('.bag-stack', {
    x: 800,
    y: 5000,
    ease: 'none',
    duration: 1,
    rotate: 15,
  }, 6);

  // Delay after step 5
  tl.to({}, { duration: 0.5 }, 7);

  tl.to('.bag-stack', {
    x: 200,
    y: 6000,
    ease: 'none',
    duration: 1,
    rotate: 0,
  }, 7.5);

  tl.fromTo('#bagEnvelope', {
    y: 60,
  }, {
    y: -150,
    duration: 1,
    ease: 'power2.inOut',
  }, 7.5);
  
  tl.to('#bagEnvelope' , {
    x: 592,
    duration: 1,
    ease: 'power2.inOut',
  }, 8);

  tl.to('#bagEnvelope' , {
    y: 145,
    rotate: 0,
    scale: 3.33,
    duration: 1,
    ease: 'power2.inOut',
  },8);
  tl.to('#bagEnvelope' , {
    opacity: 0,
  },8.5);

  tl.fromTo('.letter-image',{
    opacity:0,
    display: 'none',
  }, {
    opacity: 1,
    duration: 0.2,
    display: 'block',
  },8.6);
  


  
});