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

  hi_container[1].addEventListener("mouseenter", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(37, 36, 36)",
      color: "rgb(14 ,255,10 )",
    });
  });

  hi_container[0].addEventListener("mouseleave", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(242, 239, 227)",
      color: "black",
    });
  });

  hi_container[1].addEventListener("mouseleave", function () {
    gsap.to("body,a", {
      backgroundColor: "rgb(242, 239, 227)",
      color: "black",
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

function cursor_animation() {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to("#cursor", {
      scale: 1,
      top: mouseY - 7,
      left: mouseX - 7,
      duration: 0.4,
    });
  });
}
cursor_animation();

let hi_container = document.getElementsByClassName("hi_container");

function main_animation() {
  let tll = gsap.timeline();
  tll.from("nav", {
    delay: 0.5,
    y: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tll.from(hi_container[0], {
    y: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tll.from(hi_container[1], {
    y: 50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tll.from("footer", {
    x: -50,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tll.from("#about_section", {
    x: 150,
    opacity: 0,
    yoyo: true,
    stagger: 0.2,
  });
  tll.from("#screenshot_container", {
    opacity: 0,
    yoyo: true,
    stagger: 0.3,
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

var wrap = gsap.utils.wrap(-100, 100);
const boxes = gsap.utils.toArray(".box");
const duration = 10;
const gap = 0.5; // time between color change
const step = duration / boxes.length - gap;
const gapPosition = "+=" + gap;

// initially position
gsap.set(".box", {
  y: (i) => i * 50,
});

gsap.to(".box", {
  y: "-=200",
  duration: 10,
  ease: "none",
  modifiers: {
    y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
  },
  repeat: -1,
});

const tl = gsap.timeline({
  repeat: -1,
  defaults: {
    duration: step,
    ease: "none",
  },
});
boxes.forEach((box, i) => {
  if (boxes[i + 1]) {
    tl.to(box, { color: "#19191B" }, gapPosition).to(
      boxes[i + 1],
      { color: "#FBBD61" },
      "<"
    );
  } else {
    tl.to(box, { color: "#19191B" }, gapPosition).to(
      boxes[0],
      { color: "#FBBD61" },
      "<"
    );
  }
});

let data = [
  {
    name: "movie ticket booking",
    image: "images/Screenshot (185).png",
    description: "designing & development",
  },
  {
    name: "movie ticket booking",
    image: "images/Screenshot (186).png",
    description: "designing & development",
  },
  {
    name: "covid 19 tracker",
    image: "images/Screenshot (187).png",
    description: "designing & development",
  },
  {
    name: "covid 19 tracker",
    image: "images/Screenshot (189).png",
    description: "designing & development",
  },
  {
    name: "online food deliver system",
    image: "images/Screenshot (214).png",
    description: "designing & development",
  },
];
let screenshot_container = document.getElementById("screenshot_container");
data.forEach(function (dta) {
  screenshot_container.innerHTML += `<div class="project">
    <img src="${dta.image}" alt="" />
    <div class="info">
      <span>
        <a href="#"
          >${dta.name} <i class="ri-arrow-right-up-line"></i
        ></a>
      </span>
      <span>${dta.description}</span>
    </div>
  </div>`;
});

function eye_animation() {
  document.querySelector("body").addEventListener("mousemove", eyeball);

    function eyeball() {
      const eye = document.querySelectorAll(".eyes");
      eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
      });
    }
}

eye_animation();
