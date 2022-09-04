const form = document.querySelector("#rForm");

const handleSubmit = (e) => {
  e.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  fetch(`/api/review`, {
    method: "POST",
    body: {
      text,
    },
  });
};
if (form) {
  //로그인 되어있으면
  form.addEventListener("submit", handleSubmit);
}
