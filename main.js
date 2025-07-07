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
      trigger: '.scroll-container',
      start: 'top 10%',
      end: '+=3200',
      // toggleActions: 'play none none reverse',
      scrub: 1,
      markers: false,
    },
  });

  const screenWidth = window.innerWidth;
  const leftEdge = 0;
  const rightEdge = screenWidth - 420; // Adjust 300 to bag width if needed

  // 1. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 480,
    rotate: 0, // Straight at right edge
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = -Math.sin(progress * Math.PI) * 18; // -18deg max (left)
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 0);

  
  tl.fromTo('.project-card', {
    x: 450,
    opacity: 0,
    scale:0.4,
    zIndex:0,
    position: 'absolute',
  },{
    x:0,
    y: 0,
    opacity: 1,
    scale: 1,
    zIndex:0,
    ease: 'power2.inOut',
    position:'relative',
    duration: 0.2,
  },0.5)
  
  // 2. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 800,
    rotate: 0, // Straight at left edge
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 18; // 18deg max (right)
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 1);

  // 3. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 1200,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = -Math.sin(progress * Math.PI) * 12;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 2);

  // 4. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 1600,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 8;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 3);


  // Envelope and letter animation (keep as is)
  tl.fromTo('#bagEnvelope', {
    y: 60,
  }, {
    y: -120,
    duration: 1,
    ease: 'power2.inOut',
  }, 3);

  tl.to('#bagEnvelope', {
    x: 350,
    duration: 1,
    ease: 'power2.inOut',
  }, 3.5);

  tl.to('#bagEnvelope', {
    y: 100,
    rotate: 0,
    scale: 2.5,
    duration: 1,
    ease: 'power2.inOut',
  }, 5);

  tl.to('#bagEnvelope', {
    opacity: 0,
  }, 5.5);

  tl.from('.letter-image', {
    opacity: 0,
  }, 4);

  tl.to('.letter-image', {
    opacity: 1,
  }, 8.5);


  gsap.utils.toArray('.animated-left').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse' // Enable reverse animation
      },
      opacity: 0,
       x: -80,         // Animate from the left
      rotate: -8, 
      duration: 1,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.animated-right').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse' // Enable reverse animation
      },
      opacity: 0,
       x: 80,         // Animate from the left
      rotate: -8, 
      duration: 1,
      ease: 'power2.out'
    });
  });

  // Initialize Swiper
  new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
  });
});