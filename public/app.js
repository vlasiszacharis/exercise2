document.addEventListener("DOMContentLoaded", function () {
  fetch("https://wiki-ads.onrender.com/categories")
    .then((response) => response.json())
    .then((categories) =>
      Promise.all(
        categories.map((category) =>
          fetch(
            `https://wiki-ads.onrender.com/categories/${category.id}/subcategories`
          )
            .then((response) => response.json())
            .then((subcategories) => ({ ...category, subcategories }))
        )
      )
    )
    .then((categoriesWithSubcategories) => {
      const templateScript =
        document.getElementById("category-template").innerHTML;
      const template = Handlebars.compile(templateScript);
      document.getElementById("categories-container").innerHTML = template({
        categories: categoriesWithSubcategories,
      });
    })
    .catch((error) => console.error("Error fetching categories:", error));
});
