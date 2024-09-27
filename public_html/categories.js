// Example data for categories
const categories = [
    {
        name: "Mountain Bikes",
        image: "images/img_bike_mountain.jpg",
        description: "Designed for off-road cycling, perfect for rugged terrain and trails"
    },
    {
        name: "Road Bikes",
        image: "images/img_bike_road.jpg",
        description: "Built for speed on paved roads, ideal for competitive cycling"
    },
    {
        name: "Hybrid Bikes",
        image: "images/img_bike_hybrid.jpg",
        description: "Combine the power of mountain bikes with the speed of road bikes"
    },
    {
        name: "Electric Bikes",
        image: "images/img_bike_electric.jpg",
        description: "Powered by rechargeable batteries, ideal for urban cycling"
    },
    {
        name: "Folding Bikes",
        image: "images/img_bike_folding.jpg",
        description: "Foldable for easy storage and transport"
    },
    {
        name: "Cruiser Bikes",
        image: "images/img_bike_cruiser.jpg",
        description: "Perfect for road trips and off-roading"
    },
    {
        name: "Kid Bikes",
        image: "images/img_bike_kid.jpg",
        description: "Designed for young children and families"
    },
    {
        name: "Gravel Bikes",
        image: "images/img_bike_gravel.jpg",
        description: "Perfect for gravel roads and trails"
    },
];

function loadCategories() {
    const categoriesList = document.getElementById('categories-list');
    categoriesList.innerHTML = ''; // Clear any existing content

    categories.forEach(category => {
        // Create the category card HTML
        const categoryCard = `
            <div class="col-md-6 col-lg-3 col-12">
                <div class="card h-100 shadow-sm border-0">
                    <div class="position-relative">
                        <img src="${category.image}" class="card-img-top img-fluid rounded" alt="${category.name}">
                        <div class="card-img-overlay d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded">
                            <h5 class="lead text-white text-center m-0">${category.name}</h5>
                        </div>
                    </div>
                    <div class="card-body text-start">
                        <p class="small mb-0">${category.description}</p>
                    </div>
                </div>
            </div>
        `;
        // Append the category card to the categories list
        categoriesList.innerHTML += categoryCard;
    });
}

// Call the function to load categories when the page loads
document.addEventListener('DOMContentLoaded', loadCategories);
