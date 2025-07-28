const products = [
  { name: "Speed Tee" },
  { name: "Track Jacket" },
  { name: "Turbo Cap" },
  { name: "Grid Gloves" },
  { name: "Pit Bag" },
  { name: "Pole Position Hoodie" }
];

const productList = document.getElementById("product-list");

function displayProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "category-card";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.className = "add-to-cart-btn";

    // ✅ Button Click Logic
    button.addEventListener("click", () => {
  button.textContent = "Added to cart!";
  button.disabled = true;
  button.style.backgroundColor = "#999";
  button.style.cursor = "not-allowed";
});


    card.appendChild(name);
    card.appendChild(button);
    productList.appendChild(card);
  });
}

displayProducts();

function addToCart(productName, price, buttonElement) {
  // Step 1: Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Step 2: Check if product already exists
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1
    });
  }

  // Step 3: Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

   const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
   const cartCountElement = document.getElementById("cart-count");
     if (cartCountElement) {
         cartCountElement.textContent = totalQuantity;
    }
  // Step 4: Optional UI update (disable button)
  if (buttonElement) {
    buttonElement.disabled = true;
    buttonElement.textContent = "Added to Cart!";
    buttonElement.style.backgroundColor = "#999";
    buttonElement.style.cursor = "not-allowed";
  }
}


