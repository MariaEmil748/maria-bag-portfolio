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
      end:'+=2000 50%', // Adjusted to ensure the animation plays through
      scrub: true,
      // markers: true,
    },
  });

  const screenWidth = window.innerWidth;
  const leftEdge = 0;
  const rightEdge = screenWidth - 420; // Adjust 300 to bag width if needed

  // 1. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 575,
    rotate: 0, // Straight at right edge
    ease: 'power2.inOut',
    duration: 1.5,
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
  },1.5)
  
  // 2. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 1150,
    rotate: 0, // Straight at left edge
    ease: 'power2.inOut',
    duration: 2,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 18; // 18deg max (right)
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 3);

  // 3. Move to right edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: rightEdge,
    y: 1700,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 2,
    onUpdate: function() {
      const progress = this.progress();
      const angle = -Math.sin(progress * Math.PI) * 12;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 6);

  // 4. Move to left edge, rotate in the middle, end straight
  tl.to('.bag-stack', {
    x: leftEdge,
    y: 2200,
    rotate: 0,
    ease: 'power2.inOut',
    duration: 1,
    onUpdate: function() {
      const progress = this.progress();
      const angle = Math.sin(progress * Math.PI) * 8;
      gsap.set('.bag-stack', { rotate: angle });
    }
  }, 9);



  const tlBag = gsap.timeline({
    scrollTrigger:{
      trigger: '#techSkillsSection',
      start: '50% 50%',
      end: '+=500 50%', 
      scrub: true,
      markers: false 
    }
  })

  tlBag.to('#bagEnvelope', 
    {
      y: -10,
      x: 755,
      rotate: 0,
      scale: 3.33,
      duration: 0.5,
      ease: 'power2.inOut',
      zIndex: -1,
    },0);

    tlBag.to('#bagEnvelope',{
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    }, 0.7);
    
    tlBag.fromTo('.letter-image', 
      {
        display: 'none',
        opacity: 0,
      },
      {
        display: 'inline-flex',
        opacity: 1,
        duration: 0.5,
        zIndex: 10,
        ease: 'power2.inOut',
      },0.5)



  gsap.utils.toArray('.animated-left').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: '+=200', // Adjusted to ensure the animation plays through
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
        start: 'top 30%',
        end:'+=200',
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