document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.navigation');
    const logo = document.querySelector('.logo');
    const menuButtonSvg = menuButton.querySelector('svg');
    const navLinks = document.querySelectorAll('.navigation a');

    // Set initial state for GSAP
    gsap.set(navigation, { right: '-100%', opacity: 0 });
    gsap.set(navLinks, { x: 100, opacity: 0 });

    menuButton.addEventListener('click', () => {
      if (navigation.classList.contains('open')) {
        gsap.to(navigation, { right: '-100%', opacity: 0, duration: 0.5 });
        gsap.to(navLinks, { x: 100, opacity: 0, stagger: 0.2, duration: 0.5 });
        navigation.classList.remove('open');
        logo.style.fill = 'white';
        menuButtonSvg.style.stroke = 'white';
      } else {
        navigation.classList.add('open');
        gsap.to(navigation, { right: '0%', opacity: 1, duration: 0.5 });
        gsap.fromTo(navLinks, { x: 100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.5 });
        logo.style.fill = 'var(--text-color)';
        menuButtonSvg.style.stroke = 'var(--text-color)';
      }
    });
  }
});
