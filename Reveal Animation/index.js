const tl = gsap.timeline();
const dividers = document.querySelectorAll(".divider");
const info = document.querySelectorAll(".info p");
const text = document.querySelectorAll(".name .font");
const card=document.querySelectorAll('.card')
tl.to(info, {
  duration: 1,
  top: 0,
  ease: "ease",
  opacity: 1,
  stagger: {
    amount: 1,
    from: "start",
  },
})
  .to(dividers, {
    opacity: 0.5,
    width: "100%",
    stagger: 0.2,
    ease: "ease-out",
    duration: 1,
  })
  .to(
    text,
    {
      opacity: 1,
      y: 0,
      ease: "ease",
      duration: 1,
      stagger:.5
    },
    "-=0.5" // Start this animation 0.5 seconds before dividers animation ends
  ).to(
    card,
    {
      opacity: 1,
      y: 0,
      ease: "ease",
      duration: 1,
      stagger:.5
    },
    "-=3" // Start this animation 3 seconds before dividers animation ends
  );

