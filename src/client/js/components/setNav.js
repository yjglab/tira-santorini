export const setNav = () => {
  const pageTitle = document.title.split(" |", 1)[0];

  const set = (itemIdx) => {
    const $$items = document.querySelectorAll(".nav-item");
    $$items.forEach((v) => v.classList.remove("active"));

    const $item = document.querySelector(`.nav-item:nth-of-type(${itemIdx})`);
    $item.classList.add("active");
  };

  switch (pageTitle.toLowerCase()) {
    case "story":
      set(1);
      break;
    case "online shop":
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
