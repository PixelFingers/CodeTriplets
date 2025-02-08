let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Implement checkout functionality here
});

updateCartDisplay();