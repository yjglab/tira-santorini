// 상품
const productObjects = {
  product1: {
    name: "OIA",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "달콤한 딸기와 치즈를 배합하여 만든 부드러운 티라미수",
    ingredient: "255,23.3,3,5.5,70,계란•우유•밀",
    backColor: "linear-gradient(196deg, white, #ffe2dd)",
  },
  product2: {
    name: "FIRA",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "상큼한 자몽과 망고를 배합하여 만든 새콤한 티라미수",
    ingredient: "230,25.2,4,6.5,65,계란•우유•밀",
    backColor: "linear-gradient(196deg, #ffe3e0, #ffb3ab)",
  },
  product3: {
    name: "AKROTIRI",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "마스카포네 치즈와 에스프레소를 배합하여 만든 정통 티라미수",
    ingredient: "300,7.5,5.4,6.5,60,계란•우유•밀",
    backColor: "linear-gradient(196deg, #c69191, #764c4c)",
  },
  product4: {
    name: "FIROSTEFANI",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "시원한 민트와 청포도를 배합하여 만든 시그니처 티라미수",
    ingredient: "355,31.2,5.5,14,77,계란•우유•밀",
    backColor: "linear-gradient(196deg, #edf2ff, #c5d4ff)",
  },
  product5: {
    name: "IMEROVIGLI",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "블루베리와 치즈를 배합하여 만든 부드럽고 달콤한 티라미수",
    ingredient: "340,30,5.3,14,79,계란•우유•밀",
    backColor: "linear-gradient(196deg, #afc9ff, #87adff)",
  },
  product6: {
    name: "KAMARI",
    price: 6000,
    imgSrc: "/static/img/",
    explain: "흑임자와 초콜릿 쿠키를 배합하여 만든 진한 티라미수",
    ingredient: "402,41,3.5,19,66.2,계란•우유•밀",
    backColor: "linear-gradient(196deg, #9595ae, #64647e)",
  },
  pack3_01: {
    name: "TIRA 3 PACK",
    subTitle: "티라미수 3 PACK",
    price: 18000,
    imgSrc: "",
    explain: `산토리니 OIA, FIRA, AKROTIRI 마을의 패키지를 모두 담은 티라의 프로모션 패키지.<br>
    믿을 수 있는 재료로 만든 깨끗하고 정직한 핸드메이드 디저트입니다.<br><br> 
    각 1인분 기준의 용량이 총 3가지로 구성되어 있으며 시트 끝까지 깊게 한 스푼 떠서
    드시면 진한 마스카포네 치즈와 각각의 파우더가 함께 어우러져 깊은 맛을 선사합니다.`,
    backColor: "linear-gradient(196deg, #fde7e5, #ffffff)",
  },
  pack3_02: {
    name: "TIRA 3 PACK",
    subTitle: "티라미수 3 PACK",
    price: 18000,
    imgSrc: "",
    explain: `산토리니 FIROSTEFANI, IMEROVIGLI, KAMARI 마을의 패키지를 모두 담은 티라의 프로모션 패키지.<br>
    믿을 수 있는 재료로 만든 깨끗하고 정직한 핸드메이드 디저트입니다.<br><br> 
    각 1인분 기준의 용량이 총 3가지로 구성되어 있으며 시트 끝까지 깊게 한 스푼 떠서
    드시면 진한 마스카포네 치즈와 각각의 파우더가 함께 어우러져 깊은 맛을 선사합니다.`,
    backColor: "linear-gradient(196deg, #c0d3ff, #eaf1ff)",
  },
  pack_whole: {
    name: "TIRA WHOLE PACK",
    subTitle: "티라미수 WHOLE PACK",
    price: 36000,
    imgSrc: "",
    explain: `산토리니 여섯 마을의 패키지를 모두 담은 티라의 대표 프로모션 패키지.<br>
믿을 수 있는 재료로 만든 깨끗하고 정직한 핸드메이드 디저트입니다.<br><br> 
각 1인분 기준의 용량이 총 6가지로 구성되어 있으며 시트 끝까지 깊게 한 스푼 떠서
드시면 진한 마스카포네 치즈와 각각의 파우더가 함께 어우러져 깊은 맛을 선사합니다.`,
    backColor: "linear-gradient(196deg, #ffebeb, #d9e1ff)",
  },
};
let singleProduct;
let setProduct;

