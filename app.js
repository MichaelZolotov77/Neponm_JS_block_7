const moveto = new MoveTo();

const buttons = document.querySelectorAll("button");

const link = document.querySelector("a");

buttons.forEach((btn) => moveto.registerTrigger(btn));

link.addEventListener("click", handleClick);

function handleClick(event) {
  console.log(this);
  event.preventDefault();
  const target = document.querySelector(this.getAttribute("href"));
  console.log(target);
  moveto.move(target, {
    duration: 2000,
  });
}

tippy("[data-tippy-content]", {
  theme: "light",
  animation: "scale",
});

// OverlayScrollbars(document.querySelectorAll(".overlay"), {
//   // scrollbars: {
//   //   autoHide: "scroll",
//   // },
//   className: "os-host-flexbox",
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// https://swiperjs.com/
