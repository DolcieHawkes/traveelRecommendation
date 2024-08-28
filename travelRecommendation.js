 <script>
document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from travel_recommendation_api.json
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check if data is fetched correctly

            // Handle search and display recommendations
            const searchBar = document.getElementById('search-bar');
            const searchButton = document.getElementById('search-button');
            const resetButton = document.getElementById('reset-button');
            const contentDiv = document.getElementById('content');

            searchButton.addEventListener('click', () => {
                const keyword = searchBar.value.toLowerCase();

                // Filter data based on keyword (countries, temples, or beaches)
                let filteredData = [];
                if (keyword === 'country' || keyword === 'countries') {
                    filteredData = data.countries.flatMap(country => country.cities); 
                } else if (keyword === 'temple' || keyword === 'temples') {
                    filteredData = data.temples;
                } else if (keyword === 'beach' || keyword === 'beaches') {
                    filteredData = data.beaches;
                } else {
                    // If keyword doesn't match any category, search within all
                    filteredData = data.countries.flatMap(country => country.cities)
                        .concat(data.temples)
                        .concat(data.beaches)
                        .filter(item => {
                            const name = item.name.toLowerCase();
                            return name.includes(keyword); 
                        });
                }

                displayRecommendations(filteredData);
            });

            resetButton.addEventListener('click', () => {
                searchBar.value = '';
                contentDiv.innerHTML = ''; // Clear results
            });

            // Initial display (home page)
            displayHomePage();
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayHomePage() {
        // This function now leverages the new HTML structure
        // You might not need to modify it much, or you can adjust it to fit your needs
    }

    function displayRecommendations(recommendations) {
        contentDiv.innerHTML = ''; // Clear previous content

        if (recommendations.length === 0) {
            contentDiv.innerHTML = '<p>No recommendations found.</p>';
            return;
        }

        recommendations.forEach(item => {
            const recommendationDiv = document.createElement('div');
            recommendationDiv.classList.add('recommendation'); // Add a class for styling
            recommendationDiv.innerHTML = `
                <h2>${item.name}</h2>
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.description}</p>
            `;
            contentDiv.appendChild(recommendationDiv);
        });
    }
});
searchButton.addEventListener('click', () => {
    const keyword = searchBar.value.toLowerCase(); // Convert to lowercase for case-insensitive search

    // Filter data based on keyword (countries, temples, or beaches)
    let filteredData = [];
    if (keyword === 'country' || keyword === 'countries') {
        filteredData = data.countries.flatMap(country => country.cities); 
    } else if (keyword === 'temple' || keyword === 'temples') {
        filteredData = data.temples;
    } else if (keyword === 'beach' || keyword === 'beaches') {
        filteredData = data.beaches;
    } else {
        // If keyword doesn't match any category, search within all
        filteredData = data.countries.flatMap(country => country.cities)
            .concat(data.temples)
            .concat(data.beaches)
            .filter(item => {
                const name = item.name.toLowerCase();
                return name.includes(keyword); 
            });
    }

    displayRecommendations(filteredData);
});
function displayRecommendations(recommendations) {
    contentDiv.innerHTML = ''; // Clear previous content

    if (recommendations.length === 0) {
        contentDiv.innerHTML = '<p>No recommendations found.</p>';
        return;
    }

    // Display at least two recommendations (or all if less than two are found)
    const numToDisplay = Math.min(recommendations.length, 2); 

    for (let i = 0; i < numToDisplay; i++) {
        const item = recommendations[i];
        const recommendationDiv = document.createElement('div');
        recommendationDiv.classList.add('recommendation');

        // Check if the recommendation is a city (part of a country)
        if (item.hasOwnProperty('cities')) { 
            // If it's a country, display its cities
            item.cities.forEach(city => {
                const cityDiv = document.createElement('div');
                cityDiv.classList.add('city'); 
                cityDiv.innerHTML = `
                    <h3>${city.name}</h3>
                    <img src="${city.imageUrl}" alt="${city.name}">
                    <p>${city.description}</p>
                `;
                recommendationDiv.appendChild(cityDiv);
            });
        } else {
            // If it's a temple or beach, display it directly
            recommendationDiv.innerHTML = `
                <h2>${item.name}</h2>
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.description}</p>
            `;
        }

        contentDiv.appendChild(recommendationDiv);
    }
}
    </script>
