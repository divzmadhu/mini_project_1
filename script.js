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
const regionInput = document.getElementById("region-dropdown");
const regionOptions = document.querySelectorAll("#region-dropdown li");
const countryDetails = document.getElementById("country-details");
// const backButton = document.getElementById("back-button");

let countries = [];

async function fetchCountries() {

    try {
        const response = await fetch("./rest-countries-api-with-color-theme-switcher-master/data.json");
        countries = await response.json();

        // let resultRegionFilter = regionFilter("Europe");  //test call

        //console.log(resultRegionFilter);   //test call

        // let resultSearch = search("Albania");    // test call

        //console.log("The searched country inforamation is ", resultSearch);   //test call


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

    display.innerHTML = "";

    // console.log("Displaying countries:", countryList.length);

    for (let i = 0; i < countryList.length; i++) {

        // displayData = countryList[i];

        // Create a country card
        const countryCard = document.createElement("article");
        countryCard.classList.add("country-card");

        // For country card's click event
        // countryCard.addEventListener("click", function () {
        //     display.hidden = true;
        //     countryDetails.hidden = false;

        //     console.log(countryList[i]);
        // });

        // countryCard.addEventListener("click", function () {
        //     console.log("Country card clicked");
        //     console.log("Display element:", display);
        //     console.log("Country details element:", countryDetails);

        //     display.hidden = true;
        //     countryDetails.hidden = false;

        //     console.log(countryList[i]);
        // });
        countryCard.addEventListener("click", function () {
            display.hidden = true;
            countryDetails.hidden = false;

            // const country = countryList[i];
            // countryDetails.appendChild(subregion);
            // countryDetails.appendChild(nativeName);
            // countryDetails.appendChild(domain);
            // countryDetails.appendChild(currencies);
            // countryDetails.appendChild(languages);

            const country = countryList[i];

            // Create the Back button
            const backButton = document.createElement("button");
            backButton.textContent = "← Back";

            // Create the country name
            const countryName = document.createElement("h2");
            countryName.textContent = country.name;

            // Create the flag
            const flag = document.createElement("img");
            flag.src = country.flags.svg;
            flag.alt = "Flag of " + country.name;

            // Create the population
            const population = document.createElement("p");
            population.textContent = "Population: " + country.population;

            // Create the region
            const region = document.createElement("p");
            region.textContent = "Region: " + country.region;

            // Create the capital
            const capital = document.createElement("p");
            capital.textContent = "Capital: " + country.capital;

            // Create the subregion
            const subregion = document.createElement("p");
            subregion.textContent = "Sub Region: " + country.subregion;
            // countryDetails.appendChild(subregion);

            // Create the native name
            const nativeName = document.createElement("p");
            nativeName.textContent = "Native Name: " + country.nativeName;

            // Create the top-level domain
            const domain = document.createElement("p");
            domain.textContent = "Top Level Domain: " + country.topLevelDomain;

            // Create the currencies
            const currencies = document.createElement("p");
            currencies.textContent = "Currencies: " + country.currencies;

            // Create the languages
            const languages = document.createElement("p");
            languages.textContent = "Languages: " + country.languages;

            // Clear previous details
            countryDetails.innerHTML = "";

            // Add the elements to the page
            countryDetails.appendChild(backButton);
            countryDetails.appendChild(countryName);
            countryDetails.appendChild(flag);
            countryDetails.appendChild(population);
            countryDetails.appendChild(region);
            countryDetails.appendChild(capital);

            countryDetails.appendChild(subregion);
            countryDetails.appendChild(nativeName);
            countryDetails.appendChild(domain);
            countryDetails.appendChild(currencies);
            countryDetails.appendChild(languages);

            // Make the Back button work
            backButton.addEventListener("click", function () {
                countryDetails.hidden = true;
                display.hidden = false;
            });
        });

        //Creating the image element
        const countryFlag = document.createElement("img");


        //Assigning the flag URL
        countryFlag.src = countryList[i].flags.svg;
        countryFlag.alt = `Flag of ${countryList[i].name}`;


        //Add the Flag to the country card
        countryCard.appendChild(countryFlag);


        //Display the country name
        const countryName = document.createElement("h3");

        countryName.textContent = countryList[i].name;
        countryCard.appendChild(countryName);

        // countryCard.appendChild(document.createTextNode(countryList[i].name));

        const population = document.createElement("p");
        const populationLabel = document.createElement("strong");
        populationLabel.textContent = "Population: ";

        population.appendChild(populationLabel);
        population.appendChild(document.createTextNode(countryList[i].population));

        // population.textContent = countryList[i].population;
        countryCard.appendChild(population);


        const region = document.createElement("p");
        const regionLabel = document.createElement("strong");
        regionLabel.textContent = "Region: ";

        region.appendChild(regionLabel);
        region.appendChild(document.createTextNode(countryList[i].region));

        //region.textContent = countryList[i].region;
        countryCard.appendChild(region);


        const capital = document.createElement("p");
        const capitalLabel = document.createElement("strong");
        capitalLabel.textContent = "Capital: ";

        capital.appendChild(capitalLabel);
        capital.appendChild(document.createTextNode(countryList[i].capital));

        // capital.textContent = countryList[i].capital;
        countryCard.appendChild(capital);






        //Add the completed card to the display container
        display.appendChild(countryCard);


    }
}

// backButton.addEventListener("click", function () {
//     countryDetails.hidden = true;
//     display.hidden = false;
// });

// test function
// function search(countryName) {            
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].name === countryName) {
//             return countries[i];
//         }
//     }
// }

searchInput.addEventListener("input", function () {
    {
        search();
    }
});
function search() {
    let searchList = [];
    const query = searchInput.value.trim().toLowerCase();
    console.log("Searching for :", query);

    //if the input is empty, stop or clear the result
    if (query === "") {
        displayCountries(countries);
        return;
    }
    for (let i = 0; i < countries.length; i++) {
        const countryName = countries[i].name.toLowerCase();
        if (countryName.includes(query)) {
            //displayCountries(countries[i]);
            //break;
            searchList.push(countries[i]);
        }
    }
    display.innerHTML = "";
    //return searchList;
    console.log(searchList)
    displayCountries(searchList);
}



// function regionFilter(region) {    // Test Function
//     let resultList = [];
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].region === region) {
//             resultList.push(countries[i]);

//         }
//     }
//     return resultList;
// }

regionOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        const selectedRegion = option.dataset.value;
        console.log(selectedRegion);
        regionFilter(selectedRegion);
    });

});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", function () {
    dropdownMenu.hidden = !dropdownMenu.hidden;
});


// regionInput.addEventListener("input",function(){
// {
//     regionFilter();
// }
// });
function regionFilter(region) {
    let regionList = [];
    if (region === "all") {
        displayCountries(countries);
        return;
    }
    // const query = regionInput.value.trim().toLowerCase();
    // console.log("Filter region for :", query);

    //if the input is empty, stop or clear the result
    // if (query === "") {
    //     return;
    // }
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].region === region) {
            regionList.push(countries[i]);
        }
    }
    display.innerHTML = "";

    console.log(regionList)
    displayCountries(regionList);
}


// const countries =[
//     {
//         name: string;
//         population: number;
//         region: string;
//         capital: string;
//     }
// ];



