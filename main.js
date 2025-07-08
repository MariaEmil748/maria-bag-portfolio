// Import dependencies
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

gsap.registerPlugin(ScrollTrigger);

const coffeeContainer = document.querySelector('.container-coffee');
coffeeContainer.addEventListener('click', () => {
  coffeeContainer.classList.add('arm-down');
  setTimeout(() => {
    coffeeContainer.classList.remove('arm-down');
  }, 350); // Arm stays down for 350ms, then goes back up
});

window.addEventListener('DOMContentLoaded', () => {



  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.bag-stack',
      start: 'top 30%',
      end:'+=2500 50%', // Adjusted to ensure the animation plays through
      scrub: true,
      markers: false,
    },
  });


  // Fade in first vector background
  tl.to('#vectorBg1', {
    x:150,
    y: -250,
    opacity: 1,
    scale: 1.7, 
    duration: 1,
    ease: 'power1.inOut'
  }, 0.8);

    // Fade out first vector background and fade in second
  tl.to('#vectorBg1', {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: 'power1.inOut'
  }, 2.5);

  tl.to('#vectorBg2', {
    opacity: 1,
    x:-20,
    y:-250,
    scale: 1.7,
    duration: 1,
    ease: 'power1.inOut'
  }, 3);

    // Fade out second vector background and fade in third
  tl.to('#vectorBg2', {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: 'power1.inOut'
  }, 5.5);

  tl.to('#vectorBg3', {
    opacity: 1,
    x: 180,
    y:-250,
    rotate:-10,
    scale: 1.7,
    duration: 1,
    ease: 'power1.inOut'
  }, 5.7);

    // Fade out third vector background and fade in fourth
  tl.to('#vectorBg3', {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: 'power1.inOut'
  }, 7.5);

  tl.to('#vectorBg4', {
    opacity: 1,
    y: 100,
    x: -20,
    scale: 1.5,
    duration: 0.5,
    ease: 'power1.inOut'
  }, 9.8);


  const screenWidth = window.innerWidth;
  const leftEdge = 0;
  const rightEdge = screenWidth - 420; // Adjust 300 to bag width if needed

  // 1. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 550,
    rotate: 0, // Straight at right edge
    ease: 'power2.inOut',
    duration: 1.5,
    onUpdate: function() {
      const progress = this.progress();
      const angle = -Math.sin(progress * Math.PI) * 18; // -18deg max (left)
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 0);

  
  // 2. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 1050,
    rotate: 0, // Straight at left edge
    ease: 'power2.inOut',
    duration: 1.5,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 18; // 18deg max (right)
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 2.7);


  // 3. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 1650,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 1.5,
    onUpdate: function() {
      const progress = this.progress();
      const angle = -Math.sin(progress * Math.PI) * 12;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 5.5);



  // 4. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 2050,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 8;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 7.6);





  const tlBag = gsap.timeline({
    scrollTrigger:{
      trigger: '#techSkillsSection',
      start: '75% 50%',
      end: '+=500 50%', 
      scrub: true,
      markers: true 
    }
  })

  tlBag.to('#bagEnvelope', 
    {
      y: -100,
    },0);

    tlBag.to('#bagEnvelope',{
      x: 650,
      y: -200,
      rotation: 0,
      scale: 1.2,
      ease: 'power2.inOut'
    }, 1)


    
    
    
    // tlBag.to('#bagEnvelope',{
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: 'power2.inOut',
    // }, 0.7);
    
    // tlBag.fromTo('.letter-image', 
    //   {
    //     display: 'none',
    //     opacity: 0,
    //   },
    //   {
    //     display: 'inline-flex',
    //     opacity: 1,
    //     duration: 0.5,
    //     zIndex: 10,
    //     ease: 'power2.inOut',
    //   },0.5)



  gsap.utils.toArray('.animated-left').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end: '+=100', // Adjusted to ensure the animation plays through
        scrub: true,
        // toggleActions: 'play reverse play reverse', // Enable reverse animation
        markers: false // Enable markers for debugging
      },
      opacity: 0,
      x: -80,         // Animate from the left
      rotate: -8, 
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.animated-right').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end:'+=100',
        scrub: true,
        markers: false, // Enable markers for debugging
        // toggleActions: 'play reverse play reverse' // Enable reverse animation
      },
      opacity: 0,
      x: 80,         // Animate from the left
      rotate: -8,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  // Initialize Swiper
  new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
  });
});