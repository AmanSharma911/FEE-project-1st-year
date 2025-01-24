
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');


let cart = [];


function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let total = 0;

    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
        total += item.price * item.quantity;
    });

    
    totalPriceElement.textContent = total.toFixed(2);
}


function addToCart(event) {
    const menuItem = event.target.closest('.menu-item');
    const itemId = menuItem.getAttribute('data-id');
    const itemName = menuItem.getAttribute('data-name');
    const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

    
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++; 
    } else {
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    }

    updateCartDisplay();
}


addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});


checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Your total is $${totalPriceElement.textContent}. Thank you for your order!`);
        cart = []; 
        updateCartDisplay();
    }
});
