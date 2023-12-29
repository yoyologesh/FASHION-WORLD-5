document.addEventListener('DOMContentLoaded', function () {
    const quantityElements = document.querySelectorAll('.quantity');

    quantityElements.forEach(function (quantityElement) {
        const decreaseBtn = quantityElement.querySelector('.decrease-btn');
        const increaseBtn = quantityElement.querySelector('.increase-btn');
        const quantityValue = quantityElement.querySelector('.quantity-value');

        decreaseBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityValue.textContent);
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });

        increaseBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityValue.textContent);
            quantity++;
            quantityValue.textContent = quantity;
        });
    });
});