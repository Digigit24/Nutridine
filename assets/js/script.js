const products = [
  {
    id: 1,
    title: "Almond Oil",
    description: "100% pure almond oil ideal for skincare and baby massage.",
    image: "assets/image/product1.jpeg",
    price: "$25",
    weight: "500ml"
  },
  {
    id: 2,
    title: "Organic Apple Juice",
    description: "Cold-pressed organic apple juice with no added sugar.",
    image: "assets/image/product2.jpeg",
    price: "$15",
    weight: "250ml"
  },
  {
    id: 3,
    title: "Mixed Dry Fruits Pack",
    description: "Premium quality dried fruits for everyday snacking.",
    image: "assets/image/product3.jpeg",
    price: "$32",
    weight: "250g"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
    <div class="card h-100">
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.weight}</p>
        <button class="btn btn-primary mt-auto" onclick="showQuickView(${product.id})">Quick View</button>
      </div>
    </div>
  `;
  productList.appendChild(col);
});

function showQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalWeight").textContent = `Net Weight: ${product.weight}`;

  const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
  modal.show();
}
