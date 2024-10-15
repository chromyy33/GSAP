gsap.registerPlugin(ScrollTrigger);

const centerLogo = document.querySelector(".center");
const imgContainer = document.querySelector(".img-container");
const mainImg = imgContainer.querySelector(".main-img");

const tl = gsap.timeline();

// Animate the logo position and scale
tl.from(centerLogo, {
  top: "50vh",
  scale: 3,
  scrollTrigger: {
    trigger: imgContainer,
    markers: true,
    start: "top",
   
    scrub: true,
  },
});
