// DATA PRODUK
const PRODUCTS_DATA = [
    { id: 1, name: 'Sumatra Gayo Arabica (Green Beans)', price: 6.80, unit: 'MT', badge: 'Grade 1 Premium', stock: 120, rating: 4.8 },
    { id: 2, name: 'Pala Banda Premium (Whole Nutmeg)', price: 9.50, unit: 'KG', badge: 'Sertifikasi Organik', stock: 85, rating: 4.9 },
    { id: 3, name: 'Cengkeh Maluku (Premium Dried Cloves)', price: 8.20, unit: 'MT', badge: 'Ekstra Kering', stock: 60, rating: 4.7 },
    { id: 4, name: 'Lada Hitam Lampung (Black Pepper)', price: 4.50, unit: 'MT', badge: 'ASTA Quality', stock: 200, rating: 4.5 }
];

console.log('NAX Data Produk dimuat:', PRODUCTS_DATA);
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card">
            <h3>${p.name}</h3>
            <p>Harga: $${p.price} / ${p.unit}</p>
            <span class="badge">${p.badge}</span>
        </div>
    `).join('');
}
// ===== LOGIKA KERANJANG BELANJA =====
let cart = [];

function addToCart(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
    alert('Produk ditambahkan ke keranjang!');
}

function renderCart() {
    const cartList = document.getElementById('cartList');
    if (!cartList) return;
    
    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.quantity} x $${item.price}</span>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', renderProducts);
}
