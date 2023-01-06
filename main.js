const productsPerPage = 3;
let page = 1;

function init() {
  fetch("./products.json")
    .then((res) => res.json())
    .then(displayProducts);
}

function displayProducts(products) {
  const start = (page - 1) * productsPerPage;
  const end = (page - 1) * productsPerPage + productsPerPage;
  const productsToDisplay = products.slice(start, end);
  productsToDisplay.forEach(createProductCard);
}

function createProductCard({ name, info, description }) {
  const productsList = document.getElementById("productList");
  const { content } = document.getElementById("productCardTemplate");

  const infoLiElements = info.slice(0, 6).map((x) => {
    const li = document.createElement("li");
    li.textContent = x;
    return li;
  });

  const newCard = content.cloneNode(true);

  newCard.querySelector("h3").textContent = name;
  newCard.querySelector(".description").textContent = description;
  newCard.querySelector(".info").replaceChildren(...infoLiElements.slice(0, 4));
  newCard
    .querySelector(".more-info")
    .replaceChildren(...infoLiElements.slice(4));

  productsList.appendChild(newCard);
}

document.addEventListener("DOMContentLoaded", init);
