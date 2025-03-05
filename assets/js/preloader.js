document.addEventListener("DOMContentLoaded", function() {
    gsap.set(".imagotipo", { x: "40%"});
    gsap.set(".imagotipo-head", { y: -100, opacity: 0 });
    gsap.set(".imagotipo-arm", { x: -100, opacity: 0 });
    gsap.set(".imagotipo-leg", { x: 100, opacity: 0 });
    gsap.set(".oride", { scale: 0, opacity: 0 });
    gsap.set(".oride-ipunto", { y: -100, opacity: 0 });

    gsap.timeline()
        .to(".imagotipo-arm", { duration: 1, x: 0, opacity: 1, ease: "power2.inOut" })
        .to(".imagotipo-leg", { duration: 1, x: 0, opacity: 1, ease: "power2.inOut" }, "-=1")
        .to(".imagotipo-head", { duration: 0.5, opacity: 1, y: 0, ease: "bounce.out" })
        .to(".imagotipo", { duration: 1, x: 0, ease: "power2.inOut" })
        .to(".oride", { duration: 1, scale: 1, opacity: 1, ease: "power2.inOut" }, "-=1")
        .to(".oride-ipunto", { duration: 0.5, y: 0, opacity: 1, ease: "bounce.out" })
        .to(".oride, .imagotipo", { 
            duration: 0.1, 
            y: "+=20", 
            yoyo: true, 
            repeat: 5, 
            ease: "power2.inOut" 
        })
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
