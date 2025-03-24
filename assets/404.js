document.addEventListener('DOMContentLoaded', function() {
    // Get the 404 elements
    const title = document.querySelector('.e404 h1');
    const button = document.querySelector('.e404 a');
    
    // Split the 404 text into individual characters for more creative animation
    const text = title.textContent;
    title.innerHTML = '';
    
    // Create spans for each character
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      title.appendChild(span);
    }
    
    const chars = title.querySelectorAll('span');
    
    // Create a timeline for the 404 animation
    const tl = gsap.timeline({
      defaults: { 
        ease: "elastic.out(0.5, 0.3)",
        duration: 1.5
      }
    });
    
    // Set initial states
    gsap.set(chars, { 
      opacity: 0, 
      scale: 0,
      y: () => gsap.utils.random(-100, 100),
      x: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-180, 180)
    });
    
    gsap.set(button, { 
      opacity: 0, 
      y: 50 
    });
    
    // Animation sequence for characters
    tl.to(chars, { 
      opacity: 1, 
      scale: 1,
      y: 0,
      x: 0,
      rotation: 0,
      stagger: 0.2
    })
    .to(button, { 
      opacity: 1, 
      y: 0,
      duration: 1
    }, "-=1");
    
    // Create a continuous floating animation
    gsap.to(chars, {
      y: "random(-15, 15)",
      rotation: "random(-10, 10)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random"
      }
    });
    
    // Add interactive effect when hovering over the entire 404
    title.addEventListener('mouseenter', () => {
      gsap.to(chars, { 
        scale: 1.2,
        color: 'var(--main-color)',
        duration: 0.3,
        stagger: 0.05
      });
    });
    
    title.addEventListener('mouseleave', () => {
      gsap.to(chars, { 
        scale: 1,
        color: 'var(--text-color)',
        duration: 0.3,
        stagger: 0.05
      });
    });
    
    // Add click effect for extra fun
    title.addEventListener('click', () => {
      gsap.to(chars, {
        scale: 0,
        opacity: 0,
        y: () => gsap.utils.random(-300, 300),
        x: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-360, 360),
        duration: 1,
        stagger: 0.02,
        onComplete: () => {
          gsap.to(chars, {
            scale: 1,
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            duration: 1,
            stagger: 0.05
          });
        }
      });
    });
  });