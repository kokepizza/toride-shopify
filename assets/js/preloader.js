document.addEventListener("DOMContentLoaded", function() {
    gsap.set(".imagotipo", { x: "40%"});
    gsap.set(".imagotipo-head", { y: -100, opacity: 0 });
    gsap.set(".imagotipo-arm", { x: -100, opacity: 0 });
    gsap.set(".imagotipo-leg", { x: 100, opacity: 0 });
    
    // Configurar cada letra de "oride" individualmente
    gsap.set(".oride-o", { scale: 0, opacity: 0 });
    gsap.set(".oride-r", { scale: 0, opacity: 0 });
    gsap.set(".oride-i", { scale: 0, opacity: 0 });
    gsap.set(".oride-d", { scale: 0, opacity: 0 });
    gsap.set(".oride-e", { scale: 0, opacity: 0 });
    gsap.set(".oride-ipunto", { y: -100, opacity: 0 });

    gsap.timeline()
        .to(".imagotipo-arm", { duration: 0.4, x: 0, opacity: 1, ease: "power2.inOut" })
        .to(".imagotipo-leg", { duration: 0.4, x: 0, opacity: 1, ease: "power2.inOut" }, "-=0.7")
        .to(".imagotipo-head", { duration: 0.5, opacity: 1, y: 0, ease: "bounce.out" })
        .to(".imagotipo", { duration: 0.4, x: 0, ease: "power2.inOut" })
        
        // Animar cada letra de "oride" por separado más rápido
        .to(".oride-o", { duration: 0.2, scale: 1, opacity: 1, ease: "power2.inOut" })
        .to(".oride-r", { duration: 0.2, scale: 1, opacity: 1, ease: "power2.inOut" }, "-=0.1")
        .to(".oride-i", { duration: 0.2, scale: 1, opacity: 1, ease: "power2.inOut" }, "-=0.1")
        .to(".oride-d", { duration: 0.2, scale: 1, opacity: 1, ease: "power2.inOut" }, "-=0.1")
        .to(".oride-e", { duration: 0.2, scale: 1, opacity: 1, ease: "power2.inOut" }, "-=0.1")
        .to(".oride-ipunto", { duration: 0.5, y: 0, opacity: 1, ease: "bounce.out" })

        .add(() => {
            if (document.readyState === 'complete') {
                gsap.to(".preloader", { duration: 1, y: "100%", opacity: 0, ease: "power2.inOut", onComplete: () => {
                    document.querySelector(".preloader").style.display = "none";
                }});
            } else {
                window.addEventListener('load', () => {
                    gsap.to(".preloader", { duration: 1, y: "100%", opacity: 0, ease: "power2.inOut", onComplete: () => {
                        document.querySelector(".preloader").style.display = "none";
                    }});
                });
            }
        });
});
