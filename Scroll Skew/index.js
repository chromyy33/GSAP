// gsap.registerPlugin(ScrollTrigger);
// const container = document.querySelector(".container");
// const block = document.querySelectorAll(".block");
// gsap.to(container, {
//   x: -3400,
//   duration: 5, // Set the duration to make the tween slower

//   scrollTrigger: {
//     trigger: container,
//     pin: true,
//     start: "top 15%",
//     markers: true,
//     snap: 1,
//     scrub: 5, // Lower scrub value for slower scroll interaction
//   },
// });
gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const blocks = document.querySelectorAll(".block");

let previousScroll = 0; // Store previous scroll position
let skewAmount = 0; // Variable to store the skew value

gsap.to(container, {
  xPercent: -100,
  scrollTrigger: {
    trigger: container,
    pin: true,
    start: "top 15%",
    markers: true,
    scrub: 5,
    onUpdate: (self) => {
      const currentScroll = self.scroll(); // Get current scroll position
      const scrollSpeed = Math.abs(currentScroll - previousScroll); // Calculate scroll speed

      // Adjust the skew amount based on scroll speed
      skewAmount = Math.min(scrollSpeed * .5, 30); // Cap the skew amount at 20 for smoothness

      // Apply skew to all blocks
      blocks.forEach(block => {
        gsap.to(block, {
          skewX: currentScroll > previousScroll ? skewAmount : -skewAmount, // Positive or negative skew based on direction
          duration: 0.3,
          ease: "power3.out",
        });
      });

      previousScroll = currentScroll; // Update previous scroll position
    },
    onComplete: () => {
      // Smoothly reset skew when scrolling stops
      blocks.forEach(block => {
        gsap.to(block, {
          skewX: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });
    },
  },
});
