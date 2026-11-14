// ================= CART =================

let cart = [];


// ADD PRODUCT TO CART
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}


// UPDATE CART
function updateCart() {

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Number of products
    cartCount.textContent = cart.length;

    // Clear cart display
    cartItems.innerHTML = "";

    let total = 0;


    // If cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your basket is empty.</p>';

    } else {

        // Display products
        cart.forEach((product, index) => {

            total += product.price;

            const item = document.createElement("div");

            item.classList.add("cart-item");

            item.innerHTML = `
                <div>
                    <strong>${product.name}</strong>
                    <p>$${product.price.toFixed(2)}</p>
                </div>

                <button onclick="removeFromCart(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

            cartItems.appendChild(item);

        });

    }

    // Update total
    totalPrice.textContent = total.toFixed(2);
}


// REMOVE PRODUCT
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// OPEN CART
function showCart() {

    document
        .getElementById("cart-panel")
        .classList.add("active");
}


// CLOSE CART
function closeCart() {

    document
        .getElementById("cart-panel")
        .classList.remove("active");
}
