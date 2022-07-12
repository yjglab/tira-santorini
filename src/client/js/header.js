import variables from "./variables";
import setNav from "./setNav";

setNav();

const backColors = [
  variables.tiraColor1,
  variables.tiraColor2,
  variables.tiraColor3,
  variables.tiraMainWhite,
  variables.tiraColor4,
  variables.tiraColor5,
  variables.tiraColor6,
];
const backColorsPlus = [
  variables.tiraColor1Plus,
  variables.tiraColor2Plus,
  variables.tiraColor3Plus,
  variables.tiraMainWhitePlus,
  variables.tiraColor4Plus,
  variables.tiraColor5Plus,
  variables.tiraColor6Plus,
];
const $nav = document.querySelector(".nav");
const $$navItems = $nav.querySelectorAll(".nav-item");
const $navBorder = $nav.querySelector(".nav-border");
let activeItem = $nav.querySelector(".active");

const $$backColorChange = document.querySelectorAll(".back-color-change");
const $$backColorPlusChange = document.querySelectorAll(
  ".back-color-plus-change"
);
const $$midColorChange = document.querySelectorAll(".mid-colorChange");

function clickItem(item, index) {
  $nav.style.removeProperty("--timeOut");

  if (item.children[0].textContent === "TIRA") {
    $$midColorChange.forEach((v) => (v.style.color = variables.tiraMainDark));
  } else {
    $$midColorChange.forEach((v) => (v.style.color = "white"));
  }
  // if (activeItem == item) return;
  if (activeItem) {
    activeItem.classList.remove("active");
  }
  item.classList.add("active");
  $$backColorChange.forEach(
    (v) => (v.style.backgroundColor = backColors[index])
  );
  $$backColorPlusChange.forEach(
    (v) => (v.style.backgroundColor = backColorsPlus[index])
  );

  activeItem = item;
  offsetnavBorder(activeItem, $navBorder);

  setTimeout(() => {
    $("#loader").fadeIn();
    $("#loader").css("backgroundColor", backColors[index]);
  }, 1000);
  if (item.children[0].textContent === "TIRA") {
    setTimeout(() => {
      window.open("/", "_self");
    }, 2000);
  } else {
    setTimeout(() => {
      window.open(item.children[0].textContent.toLowerCase(), "_self");
    }, 2000);
  }
}

function offsetnavBorder(activeItem, $navBorder) {
  // const offsetActiveItem = activeItem.getBoundingClientRect();
  // console.log(offsetActiveItem);
  // const left =
  //   Math.floor(
  //     offsetActiveItem.left -
  //       $nav.offsetLeft -
  //       ($navBorder.offsetWidth - offsetActiveItem.width) / 2
  //   ) + "px";

  let trans;
  const activeItemTitle = activeItem.innerText;
  switch (activeItemTitle) {
    case "OIA":
      trans = "-409.5px";
      break;
    case "FIRA":
      trans = "-273px";
      break;
    case "AKROTIRI":
      trans = "-136.5px";
      break;
    case "TIRA":
      trans = "0px";
      break;
    case "FIROSTEFANI":
      trans = "136.5px";
      break;
    case "IMEROVIGLI":
      trans = "273px";
      break;
    case "KAMARI":
      trans = "409.5px";
      break;
    default:
      break;
  }
  $navBorder.style.transform = `translate3d(${trans}, 0 , 0)`;
}

offsetnavBorder(activeItem, $navBorder);

$$navItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetnavBorder(activeItem, $navBorder);
  $nav.style.setProperty("--timeOut", "none");
});
