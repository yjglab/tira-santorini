gsap.registerPlugin(ScrollTrigger);

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro__section-banner-container card",
    start: "top 20px",
    end: "600px top",
    // scrub:1,
    // markers:true,
    toggleActions: "restart pause restart pause",
  },
});
tl1
  .from(".intro__section-banner-container .text h1", {
    x: 200,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".intro__section-banner-container .text p",
    { y: 300, opacity: 0, duration: 1 },
    "-=1"
  )
  .from(
    ".intro__section-banner-container .intro__section-card",
    { y: -300, opacity: 0, duration: 1 },
    "-=1"
  );

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro__section-last-container",
    start: "top top",
    end: "300px center",
    scrub: 2,
    // markers:true,
    toggleActions: "restart pause reverse pause",
  },
});
tl2.from(".intro__section-last-container .intro__section-vertical p", {
  y: 300,
  opacity: 0,
  duration: 1,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro__section-horizontal-container .intro__section.one",
    start: "80px center",
    end: "80px bottom",
    scrub: 3,
    // markers:true,
    toggleActions: "restart pause reverse pause",
  },
});
tl3
  .from(".intro__section-horizontal-container .intro__section.one h2", {
    y: -80,
    opacity: 0,
    duration: 0.8,
  })
  .from(
    ".intro__section-horizontal-container .intro__section.one .intro__section-card",
    { y: 300, opacity: 0, duration: 0.8 },
    "<0.4"
  );

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger:
      ".intro__section-horizontal-container .intro__section.two .intro__section-card:nth-child(6)",
    start: "1600px top",
    end: "1600px bottom",
    scrub: 3,
    // markers:true,
    toggleActions: "restart pause reverse pause",
  },
});
tl4.from(
  ".intro__section-horizontal-container .intro__section.two .intro__section-card",
  {
    y: 400,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
  }
);

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro__section-horizontal-container .intro__section.three p",
    start: "4600px top",
    end: "4600px bottom",
    scrub: 3,
    // markers:true,
    toggleActions: "restart pause reverse pause",
  },
});
tl5
  .from(
    ".intro__section-horizontal-container .intro__section.three .intro__section-card",
    {
      y: 400,
      opacity: 0,
      duration: 1.2,
    }
  )
  .from(
    ".intro__section-horizontal-container .intro__section.three p",
    { x: 500, opacity: 0, duration: 1.2 },
    "<.7"
  );

let sections = gsap.utils.toArray(".intro__section"),
  container = document.querySelector(".intro__section-horizontal-container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    id: "trigger",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});
