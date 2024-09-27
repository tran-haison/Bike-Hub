const bikes = [
    {
        name: "Mountain Explorer",
        brand: "Trail Master",
        type: "Mountain Bike",
        price: 499,
        image: "images/img_bike_1.webp",
        rating: 5
    },
    {
        name: "Speedster Pro",
        brand: "Velocity",
        type: "Road Bike",
        price: 799,
        image: "images/img_bike_2.webp",
        rating: 4.5
    },
    {
        name: "Urban Glide",
        brand: "City Ride",
        type: "Hybrid Bike",
        price: 359,
        image: "images/img_bike_3.webp",
        rating: 3.5
    },
    {
        name: "Cross Country X",
        brand: "Adventure Plus",
        type: "Mountain Bike",
        price: 629,
        image: "images/img_bike_4.webp",
        rating: 4
    },
    {
        name: "Race Rocket",
        brand: "Speed Cycle",
        type: "Road Bike",
        price: 949,
        image: "images/img_bike_5.webp",
        rating: 2.5
    },
    {
        name: "City Cruiser",
        brand: "Urban Way",
        type: "Cruiser Bike",
        price: 299,
        image: "images/img_bike_6.webp",
        rating: 4
    },
    {
        name: "Enduro Max",
        brand: "Trail Blaze",
        type: "Mountain Bike",
        price: 749,
        image: "images/img_bike_7.webp",
        rating: 5
    },
    {
        name: "AeroSpeed Elite",
        brand: "Aero Bike",
        type: "Road Bike",
        price: 1199,
        image: "images/img_bike_8.webp",
        rating: 4.5
    },
    {
        name: "Folding Fun",
        brand: "Compact Ride",
        type: "Folding Bike",
        price: 229,
        image: "images/img_bike_9.webp",
        rating: 3
    },
    {
        name: "Tourist Trek",
        brand: "Journey Gear",
        type: "Touring Bike",
        price: 849,
        image: "images/img_bike_10.webp",
        rating: 4
    },
    {
        name: "Electric Glide",
        brand: "E-Motion",
        type: "Electric Bike",
        price: 1299,
        image: "images/img_bike_11.webp",
        rating: 5
    },
    {
        name: "Kids Cruiser",
        brand: "Little Riders",
        type: "Kids Bike",
        price: 179,
        image: "images/img_bike_12.webp",
        rating: 3
    }
];

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

const brands = [
    {
        name: 'Giant',
        image: 'images/img_logo_giant_bike.avif',
    },
    {
        name: 'Momentum',
        image: 'images/img_logo_momentum_bike.avif',
    },
    {
        name: 'Scott',
        image: 'images/img_logo_scott_bike.avif',
    },
    {
        name: 'Malvern Star',
        image: 'images/img_logo_malvernstar_bike.avif',
    },
    {
        name: 'Avanti',
        image: 'images/img_logo_avanti_bike.webp',
    },
    {
        name: 'Giro',
        image: 'images/img_logo_giro_bike.avif',
    },
    {
        name: 'Park Tool',
        image: 'images/img_logo_parktool_bike.avif',
    },
    {
        name: 'Topeak',
        image: 'images/img_logo_topeak_bike.avif',
    },
    {
        name: 'Wahoo',
        image: 'images/img_logo_wahoo_bike.avif',
    },
    {
        name: 'Maxxis',
        image: 'images/img_logo_maxxis_bike.avif',
    },
    {
        name: '100',
        image: 'images/img_logo_100_bike.avif',
    },
    {
        name: 'Batavus',
        image: 'images/img_logo_batavus_bike.svg',
    },
    {
        name: 'Stromer',
        image: 'images/img_logo_stromer_bike.svg',
    },
    {
        name: 'Cervelo',
        image: 'images/img_logo_cervelo_bike.svg',
    },
    {
        name: 'Trek',
        image: 'images/img_logo_trek_bike.avif',
    },
    {
        name: 'Cowboy',
        image: 'images/img_logo_cowboy_bike.svg',
    },
    {
        name: 'QWIC',
        image: 'images/img_logo_qwic_bike.png',
    },
    {
        name: 'Gazelle',
        image: 'images/img_logo_gazelle_bike.avif',
    },
    {
        name: 'Veloretti',
        image: 'images/img_logo_veloretti_bike.avif',
    },
    {
        name: 'Cortina',
        image: 'images/img_logo_cortina_bike.avif',
    },
    {
        name: 'Urban Arrow',
        image: 'images/img_logo_urbanarrow_bike.avif',
    }
];

let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db');

db.serialize(function () {
    db.run(`
        CREATE TABLE IF NOT EXISTS User (
            USER_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            USER_USERNAME TEXT NOT NULL UNIQUE,
            USER_PASSWORD TEXT NOT NULL,
            USER_FULLNAME TEXT,
            USER_EMAIL TEXT,
            USER_PHONE TEXT,
            USER_ADDRESS TEXT,
            USER_DOB DATETIME
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Feedback (
            FEEDBACK_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            FEEDBACK_FULLNAME TEXT NOT NULL,
            FEEDBACK_EMAIL TEXT NOT NULL,
            FEEDBACK_SUBJECT TEXT NOT NULL,
            FEEDBACK_MESSAGE TEXT NOT NULL
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Bike (
            BIKE_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            BIKE_NAME TEXT NOT NULL,
            BIKE_BRAND TEXT NOT NULL,
            BIKE_TYPE TEXT NOT NULL,
            BIKE_PRICE REAL NOT NULL,
            BIKE_IMAGE TEXT NOT NULL,
            BIKE_RATING REAL NOT NULL
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Category (
            CATEGORY_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            CATEGORY_NAME TEXT NOT NULL,
            CATEGORY_DESC TEXT NOT NULL,
            CATEGORY_IMAGE TEXT NOT NULL
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Brand (
            BRAND_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            BRAND_NAME TEXT NOT NULL,
            BRAND_IMAGE TEXT NOT NULL
        );
    `);

    // Insert data into table Bike
    db.run(`DELETE FROM Bike;`);
    bikes.forEach((bike) => {
        db.run(
            `INSERT INTO Bike (BIKE_NAME, BIKE_BRAND, BIKE_TYPE, BIKE_PRICE, BIKE_IMAGE, BIKE_RATING) VALUES (?, ?, ?, ?, ?, ?)`,
            [bike.name, bike.brand, bike.type, bike.price, bike.image, bike.rating],
        );
    })

    // Insert data into table Category
    db.run(`DELETE FROM Category;`);
    categories.forEach((category) => {
        db.run(
            `INSERT INTO Category (CATEGORY_NAME, CATEGORY_IMAGE, CATEGORY_DESC) VALUES (?, ?, ?)`,
            [category.name, category.image, category.description],
        );
    });

    // Insert data into table Brand
    db.run(`DELETE FROM Brand;`);
    brands.forEach((brand) => {
        db.run(
            `INSERT INTO Brand (BRAND_NAME, BRAND_IMAGE) VALUES (?, ?)`,
            [brand.name, brand.image],
        );
    })
});

db.close(); 
