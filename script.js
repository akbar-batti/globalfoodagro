const products = [
  { name: "Milk", price: 50, category: "dairy", description: "Fresh cow milk" },
  { name: "Cheese", price: 120, category: "dairy", description: "Organic cheese" },
  { name: "Apple", price: 80, category: "fruits", description: "Red apples" },
  { name: "Banana", price: 40, category: "fruits", description: "Sweet bananas" },
  { name: "Tomato", price: 30, category: "vegetables", description: "Fresh tomatoes" },
  { name: "Onion", price: 35, category: "vegetables", description: "Organic onions" },
  { name: "Biscuits", price: 60, category: "packed", description: "Crunchy biscuits" },
  { name: "Juice", price: 90, category: "packed", description: "Fruit juice" }
];

const productList = document.querySelector(".product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><p>₹${p.price}</p>`;
    productList.appendChild(div);
  });
}

displayProducts(products);

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
});

sortSelect.addEventListener("change", e => {
  let sorted = [...products];
  if (e.target.value === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (e.target.value === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  }
  displayProducts(sorted);
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});
