//main list slider
const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    // grabCursor: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     prev: {
    //       shadow: true,
    //       translate: ["-20%", 0, -1],
    //     },
    //     next: {
    //       translate: ["100%", 0, 0],
    //     },
    //   },
  });