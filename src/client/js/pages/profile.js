const $profileEditBtn = document.querySelector(".profile-edit-btn");
function handleProfileEditBtn() {
  document.querySelectorAll(".edit-mode-element-show").forEach((v) => {
    v.style.visibility = "visible";
    v.style.opacity = 1;
  });
  document.querySelectorAll(".edit-mode-element-textbox").forEach((v) => {
    v.style.backgroundColor = "white";
    v.style.border = "2px solid #333d66";
    v.style.paddingLeft = "15px";
    v.style.pointerEvents = "auto";
  });
}
$profileEditBtn.addEventListener("click", handleProfileEditBtn);
