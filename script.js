// script.js// 
// DATA PRODUK// 
const PRODUCTS_DATA = [
    { id: 1, name: 'Sumatra Gayo Arabica (Green Beans)', price: 6.80, unit: 'MT', minOrder: '1 MT', stock: 120, sold: 85, rating: 4.8, reviews: 42, badge: 'Grade 1 Premium', spec: 'Kadar Air: 11-12% | Defect: < 4% | Proses: Wet Hulled', desc: 'Kopi Arabika dataran tinggi Gayo yang terkenal dengan body tebal, tingkat keasaman rendah, serta profil aroma rempah dan cokelat yang kuat.', icon: '☕', image: 'sumatra-gayo.jpg', hidden: false },
    { id: 2, name: 'Pala Banda Premium (Whole Nutmeg)', price: 9.50, unit: 'KG', minOrder: '500 Kg', stock: 85, sold: 62, rating: 4.9, reviews: 38, badge: 'Sertifikasi Organik', spec: 'Kadar Air: < 10% | Ukuran: ABCD Mix | Aflatoksin: Negatif', desc: 'Pala asli kepulauan Banda dengan kualitas ekspor terbaik tanpa jamur, memiliki kandungan minyak atsiri tinggi dan aroma aromatik yang tajam.', icon: '🟤', image: 'pala-banda.jpg', hidden: false },
    { id: 3, name: 'Cengkeh Maluku (Premium Dried Cloves)', price: 8.20, unit: 'MT', minOrder: '1 MT', stock: 60, sold: 43, rating: 4.7, reviews: 29, badge: 'Ekstra Kering', spec: 'Kadar Air: < 12% | Benda Asing: < 0.5% | Warna: Cokelat Mengkilap', desc: 'Cengkeh kering pilihan dari Maluku yang diproses secara alami di bawah sinar matahari. Memiliki tangkai kokoh, wangi intens, dan kadar eugenol tinggi.', icon: '🍂', image: 'cengkeh-maluku.jpg', hidden: false },
    { id: 4, name: 'Lada Hitam Lampung (Black Pepper)', price: 4.50, unit: 'MT', minOrder: '1 MT', stock: 200, sold: 210, rating: 4.5, reviews: 51, badge: 'ASTA Quality', spec: 'Kadar Air: < 12% | Density: 550-600 g/l | Minyak Atsiri: > 2%', desc: 'Lada hitam khas Lampung dengan tingkat kepedasan tajam (piperin tinggi). Diproses melalui pencucian higienis standar ASTA.', icon: '⚫', image: 'lada-hitam.jpg', hidden: false },
    { id: 5, name: 'Lada Putih Muntok (White Pepper)', price: 6.20, unit: 'MT', minOrder: '1 MT', stock: 95, sold: 78, rating: 4.6, reviews: 33, badge: 'Double Washed', spec: 'Kadar Air: < 13% | Warna: Putih Krem Bersih | Piperin: > 5%', desc: 'Muntok White Pepper yang terkenal di pasar Eropa. Melewati proses perendaman air mengalir murni menghasilkan lada beraroma khas tanpa bau apek.', icon: '⚪', image: 'lada-putih.jpg', hidden: false },
    { id: 6, name: 'Vanili Planifolia Alor (Vanilla Beans)', price: 140.00, unit: 'KG', minOrder: '10 Kg', stock: 40, sold: 28, rating: 4.9, reviews: 27, badge: 'Gourmet Grade A', spec: 'Kadar Air: 25-30% | Panjang: 15-20 cm | Vanillin: 2.0-2.5%', desc: 'Polong vanili utuh nan eksotis dari Nusa Tenggara Timur. Tekstur fleksibel, berminyak, dengan profil rasa sweet, creamy, dan kompleks.', icon: '🌿', image: 'vanili-alor.jpg', hidden: false },
    { id: 7, name: 'Kayu Manis Kerinci (Cassia Vera)', price: 5.80, unit: 'MT', minOrder: '1 MT', stock: 75, sold: 55, rating: 4.4, reviews: 22, badge: 'Grade AA Stick', spec: 'Kadar Air: < 12% | Panjang: 8-10 cm / potong | Minyak Atsiri: > 2.5%', desc: 'Kayu manis Cassia dari dataran tinggi Gunung Kerinci, Jambi. Dipanen dari pohon berusia di atas 10 tahun untuk rasa manis pedas optimal.', icon: '🪵', image: 'kayu-manis.jpg', hidden: false },
    { id: 8, name: 'Toraja Sapan Arabica (Green Beans)', price: 7.20, unit: 'MT', minOrder: '1 MT', stock: 50, sold: 37, rating: 4.8, reviews: 19, badge: 'Specialty Grade', spec: 'Kadar Air: 11% | Ketinggian: 1400-1800 mdpl | Cupping Score: 84+', desc: 'Biji kopi eksklusif dari lereng Sapan, Toraja. Dikenal di Jepang dan Eropa akan profil rasa cokelat hitam, karamel, dengan acidity berry segar.', icon: '⛰️', image: 'toraja-sapan.jpg', hidden: false },
    { id: 9, name: 'Kapulaga Jawa (White Cardamom)', price: 12.00, unit: 'KG', minOrder: '500 Kg', stock: 110, sold: 92, rating: 4.3, reviews: 16, badge: 'Sun Dried', spec: 'Kadar Air: < 14% | Warna: Putih Gading | Benda Asing: < 1%', desc: 'Kapulaga lokal (Amomum compactum) yang dikeringkan matahari. Esensial untuk farmasi, jamu tradisional, dan masakan Timur Tengah.', icon: '🌱', image: 'kapulaga-jawa.jpg', hidden: false },
    { id: 10, name: 'Jahe Gajah (Fresh/Dried Elephant Ginger)', price: 1.80, unit: 'MT', minOrder: '5 MT', stock: 300, sold: 156, rating: 4.2, reviews: 14, badge: 'Big Rhizome', spec: 'Ukuran: 150g - 300g up | Proses: Washed & Cleaned | Kemasan: Mesh Bag 30kg', desc: 'Rimpang jahe berukuran besar, daging rimpang lebih lunak, dan rasa tidak terlalu pedas. Cocok untuk minuman, ekstrak makanan, atau konsumsi segar.', icon: '🫚', image: 'jahe-gajah.jpg', hidden: false }
];

// STATE// 
let products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
let cart = [];
let currentPage = 'home';
let currentPageProducts = 1;
const ITEMS_PER_PAGE = 6;
let currentCurrency = 'USD';
let currentLanguage = 'id';
let isLoggedIn = false;
let userRole = 'buyer';
let priceChartInstance = null;

// Payment state
let pendingOrder = {
    company: '',
    buyer: '',
    email: '',
    phone: '',
    country: '',
    incoterms: '',
    paymentMethod: '',
    notes: '',
    cartItems: [],
    totalFOB: 0,
    totalWithLogistic: 0,
    logisticCost: 0,
    invoiceNumber: ''
};

// Kurs mata uang (statis)
const EXCHANGE_RATES = {
    USD: 1,
    IDR: 16000,
    EUR: 0.92
};
const CURRENCY_SYMBOLS = {
    USD: '$',
    IDR: 'Rp',
    EUR: '€'
};

