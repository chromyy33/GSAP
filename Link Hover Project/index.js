gsap.registerPlugin();
let currentImage;
const links = document.querySelectorAll(".link-item");

links.forEach((link) => {
  let tl = gsap.timeline(); // Create a timeline for each link

  link.addEventListener("mouseenter", function (e) {
    const currentItem = e.target;
    const index = [...links].indexOf(currentItem);
    const images = document.querySelectorAll(".img-container img");
    const correspondingImg = images[index];
    currentImage = correspondingImg;

    // Show the image on hover
    tl.to(correspondingImg, {
      origin: "right",
      opacity: 1,
      scale: 0.9,
      rotate: 0,
      stagger: 0.9,
      duration: 0.4,
      skewY: `${Math.random() * 1}px`,
      bottom: `${index * 1.5}rem`,
    });

    // Add mousemove event to follow cursor
    link.addEventListener("mousemove", function (e) {
      const { clientX, clientY } = e;
      const x = correspondingImg.getBoundingClientRect().x;
      const y = correspondingImg.getBoundingClientRect().y;
      gsap.to(correspondingImg, {
        x: clientX - x,
        y: clientY - y,
        duration: 0.3, // Smooth the movement
      });
    });
  });

  link.addEventListener("mouseleave", function () {
    // Hide the image when mouse leaves
    tl.to(currentImage, {
      origin: "left bottom",
      opacity: 0,
      duration: 0.2,
      stagger: 0.095,
      skewY: `${Math.random() * 1}px`,

      x: "-200px",
      y: "-200px",
      rotate: "-10deg",
      ease: "expo.out",
    });

    currentImage = ""; // Reset after the animation completes
  });
});
