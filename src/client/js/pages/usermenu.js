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
      $userMenuSectionProduct.style.opacity = 1;
    }, 4300);
  }, 1000);
};

$confirmBtn.addEventListener("click", handleConfirmBtn);

// devmode
// // $confirmBtn.click();
$userMenuSectionName.style.opacity = 0;
$userMenuSectionOpen.style.opacity = 0;
$userMenuSectionProduct.style.opacity = 1;
