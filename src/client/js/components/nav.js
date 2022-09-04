import setNav from "./setNav";

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".mouse-scroll-icon, .text").fadeOut();
    $(".nav").addClass("affix");
  } else {
    $(".text").fadeIn();
    $(".nav").removeClass("affix");
  }
});

setNav();

const $nav = document.querySelector(".nav");
const $$navItems = $nav.querySelectorAll(".nav-item");
let activeItem = $nav.querySelector(".active");

function clickItem(item, index) {
  $nav.style.removeProperty("--timeOut");

  if (activeItem) {
    activeItem.classList.remove("active");
  }
  item.classList.add("active");

  activeItem = item;
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
      window.open("/" + navItemTitle, "_self");
    }, 800);
  }
}

$$navItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  $nav.style.setProperty("--timeOut", "none");
});
