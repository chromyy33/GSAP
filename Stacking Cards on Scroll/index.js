const image = document.querySelectorAll("#sideImage");
let tl = gsap.timeline();
tl.from(image, {
  rotate: 180,
  x: 1200,
  duration: 10,
  stagger: 10,

  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 20%",
    scrub: 0.5,
  },
  ease: "none",
});