const $setSectionContainer = document.querySelector(".set-section-container");
const $setIndividualContainer = $setSectionContainer.querySelector(
  ".set-individual-container"
);
const $setContainer = $setSectionContainer.querySelector(".set-container");
const $setImg = $setContainer.querySelector(".set-img-container img");
const $setName = $setContainer.querySelector(".set-name > h1");
const $setDescription = $setContainer.querySelector(".set-description > p");
const $setPrice = $setContainer.querySelector(".set-price .price");
const $setCartBtn = $setContainer.querySelector(".set-add-cart-btn");
const $setPickers = $setContainer.querySelectorAll(".set-picker");

const handlePromotionPackChange = (e) => {
  $setPickers.forEach((v) => v.classList.remove("picked"));
  e.currentTarget.classList.add("picked");
  const nowPickedClass = e.currentTarget.classList;
  if (nowPickedClass.contains("pack-3-01")) {
    $setName.textContent = productObjects.pack3_01.name;
    $setDescription.innerHTML = productObjects.pack3_01.explain;
    $setPrice.textContent = productObjects.pack3_01.price;
    $setImg.src = productObjects.pack3_01.imgSrc;
    $setIndividualContainer.style.background =
      productObjects.pack3_01.backColor;
    setProduct = JSON.parse(JSON.stringify(productObjects.pack3_01));
  } else if (nowPickedClass.contains("pack-3-02")) {
    $setName.textContent = productObjects.pack3_02.name;
    $setDescription.innerHTML = productObjects.pack3_02.explain;
    $setPrice.textContent = productObjects.pack3_02.price;
    $setImg.src = productObjects.pack3_02.imgSrc;
    $setIndividualContainer.style.background =
      productObjects.pack3_02.backColor;
    setProduct = JSON.parse(JSON.stringify(productObjects.pack3_02));
  } else if (nowPickedClass.contains("pack-whole")) {
    $setName.textContent = productObjects.pack_whole.name;
    $setDescription.innerHTML = productObjects.pack_whole.explain;
    $setPrice.textContent = productObjects.pack_whole.price;
    $setImg.src = productObjects.pack_whole.imgSrc;
    $setIndividualContainer.style.background =
      productObjects.pack_whole.backColor;
    setProduct = JSON.parse(JSON.stringify(productObjects.pack_whole));
  }
};
$setPickers.forEach((v) =>
  v.addEventListener("click", handlePromotionPackChange)
);

const handleProductChange = (productObject) => {
  function smoothChange() {
    $(".product-img-section img").attr("src", productObject.imgSrc).fadeIn(500);
    $(".product-individual-container-background")
      .css("background-image", productObject.backColor)
      .fadeIn(600);
    $(".product-name h1").text(productObject.name).fadeIn(500);
    $(".product-explain").text(productObject.explain).fadeIn(500);
    const splitTextIngredient = productObject.ingredient.split(",");
    document
      .querySelectorAll(".product-ingredient .ingredient")
      .forEach((v, i) => (v.textContent = splitTextIngredient[i]));
    $(".product-ingredient .ingredient").fadeIn(500);
  }
  function changeBackgroundSmoothly() {
    $(
      ".product-img-section img, .product-individual-container-background, .product-name h1, .product-explain, .product-ingredient .ingredient"
    ).fadeOut(300, smoothChange);
  }

  changeBackgroundSmoothly();
};

const $productPick = document.querySelectorAll(".product-pick");
const handleProductPick = (e) => {
  $productPick.forEach((v) => v.classList.remove("picked"));
  e.target.classList.add("picked");

  if (e.target.classList.contains("pick-1")) {
    handleProductChange(productObjects.product1);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product1));
  } else if (e.target.classList.contains("pick-2")) {
    handleProductChange(productObjects.product2);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product2));
  } else if (e.target.classList.contains("pick-3")) {
    handleProductChange(productObjects.product3);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product3));
  } else if (e.target.classList.contains("pick-4")) {
    handleProductChange(productObjects.product4);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product4));
  } else if (e.target.classList.contains("pick-5")) {
    handleProductChange(productObjects.product5);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product5));
  } else if (e.target.classList.contains("pick-6")) {
    handleProductChange(productObjects.product6);
    singleProduct = JSON.parse(JSON.stringify(productObjects.product6));
  }
};
const $productSection = document.querySelector(".product-section");

