// theme light or dark
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;
  
    if (currentPage.includes("dark-page")) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

// GSAP scrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const sectionHeadings = document.querySelectorAll('.section h2');

    sectionHeadings.forEach(heading => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          scrub: 0.5,
          markers: false
        }
      });
      
      tl.from(heading, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      // Animate the paragraph that follows the heading if it exists
      if (heading.nextElementSibling) {
        tl.from(heading.nextElementSibling, {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '-=0.5');
      }
    });
    
    // Shop items enhanced animation
    const shopWrapper = document.querySelector('.shop_wrapper');
    if (shopWrapper) {
      const shopItems = shopWrapper.querySelectorAll('.shop-item');
      
      // Initial state
      gsap.set(shopItems, { 
        y: 60, 
        opacity: 0,
        scale: 0.95,
        rotationX: 5
      });
      
      // Create a timeline for more control
      const shopTl = gsap.timeline({
        scrollTrigger: {
          trigger: shopWrapper,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });
      
      // Add items to timeline with staggered effect
      shopTl.to(shopItems, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: {
          each: 0.2,
          from: "start",
          grid: "auto",
          ease: "power2.inOut"
        },
        ease: "elastic.out(0.6, 0.3)"
      });
    }
});

