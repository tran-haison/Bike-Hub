function loadBike() {
    const bike = JSON.parse(localStorage.getItem('selectedBike'));

    if (bike) {
        // Update bike images and thumbnails
        document.getElementById("product-image").src = bike.image;
        document.getElementById("product-image").alt = bike.name;
        document.getElementById("product-thumbnail-1").src = bike.image;
        document.getElementById("product-thumbnail-1").alt = bike.name;
        document.getElementById("product-thumbnail-2").src = bike.image;
        document.getElementById("product-thumbnail-2").alt = bike.name;
        document.getElementById("product-thumbnail-3").src = bike.image;
        document.getElementById("product-thumbnail-3").alt = bike.name;

        // Update name
        document.getElementById("product-name").textContent = bike.name;
        document.getElementById("product-name-breadcrumb").textContent = bike.name;

        // Update price
        document.getElementById("product-price").textContent = `$${bike.price}`;

        // Update brand
        document.getElementById("product-brand").textContent = bike.brand;

        // Update type
        document.getElementById("product-category").textContent = bike.type;
    }
}

function decreaseQuantity() {
    let quantity = parseInt(document.getElementById('product-quantity').value);
    if (quantity > 1) {
        document.getElementById('product-quantity').value = quantity - 1;
    }
}

function increaseQuantity() {
    let quantity = parseInt(document.getElementById('product-quantity').value);
    document.getElementById('product-quantity').value = quantity + 1;
}

// Call the function to load bike details when the page loads
document.addEventListener('DOMContentLoaded', loadBike);
