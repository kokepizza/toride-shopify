// Burger menu animation
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const topLine = document.querySelector('.burger-menu .top');
    const middleLine = document.querySelector('.burger-menu .middle');
    const bottomLine = document.querySelector('.burger-menu .bottom');
    const headerMenu = document.querySelector('.header__menu');
    const menuItems = document.querySelectorAll('.header__nav ul li');
    const controlItems = document.querySelectorAll('.header__controls a');
    
    let isOpen = false;
    
    // Burger animation
    const burgerTl = gsap.timeline({ paused: true });
    
    burgerTl.to(topLine, { 
        y: 10, 
        duration: 0.3, 
        ease: "power2.inOut" 
    }, 0);
    
    burgerTl.to(bottomLine, { 
        y: -10, 
        duration: 0.3, 
        ease: "power2.inOut" 
    }, 0);
    
    burgerTl.to(middleLine, { 
        opacity: 0, 
        duration: 0.2, 
        ease: "power2.inOut" 
    }, 0.1);
    
    burgerTl.to(topLine, { 
        rotation: 45, 
        transformOrigin: "center center", 
        duration: 0.3, 
        ease: "power2.inOut" 
    }, 0.3);
    
    burgerTl.to(bottomLine, { 
        rotation: -45, 
        transformOrigin: "center center", 
        duration: 0.3, 
        ease: "power2.inOut" 
    }, 0.3);
    
    // Menu animation
    const menuTl = gsap.timeline({ paused: true });
    
    // Menu slide in
    menuTl.to(headerMenu, {
        right: 0,
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        duration: 0.5,
        ease: "power3.out"
    });
    
    // Staggered animation for menu items
    menuTl.to(menuItems, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.2");
    
    // Staggered animation for control items
    menuTl.to(controlItems, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.3");
    
    burgerMenu.addEventListener('click', function() {
        if (isOpen) {
            burgerTl.timeScale(1).reverse();
            menuTl.timeScale(2).reverse();
        } else {
            burgerTl.timeScale(1).play(); 
            menuTl.timeScale(1).play();
        }
        isOpen = !isOpen;
    });
});
