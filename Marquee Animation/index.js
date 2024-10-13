const sunElem = document.querySelector(".sun");
const wowElem = document.querySelector(".wow");
window.addEventListener("mousemove", function (e) {
  console.log();
  gsap.to(sunElem, {
    x: (window.innerWidth - e.pageX * 1.8) / 100,
    y: (window.innerHeight - e.pageY * 1.5) / 100,
  });
  gsap.to(wowElem, {
    x: (window.innerHeight - e.pageY * 1.5) / 100,
    y: (window.innerWidth - e.pageX * 2) / 100,
  });
});
