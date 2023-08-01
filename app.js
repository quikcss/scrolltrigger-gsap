gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline()
tl.from("#nav h3, #navpart2 ul li, #navpart3 button", {
    y: -100,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.2
})
tl.from("#content>h1, #content>h2", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 3,
        pin: "#page"
    }
})

tl1.to("#content>h1",{
    scale: 0
},"anim")
tl1.to("#content>h2",{
    scale: 0
},"anim")
tl1.from("#left h2, #left p",{
    y: 100,
    opacity: 0,
},"anim")
tl1.from("#right img",{
    y: -100,
    opacity: 0,
},"anim")
