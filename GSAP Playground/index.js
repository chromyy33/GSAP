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

// const tl = gsap.timeline();

// tl.from([".box1, .box2, .box3"], {
//   x: -100,
//   duration: 1,
//   repeat: -1,
//   ease: "linear",
//   yoyo: true,
// }).to(
//   [".box7, .box6,.box5"],
//   {
//     x: 100,
//     duration: 1,
//     repeat: -1,
//     yoyo: true,
//   },
//   "<"
// );
//herman
let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

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

//Callbacks
// const box = select(".box");
// gsap.to(box, {
//   x: 500,
//   onComplete: onComplete,
//   onCompleteParams: ["apple", 40],
// });

// function onComplete(message, val) {
//   // box.style.backgroundColor = "pink";
//   console.log(message, val);
// }

//gsap.killTweensOf
// gsap.killTweensOf(".myClass");
// gsap.killTweensOf(myObject, "opacity,x");

// gsap.killTweensOf(myFunction);
// Provides a simple way to call a function after a set amount of time, completely in-sync with the whole rendering loop (unlike a setTimeout() which may fire outside of the browser's screen refresh cycle). You can optionally pass any number of parameters to the function too.

// //calls myFunction() after 1 second and passes 2 parameters:
// gsap.delayedCall(1, myFunction, ["param1", "param2"]);

// function myFunction(param1, param2) {
//   //do stuff
// }

// To cancel/kill a delayed call, save a reference to it and then call .kill() on it when needed:

// var delayedCall = gsap.delayedCall(1, myFunction);

// // sometime later
// delayedCall.kill();

//gsap.utils.wrap
const tl=gsap.timeline()
const heading = select(".heading");
heading.innerHTML = heading.innerText
  .split("")
  .map((char) => `<span class='span'>${char}</span>`)
  .join("");
// gsap.set(heading, { autoAlpha: 1 });
const char = [...selectAll(".span")];
tl
  .from(".span", {
    bottom: gsap.utils.wrap([-100, 100]),
    rotation: gsap.utils.wrap([-100, 100]),
    opacity: 0,
    stagger: { each: 0.05 },
  })
  .to(".span", {
    color: gsap.utils.wrap(["orange",'purple']),
  });
