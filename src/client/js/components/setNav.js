export const setNav = () => {
  const pageTitle = document.title.split(" |", 1)[0];

  const set = (itemIdx) => {
    const $$items = document.querySelectorAll(".nav-item");
    $$items.forEach((v) => v.classList.remove("active"));

    const $item = document.querySelector(`.nav-item:nth-of-type(${itemIdx})`);
    $item.classList.add("active");

    const $$navItems = document.querySelectorAll(".nav-item");
    $$navItems.forEach((item, idx) => {
      item.addEventListener("click", () => classToggle(item));
    });
  };

  switch (pageTitle.toLowerCase()) {
    case "story":
      set(1);
      break;
    case "shop":
      set(2);
      break;
    case "offline store":
      set(4);
      break;
    case "log in":
      set(5);
      break;
    default:
      break;
  }
};
export default setNav;
