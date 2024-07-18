function searchProducts() {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        alert('Please enter a product name to search.');
        return;
    }

    const mockProducts = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];

    const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <span>${product.name} - ${product.price}</span>
                <button onclick="buyProduct('${product.name}')">Buy</button>
            `;
            productList.appendChild(productItem);
        });
    }
}

function buyProduct(productName) {
    alert(`You have bought ${productName}!`);
}

