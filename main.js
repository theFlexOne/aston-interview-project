const productsPerPage = 3;
let page = 1;
const products = [];

const nextButton = document.querySelector("#nextPageButton");
const prevButton = document.querySelector("#prevPageButton");

function init() {
  fetch("./products.json")
    .then((res) => res.json())
    .then((prods) => {
      products.push(...prods);
      resetDom();
    });

  nextButton.addEventListener("click", () => {
    page++;
    resetDom();
  });
  prevButton.addEventListener("click", () => {
    page--;
    resetDom();
  });
}

function resetDom() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (page !== totalPages) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }

  if (page !== 1) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }

  displayProducts();
}

function displayProducts() {
  const start = (page - 1) * productsPerPage;
  const end = (page - 1) * productsPerPage + productsPerPage;
  const productsToDisplay = products.slice(start, end);
  const productCards = productsToDisplay.map(createProductCard);

  document.getElementById("productList").replaceChildren(...productCards);
}

function createProductCard({ name, info, description, url, id }) {
  const { content } = document.getElementById("productCardTemplate");
  const card = content.cloneNode(true);

  const infoLiElements = info.slice(0, 6).map((x) => {
    const li = document.createElement("li");
    li.textContent = x;
    return li;
  });

  card.querySelector(":first-child").dataset.productId = id;
  card.querySelector("h3").textContent = name;
  card.querySelector(".description").textContent = description;
  card.querySelector(".info").replaceChildren(...infoLiElements.slice(0, 4));
  card.querySelector(".more-info").replaceChildren(...infoLiElements.slice(4));
  card.querySelector("a").href = url;

  return card;
}

document.addEventListener("DOMContentLoaded", init);
