import variables from "./variables";

const bgColorsBody = [
  variables.tiraColor1,
  variables.tiraColor2,
  variables.tiraColor3,
  variables.tiraMainWhite,
  variables.tiraColor4,
  variables.tiraColor5,
  variables.tiraColor6,
];
const $nav = document.querySelector(".nav");
const $navItems = $nav.querySelectorAll(".nav-item");
const $navBorder = $nav.querySelector(".nav-border");
let activeItem = $nav.querySelector(".active");

const $$backColorChange = document.querySelectorAll(".back-color-change");
const $$midColorChange = document.querySelectorAll(".mid-colorChange");
function clickItem(item, index) {
  $nav.style.removeProperty("--timeOut");

  console.log(activeItem.children[0].textContent === "TIRA");
  if (item.children[0].textContent === "TIRA") {
    $$midColorChange.forEach((v) => (v.style.color = variables.tiraMainDark));
  } else {
    $$midColorChange.forEach((v) => (v.style.color = "white"));
  }
  if (activeItem == item) return;
  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  $$backColorChange.forEach(
    (v) => (v.style.backgroundColor = bgColorsBody[index])
  );

  activeItem = item;
  offsetnavBorder(activeItem, $navBorder);
}

function offsetnavBorder(element, $navBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        $nav.offsetLeft -
        ($navBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  $navBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetnavBorder(activeItem, $navBorder);

$navItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetnavBorder(activeItem, $navBorder);
  $nav.style.setProperty("--timeOut", "none");
});
