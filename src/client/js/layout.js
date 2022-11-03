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
  let detectionCount = 0;
  setInterval(() => {
    detectionCount += 1;
    if (detectionCount === 30) {
      // 30초간 움직임 없을 시
      location.href = "/user-menu";
    }
  }, 1000);

  function userDetection(e) {
    detectionCount = 0;
  }
  window.addEventListener("mousemove", userDetection);
} else {
  let detectionCount = 0;
  setInterval(() => {
    detectionCount += 1;
    if (detectionCount === 300) {
      // 300초간 움직임 없을 시
      location.href = "/";
    }
  }, 1000);

  function userDetection(e) {
    detectionCount = 0;
  }
  window.addEventListener("mousemove", userDetection);
}
// 사용자 마우스 잠수 탐지
