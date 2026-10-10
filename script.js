/*
=============================================================================
Mini Project 1: REST Countries API with Color Theme Switcher
Description   : An application that fetches data from the REST Countries API,
                displays country information, and includes a color theme switcher
                for light and dark modes.
Date          : 10/09/2026                
=============================================================================
*/

/*
=============================================================================
REST COUNTRIES API - APPLICATION REQUIREMENTS
=============================================================================

Core Features & User Stories:

  • 1. Homepage Country Grid
    - Display all countries fetched from the REST Countries API on load.

  • 2. Search Functionality
    - Real-time search/filtering of countries using an input field.

  • 3. Region Filtering
    - Filter the list of displayed countries by geographical region.

  • 4. Detailed Country View
    - Navigate to a separate page/view showing in-depth country details upon click.

  • 5. Interactive Border Navigation
    - Clickable border country tags on the detail page to jump between countries.

  • 6. Theme Toggle (Optional)
    - Toggle color scheme seamlessly between Light and Dark modes.

=============================================================================
*/



const display = document.getElementById("display-container-on-load");
const searchInput = document.getElementById("search-input");

let countries = [];

async function fetchCountries() {

    try {
        const response = await fetch("./rest-countries-api-with-color-theme-switcher-master/data.json");
        countries = await response.json();

        let resultRegionFilter = regionFilter("Europe");

        console.log(resultRegionFilter);

        let resultSearch = search("Albania");

        console.log("The searched country inforamation is ", resultSearch);


        displayCountries(countries);

        //console.log(countries);
    }
    catch (error) {
        console.error("Unable to load countries: ", error);
    }

}
fetchCountries();

function displayCountries(countryList) {
    // let displayData = {};
    for (let i = 0; i < countryList.length; i++) {

        displayData = countryList[i];

        // Create a country card
        const countryCard = document.createElement("article");
        countryCard.classList.add("country-card");

        //Creating the image element
        const countryFlag = document.createElement("img");


        //Assigning the flag URL
        countryFlag.src = countryList[i].flags.svg;
        countryFlag.alt = `Flag of ${countryList[i].name}`;


        //Add the Flag to the country card
        countryCard.appendChild(countryFlag);


        //Display the country name
        const countryName = document.createElement("p");
        countryName.textContent = countryList[i].name;

        countryCard.appendChild(document.createTextNode(countryList[i].name));

        const population = document.createElement("p");
        population.textContent = countryList[i].population;
        countryCard.appendChild(population);


        const region = document.createElement("p");
        region.textContent = countryList[i].region;
        countryCard.appendChild(region);


        const capital = document.createElement("p");
        capital.textContent = countryList[i].capital;
        countryCard.appendChild(capital);


        //Add the country name to the card 
        display.appendChild(countryName);

        //Add the completed card to the display container
        display.appendChild(countryCard);


    }
}


function search(countryName) {
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name === countryName) {
            return countries[i];
        }
    }
}



function regionFilter(region) {
    let resultList = [];
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].region === region) {
            resultList.push(countries[i]);

        }
    }
    return resultList;
}




// const countries =[
//     {
//         name: string;
//         population: number;
//         region: string;
//         capital: string;
//     }
// ];



