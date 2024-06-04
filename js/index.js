function bg_color_animation() {
  let hi_container = document.getElementsByClassName("hi_container");
  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(37, 36, 36)",
      color: "rgb(14 ,255,10 )",
    });
  });

  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to(hi_container[0], {
      borderBottomColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to(hi_container[1], {
      borderTopColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to(hi_container[0], {
      borderBottomColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to(hi_container[1], {
      borderTopColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to(hi_container[1], {
      borderTopColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to(".first_section,.main_section,.last_section", {
      borderRightColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to(".first_section,.main_section,.last_section", {
      borderRightColor: "rgb(14 ,255,10 )",
    });
  });
  hi_container[0].addEventListener("mouseenter", function () {
    gsap.to("button", {
      backgroundColor: "rgb(14 ,255,10 )",
      color: "black",
    });
  });
  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(37, 36, 36)",
      color: "rgb(14 ,255,10 )",
    });
  });
  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to("button", {
      backgroundColor: "rgb(14 ,255,10 )",
      color: "black",
    });
  });
  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(242, 239, 227)",
      color: "black",
    });
  });
  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to("button", {
      backgroundColor: "black",
      color: "white",
    });
  });
  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(242, 239, 227)",
      color: "black",
    });
  });
  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to("button", {
      backgroundColor: "black",
      color: "white",
    });
  });
  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to(".first_section,.main_section,.last_section", {
      borderRightColor: "black",
    });
  });
  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to(".first_section,.main_section,.last_section", {
      borderRightColor: "black",
    });
  });

  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to(hi_container[0], {
      borderBottomColor: "black",
    });
  });
  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to(hi_container[1], {
      borderTopColor: "black",
    });
  });
  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to(hi_container[0], {
      borderBottomColor: "black",
    });
  });
  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to(hi_container[1], {
      borderTopColor: "black",
    });
  });
}
bg_color_animation();

gsap.to("#second_svg", 2, {
  x: -50,
  y: -20,
  repeat: -1,
  duration: 0.4,
  rotate: -40,
  yoyo: true,
});

function cursor_animation() {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to("#cursor", {
      scale:1,
      top: mouseY - 7,
      left: mouseX - 7,
      duration: 0.4,
    });
  });
}
cursor_animation();

let hi_container = document.getElementsByClassName("hi_container");

function main_animation() {
  let tl = gsap.timeline();
  tl.from("nav a", {
    delay:0.5,
    y: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tl.from(hi_container[0], {
    y: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tl.from(hi_container[1], {
    y: 50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tl.from("footer", {
    x: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tl.from("#about", {
    x: 150,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tl.from("#rotating_name", {
    x: 150,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
}


window.addEventListener("load", function () {
  gsap.to("#loading", {
    ease: "sine.out",
    y: "-100%",
    display: "none",
  });
  main_animation();
});
