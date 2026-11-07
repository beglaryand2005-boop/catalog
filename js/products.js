// configuration

const PRODUCT_URL = "json/products.json";

// state

let products = [];
let cart = loadCart();

const pagination = {
  start: 0,
  limit: 20,
  loading: true,
};

async function fetchProducts() {
  try {
    let fetchElements = await fetch(PRODUCT_URL);
    if (!fetchElements.ok) {
      throw new Error("products are not found!!!");
    }
    fetchElements = await fetchElements.json();
    document.querySelector(".products").innerHTML = "";
    products = fetchElements;
    renderCategories(products);
    renderProducts(products);
  } 
  catch (error) {
    console.error(error)
  }
}

function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) ?? [];
}

function saveCart() {
  localStorage.setItem(JSON.stringify(cart));
}

function createProduct(product) {
  const productElement = document.createElement("div");
  productElement.className = "col w-33";
  const images = renderImages(product?.images, product?.title);
  productElement.innerHTML = `
    <div class="wrapper carding">
                        <div class="image">
                            <div class="product-slide">
                               ${images}
                            </div>
                            <div class="wishlist-btn">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div class="info">
                            <h3 class="title"></h3>
                            <p class="description"></p>
                            <div class="flex gap-10 align-center">
                                <strong class="new-price"><span class="currency">$</span><span class="price"></span></strong>
                                <del class="old-price"><span class="currency">$</span><span class="price"></span></del>
                            </div>
                            <div class="flex justify-between gap-20">
                                <button class="btn text-center add-to-cart">
                                    Add to Cart
                                </button>
                                <a href="Products_page.html" class="btn text-center">View</a>
                            </div>
                        </div>
                    </div>
                </div>
    `;
  productElement.querySelector(".title").textContent = product?.title;
  productElement.querySelector(".description").textContent =
    product?.description;
  productElement.querySelector(".new-price .price").textContent = (
    product?.price +
    product?.price * 0.1
  ).toFixed(2);
  productElement.querySelector(".old-price .price").textContent =
    (product?.price).toFixed(2);
  productElement
    .querySelector(".add-to-cart")
    .setAttribute("data-id", product?.id);
  return productElement;
}

function renderImages(images, title) {
  return images
    .map(
      (url) =>
        `<picture><img src="${url}" referrerpolicy="no-referrer" alt="${title}"></picture>`,
    )
    .join("");
}

function renderProducts(products) {
  const { start, limit, loading } = pagination;
  const productsRow = document.querySelector(".products");
  for (let i = start; i < start + limit; i++) {
    if (!loading) return;
    if (!products[i]) {
      pagination.loading = false;
      document.querySelector(".show-more").classList.add("diabled-btn");
      document
        .querySelector(".show-more")
        .removeEventListener("click", showMore);
      return;
    }
    productsRow.appendChild(createProduct(products[i]));
  }
}

function runPagination() {
  pagination.start += 20;
  renderProducts(products);
}

function filterProducts() {}

function addToCart() {}

function DOMeventListeners() {
  document.querySelector(".show-more").addEventListener("click", runPagination);
  document
    .querySelector(".categories-list")
    .addEventListener("change", function () {
      // Երբ categories-ում այլ բան ընտրվի, լրացնել
      // ստեղծել filter products-ի համար, և կանչել renderProducts - ը ֆիլտրված պրոդուկտներով
      console.log(7);
    });
}

function renderCategories(products) {
  // բաժանել հատվածների, քննարկել AI-ի հետ
  const categoryListElement = document.querySelector(".categories-list");
  const categories = products
    .map((product) => product?.category)
    .filter(
      (category, index, arr) =>
        index === arr.findIndex((c) => c.id === category.id),
    )
    .forEach((el) => {
      const categoryElement = document.createElement("option");
      categoryElement.setAttribute("value", el?.id);
      categoryElement.textContent = el?.name;
      categoryListElement.appendChild(categoryElement);
    });
}

fetchProducts();
DOMeventListeners();
