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

const devmodeCnt = false;

// section-name 에서 section-open 이동
const handleConfirmBtn = () => {
  const username = $userMenuSectionName.querySelector("input").value;
  $userMenuSectionName.style.opacity = 0;
  setTimeout(
    () => {
      $userMenuSectionName.style.display = "none";
    },
    devmodeCnt ? 0 : 1000
  );

  const $customerName = $userMenuSectionOpen.querySelector(".customer-name");
  const $welcomeMsg = $userMenuSectionOpen.querySelector(".welcome-msg");
  $customerName.textContent = `안녕하세요 ${username}님`;

  setTimeout(
    () => {
      $userMenuSectionOpen.style.opacity = 1;

      setTimeout(
        () => {
          $customerName.style.opacity = 1;
        },
        devmodeCnt ? 0 : 1000
      );
      setTimeout(
        () => {
          $welcomeMsg.style.opacity = 1;
        },
        devmodeCnt ? 0 : 2200
      );
      setTimeout(
        () => {
          $userMenuSectionOpen.style.opacity = 0;
          $userMenuSectionOpen.style.transform = "translateY(100%)";
          $userMenuSectionProduct.style.display = "flex";
          document.querySelector(".usermenu-section-header").style.display =
            "flex";
          setTimeout(
            () => {
              $userMenuSectionName.style.display = "none";
              $userMenuSectionOpen.style.display = "none";
            },
            devmodeCnt ? 0 : 1000
          );
        },
        devmodeCnt ? 0 : 4300
      );
    },
    devmodeCnt ? 0 : 1000
  );
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

// 제품 클릭
const productObjects = {
  p1: {
    nameEng: "OIA",
    nameKor: "이아",
    imgSrc: "/static/img/single-1.png",
  },
  p2: {
    nameEng: "FIRA",
    nameKor: "피라",
    imgSrc: "/static/img/single-2.png",
  },
  p3: {
    nameEng: "AKROTIRI",
    nameKor: "아크로티리",
    imgSrc: "/static/img/single-3.png",
  },
  p4: {
    nameEng: "FIROSTEFANI",
    nameKor: "피로스테파니",
    imgSrc: "/static/img/single-4.png",
  },
  p5: {
    nameEng: "IMEROVIGLI",
    nameKor: "이메로비글리",
    imgSrc: "/static/img/single-5.png",
  },
  p6: {
    nameEng: "KAMARI",
    nameKor: "카마리",
    imgSrc: "/static/img/single-6.png",
  },
};
const $$products = $userMenuSectionProduct.querySelectorAll(".product");
const $sectionProductDetail = $userMenuSectionProduct.querySelector(
  ".section-product-detail"
);
const $productDetailCloseBtn = $sectionProductDetail.querySelector(
  ".product-detail-close-btn"
);

$productDetailCloseBtn.addEventListener("click", () => {
  $sectionProductDetail.className = "section-product-detail";
});
$$products.forEach((product, productNum) => {
  product.addEventListener("click", () => {
    $sectionProductDetail.classList.add(`product-${productNum + 1}-clicked`);
    const $headerEng = $sectionProductDetail.querySelector(".header-eng");
    const $headerKor = $sectionProductDetail.querySelector(".header-kor");
    const $productDetailImg = $sectionProductDetail.querySelector(
      ".product-detail-img > img"
    );
    switch (productNum + 1) {
      case 1: {
        $headerEng.textContent = productObjects.p1.nameEng;
        $headerKor.textContent = productObjects.p1.nameKor;
        $productDetailImg.src = productObjects.p1.imgSrc;
        break;
      }
      case 2: {
        $headerEng.textContent = productObjects.p2.nameEng;
        $headerKor.textContent = productObjects.p2.nameKor;
        $productDetailImg.src = productObjects.p2.imgSrc;
        break;
      }
      case 3: {
        $headerEng.textContent = productObjects.p3.nameEng;
        $headerKor.textContent = productObjects.p3.nameKor;
        $productDetailImg.src = productObjects.p3.imgSrc;
        break;
      }
      case 4: {
        $headerEng.textContent = productObjects.p4.nameEng;
        $headerKor.textContent = productObjects.p4.nameKor;
        $productDetailImg.src = productObjects.p4.imgSrc;
        break;
      }
      case 5: {
        $headerEng.textContent = productObjects.p5.nameEng;
        $headerKor.textContent = productObjects.p5.nameKor;
        $productDetailImg.src = productObjects.p5.imgSrc;
        break;
      }
      case 6: {
        $headerEng.textContent = productObjects.p6.nameEng;
        $headerKor.textContent = productObjects.p6.nameKor;
        $productDetailImg.src = productObjects.p6.imgSrc;
        break;
      }
    }
  });
});
const $userPurchased = document.querySelector(".user-purchased");
let purchasedCnt = 0;

const $productDetailPurchaseBtn = $sectionProductDetail.querySelector(
  ".product-detail-purchase-btn"
);
$productDetailPurchaseBtn.addEventListener("click", () => {
  $sectionProductDetail.className = "section-product-detail";
  purchasedCnt += 1;
  setTimeout(() => {
    $userPurchased.querySelector(".purchased-cnt").textContent = purchasedCnt;
    $userPurchased.classList.add("counted");
    setTimeout(() => {
      $userPurchased.classList.remove("counted");
    }, 400);
  }, 700);
});
// devmode
if (devmodeCnt) {
  $confirmBtn.click();
}
// $userMenuSectionOpen.style.display = "none";
// $userMenuSectionName.style.display = "none";
// $userMenuSectionName.style.opacity = 0;
// $userMenuSectionOpen.style.opacity = 0;
// $userMenuSectionProduct.style.opacity = 1;
