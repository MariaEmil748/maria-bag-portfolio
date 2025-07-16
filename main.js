// Import dependencies
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Coffee machine click handler
const coffeeContainer = document.querySelector('.container-coffee');
if (coffeeContainer) {
  coffeeContainer.addEventListener('click', () => {
    coffeeContainer.classList.add('arm-down');
    setTimeout(() => {
      coffeeContainer.classList.remove('arm-down');
    }, 350);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 900;
  
  // Initialize ScrollSmoother ONLY on desktop screens
  let smoother = null;
  if (!isMobile) {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      preventDefault: true
    });
  }

  // Desktop-only animations
  if (!isMobile) {
    // Desktop bag animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bag-stack',
        start: 'top 30%',
        end:'+=2500 50%',
        scrub: true,
        markers: false,
      },
    });

    // Vector background animations
    tl.to('#vectorBg1', {
      x:150,
      y: -250,
      opacity: 1,
      scale: 1.7, 
      duration: 1,
      ease: 'power1.inOut'
    }, 0.8);

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

    const leftEdge = 0;
    const rightEdge = screenWidth - 420;

    // Desktop bag animations
    tl.to('.bag-stack', {
      x: rightEdge,
      y: 550,
      rotate: 0,
      ease: 'power2.inOut',
      duration: 1.5,
      onUpdate: function() {
        const progress = this.progress();
        const angle = -Math.sin(progress * Math.PI) * 18;
        gsap.set('.bag-stack', { rotate: angle });
      }
    }, 0);

    tl.to('.bag-stack', {
      x: leftEdge,
      y: 1050,
      rotate: 0,
      ease: 'power2.inOut',
      duration: 1.5,
      onUpdate: function() {
        const progress = this.progress();
        const angle = Math.sin(progress * Math.PI) * 18;
        gsap.set('.bag-stack', { rotate: angle });
      }
    }, 2.7);

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

    // Desktop envelope animation
    const tlBag = gsap.timeline({
      scrollTrigger:{
        trigger: '#techSkillsSection',
        start: '75% 50%',
        end: '+=250 50%', 
        scrub: true,
        markers: false 
      }
    });

    const bagEnvelope = document.getElementById('bagEnvelope');
    const letterImage = document.querySelector('.letter-image');
    
    if (bagEnvelope && letterImage) {
      const bagEnvelopeRect = bagEnvelope.getBoundingClientRect();
      const letterImageRect = letterImage.getBoundingClientRect();
      
      const deltaX = letterImageRect.left + (letterImageRect.width / 2) - (bagEnvelopeRect.left + bagEnvelopeRect.width / 2);
      const deltaY = letterImageRect.top + (letterImageRect.height / 2) - (bagEnvelopeRect.top + bagEnvelopeRect.height / 2);

      tlBag.to('#bagEnvelope', {
        y: -150,
        rotation: 0,
      }, 0);

      tlBag.to('#bagEnvelope', {
        x: deltaX,
        y: -60,
        scale: 3.33333,
        ease: 'power2.inOut'
      }, 0.1);

      tlBag.to('#bagEnvelope', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0.5);

      tlBag.fromTo('.letter-image', {
        display: 'none',
        opacity: 0,
      }, {
        display: 'inline-flex',
        opacity: 1,
        duration: 0.5,
        zIndex: 15,
        ease: 'power2.inOut',
      }, 0.5);
    }
  } else {
    // Mobile bag animation - ULTRA SMOOTH ROTATION
    const mobileBagTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bag-stack',
        start: 'top 80%',
        end: '+=800 50%',
        scrub: 2, // Higher scrub value for maximum smoothness
        markers: false,
      },
    });

    // Separate rotation animation that's independent of movement
    gsap.to('.bag-stack', {
      rotation: 360,
      scrollTrigger: {
        trigger: '.bag-stack',
        start: 'top 80%',
        end: '+=800 50%',
        scrub: 2, // Matching scrub value
        markers: false,
      },
      ease: "none", // Linear rotation for consistent speed
    });

    // Mobile bag moves to the right and out of screen
    mobileBagTl.to('.bag-stack', {
      x: screenWidth + 200,
      y: 100,
      scale: 0.8,
      ease: 'power2.inOut',
      duration: 2
    }, 0);

    // Smoother fade out
    mobileBagTl.to('.bag-stack', {
      opacity: 0.3,
      duration: 1.5,
      ease: 'power2.inOut'
    }, 0.5);
  }

  // Text animations (all screen sizes)
  gsap.utils.toArray('.animated-left').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end: '+=100',
        scrub: true,
        markers: false
      },
      opacity: 0,
      x: -80,
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
        markers: false,
      },
      opacity: 0,
      x: 80,
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

  // Handle window resize
  window.addEventListener('resize', () => {
    const newScreenWidth = window.innerWidth;
    const newIsMobile = newScreenWidth <= 900;
    
    // If screen size category changes, reload page for proper reset
    if (newIsMobile !== isMobile) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      location.reload();
    }
  });
});