// ===== DOM REFS =====
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterRating = document.getElementById('filterRating');
const sortSelect = document.getElementById('sortSelect');
const currencySelect = document.getElementById('currencySelect');
const catalogResult = document.getElementById('catalogResult');
const pagination = document.getElementById('pagination');
const cartItems = document.getElementById('cartItems');
const cartTotalValue = document.getElementById('cartTotalValue');
const clearCartBtn = document.getElementById('clearCartBtn');
const selectedCommodityInput = document.getElementById('selectedCommodity');
const orderQuantityInput = document.getElementById('orderQuantity');
const quantityUnitInput = document.getElementById('quantityUnit');
const summaryItemCount = document.getElementById('summaryItemCount');
const summaryTotalValue = document.getElementById('summaryTotalValue');
const summaryPaymentMethod = document.getElementById('summaryPaymentMethod');
const adminTableBody = document.getElementById('adminTableBody');
const adminStatus = document.getElementById('adminStatus');
const adminResetBtn = document.getElementById('adminResetStockBtn');
const adminTotalProducts = document.getElementById('adminTotalProducts');
const adminTotalStock = document.getElementById('adminTotalStock');
const adminLowStock = document.getElementById('adminLowStock');
const toastContainer = document.getElementById('toastContainer');
const breadcrumbText = document.getElementById('breadcrumbText');
const navLinks = document.querySelectorAll('.nav-link[data-page]');
const mobileToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const loginModal = document.getElementById('loginModal');
const loginModalClose = document.getElementById('loginModalClose');
const loginForm = document.getElementById('loginForm');
const loginNavLink = document.getElementById('loginNavLink');
const adminNavLink = document.getElementById('adminNavLink');
const loginRole = document.getElementById('loginRole');
const adminPasswordGroup = document.getElementById('adminPasswordGroup');
const rfqModal = document.getElementById('rfqModal');
const rfqModalClose = document.getElementById('rfqModalClose');
const rfqForm = document.getElementById('rfqForm');
const rfqProductId = document.getElementById('rfqProductId');
const langToggle = document.getElementById('langToggle');
const paymentMethodSelect = document.getElementById('paymentMethod');

// Payment modal
const paymentModal = document.getElementById('paymentModal');
const paymentModalClose = document.getElementById('paymentModalClose');
const paymentContent = document.getElementById('paymentContent');

// ===== STORAGE =====
function saveStockToLocalStorage() {
    const data = products.map(p => ({
        id: p.id,
        stock: p.stock,
        sold: p.sold,
        price: p.price,
        hidden: p.hidden
    }));
    try { localStorage.setItem('nax_product_data', JSON.stringify(data)); } catch (e) {}
}

function loadStockFromLocalStorage() {
    try {
        const raw = localStorage.getItem('nax_product_data');
        if (raw) {
            const data = JSON.parse(raw);
            data.forEach(item => {
                const p = products.find(prod => prod.id === item.id);
                if (p) {
                    if (item.stock !== undefined) p.stock = item.stock;
                    if (item.sold !== undefined) p.sold = item.sold;
                    if (item.price !== undefined) p.price = item.price;
                    if (item.hidden !== undefined) p.hidden = item.hidden;
                }
            });
        }
    } catch (e) {}
}

function saveCartToLocalStorage() {
    try { localStorage.setItem('nax_cart', JSON.stringify(cart)); } catch (e) {}
}

function loadCartFromLocalStorage() {
    try {
        const raw = localStorage.getItem('nax_cart');
        if (raw) cart = JSON.parse(raw);
    } catch (e) {}
}

function saveAuthToLocalStorage() {
    try {
        localStorage.setItem('nax_auth', JSON.stringify({ isLoggedIn, userRole }));
    } catch (e) {}
}

function loadAuthFromLocalStorage() {
    try {
        const raw = localStorage.getItem('nax_auth');
        if (raw) {
            const data = JSON.parse(raw);
            isLoggedIn = data.isLoggedIn || false;
            userRole = data.userRole || 'buyer';
        }
    } catch (e) {}
}

// ===== TOAST =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ===== HAPTIC FEEDBACK =====
function hapticFeedback() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// ===== CURRENCY FORMATTING =====
function formatPrice(priceUSD) {
    const rate = EXCHANGE_RATES[currentCurrency] || 1;
    const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';
    const converted = priceUSD * rate;
    if (currentCurrency === 'IDR') {
        return symbol + Math.round(converted).toLocaleString('id-ID');
    }
    return symbol + converted.toFixed(2);
}

function getCurrencyMultiplier() {
    return EXCHANGE_RATES[currentCurrency] || 1;
}

// ===== CART =====
function addToCart(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    if (p.stock <= 0) {
        showToast('⛔ Stok habis!', 'error');
        return;
    }
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ productId, qty: 1 });
    }
    saveCartToLocalStorage();
    renderCart();
    hapticFeedback();
    showToast(`✅ ${p.name} ditambahkan ke keranjang`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCartToLocalStorage();
    renderCart();
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCartToLocalStorage();
    renderCart();
    showToast('🗑️ Keranjang dikosongkan.', 'info');
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Belum ada produk dipilih.</p>';
        cartTotalValue.textContent = formatPrice(0);
        summaryItemCount.textContent = '0';
        summaryTotalValue.textContent = formatPrice(0);
        selectedCommodityInput.value = 'Tambahkan produk dari katalog';
        return;
    }
    let html = '';
    let total = 0;
    let itemCount = 0;
    let commodityNames = [];
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        let qty = item.qty;
        let discount = 0;
        if (p.unit === 'MT' && qty > 5) {
            discount = 0.05;
        }
        const subtotal = p.price * (p.unit === 'MT' ? qty * 1000 : qty);
        const discountedSubtotal = subtotal * (1 - discount);
        total += discountedSubtotal;
        itemCount += qty;
        commodityNames.push(`${p.name} (${qty} ${p.unit})`);

        const displayPrice = formatPrice(p.price);
        const displaySubtotal = formatPrice(discountedSubtotal);
        const displayOriginal = formatPrice(subtotal);

        html += `
            <div class="cart-item">
                <span class="item-info">${p.name} × ${qty} ${p.unit}</span>
                <span class="item-price">
                    ${discount > 0 ? `<span class="original">${displayOriginal}</span>` : ''}
                    ${displaySubtotal}
                    ${discount > 0 ? `<span class="discount">(-5% bulk)</span>` : ''}
                </span>
                <button class="item-remove" onclick="removeFromCart(${p.id})">&times;</button>
            </div>
        `;
    });
    cartItems.innerHTML = html;
    cartTotalValue.textContent = formatPrice(total);
    summaryItemCount.textContent = itemCount;
    summaryTotalValue.textContent = formatPrice(total);
    selectedCommodityInput.value = commodityNames.join('; ') || 'Tambahkan produk dari katalog';
}

clearCartBtn.addEventListener('click', clearCart);

// ===== RFQ =====
function openRFQ(productId) {
    rfqProductId.value = productId;
    rfqModal.classList.add('open');
}

rfqModalClose.addEventListener('click', () => rfqModal.classList.remove('open'));
rfqModal.addEventListener('click', (e) => {
    if (e.target === rfqModal) rfqModal.classList.remove('open');
});

rfqForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const productId = parseInt(rfqProductId.value);
    const p = products.find(prod => prod.id === productId);
    if (!p) { showToast('Produk tidak ditemukan.', 'error'); return; }
    const company = document.getElementById('rfqCompany').value.trim();
    const email = document.getElementById('rfqEmail').value.trim();
    const targetPrice = document.getElementById('rfqTargetPrice').value || '-';
    const volume = document.getElementById('rfqVolume').value || '-';
    const incoterms = document.getElementById('rfqIncoterms').value;
    const notes = document.getElementById('rfqNotes').value.trim() || '-';

    if (!company || !email) {
        showToast('⚠️ Harap isi Nama Perusahaan dan Email.', 'error');
        return;
    }

    const msg = `*REQUEST FOR QUOTATION (RFQ) - NAX B2B*
----------------------------------------
*Produk:* ${p.name}
*Perusahaan:* ${company}
*Email:* ${email}
*Target Harga:* ${targetPrice} USD
*Volume:* ${volume} MT
*Incoterms:* ${incoterms}
*Catatan:* ${notes}
----------------------------------------
Mohon kirimkan penawaran resmi terbaik.`;

    window.open(`https://wa.me/6285860095139?text=${encodeURIComponent(msg)}`, '_blank');
    rfqModal.classList.remove('open');
    showToast('📩 RFQ terkirim via WhatsApp!', 'success');
    rfqForm.reset();
});

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const ratingFilter = filterRating.value;
    const sortKey = sortSelect.value;

    let filtered = products.filter(p => {
        if (p.hidden) return false;
        const matchName = p.name.toLowerCase().includes(searchTerm);
        let matchRating = true;
        if (ratingFilter === '4') matchRating = p.rating >= 4.0;
        else if (ratingFilter === '4.5') matchRating = p.rating >= 4.5;
        return matchName && matchRating;
    });

    switch (sortKey) {
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating-desc':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'sold-desc':
            filtered.sort((a, b) => b.sold - a.sold);
            break;
        case 'stock-desc':
            filtered.sort((a, b) => b.stock - a.stock);
            break;
        default:
            break;
    }

    catalogResult.textContent = `Menampilkan ${filtered.length} dari ${products.filter(p => !p.hidden).length} produk`;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (currentPageProducts > totalPages) currentPageProducts = 1;
    const start = (currentPageProducts - 1) * ITEMS_PER_PAGE;
    const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

    if (pageItems.length === 0) {
        grid.innerHTML = `<div class="no-products" style="grid-column:1/-1; text-align:center; padding:40px 20px; color:var(--text-muted);">
            <span style="font-size:40px; display:block; margin-bottom:12px;">🔍</span>
            <h3 style="font-family:'Playfair Display',serif; font-size:20px;">Tidak ada produk yang ditemukan</h3>
            <p>Coba ubah kata kunci atau filter pencarian Anda.</p>
        </div>`;
        pagination.innerHTML = '';
        return;
    }

    grid.innerHTML = pageItems.map(p => {
        const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
        const stockStatus = p.stock <= 0 ? 'out' : p.stock < 10 ? 'low' : 'normal';
        const stockLabel = p.stock <= 0 ? 'Stok Habis' : p.stock < 10 ? 'Stok Terbatas' : `${p.stock} ${p.unit}`;
        const soldDisplay = p.sold >= 1000 ? `${Math.floor(p.sold/1000)}rb+` : p.sold >= 100 ? `${p.sold}+` : p.sold;
        const imagePath = p.image ? `images/${p.image}` : '';
        const displayPrice = formatPrice(p.price);

        return `
            <div class="product-card">
                <div class="product-img-container">
                    ${imagePath ? `<img src="${imagePath}" alt="${p.name}" style="width:100%; height:180px; object-fit:cover;" />` :
                    `<div class="image-placeholder prod-img-placeholder">
                        <div class="placeholder-overlay">
                            <span class="icon">${p.icon}</span>
                            <span class="placeholder-text">${p.name}</span>
                        </div>
                    </div>`}
                    <span class="prod-badge">${p.badge}</span>
                    <span class="prod-stock-badge ${stockStatus}">${stockLabel}</span>
                </div>
                <div class="product-info">
                    <h3 class="prod-title">${p.name}</h3>
                    <div class="prod-rating-sold">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${p.rating.toFixed(1)}</span>
                        <span class="rating-text">(${p.reviews} ulasan)</span>
                        <span class="sold-text">· Terjual ${soldDisplay}</span>
                    </div>
                    <p class="prod-spec">${p.spec}</p>
                    <p class="prod-desc">${p.desc}</p>
                    <div class="prod-price-box">
                        <span class="price-label">Estimasi Harga FOB:</span>
                        <span class="price-value">${displayPrice} / ${p.unit}</span>
                        <span class="min-order">Minimal Order: ${p.minOrder}</span>
                    </div>
                    <div style="display:flex; gap:6px; margin-bottom:6px; flex-wrap:wrap;">
                        <button class="btn-tds" onclick="alert('📄 Unduh TDS/Sertifikat untuk ${p.name} (placeholder)')">📄 Unduh TDS/Sertifikat</button>
                    </div>
                    <div class="product-actions">
                        <button class="btn-action btn-add-cart" onclick="addToCart(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>
                            ${p.stock <= 0 ? '⛔ Stok Habis' : '🛒 Tambah ke Keranjang'}
                        </button>
                        <div style="display:flex; gap:6px;">
                            <a href="https://wa.me/6285860095139?text=Halo%20NAX,%20saya%20tertarik%20pesan%20${encodeURIComponent(p.name)}." target="_blank" class="btn-action btn-wa" style="flex:1;">💬 Pesan WA</a>
                            <button class="btn-action btn-rfq" onclick="openRFQ(${p.id})" style="flex:0.6;">📩 RFQ</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    let pagHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        pagHtml += `<button class="${i === currentPageProducts ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = pagHtml;
    pagination.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            currentPageProducts = parseInt(this.dataset.page);
            renderProducts();
        });
    });
}

