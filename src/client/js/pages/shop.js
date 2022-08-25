let shippingCost = 2500;
let fadeTime = 200;

recalculateCart();

$(".cart-product-quantity input").change(function () {
  updateQuantity(this);
});

$(".cart-product-removal button").click(function () {
  removeItem(this);
});

function recalculateCart() {
  let subtotal = 0;

  $(".cart-product").each(function () {
    subtotal += parseInt($(this).children(".cart-product-line-price").text());
  });

  let shipping = subtotal > 0 ? shippingCost : 0;
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
