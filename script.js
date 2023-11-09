document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    const totalElement = document.getElementById("total");
    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeBtn = document.getElementById("close-btn");

    cartBtn.addEventListener("click", () => {
        cartSidebar.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        cartSidebar.classList.remove("show");
    });

    products.forEach((product) => {
        const quantityElement = product.querySelector(".product-quantity");
        const priceElement = product.querySelector(".product-price");
        const likeButton = product.querySelector(".like-product");
        const increaseButton = product.querySelector(".quantity-increase");
        const decreaseButton = product.querySelector(".quantity-decrease");
        const removeButton = product.querySelector(".remove-product");

        likeButton.addEventListener("click", function () {
            likeButton.classList.toggle("liked");
        });

        increaseButton.addEventListener("click", function () {
            const currentQuantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = currentQuantity + 1;
            updateTotal();
        });

        decreaseButton.addEventListener("click", function () {
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });

        removeButton.addEventListener("click", function () {
            const currentQuantity = parseInt(quantityElement.textContent);
            product.remove();
            quantityElement.textContent = 0;
            updateTotal();
        });
    });

    function updateTotal() {
        let total = 0;
        products.forEach((product) => {
            const quantity = parseInt(product.querySelector(".product-quantity").textContent);
            const price = parseFloat(product.querySelector(".product-price").textContent.slice(1));
            total += quantity * price;
        });
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
});