// 상품
const productObjects = {
  product1: {
    name: "OIA",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-01.jpg",
    explain: "1번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, white, #ffe2dd)",
  },
  product2: {
    name: "FIRA",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-02.jpg",
    explain: "2번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, #ffe3e0, #ffb3ab)",
  },
  product3: {
    name: "AKROTIRI",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-03.jpg",
    explain: "3번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, #c69191, #764c4c)",
  },
  product4: {
    name: "FIROSTEFANI",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-04.jpg",
    explain: "4번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, #edf2ff, #c5d4ff)",
  },
  product5: {
    name: "IMEROVIGLI",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-05.jpg",
    explain: "5번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, #afc9ff, #87adff)",
  },
  product6: {
    name: "KAMARI",
    price: 6000,
    imgSrc: "/static/img/digital-mkup-06.jpg",
    explain: "6번째 제품",
    ingredient: "딸기/망고",
    backColor: "linear-gradient(196deg, #9595ae, #64647e)",
  },
};

const handleProductChange = (productObject) => {
  function smoothChange() {
    $(".product-img-section img").attr("src", productObject.imgSrc).fadeIn(500);
    $(".product-individual-container-background")
      .css("background-image", productObject.backColor)
      .fadeIn(600);
    $(".product-name h1").text(productObject.name).fadeIn(500);
    $(".product-explain").text(productObject.explain).fadeIn(500);
    $(".product-ingredient").text(productObject.ingredient).fadeIn(500);
  }
  function changeBackgroundSmoothly() {
    $(
      ".product-img-section img, .product-individual-container-background, .product-name h1, .product-explain, .product-ingredient"
    ).fadeOut(300, smoothChange);
  }

  changeBackgroundSmoothly();
};
let nowProduct = JSON.parse(JSON.stringify(productObjects.product1));

const $productPick = document.querySelectorAll(".product-pick");
const handleProductPick = (e) => {
  $productPick.forEach((v) => v.classList.remove("picked"));
  e.target.classList.add("picked");

  if (e.target.classList.contains("pick-1")) {
    handleProductChange(productObjects.product1);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product1));
  } else if (e.target.classList.contains("pick-2")) {
    handleProductChange(productObjects.product2);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product2));
  } else if (e.target.classList.contains("pick-3")) {
    handleProductChange(productObjects.product3);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product3));
  } else if (e.target.classList.contains("pick-4")) {
    handleProductChange(productObjects.product4);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product4));
  } else if (e.target.classList.contains("pick-5")) {
    handleProductChange(productObjects.product5);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product5));
  } else if (e.target.classList.contains("pick-6")) {
    handleProductChange(productObjects.product6);
    nowProduct = JSON.parse(JSON.stringify(productObjects.product6));
  }
};
$productPick.forEach((v) =>
  v.addEventListener("click", (e) => handleProductPick(e))
);
handleProductChange(productObjects.product1);

// 카트에 넣기
const $productAddCartBtn = document.querySelector(".product-add-cart-btn");
const $cartSectionContainer = document.querySelector(".cart-section-container");
const $cartSectionBackground = document.querySelector(
  ".cart-section-background"
);
const $productSection = document.querySelector(".product-section");

const handleAddCart = () => {
  // 카트 컨테이너 플로팅
  $cartSectionContainer.style.transform = "translateY(0px)";
  $cartSectionContainer.style.opacity = 1;
  $productSection.style.filter = "blur(10px)";

  // 카트 목록 추가
  const clone = document.querySelector(".cart-product").cloneNode(true);
  clone.querySelector(".cart-product-price").textContent = nowProduct.price;
  clone.querySelector(".cart-product-line-price").textContent =
    nowProduct.price;
  clone.querySelector(".cart-product-image img").src = nowProduct.imgSrc;
  clone.querySelector(".cart-product-title").textContent = nowProduct.name;
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
$productAddCartBtn.addEventListener("click", handleAddCart);
$cartSectionBackground.addEventListener("click", () => {
  $productSection.style.filter = "blur(0px)";
  $cartSectionContainer.style.transform = "translateY(900px)";
  $cartSectionContainer.style.opacity = 0;
});
// 카트
let shippingCost = 2500;
let fadeTime = 200;

// recalculateCart();

function recalculateCart() {
  let subtotal = 0;
  $(".cart-product").each(function () {
    subtotal += parseInt($(this).children(".cart-product-line-price").text());
  });

  let shipping = subtotal > 0 ? shippingCost : 0;
  if (subtotal > 30000) {
    shipping = 0;
    $(".totals-item.shipping label").text("배송비(무료)");
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
  console.log(linePrice);
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

// setTimeout(() => {
//   let cl = document.querySelector(".cart-product:nth-of-type(1)");
//   let clone = cl.cloneNode(true);
//   document.querySelector(".shopping-cart").appendChild(clone);
//   recalculateCart();
// }, 1000);

// setTimeout(() => {
//   document.querySelector(".product-img-section img").src =
//     "/static/img/anms.png";
// }, 1000);
