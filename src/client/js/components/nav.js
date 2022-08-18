import variables from "../variables";
import setNav from "./setNav";
import setTrans from "./setTrans";

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".mouse-scroll-icon, .text").fadeOut();
    $(".nav").addClass("affix");
  } else {
    $(".mouse-scroll-icon, .text").fadeIn();
    $(".nav").removeClass("affix");
  }
});

setNav();

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
  }, 300);
  const navItemTitle = item.children[0].textContent.toLowerCase();
  if (navItemTitle === "tira") {
    setTimeout(() => {
      window.open("/", "_self");
    }, 800);
  } else if (navItemTitle == "logout") {
    setTimeout(() => {
      window.open("/users/logout", "_self");
    }, 800);
  } else {
    setTimeout(() => {
      window.open(navItemTitle, "_self");
    }, 800);
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
