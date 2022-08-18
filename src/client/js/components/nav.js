import variables from "../variables";
import setNav from "./setNav";
import setTrans from "./setTrans";

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".mouse-scroll-icon").fadeOut();
    $(".text").fadeOut();
    $(".nav").addClass("affix");
  } else {
    $(".nav").removeClass("affix");
    $(".mouse-scroll-icon").fadeIn();
    $(".text").fadeIn();
  }
});

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

function clickItem(item, index) {
  $nav.style.removeProperty("--timeOut");

  if (activeItem) {
    activeItem.classList.remove("active");
  }
  item.classList.add("active");

  activeItem = item;
  offsetnavBorder(activeItem, $navBorder);

  setTimeout(() => {
    $("#loader").fadeIn();
    $("#loader").css("backgroundColor", backColors[index]);
  }, 500);
  const navItemTitle = item.children[0].textContent.toLowerCase();
  if (navItemTitle === "tira") {
    setTimeout(() => {
      window.open("/", "_self");
    }, 1000);
  } else if (navItemTitle == "logout") {
    setTimeout(() => {
      window.open("/users/logout", "_self");
    }, 1000);
  } else {
    setTimeout(() => {
      window.open(navItemTitle, "_self");
    }, 1000);
  }
}

function offsetnavBorder(activeItem, $navBorder) {
  const activeItemTitle = activeItem.innerText;

  $navBorder.style.transform = `translate3d(${setTrans(
    activeItemTitle
  )}, 0 , 0)`;
}

offsetnavBorder(activeItem, $navBorder);

$$navItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetnavBorder(activeItem, $navBorder);
  $nav.style.setProperty("--timeOut", "none");
});
