
console.log("Welcome to Hanney's Portfolio!");
document.querySelectorAll(".project-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    document.querySelectorAll(".project-card").forEach((card) => {
      const showCard =selectedCategory === "all" ||card.dataset.category === selectedCategory;
      card.style.display = showCard ? "" : "none";
    });
  });
});