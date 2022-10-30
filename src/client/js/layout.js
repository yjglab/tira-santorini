(function importAllImages() {
  const r = require.context("../img", false, /\.(png|jpe?g|svg)$/);
  return r.keys().map(r);
})();

(function importAllVideos() {
  const r = require.context("../videos", false, /\.(mp4)$/);
  return r.keys().map(r);
})();

if (document.location.href.includes("user-menu")) {
  document.querySelector(".not-supported").style.display = "none";
}
