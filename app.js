const titlesCard = document.querySelectorAll(".cards h4");

const search = document.querySelector(".searchme");

search.addEventListener("keyup", () => {
  titlesCard.forEach((title) => {
    if (title.textContent.includes(search.value.toUpperCase())) {
        title.parentElement.style.display = "block";
    } else {
      title.parentElement.style.display = "none";
    }
  });
});
