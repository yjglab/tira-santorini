import setTrans from "./setTrans";

export const setNav = () => {
  const pageTitle = document.title.split(" |", 1)[0];

  const set = (itemIdx) => {
    const $navBorder = document.querySelector(".nav-border");
    const $$items = document.querySelectorAll(".nav-item");
    $$items.forEach((v) => v.classList.remove("active"));

    const $item = document.querySelector(`.nav-item:nth-of-type(${itemIdx})`);
    $item.classList.add("active");

    $navBorder.style.transform = `translate3d(${setTrans(pageTitle)}, 0 , 0)`;
    function classToggle(item) {
      item.classList.add("active");
      $item.classList.remove("active");
    }
    const $$navItems = document.querySelectorAll(".nav-item");
    $$navItems.forEach((item, idx) => {
      item.addEventListener("click", () => classToggle(item));
    });
  };

  switch (pageTitle.toLowerCase()) {
    case "story":
      set(1);
      break;
    case "single":
      set(2);
      break;
    case "set":
      set(3);
      break;
    case "review":
      set(5);
      break;
    case "gallery":
      set(6);
      break;
    case "log in":
      set(7);
      break;
    default:
      break;
  }
};
export default setNav;
