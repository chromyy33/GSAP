// easing
// gsap.to(".box", {
//   duration: 2,
//   y: 400,
//   ease: "back",
// });

//Stagger

// gsap.to(".box", {
//   y: -300,
//   stagger: {
//     each: 0.5,
//     from: "edges",
//   },
// });

//make a tl animation using labels and relative timings

const tl = gsap.timeline();

tl.from([".box1, .box2, .box3"], {
  x: -100,
  duration: 1,
  repeat: -1,
  ease: "linear",
  yoyo: true,
}).to(
  [".box7, .box6,.box5"],
  {
    x: 100,
    duration: 1,
    repeat: -1,
    yoyo: true,
  },
  "<"
);
//herman
// let select = (e) => document.querySelector(e);
// let selectAll = (e) => document.querySelectorAll(e);

// let progressSlider = select("#progressSlider");
// let time = select("#time");
// let pause = select("#pause"); //better than document.querySelector("#pause")

// let animation = gsap.to("#herman", {
//   duration: 6,
//   ease: "none",
//   motionPath: {
//     path: "#motionpath",
//     align: "#herman",
//   },
//   onComplete: () => {
//     pause.innerText = "play";
//   },
// });
// // animation.time(6);//jumps to the time in the args
// // animation.duration(8)// sets duration of the animation to 8s
// let isPaused = animation.paused();
// pause.addEventListener("click", function () {
//   if (animation.progress() === 1) {
//     animation.restart();
//   }
//   pause.innerText = isPaused ? "pause" : "play";
//   isPaused ? animation.play() : animation.pause();
//   isPaused = !isPaused;
// });
