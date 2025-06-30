// Backpack entrance animation
window.addEventListener('DOMContentLoaded', () => {
  const backpackContainer = document.getElementById('backpack-container');
  const backpackClosed = document.getElementById('backpack-closed');
  const backpackOpen = document.getElementById('backpack-open');
  const zipper = document.getElementById('zipper');
  const zipperPull = document.getElementById('zipper-pull');
  const cardsContainer = document.getElementById('experience-cards');

  // Create audio element for zipper sound
  const zipperSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
  zipperSound.volume = 0.3;

  // Backpack falls in with bounce
  gsap.set(backpackContainer, { y: -300, opacity: 0 });
  gsap.to(backpackContainer, { y: 0, opacity: 1, duration: 1.2, ease: 'bounce.out', delay: 0.2 });

  // Zipper pull animation with improved timing
  let isOpen = false;
  backpackContainer.addEventListener('click', () => {
    if (isOpen) return;
    isOpen = true;
    
    // Play zipper sound
    zipperSound.play();
    
    // Create a timeline for smoother animation sequence
    const tl = gsap.timeline();
    
    // Step 1: Zipper pull animation
    tl.to(zipperPull, { y: 15, duration: 0.2, ease: 'power2.in' })
      .to(zipperPull, { y: 35, duration: 0.4, ease: 'power2.in' })
      .to(zipperPull, { y: 50, duration: 0.3, ease: 'power2.out' });
    
    // Step 2: Smooth transition between backpack images
    tl.to(backpackClosed, { 
      opacity: 0, 
      duration: 0.4, 
      ease: 'power2.inOut',
      onComplete: () => {
        backpackClosed.style.display = 'none';
        backpackOpen.style.display = 'block';
        backpackOpen.style.opacity = '0';
      }
    }, '-=0.2');
    
    // Step 3: Show open backpack
    tl.to(backpackOpen, { 
      opacity: 1, 
      duration: 0.4, 
      ease: 'power2.inOut' 
    });
    
    // Step 4: Animate experience cards
    tl.add(() => showExperienceCards(), '-=0.1');
  });

  function showExperienceCards() {
    // Example experience cards data
    const experiences = [
      { title: 'Frontend Intern', company: 'Creative Studio', duration: '3 mo', role: 'UI Dev' },
      { title: 'UI/UX Intern', company: 'Design Lab', duration: '2 mo', role: 'UX Designer' },
      { title: 'Web Dev Intern', company: 'Tech Agency', duration: '4 mo', role: 'React Dev' },
    ];
    
    cardsContainer.innerHTML = experiences.map(exp => `
      <div class="exp-card">
        <div class="font-bold text-blue-900 text-lg mb-1">${exp.title}</div>
        <div class="text-blue-700 text-sm mb-1">${exp.company}</div>
        <div class="text-blue-500 text-xs mb-1">${exp.duration}</div>
        <div class="text-blue-800 text-xs">${exp.role}</div>
      </div>
    `).join('');
    
    // Animate cards popping out with better timing
    gsap.fromTo(
      '#experience-cards .exp-card',
      { 
        y: 60, 
        opacity: 0, 
        scale: 0.7,
        rotation: -5
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        stagger: 0.15, 
        duration: 0.8, 
        ease: 'back.out(1.4)' 
      }
    );
  }
}); 