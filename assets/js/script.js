const cards = document.querySelectorAll("article.card");
const body = document.querySelector("body");
const modal = document.querySelector("#modal-attendment");
const btnCloseModal = document.querySelector("#close-icon");
const attendment = document.getElementById("attendment");

function toggleModal() {
  if (modal.style.display != "block") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector("button").classList.remove("buttonCardHidden");
    card.querySelector("button").classList.add("buttonCard");
    card.style.height = "auto";
    card.querySelector("p").classList.add("full-text");
  });
  card.addEventListener("mouseleave", () => {
    card.querySelector("button").classList.add("buttonCardHidden");
    card.querySelector("button").classList.remove("buttonCard");
    card.querySelector("p").classList.remove("full-text");
    card.style.height = "272px";
  });
});

attendment.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);

body.addEventListener("click", (e) => {
  if (e.target.classList.value == "modal-attendment") {
    toggleModal();
  }
});