// ===== ADMIN =====
function renderAdminPage() {
    let totalStock = 0;
    let lowStockCount = 0;
    const visibleCount = products.filter(p => !p.hidden).length;
    products.forEach(p => {
        totalStock += p.stock;
        if (p.stock < 10 && p.stock > 0) lowStockCount++;
    });
    adminTotalProducts.textContent = `${visibleCount}/${products.length}`;
    adminTotalStock.textContent = totalStock;
    adminLowStock.textContent = lowStockCount;

    adminTableBody.innerHTML = products.map((p, index) => {
        const visText = p.hidden ? 'Sembunyikan' : 'Tampilkan';
        const visClass = p.hidden ? 'hide' : 'show';
        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${p.name}</strong> ${p.hidden ? '<span style="color:var(--danger-red);font-size:10px;"> [Hidden]</span>' : ''}</td>
                <td>${p.stock} ${p.unit}</td>
                <td>${p.sold}</td>
                <td>
                    <input type="number" class="price-input" id="adminPriceInput_${p.id}" value="${p.price}" min="0" step="0.01" style="width:70px;" />
                    <button class="btn-price-update" onclick="updatePrice(${p.id})">Update</button>
                </td>
                <td>
                    <button class="btn-toggle-vis ${visClass}" onclick="toggleVisibility(${p.id})">${visText}</button>
                </td>
                <td>
                    <input type="number" class="stock-input" id="adminStockInput_${p.id}" value="${p.stock}" min="0" step="1" style="width:60px;" />
                    <button class="btn-stock-update" onclick="updateStock(${p.id})">Update</button>
                </td>
            </tr>
        `;
    }).join('');
    adminStatus.textContent = '✅ Semua perubahan tersimpan otomatis.';
}

function updateStock(id) {
    const input = document.getElementById(`adminStockInput_${id}`);
    if (!input) return;
    const newStock = parseInt(input.value);
    if (isNaN(newStock) || newStock < 0) {
        showToast('⚠️ Masukkan jumlah stok yang valid (angka ≥ 0).', 'error');
        return;
    }
    const p = products.find(prod => prod.id === id);
    if (p) {
        p.stock = newStock;
        saveStockToLocalStorage();
        renderProducts();
        renderAdminPage();
        showToast(`✅ Stok "${p.name}" diperbarui menjadi ${newStock} ${p.unit}`, 'success');
    }
}

function updatePrice(id) {
    const input = document.getElementById(`adminPriceInput_${id}`);
    if (!input) return;
    const newPrice = parseFloat(input.value);
    if (isNaN(newPrice) || newPrice < 0) {
        showToast('⚠️ Masukkan harga yang valid (angka ≥ 0).', 'error');
        return;
    }
    const p = products.find(prod => prod.id === id);
    if (p) {
        p.price = newPrice;
        saveStockToLocalStorage();
        renderProducts();
        renderAdminPage();
        showToast(`✅ Harga "${p.name}" diperbarui menjadi ${formatPrice(newPrice)}`, 'success');
    }
}

function toggleVisibility(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;
    p.hidden = !p.hidden;
    saveStockToLocalStorage();
    renderProducts();
    renderAdminPage();
    showToast(`${p.hidden ? '🙈' : '👁️'} "${p.name}" ${p.hidden ? 'disembunyikan' : 'ditampilkan'}`, 'success');
}

function resetAllStocks() {
    if (!confirm('⚠️ Reset semua stok ke nilai default? Data saat ini akan hilang.')) return;
    products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
    saveStockToLocalStorage();
    renderProducts();
    renderAdminPage();
    showToast('↺ Semua stok telah direset ke default.', 'success');
}

adminResetBtn.addEventListener('click', resetAllStocks);

// ===== AUTH =====
function updateAuthUI() {
    if (isLoggedIn && userRole === 'admin') {
        adminNavLink.style.display = 'inline-block';
        loginNavLink.textContent = '👤 ' + (currentLanguage === 'id' ? 'Keluar' : 'Logout');
        loginNavLink.dataset.logout = 'true';
    } else if (isLoggedIn) {
        adminNavLink.style.display = 'none';
        loginNavLink.textContent = '👤 ' + (currentLanguage === 'id' ? 'Keluar' : 'Logout');
        loginNavLink.dataset.logout = 'true';
    } else {
        adminNavLink.style.display = 'none';
        loginNavLink.textContent = '🔑 ' + (currentLanguage === 'id' ? 'Login' : 'Login');
        loginNavLink.dataset.logout = 'false';
    }
}

loginNavLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.dataset.logout === 'true') {
        isLoggedIn = false;
        userRole = 'buyer';
        saveAuthToLocalStorage();
        updateAuthUI();
        showToast('👋 Anda telah keluar.', 'info');
        if (currentPage === 'admin') navigateTo('home');
        return;
    }
    loginModal.classList.add('open');
});

loginModalClose.addEventListener('click', () => loginModal.classList.remove('open'));
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.classList.remove('open');
});

loginRole.addEventListener('change', function() {
    adminPasswordGroup.style.display = this.value === 'admin' ? 'block' : 'none';
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('loginName').value.trim();
    const role = loginRole.value;
    const password = document.getElementById('loginPassword').value;

    if (!name) {
        showToast('⚠️ Masukkan nama Anda.', 'error');
        return;
    }

    if (role === 'admin') {
        if (password !== 'nax2026') {
            showToast('⛔ Kode admin salah!', 'error');
            return;
        }
        userRole = 'admin';
        isLoggedIn = true;
        showToast(`✅ Selamat datang Admin ${name}!`, 'success');
    } else {
        userRole = 'buyer';
        isLoggedIn = true;
        showToast(`🛒 Selamat datang ${name}!`, 'success');
    }
    saveAuthToLocalStorage();
    updateAuthUI();
    loginModal.classList.remove('open');
    loginForm.reset();
    adminPasswordGroup.style.display = 'none';
});

// ===== NAVIGATION =====
function navigateTo(page) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    const pageNames = {
        home: 'Beranda',
        about: 'Sejarah & Visi',
        products: 'Katalog Ekspor',
        analytics: 'Data & Probabilitas',
        checkout: 'B2B Portal',
        admin: 'Panel Admin'
    };
    breadcrumbText.textContent = pageNames[page] || page;
    currentPage = page;

    if (page === 'products') renderProducts();
    if (page === 'checkout') renderCart();
    if (page === 'admin') {
        if (isLoggedIn && userRole === 'admin') {
            renderAdminPage();
        } else {
            showToast('🔒 Akses Admin memerlukan login.', 'error');
            navigateTo('home');
        }
    }
    if (page === 'analytics') {
        setTimeout(initPriceChart, 300);
    }

    navMenu.classList.remove('open');
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        if (page === 'admin' && !(isLoggedIn && userRole === 'admin')) {
            showToast('🔒 Silakan login sebagai Admin terlebih dahulu.', 'error');
            loginModal.classList.add('open');
            return;
        }
        navigateTo(page);
    });
});

// Logo click
document.querySelector('.logo-container').addEventListener('click', function(e) {
    e.preventDefault();
    navigateTo('home');
});

// Hero buttons (Eksplorasi Produk & Pelajari Regulasi)
document.querySelectorAll('.hero-actions .btn[data-page]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        navigateTo(page);
    });
});

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// ===== STICKY NAVBAR =====
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== CURRENCY =====
currencySelect.addEventListener('change', function() {
    currentCurrency = this.value;
    renderProducts();
    renderCart();
});

// ===== MULTI-BAHASA =====
const translations = {
    id: {
        brandName: 'NUSANTARA',
        brandSub: 'Agri-Exchange',
        navHome: 'Beranda',
        navAbout: 'Sejarah & Visi',
        navProducts: 'Katalog Ekspor',
        navAnalytics: 'Data & Probabilitas',
        navCheckout: 'B2B Portal',
        navAdmin: '⚙️ Admin',
        navLogin: '🔑 Login',
        breadcrumbHome: 'Beranda',
        heroBadge: 'Global B2B Supply Chain',
        heroTitle: 'Menghubungkan Keunggulan Komparatif Komoditas Nusantara ke Pasar Global',
        heroDesc: 'Nusantara Agri-Exchange (NAX) memodernisasi rantai pasok ekspor Kopi Spesialti dan Rempah premium Indonesia melalui otomatisasi administrasi bisnis, transparansi data, dan pengapalan terintegrasi.',
        heroBtnExplore: 'Eksplorasi Produk',
        heroBtnRegulasi: 'Pelajari Regulasi',
        aboutSub: 'Profil Korporasi',
        aboutTitle: 'Sejarah, Akar, & Komitmen Kami',
        aboutHead: 'Menembus Batas Birokrasi Perdagangan Internasional',
        aboutP1: 'Didirikan dengan misi fundamental untuk mengoptimalkan Keunggulan Komparatif komoditas agrikultur lokal, Nusantara Agri-Exchange lahir dari kesadaran akan besarnya kesenjangan antara petani komoditas unggulan Indonesia dengan pembeli berskala internasional.',
        aboutP2: 'Pada awalnya, rantai pasok ekspor kopi dan rempah didera oleh inefisiensi administrasi, manipulasi harga oleh tengkulak berlapis, serta rumitnya pemenuhan standar kepabeanan global. NAX hadir mengintegrasikan teknologi informasi guna memangkas seluruh hambatan tersebut, menciptakan jalur logistik yang tangkas, transparan, dan berkeadilan ekonomi.',
        aboutP3: 'Hari ini, kami mengonsolidasikan ratusan koperasi petani dari Sumatra hingga Maluku, memastikan setiap biji kopi dan butir rempah diproses melalui kendali mutu yang ketat, terdokumentasi secara digital, dan siap memenuhi standar sirkular ekonomi global.',
        stat1: 'Koperasi Mitra Tani Nusantara',
        stat2: 'Negara Tujuan Ekspor Aktif',
        stat3: 'Traceability & Dokumen Legal Cleared',
        stat4: 'Ketergantungan Tengkulak Pihak Ketiga',
        productsSub: 'Katalog Ekspor',
        productsTitle: 'Komoditas Premium Nusantara',
        productsDesc: 'Jelajahi koleksi kopi spesialti dan rempah pilihan dengan standar ekspor tertinggi.',
        searchPlaceholder: 'Cari produk...',
        filterAll: '⭐ Semua Rating',
        filter4: '4+ Bintang',
        filter45: '4.5+ Bintang',
        sortNameAsc: 'Nama A-Z',
        sortNameDesc: 'Nama Z-A',
        sortPriceAsc: 'Harga Terendah',
        sortPriceDesc: 'Harga Tertinggi',
        sortRating: 'Rating Tertinggi',
        sortSold: 'Terjual Terbanyak',
        sortStock: 'Stok Terbanyak',
        analyticsBadge: 'Smart B2B Infrastructure',
        analyticsTitle: 'Keputusan Bisnis Berbasis Data & Prediksi Probabilitas Pasar',
        analyticsDesc: 'Kami tidak sekadar menjual komoditas; platform NAX dilengkapi dengan mesin komputasi statistik untuk membantu pembeli internasional menganalisis probabilitas tren harga, fluktuasi pasokan musiman, serta manajemen risiko rantai pasok secara real-time.',
        analyticsLi1: 'Prediksi Volume Pasokan: Perhitungan matematis berbasis tren cuaca dan historis panen.',
        analyticsLi2: 'Transparansi Fakta & Peristiwa: Log aktivitas pengadaan, sertifikasi uji lab, dan pelacakan kontainer terintegrasi.',
        analyticsLi3: 'Otomatisasi Administrasi Dokumen: Penerbitan Commercial Invoice, Packing List, dan COO secara instan.',
        chartTitle: '📈 Tren Harga Komoditas (Real-time)',
        checkoutTitle: 'Sistem Formulir Ekspor & Integrasi WhatsApp',
        checkoutDesc: 'Lengkapi data administrasi bisnis berikut. Sistem otomatis menyusun draf pesanan formal yang akan diteruskan langsung ke WhatsApp Enterprise Trade Specialist kami.',
        cartTitle: '🛒 Keranjang Belanja',
        cartEmpty: 'Belum ada produk dipilih.',
        cartTotal: 'Total Estimasi (FOB):',
        cartClear: 'Kosongkan Keranjang',
        formCompany: 'Nama Perusahaan / Institusi *',
        formBuyer: 'Nama Perwakilan Pembeli *',
        formEmail: 'Email Korporat *',
        formPhone: 'Nomor WhatsApp/Telepon Aktif *',
        formCountry: 'Negara Tujuan Pengapalan *',
        formIncoterms: 'Incoterms Pemilihan *',
        formPayment: 'Metode Pembayaran *',
        formCommodity: 'Komoditas yang Dipilih (dari keranjang) *',
        formQty: 'Volume Pesanan (untuk item pertama)',
        formUnit: 'Satuan Volume',
        formNotes: 'Catatan Tambahan Spesifikasi / Sertifikasi',
        checkoutSubmit: '🚀 Kirim Data & Finalisasi via WhatsApp Trade System',
        summaryTitle: 'B2B Gate-Pass Clearance',
        summaryInvoice: 'Draf Invoice Proforma Sementara:',
        summaryVendor: 'Platform Vendor:',
        summaryItems: 'Jumlah Item:',
        summaryPayment: 'Metode Pembayaran:',
        summaryTotal: 'Total Nilai Komoditas (FOB):',
        complianceTitle: '📋 Kelengkapan Administrasi Terintegrasi:',
        securityBadge: '🛡️ Transaksi aman dilindungi sistem Letter of Credit (L/C) perbankan internasional & Rekening Escrow Terverifikasi.',
        adminSub: 'Panel Administrasi',
        adminTitle: 'Manajemen Stok, Harga & Visibilitas Produk',
        adminDesc: 'Kelola stok, harga, dan tampilan produk. Perubahan akan langsung tersimpan dan terintegrasi dengan katalog.',
        adminStatProducts: 'Total Produk',
        adminStatStock: 'Total Stok',
        adminStatLow: 'Produk Stok Rendah (<10)',
        adminThCommodity: 'Komoditas',
        adminThStock: 'Stok',
        adminThSold: 'Terjual',
        adminThPrice: 'Harga (USD)',
        adminThVisibility: 'Visibilitas',
        adminThAction: 'Aksi',
        adminReset: '↺ Reset Semua Stok ke Default',
        contactHead: 'Nusantara Agri-Exchange Headquarters',
        contactEmail: 'Corporate Email:',
        contactPhone: 'International Hotline:',
        contactWA: 'WhatsApp Trade Specialist:',
        contactHours: 'Jam Operasional Perdagangan',
        contactMonFri: 'Senin - Jumat: 08:00 - 17:00 (WIB)',
        contactSat: 'Sabtu (Layanan Logistik & Pelabuhan): 08:00 - 13:00 (WIB)',
        contactNote: '*Untuk pembeli internasional dengan perbedaan zona waktu ekstrim, diprioritaskan via formulir enkripsi WhatsApp 24 jam.',
        footerCopy: '© 2026 PT Nusantara Agri-Exchange. Seluruh Hak Cipta Dilindungi. Sistem Administrasi Bisnis & Rantai Pasok Berkelanjutan.',
        footerTerms: 'Syarat & Ketentuan Perdagangan',
        footerPrivacy: 'Kebijakan Privasi Data GDPR',
        footerCustoms: 'Regulasi Bea Cukai & Ekspor',
        loginTitle: '🔐 Akses Sistem',
        loginDesc: 'Masuk sebagai Pembeli atau Admin untuk mengakses fitur penuh.',
        loginNameLabel: 'Nama / Username',
        loginRoleLabel: 'Login Sebagai',
        loginRoleBuyer: '🛒 Pembeli',
        loginRoleAdmin: '⚙️ Admin',
        loginPasswordLabel: 'Kode Akses Admin',
        loginSubmit: 'Masuk',
        loginHint: '* Admin: masukkan kode "nax2026" untuk akses penuh.',
        rfqTitle: '📩 Minta Penawaran (RFQ)',
        rfqDesc: 'Isi detail kebutuhan Anda, tim kami akan merespon dalam 1x24 jam.',
        rfqCompanyLabel: 'Nama Perusahaan *',
        rfqEmailLabel: 'Email Korporat *',
        rfqTargetPriceLabel: 'Target Harga (USD/MT atau USD/KG)',
        rfqVolumeLabel: 'Volume (MT)',
        rfqIncotermsLabel: 'Incoterms Pilihan',
        rfqNotesLabel: 'Catatan Tambahan',
        rfqSubmit: 'Kirim RFQ via WhatsApp'
    },
    en: {
        brandName: 'NUSANTARA',
        brandSub: 'Agri-Exchange',
        navHome: 'Home',
        navAbout: 'History & Vision',
        navProducts: 'Export Catalog',
        navAnalytics: 'Data & Probability',
        navCheckout: 'B2B Portal',
        navAdmin: '⚙️ Admin',
        navLogin: '🔑 Login',
        breadcrumbHome: 'Home',
        heroBadge: 'Global B2B Supply Chain',
        heroTitle: 'Connecting Nusantara\'s Comparative Advantage to Global Markets',
        heroDesc: 'Nusantara Agri-Exchange (NAX) modernizes the export supply chain for Indonesian Specialty Coffee and Premium Spices through automated business administration, data transparency, and integrated shipping.',
        heroBtnExplore: 'Explore Products',
        heroBtnRegulasi: 'Learn Regulations',
        aboutSub: 'Corporate Profile',
        aboutTitle: 'History, Roots & Our Commitment',
        aboutHead: 'Breaking Through International Trade Bureaucracy',
        aboutP1: 'Founded with the fundamental mission to optimize the Comparative Advantage of local agricultural commodities, Nusantara Agri-Exchange was born from the awareness of the huge gap between Indonesian premium commodity farmers and international buyers.',
        aboutP2: 'Initially, the export supply chain for coffee and spices was plagued by administrative inefficiencies, price manipulation by multiple layers of middlemen, and the complexity of meeting global customs standards. NAX integrates information technology to eliminate all these barriers, creating an agile, transparent, and economically fair logistics channel.',
        aboutP3: 'Today, we consolidate hundreds of farmer cooperatives from Sumatra to Maluku, ensuring every coffee bean and spice is processed through strict quality control, digitally documented, and ready to meet global circular economy standards.',
        stat1: 'Nusantara Farmer Cooperatives',
        stat2: 'Active Export Destinations',
        stat3: 'Traceability & Legal Docs Cleared',
        stat4: 'Zero Middleman Dependency',
        productsSub: 'Export Catalog',
        productsTitle: 'Nusantara Premium Commodities',
        productsDesc: 'Explore a collection of specialty coffees and selected spices with the highest export standards.',
        searchPlaceholder: 'Search products...',
        filterAll: '⭐ All Ratings',
        filter4: '4+ Stars',
        filter45: '4.5+ Stars',
        sortNameAsc: 'Name A-Z',
        sortNameDesc: 'Name Z-A',
        sortPriceAsc: 'Price Low-High',
        sortPriceDesc: 'Price High-Low',
        sortRating: 'Highest Rating',
        sortSold: 'Most Sold',
        sortStock: 'Most Stock',
        analyticsBadge: 'Smart B2B Infrastructure',
        analyticsTitle: 'Data-Driven Decisions & Market Probability Predictions',
        analyticsDesc: 'We don\'t just sell commodities; the NAX platform is equipped with a statistical computation engine to help international buyers analyze price trend probabilities, seasonal supply fluctuations, and real-time supply chain risk management.',
        analyticsLi1: 'Supply Volume Prediction: Mathematical calculations based on weather trends and harvest history.',
        analyticsLi2: 'Fact & Event Transparency: Procurement activity logs, lab test certifications, and integrated container tracking.',
        analyticsLi3: 'Administrative Document Automation: Instant issuance of Commercial Invoice, Packing List, and COO.',
        chartTitle: '📈 Commodity Price Trends (Real-time)',
        checkoutTitle: 'Export Form System & WhatsApp Integration',
        checkoutDesc: 'Complete the following business administration data. The system automatically compiles a formal order draft that will be forwarded directly to our WhatsApp Enterprise Trade Specialist.',
        cartTitle: '🛒 Shopping Cart',
        cartEmpty: 'No products selected yet.',
        cartTotal: 'Estimated Total (FOB):',
        cartClear: 'Clear Cart',
        formCompany: 'Company / Institution Name *',
        formBuyer: 'Buyer Representative Name *',
        formEmail: 'Corporate Email *',
        formPhone: 'Active WhatsApp/Phone Number *',
        formCountry: 'Destination Country *',
        formIncoterms: 'Incoterms Selection *',
        formPayment: 'Payment Method *',
        formCommodity: 'Selected Commodities (from cart) *',
        formQty: 'Order Volume (for first item)',
        formUnit: 'Volume Unit',
        formNotes: 'Additional Specifications / Certifications Notes',
        checkoutSubmit: '🚀 Submit & Finalize via WhatsApp Trade System',
        summaryTitle: 'B2B Gate-Pass Clearance',
        summaryInvoice: 'Proforma Invoice Draft:',
        summaryVendor: 'Platform Vendor:',
        summaryItems: 'Total Items:',
        summaryPayment: 'Payment Method:',
        summaryTotal: 'Total Commodity Value (FOB):',
        complianceTitle: '📋 Integrated Administrative Completeness:',
        securityBadge: '🛡️ Secure transactions protected by international Letter of Credit (L/C) banking system & Verified Escrow Account.',
        adminSub: 'Admin Panel',
        adminTitle: 'Product Stock, Price & Visibility Management',
        adminDesc: 'Manage stock, prices, and product visibility. Changes are automatically saved and integrated with the catalog.',
        adminStatProducts: 'Total Products',
        adminStatStock: 'Total Stock',
        adminStatLow: 'Low Stock Products (<10)',
        adminThCommodity: 'Commodity',
        adminThStock: 'Stock',
        adminThSold: 'Sold',
        adminThPrice: 'Price (USD)',
        adminThVisibility: 'Visibility',
        adminThAction: 'Action',
        adminReset: '↺ Reset All Stock to Default',
        contactHead: 'Nusantara Agri-Exchange Headquarters',
        contactEmail: 'Corporate Email:',
        contactPhone: 'International Hotline:',
        contactWA: 'WhatsApp Trade Specialist:',
        contactHours: 'Trading Hours',
        contactMonFri: 'Monday - Friday: 08:00 - 17:00 (WIB)',
        contactSat: 'Saturday (Logistics & Port Services): 08:00 - 13:00 (WIB)',
        contactNote: '*For international buyers with extreme time zone differences, priority is given via 24-hour encrypted WhatsApp form.',
        footerCopy: '© 2026 PT Nusantara Agri-Exchange. All Rights Reserved. Sustainable Business Administration & Supply Chain System.',
        footerTerms: 'Trade Terms & Conditions',
        footerPrivacy: 'GDPR Data Privacy Policy',
        footerCustoms: 'Customs & Export Regulations',
        loginTitle: '🔐 System Access',
        loginDesc: 'Login as Buyer or Admin to access full features.',
        loginNameLabel: 'Name / Username',
        loginRoleLabel: 'Login As',
        loginRoleBuyer: '🛒 Buyer',
        loginRoleAdmin: '⚙️ Admin',
        loginPasswordLabel: 'Admin Access Code',
        loginSubmit: 'Login',
        loginHint: '* Admin: enter code "nax2026" for full access.',
        rfqTitle: '📩 Request for Quotation (RFQ)',
        rfqDesc: 'Fill in your requirements, our team will respond within 24 hours.',
        rfqCompanyLabel: 'Company Name *',
        rfqEmailLabel: 'Corporate Email *',
        rfqTargetPriceLabel: 'Target Price (USD/MT or USD/KG)',
        rfqVolumeLabel: 'Volume (MT)',
        rfqIncotermsLabel: 'Incoterms Choice',
        rfqNotesLabel: 'Additional Notes',
        rfqSubmit: 'Submit RFQ via WhatsApp'
    }
};

function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' && el.dataset.i18nPlaceholder !== undefined) {
                el.placeholder = t[key];
            } else if (el.tagName === 'INPUT' && el.type !== 'text' && el.type !== 'search') {
                // skip
            } else {
                el.textContent = t[key];
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });
    const pageNames = {
        home: t.breadcrumbHome || 'Beranda',
        about: t.navAbout || 'Sejarah & Visi',
        products: t.navProducts || 'Katalog Ekspor',
        analytics: t.navAnalytics || 'Data & Probabilitas',
        checkout: t.navCheckout || 'B2B Portal',
        admin: t.navAdmin || '⚙️ Admin'
    };
    breadcrumbText.textContent = pageNames[currentPage] || t.breadcrumbHome || 'Beranda';
    updateAuthUI();
}

langToggle.addEventListener('click', function() {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    applyLanguage(newLang);
    showToast(`🌐 ${newLang === 'id' ? 'Bahasa Indonesia' : 'English'}`, 'info');
});

// ===== CHART.JS =====
function initPriceChart() {
    const ctx = document.getElementById('priceChart');
    if (!ctx) return;
    if (priceChartInstance) {
        priceChartInstance.destroy();
        priceChartInstance = null;
    }
    const labels = products.filter(p => !p.hidden).map(p => p.name.length > 18 ? p.name.slice(0, 16) + '…' : p.name);
    const prices = products.filter(p => !p.hidden).map(p => p.price);
    const colors = ['#c49a45', '#4a2f1b', '#2c1a0c', '#ebd6a8', '#8a7a6a', '#b89a7a', '#6e5f4a', '#d4b896', '#a08060', '#5a4a3a'];

    priceChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLanguage === 'id' ? 'Harga (USD)' : 'Price (USD)',
                data: prices,
                backgroundColor: colors.slice(0, prices.length),
                borderColor: '#2c1a0c',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 11 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { font: { size: 10 } }
                },
                x: {
                    ticks: { font: { size: 9 }, maxRotation: 30 }
                }
            }
        }
    });
}

// ===== PAYMENT METHOD SYNC =====
paymentMethodSelect.addEventListener('change', function() {
    summaryPaymentMethod.textContent = this.value || '-';
});

// ============================================================
// PAYMENT GATEWAY & CHECKOUT MODIFICATION
// ============================================================

function generateInvoiceNumber() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'NAX-INV-';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function calculateLogisticCost(totalFOB, incoterms) {
    if (incoterms === 'CIF (Cost, Insurance, Freight)' || incoterms === 'CFR (Cost and Freight)') {
        return totalFOB * 0.10;
    }
    return 0;
}

function showPaymentModal(orderData) {
    pendingOrder = orderData;
    const { company, buyer, email, phone, country, incoterms, paymentMethod, notes, cartItems, totalFOB } = orderData;
    const logisticCost = calculateLogisticCost(totalFOB, incoterms);
    const totalWithLogistic = totalFOB + logisticCost;
    pendingOrder.logisticCost = logisticCost;
    pendingOrder.totalWithLogistic = totalWithLogistic;

    const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';
    const rate = EXCHANGE_RATES[currentCurrency] || 1;
    const formatCurrency = (val) => {
        if (currentCurrency === 'IDR') {
            return symbol + Math.round(val * rate).toLocaleString('id-ID');
        }
        return symbol + (val * rate).toFixed(2);
    };

    let cartSummaryHtml = '';
    cartItems.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        const qty = item.qty;
        const subtotal = p.price * (p.unit === 'MT' ? qty * 1000 : qty);
        cartSummaryHtml += `
            <div class="row">
                <span class="label">${p.name} × ${qty} ${p.unit}</span>
                <span class="value">${formatCurrency(subtotal)}</span>
            </div>
        `;
    });

    paymentContent.innerHTML = `
        <h3 style="font-family:'Playfair Display',serif; font-size:22px;">💳 Payment Gateway</h3>
        <p style="font-size:14px; color:var(--text-muted); margin-bottom:12px;">Ringkasan pesanan Anda. Silakan konfirmasi pembayaran.</p>

        <div class="payment-summary">
            <div class="row"><span class="label">🏢 Perusahaan</span><span class="value">${company}</span></div>
            <div class="row"><span class="label">👤 Pembeli</span><span class="value">${buyer}</span></div>
            <div class="row"><span class="label">📧 Email</span><span class="value">${email}</span></div>
            <div class="row"><span class="label">📍 Tujuan</span><span class="value">${country}</span></div>
            <div class="row"><span class="label">🚢 Incoterms</span><span class="value">${incoterms}</span></div>
            <div class="row"><span class="label">💳 Metode Pembayaran</span><span class="value">${paymentMethod}</span></div>
            <div style="margin:8px 0; border-top:1px solid var(--border-color); padding-top:8px;">
                <strong style="font-size:14px;">Rincian Produk:</strong>
                ${cartSummaryHtml}
            </div>
            <div class="row"><span class="label">Total FOB</span><span class="value">${formatCurrency(totalFOB)}</span></div>
            ${logisticCost > 0 ? `
                <div class="row"><span class="label">🚚 Biaya Logistik/Asuransi (+10%)</span><span class="value">${formatCurrency(logisticCost)}</span></div>
            ` : ''}
            <div class="row total"><span class="label">Total yang harus dibayar</span><span class="value">${formatCurrency(totalWithLogistic)}</span></div>
        </div>

        <button class="btn-pay-now" id="confirmPayBtn">✅ Konfirmasi Pembayaran & Bayar Sekarang</button>
        <p style="font-size:11px; color:var(--text-muted); margin-top:10px; text-align:center;">*Transaksi dummy untuk simulasi tugas akhir</p>
    `;

    document.getElementById('confirmPayBtn').addEventListener('click', function() {
        this.disabled = true;
        this.textContent = '⏳ Memproses...';
        // Simulasi loading
        setTimeout(() => {
            processPaymentSuccess();
        }, 2000);
    });

    paymentModal.classList.add('open');
}

function processPaymentSuccess() {
    const invoiceNumber = generateInvoiceNumber();
    pendingOrder.invoiceNumber = invoiceNumber;

    let stockError = false;
    pendingOrder.cartItems.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (p) {
            if (p.stock < item.qty) {
                stockError = true;
                return;
            }
            p.stock = Math.max(0, p.stock - item.qty);
            p.sold += item.qty;
        }
    });
    if (!stockError) {
        saveStockToLocalStorage();
        renderProducts();
        renderAdminPage();
        cart = [];
        saveCartToLocalStorage();
        renderCart();
    } else {
        showToast('⚠️ Stok tidak mencukupi, pembayaran gagal.', 'error');
        closePaymentModal();
        return;
    }

    const formatCurrency = (val) => {
        const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';
        const rate = EXCHANGE_RATES[currentCurrency] || 1;
        if (currentCurrency === 'IDR') {
            return symbol + Math.round(val * rate).toLocaleString('id-ID');
        }
        return symbol + (val * rate).toFixed(2);
    };

    paymentContent.innerHTML = `
        <div class="success-invoice">
            <span class="success-icon">✅</span>
            <h3 class="success-title">Pembayaran Berhasil!</h3>
            <p style="color:var(--text-muted); margin-bottom:16px;">Transaksi Anda telah dikonfirmasi.</p>

            <div class="invoice-box">
                <div class="inv-row"><span class="inv-label">📄 Nomor Referensi</span><span class="inv-value">${invoiceNumber}</span></div>
                <div class="inv-row"><span class="inv-label">🏢 Perusahaan</span><span class="inv-value">${pendingOrder.company}</span></div>
                <div class="inv-row"><span class="inv-label">👤 Pembeli</span><span class="inv-value">${pendingOrder.buyer}</span></div>
                <div class="inv-row"><span class="inv-label">💰 Total Dibayar</span><span class="inv-value">${formatCurrency(pendingOrder.totalWithLogistic)}</span></div>
                <div class="inv-row"><span class="inv-label">🚢 Incoterms</span><span class="inv-value">${pendingOrder.incoterms}</span></div>
                <div class="inv-row"><span class="inv-label">📅 Tanggal</span><span class="inv-value">${new Date().toLocaleDateString('id-ID')}</span></div>
            </div>

            <div class="invoice-actions">
                <button class="btn btn-whatsapp" id="sendWAInvoiceBtn">📨 Kirim Bukti ke WhatsApp</button>
                <button class="btn btn-close-modal" id="closeInvoiceBtn">✕ Tutup</button>
            </div>
        </div>
    `;

    document.getElementById('sendWAInvoiceBtn').addEventListener('click', function() {
        sendPaymentConfirmationToWhatsApp();
    });
    document.getElementById('closeInvoiceBtn').addEventListener('click', function() {
        closePaymentModal();
        document.getElementById('b2bOrderForm').reset();
        document.getElementById('selectedCommodity').value = 'Tambahkan produk dari katalog';
        summaryPaymentMethod.textContent = '-';
        showToast('✅ Terima kasih atas pembelian Anda!', 'success');
    });
}

function sendPaymentConfirmationToWhatsApp() {
    const order = pendingOrder;
    const total = order.totalWithLogistic;
    const invoice = order.invoiceNumber;
    const formatCurrency = (val) => {
        const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';
        const rate = EXCHANGE_RATES[currentCurrency] || 1;
        if (currentCurrency === 'IDR') {
            return symbol + Math.round(val * rate).toLocaleString('id-ID');
        }
        return symbol + (val * rate).toFixed(2);
    };

    let itemsDetail = '';
    order.cartItems.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (p) {
            itemsDetail += `- ${p.name} : ${item.qty} ${p.unit}\n`;
        }
    });

    const msg = `*KONFIRMASI PEMBAYARAN - NUSANTARA AGRI-EXCHANGE*
========================================
📄 Invoice: ${invoice}
🏢 Perusahaan: ${order.company}
👤 Pembeli: ${order.buyer}
📧 Email: ${order.email}
📞 WhatsApp: ${order.phone}

📍 Tujuan: ${order.country}
🚢 Incoterms: ${order.incoterms}
💳 Metode Pembayaran: ${order.paymentMethod}

*Rincian Pesanan:*
${itemsDetail}
💰 Total Dibayar: ${formatCurrency(total)}

📝 Catatan: ${order.notes || '-'}
========================================
Status: LUNAS. Mohon segera diproses pengiriman.`;

    window.open(`https://wa.me/6285860095139?text=${encodeURIComponent(msg)}`, '_blank');
    showToast('📨 Bukti pembayaran terkirim via WhatsApp!', 'success');
}

function closePaymentModal() {
    paymentModal.classList.remove('open');
    paymentContent.innerHTML = '';
}

paymentModalClose.addEventListener('click', closePaymentModal);
paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) closePaymentModal();
});

