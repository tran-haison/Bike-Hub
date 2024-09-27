const brands = [
    {
        name: 'Giant',
        image: 'resources/images/img_logo_giant_bike.avif',
    },
    {
        name: 'Momentum',
        image: 'resources/images/img_logo_momentum_bike.avif',
    },
    {
        name: 'Scott',
        image: 'resources/images/img_logo_scott_bike.avif',
    },
    {
        name: 'Malvern Star',
        image: 'resources/images/img_logo_malvernstar_bike.avif',
    },
    {
        name: 'Avanti',
        image: 'resources/images/img_logo_avanti_bike.webp',
    },
    {
        name: 'Giro',
        image: 'resources/images/img_logo_giro_bike.avif',
    },
    {
        name: 'Park Tool',
        image: 'resources/images/img_logo_parktool_bike.avif',
    },
    {
        name: 'Topeak',
        image: 'resources/images/img_logo_topeak_bike.avif',
    },
    {
        name: 'Wahoo',
        image: 'resources/images/img_logo_wahoo_bike.avif',
    },
    {
        name: 'Maxxis',
        image: 'resources/images/img_logo_maxxis_bike.avif',
    },
    {
        name: '100',
        image: 'resources/images/img_logo_100_bike.avif',
    },
    {
        name: 'Batavus',
        image: 'resources/images/img_logo_batavus_bike.svg',
    },
    {
        name: 'Stromer',
        image: 'resources/images/img_logo_stromer_bike.svg',
    },
    {
        name: 'Cervelo',
        image: 'resources/images/img_logo_cervelo_bike.svg',
    },
    {
        name: 'Trek',
        image: 'resources/images/img_logo_trek_bike.avif',
    },
    {
        name: 'Cowboy',
        image: 'resources/images/img_logo_cowboy_bike.svg',
    },
    {
        name: 'QWIC',
        image: 'resources/images/img_logo_qwic_bike.png',
    },
    {
        name: 'Gazelle',
        image: 'resources/images/img_logo_gazelle_bike.avif',
    },
    {
        name: 'Veloretti',
        image: 'resources/images/img_logo_veloretti_bike.avif',
    },
    {
        name: 'Cortina',
        image: 'resources/images/img_logo_cortina_bike.avif',
    },
    {
        name: 'Urban Arrow',
        image: 'resources/images/img_logo_urbanarrow_bike.avif',
    }
];

function loadBrands() {
    const brandsList = document.getElementById('brands-list');
    brandsList.innerHTML = ''; // Clear any existing content

    brands.forEach(brand => {
        // Create the brand div HTML
        const brandDiv = `
            <div class="col-4 col-md-3 col-lg-2 align-content-center">
                <img src="${brand.image}" alt="${brand.name}" class="img-fluid">
            </div>
        `;
        // Append the brand div to list
        brandsList.innerHTML += brandDiv;
    });
}

// Call the function to load brands when the page loads
document.addEventListener('DOMContentLoaded', loadBrands);
