// easing
// gsap.to(".box", {
//   duration: 2,
//   y: 400,
//   ease: "back",
// });

//Stagger

gsap.to(".box", {
  y: -300,
  stagger: {
    each: 0.5,
    from: "edges",
  },
});