const $productPrice = $productSection.querySelector(".product-price .price");
$productPick.forEach((v) =>
  v.addEventListener("click", (e) => {
    $productPrice.textContent = "6000";
    handleProductPick(e);
  })
);

// 카트에 넣기
const $productAddCartBtn = document.querySelector(".product-add-cart-btn");
const $cartSectionContainer = document.querySelector(".cart-section-container");
const $cartSectionBackground = document.querySelector(
  ".cart-section-background"
);

const handleAddCart = (kind) => {
  // 카트 컨테이너 플로팅

  let nowKind;
  if (kind === "single") {
    if (!singleProduct) {
      alert("제품을 먼저 선택해주세요!");
      return;
    }
    nowKind = JSON.parse(JSON.stringify(singleProduct));
  } else if (kind === "set") {
    if (!setProduct) {
      alert("패키지를 먼저 선택해주세요!");
      return;
    }
    nowKind = JSON.parse(JSON.stringify(setProduct));
  }
  $cartSectionContainer.style.transform = "translateY(0px)";
  $cartSectionContainer.style.opacity = 1;
  $productSection.style.filter = "blur(10px)";
  $setSectionContainer.style.filter = "blur(10px)";
  // 카트 목록 추가
  const clone = document.querySelector(".cart-product").cloneNode(true);
  clone.querySelector(".cart-product-price").textContent = nowKind.price;
  clone.querySelector(".cart-product-line-price").textContent = nowKind.price;
  clone.querySelector(".cart-product-image img").src = nowKind.imgSrc;
  clone.querySelector(".cart-product-title").textContent = nowKind.name;
  document.querySelector(".cart").appendChild(clone);

  $(".cart-product-removal button").click(function () {
    removeItem(this);
  });
  $(".cart-product-quantity input").change(function () {
    updateQuantity(this);
  });

  recalculateCart();
};
// 카트 닫기
$productAddCartBtn.addEventListener("click", () => handleAddCart("single"));
$setCartBtn.addEventListener("click", () => handleAddCart("set"));
$cartSectionBackground.addEventListener("click", () => {
  $productSection.style.filter = "blur(0px)";
  $setSectionContainer.style.filter = "blur(0px)";
  $cartSectionContainer.style.transform = "translateY(900px)";
  $cartSectionContainer.style.opacity = 0;
});
// 카트
let shippingCost = 2500;
let fadeTime = 200;

function recalculateCart() {
  let subtotal = 0;
  $(".cart-product").each(function () {
    subtotal += parseInt($(this).children(".cart-product-line-price").text());
  });

  let shipping = subtotal > 0 ? shippingCost : 0;
  if (subtotal >= 30000) {
    shipping = 0;
    $(".totals-item.shipping label").text("배송비(무료)");
  } else {
    $(".totals-item.shipping label").text("배송비");
  }

  let total = subtotal + shipping;

  $(".totals-value").fadeOut(fadeTime, function () {
    $("#cart-subtotal").html(subtotal);
    $("#cart-shipping").html(shipping);
    $("#cart-total").html(total);
    if (total == 0) {
      $(".checkout").fadeOut(fadeTime);
    } else {
      $(".checkout").fadeIn(fadeTime);
    }
    $(".totals-value").fadeIn(fadeTime);
  });
}

function updateQuantity(quantityInput) {
  let productRow = $(quantityInput).parent().parent();
  let price = parseInt(productRow.children(".cart-product-price").text());
  let quantity = $(quantityInput).val();
  let linePrice = price * quantity;
  productRow.children(".cart-product-line-price").each(function () {
    $(this).fadeOut(fadeTime, function () {
      $(this).text(linePrice);
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}

function removeItem(removeButton) {
  let productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function () {
    productRow.remove();
    recalculateCart();
  });
}
