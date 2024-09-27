const allBikes = [
    {
        name: "Mountain Explorer",
        brand: "Trail Master",
        type: "Mountain Bike",
        price: 499,
        image: "resources/images/img_bike_1.webp",
        rating: 5
    },
    {
        name: "Speedster Pro",
        brand: "Velocity",
        type: "Road Bike",
        price: 799,
        image: "resources/images/img_bike_2.webp",
        rating: 4.5
    },
    {
        name: "Urban Glide",
        brand: "City Ride",
        type: "Hybrid Bike",
        price: 359,
        image: "resources/images/img_bike_3.webp",
        rating: 3.5
    },
    {
        name: "Cross Country X",
        brand: "Adventure Plus",
        type: "Mountain Bike",
        price: 629,
        image: "resources/images/img_bike_4.webp",
        rating: 4
    },
    {
        name: "Race Rocket",
        brand: "Speed Cycle",
        type: "Road Bike",
        price: 949,
        image: "resources/images/img_bike_5.webp",
        rating: 2.5
    },
    {
        name: "City Cruiser",
        brand: "Urban Way",
        type: "Cruiser Bike",
        price: 299,
        image: "resources/images/img_bike_6.webp",
        rating: 4
    },
    {
        name: "Enduro Max",
        brand: "Trail Blaze",
        type: "Mountain Bike",
        price: 749,
        image: "resources/images/img_bike_7.webp",
        rating: 5
    },
    {
        name: "AeroSpeed Elite",
        brand: "Aero Bike",
        type: "Road Bike",
        price: 1199,
        image: "resources/images/img_bike_8.webp",
        rating: 4.5
    },
    {
        name: "Folding Fun",
        brand: "Compact Ride",
        type: "Folding Bike",
        price: 229,
        image: "resources/images/img_bike_9.webp",
        rating: 3
    },
    {
        name: "Tourist Trek",
        brand: "Journey Gear",
        type: "Touring Bike",
        price: 849,
        image: "resources/images/img_bike_10.webp",
        rating: 4
    },
    {
        name: "Electric Glide",
        brand: "E-Motion",
        type: "Electric Bike",
        price: 1299,
        image: "resources/images/img_bike_11.webp",
        rating: 5
    },
    {
        name: "Kids Cruiser",
        brand: "Little Riders",
        type: "Kids Bike",
        price: 179,
        image: "resources/images/img_bike_12.webp",
        rating: 3
    }
];

function loadBikes() {
    const bikeList = document.getElementById('bike-list');
    bikeList.innerHTML = ''; // Clear any existing content

    allBikes.forEach(bike => {
        // Determine the full stars and half star
        const fullStars = Math.floor(bike.rating);
        const halfStar = bike.rating % 1 ? `<i class="fas fa-star-half-alt"></i>` : '';

        // Create card HTML
        const bikeCard = `
            <div class="col-md-6 col-lg-4 col-12">
                <div class="card">
                    <img src="${bike.image}" class="card-img-top" alt="${bike.name}">
                    <div class="card-body">
                        <div class="d-inline-flex mx-1 px-3 py-1 rounded-5 border">
                            <p class="small m-0 text-secondary">${bike.type}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-1 mt-3 px-1">
                            <h5 class="text-dark card-title mb-0">${bike.name}</h5>
                            <p class="h5 text-dark fw-bold mb-0">$${bike.price}</p>
                        </div>
                        <p class="small text-secondary mb-1 px-1">${bike.brand}</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="rating text-warning">             
                                ${'<i class="fas fa-star ms-1"></i>'.repeat(fullStars)}
                                ${halfStar}
                            </div>
                            <a href="bike.html" class="btn btn-outline-dark btn-sm me-1" 
                                onclick="selectBike('${bike.name}', '${bike.brand}', '${bike.type}', '${bike.price}', '${bike.image}', '${bike.rating}')">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert the card into the bike list
        bikeList.innerHTML += bikeCard;
    });
}

function selectBike(name, brand, type, price, image, rating) {
    const bike = {
        name,
        brand,
        type,
        price,
        image,
        rating
    }
    localStorage.setItem('selectedBike', JSON.stringify(bike));
}

// Call the function to load bikes when the page loads
document.addEventListener('DOMContentLoaded', loadBikes);
