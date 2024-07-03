let tl = gsap.timeline();
tl.to(".sidebar", {
  x: "-100%",
  duration: 0.6,
});
tl.from(".sidebar a", {
  x: 100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});
tl.pause();

let menu = document.querySelector("#menu");
let close = document.querySelector("#close");

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
