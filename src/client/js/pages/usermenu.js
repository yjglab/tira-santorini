const $nav = document.querySelector(".nav");
const $footerSectionContainer = document.querySelector(
  ".footer-section-container"
);
const $user = document.querySelector(".user");
$nav.style.display = "none";
$footerSectionContainer.style.display = "none";
$user.style.display = "none";

const $userMenuSectionName = document.querySelector(".usermenu-section-name");
const $userMenuSectionOpen = document.querySelector(".usermenu-section-open");
const $userMenuSectionProduct = document.querySelector(
  ".usermenu-section-product"
);
const $confirmBtn = $userMenuSectionName.querySelector(".confirm-btn");

// section-name 에서 section-open 이동
const handleConfirmBtn = () => {
  const username = $userMenuSectionName.querySelector("input").value;
  $userMenuSectionName.style.opacity = 0;
  setTimeout(() => {
    $userMenuSectionName.style.display = "none";
  }, 1000);

  const $customerName = $userMenuSectionOpen.querySelector(".customer-name");
  const $welcomeMsg = $userMenuSectionOpen.querySelector(".welcome-msg");
  $customerName.textContent = `안녕하세요 ${username}님`;

  setTimeout(() => {
    $userMenuSectionOpen.style.opacity = 1;

    setTimeout(() => {
      $customerName.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
      $welcomeMsg.style.opacity = 1;
    }, 2200);
    setTimeout(() => {
      $userMenuSectionOpen.style.opacity = 0;

      $userMenuSectionProduct.style.display = "flex";
      document.querySelector(".usermenu-section-header").style.display = "flex";
      setTimeout(() => {
        $userMenuSectionName.style.display = "none";
        $userMenuSectionOpen.style.display = "none";
      }, 1000);
    }, 4300);
  }, 1000);
};

$confirmBtn.addEventListener("click", handleConfirmBtn);

// page 컨트롤
let currentPage = 1;

const $pageChevronsLeft = $userMenuSectionProduct.querySelector(
  ".page-chevrons-left"
);
const $pageChevronsRight = $userMenuSectionProduct.querySelector(
  ".page-chevrons-right"
);
const $sectionProductPage1 = $userMenuSectionProduct.querySelector(
  ".section-product-page-1"
);
const $sectionProductPage2 = $userMenuSectionProduct.querySelector(
  ".section-product-page-2"
);
const handlePage = (direction) => {
  switch (direction) {
    case "left": {
      if (currentPage === 1) {
        return;
      } else if (currentPage === 2) {
        $pageChevronsLeft.style.opacity = 0;
        currentPage = 1;
        $sectionProductPage1.style.left = "0%";
        $sectionProductPage2.style.left = "100%";
      }
      break;
    }
    case "right": {
      if (currentPage === 1) {
        $pageChevronsLeft.style.opacity = 1;
        currentPage = 2;
        $sectionProductPage1.style.left = "-100%";
        $sectionProductPage2.style.left = "0%";
      } else if (currentPage === 2) {
      }
      break;
    }
    default:
      break;
  }
};
$pageChevronsLeft.addEventListener("click", () => handlePage("left"));
$pageChevronsRight.addEventListener("click", () => handlePage("right"));

// devmode
// $confirmBtn.click();
// $userMenuSectionOpen.style.display = "none";
// $userMenuSectionName.style.display = "none";
// $userMenuSectionName.style.opacity = 0;
// $userMenuSectionOpen.style.opacity = 0;
// $userMenuSectionProduct.style.opacity = 1;
