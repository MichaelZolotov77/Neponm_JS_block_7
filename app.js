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

IMask(document.getElementById("phone"), {
  mask: "+{7}(000)-000-00-00",
});

IMask(document.getElementById("age"), {
  mask: Number,
  min: 0,
  max: 108,
});

IMask(document.getElementById("date"), {
  mask: Date,
  lazy: false,
  autofix: true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: "d",
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: "m",
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: "y",
      from: 2000,
      to: 2100,
      maxLength: 4,
    },
  },
});

// https://imask.js.org/guide.html
