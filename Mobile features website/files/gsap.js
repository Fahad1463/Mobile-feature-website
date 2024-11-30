gsap.to(".nav-for-position", {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    duration: 0.8,
    scrollTrigger: {
        trigger: ".nav-for-position",
        scroller: "body",
        // markers: true,
        start: "top -400px",
        end: "top 300px",
        scrub: 1,
        scale: 1,
    }
});

gsap.from(".homepage-boxes #home-box1", {
    y: 100,
    opacity: 0,
    delay: 0.2,
    duration: 0.7,
})


gsap.from(".homepage-boxes #home-box2", {
    x: -100,
    opacity: 0,
    delay: 0.8,
    duration: 0.7,
})

gsap.from("#services-section h2", {
    y: 100,
    duration: 0.6,
    opacity: 0,
    scrollTrigger: {
        trigger: "#services-section",
        scroller: "body",
        start: "top 330px",
        // markers :true,
    }
})

gsap.from("#services-section .sub-serv-1", {
    y: 60,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#services-section",
        scroller: "body",
        start: "top 200px",
        // markers: true,
    }
})
gsap.from("#services-section .sub-serv-2", {
    y: 60,
    duration: 0.5,
    delay: 1.1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#services-section",
        scroller: "body",
        start: "top 200px",
        // markers: true,
    }
})
gsap.from("#services-section .sub-serv-3", {
    y: 60,
    duration: 0.5,
    delay: 1.7,
    opacity: 0,
    scrollTrigger: {
        trigger: "#services-section",
        scroller: "body",
        start: "top 200px",
        // markers: true,
    }
})


gsap.from(".download-circle-img-sec", {
    scale: 1.5,
    duration: 2,
    repeat: -1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".download-circle-img-sec",
        scoller: "body",
        yoyo: true,
    }
})