function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const categoryId = getQueryParameter("id");
  fetch(`https://wiki-ads.onrender.com/ads?category=${categoryId}`)
    .then((response) => response.json())
    .then((ads) => {
      // ??
    })
    .catch((error) => console.error("Error fetching ads:", error));
});