// ============================================================
// MODIFIED CHECKOUT FORM
// ============================================================
document.getElementById('b2bOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const company = document.getElementById('companyName').value.trim();
    const buyer = document.getElementById('buyerName').value.trim();
    const email = document.getElementById('buyerEmail').value.trim();
    const phone = document.getElementById('buyerPhone').value.trim();
    const country = document.getElementById('destinationCountry').value.trim();
    const incoterms = document.getElementById('incoterms').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const notes = document.getElementById('additionalNotes').value.trim() || '-';

    if (!company || !buyer || !email || !phone || !country) {
        showToast('⚠️ Harap lengkapi semua data yang diperlukan.', 'error');
        return;
    }
    if (cart.length === 0) {
        showToast('⚠️ Keranjang kosong. Tambahkan produk terlebih dahulu.', 'error');
        return;
    }

    let totalFOB = 0;
    let cartItems = [];
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (p) {
            const qty = item.qty;
            const subtotal = p.price * (p.unit === 'MT' ? qty * 1000 : qty);
            totalFOB += subtotal;
            cartItems.push({ productId: p.id, qty: qty, name: p.name, unit: p.unit, price: p.price });
        }
    });

    const orderData = {
        company,
        buyer,
        email,
        phone,
        country,
        incoterms,
        paymentMethod,
        notes,
        cartItems,
        totalFOB
    };

    showPaymentModal(orderData);
});

// ===== INIT =====
function init() {
    loadAuthFromLocalStorage();
    loadStockFromLocalStorage();
    loadCartFromLocalStorage();
    updateAuthUI();
    applyLanguage('id');
    renderProducts();
    renderCart();
    renderAdminPage();
    navigateTo('home');

    summaryPaymentMethod.textContent = paymentMethodSelect.value || '-';

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) navMenu.classList.remove('open');
    });

    searchInput.addEventListener('input', () => { currentPageProducts = 1;
        renderProducts(); });
    filterRating.addEventListener('change', () => { currentPageProducts = 1;
        renderProducts(); });
    sortSelect.addEventListener('change', () => { currentPageProducts = 1;
        renderProducts(); });

    console.log('🚀 Nusantara Agri-Exchange siap!');
}

document.addEventListener('DOMContentLoaded', init);
