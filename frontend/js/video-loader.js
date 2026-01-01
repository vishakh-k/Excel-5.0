/* =====================================================
   VIDEO LOADER - Plays on page load
   ===================================================== */

window.addEventListener("DOMContentLoaded", function () {
  const videoLoader = document.getElementById("video-loader");
  const skipBtn = document.querySelector(".skip-btn");

  if (!videoLoader) return;

  // Auto-hide video loader after 5 seconds
  let autoHideTimeout = setTimeout(() => {
    hideVideoLoader();
  }, 5000);

  // Skip button functionality
  if (skipBtn) {
    skipBtn.addEventListener("click", function (e) {
      e.preventDefault();
      clearTimeout(autoHideTimeout);
      hideVideoLoader();
    });
  }

  function hideVideoLoader() {
    if (videoLoader) {
      videoLoader.classList.add("hidden");
      // Remove from DOM after fade completes
      setTimeout(() => {
        videoLoader.style.display = "none";
      }, 500);
    }
  }
});
