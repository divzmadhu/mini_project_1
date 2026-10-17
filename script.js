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


let currentRegion = "all";     // To handle , when two filters selected


const display = document.getElementById("display-container-on-load");
const searchInput = document.getElementById("search-input");
const regionInput = document.getElementById("region-dropdown");
const regionOptions = document.querySelectorAll("#region-dropdown li");
const countryDetails = document.getElementById("country-details");
const themeToggle = document.getElementById("theme-toggle");
const themeText = themeToggle.querySelector("span");


let countries = [];



async function fetchCountries() {

    try {

        const allCountryObjects = [];
        let offset = 0;
        let hasMore = true;

        while (hasMore) {


            const response = await fetch(
                `/api/countries?offset=${offset}`
            );

            const data = await response.json();

            allCountryObjects.push(...data.data.objects);

            hasMore = data.data.meta.more;
            offset += 100;
        }

        console.log("Total countries fetched:", allCountryObjects.length);


        countries = allCountryObjects.map(function (country) {

            return {
                name: country.names.common,
                alpha3Code: country.codes.alpha_3,
                flags: {

                    svg: country.flag?.url_svg || ""
                },
                population: country.population,
                region: country.region,
                capital: country.capitals?.[0]?.name || "N/A",
                nativeName: country.names.native
                    ? Object.values(country.names.native)[0]?.common || "N/A"
                    : "N/A",
                subregion: country.subregion || "N/A",
                topLevelDomain: country.tlds || [],
                currencies: country.currencies || [],
                languages: country.languages || [],
                borders: country.borders || []
            };
        });



        console.log("Countries loaded :", countries.length);

        // Create a JSON string from the fetched country data
        const jsonData = JSON.stringify(countries, null, 2);

        console.log("JSON data size:", jsonData.length);
        console.log("Countries in JSON:", JSON.parse(jsonData).length);



        console.log(
            "South Ossetia:",
            countries.find(function (country) {
                return country.name.toLowerCase().includes("south ossetia");
            })
        );

        console.log(
            "South Ossetia flag URL:",
            countries.find(function (country) {
                return country.name.toLowerCase().includes("south ossetia");
            })?.flags.svg
        );

        searchInput.value = "";
        displayCountries(countries);


    }
    catch (error) {
        console.error("Unable to load countries: ", error);
    }

}
fetchCountries();

//loadCountriesFromJSON();


// Load country data from the local JSON file to avoid repeated API calls during development.
async function loadCountriesFromJSON() {
    try {
        const response = await fetch(
            "./rest-countries-api-with-color-theme-switcher-master/data_backup.json"
        );

        if (!response.ok) {
            throw new Error("Failed to load local country data");
        }

        countries = await response.json();

        console.log("Countries loaded from local JSON:", countries.length);

        displayCountries(countries);

    } catch (error) {
        console.error("Unable to load local country data:", error);
    }
}



function displayCountries(countryList) {

    display.innerHTML = "";



    for (let i = 0; i < countryList.length; i++) {


        const countryCard = document.createElement("article");
        countryCard.classList.add("country-card");

        countryCard.setAttribute("tabindex", "0");
        countryCard.setAttribute("role", "button");
        countryCard.setAttribute("aria-label", `View details for ${countryList[i].name}`);



        countryCard.addEventListener("click", function () {
            searchInput.value = "";
            showCountryDetails(countryList[i]);
        });

        // Accessibility: Allow keyboard navigation to trigger the same action as a click

        countryCard.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                searchInput.value = "";
                showCountryDetails(countryList[i]);
            }
        });
        //Creating the image element
        const countryFlag = document.createElement("img");




        countryFlag.src = countryList[i].flags.svg;
        countryFlag.alt = `Flag of ${countryList[i].name}`;

        countryFlag.addEventListener("error", function () {
            countryFlag.style.display = "none";
        });


        //Add the Flag to the country card
        countryCard.appendChild(countryFlag);


        //Display the country name
        const countryName = document.createElement("h3");

        countryName.textContent = countryList[i].name;
        countryCard.appendChild(countryName);



        const population = document.createElement("p");
        const populationLabel = document.createElement("strong");
        populationLabel.textContent = "Population: ";

        population.appendChild(populationLabel);
        population.appendChild(document.createTextNode(countryList[i].population));


        countryCard.appendChild(population);


        const region = document.createElement("p");
        const regionLabel = document.createElement("strong");
        regionLabel.textContent = "Region: ";

        region.appendChild(regionLabel);
        region.appendChild(document.createTextNode(countryList[i].region));


        countryCard.appendChild(region);


        const capital = document.createElement("p");
        const capitalLabel = document.createElement("strong");
        capitalLabel.textContent = "Capital: ";

        capital.appendChild(capitalLabel);
        capital.appendChild(document.createTextNode(countryList[i].capital));

        countryCard.appendChild(capital);

        //Add the completed card to the display container
        display.appendChild(countryCard);


    }
}


function displayBorderCountries(country) {

    // Create a heading
    const borderHeading = document.createElement("h3");
    borderHeading.textContent = "Border Countries:";

    countryDetails.appendChild(borderHeading);

    // Check whether the country has any borders
    if (!country.borders || country.borders.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No bordering countries.";
        countryDetails.appendChild(message);
        return;
    }

    // Go through each border country code
    for (let i = 0; i < country.borders.length; i++) {
        const borderCode = country.borders[i];

        // Find the matching country
        const borderCountry = countries.find(function (item) {
            return item.alpha3Code === borderCode;
        });

        // Create a button if the country is found
        if (borderCountry) {
            const borderButton = document.createElement("button");
            borderButton.classList.add("border-country");
            borderButton.textContent = borderCountry.name;

            borderButton.addEventListener("click", function () {
                showCountryDetails(borderCountry);
            });

            countryDetails.appendChild(borderButton);
        }
    }
}




function showCountryDetails(country) {

    display.hidden = true;
    countryDetails.hidden = false;

    // Create the Back button
    const backButton = document.createElement("button");
    backButton.textContent = "← Back";

    // Create the country name
    const countryName = document.createElement("h2");
    countryName.textContent = country.name;

    // Create the flag
    const flag = document.createElement("img");
    // flag.src = country.flags.svg;
    flag.src = country.flags.svg;
    flag.addEventListener("error", function () {
        flag.style.display = "none";
    });

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

    // Create the native name
    const nativeName = document.createElement("p");
    nativeName.textContent = "Native Name: " + country.nativeName;

    // Create the top-level domain
    const domain = document.createElement("p");
    domain.textContent = "Top Level Domain: " + country.topLevelDomain;

    // Create the currencies
    const currencies = document.createElement("p");
    currencies.textContent = "Currencies: " + country.currencies.map(function (currency) {
        return currency.name;
    }).join(", ");

    // Create the languages
    const languages = document.createElement("p");
    languages.textContent = "Languages: " + country.languages.map(function (language) {
        return language.name;
    }).join(", ");

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

    // Display border countries
    displayBorderCountries(country);

    // Make the Back button work
    backButton.addEventListener("click", function () {
        searchInput.value = "";
        countryDetails.hidden = true;
        display.hidden = false;
        displayCountries(countries);
    });
}



searchInput.addEventListener("input", function () {
    {
        search();
    }
});
function search() {
    let searchList = [];
    const query = searchInput.value.trim().toLowerCase();
    console.log("Searching for :", query);


    for (let i = 0; i < countries.length; i++) {
        const countryName = countries[i].name.toLowerCase();

        if (
            (currentRegion === "all" || countries[i].region === currentRegion) &&
            countryName.includes(query)
        ) {

            searchList.push(countries[i]);
        }
    }
    display.innerHTML = "";

    console.log(searchList)
    displayCountries(searchList);
}



regionOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        const selectedRegion = option.dataset.value;


        // Remove the highlight from all regions
        regionOptions.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Highlight the currently selected region
        option.classList.add("selected");



        searchInput.value = "";
        currentRegion = selectedRegion;
        console.log(selectedRegion);
        regionFilter(selectedRegion);
    });

});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");


// accessibility: Update aria-expanded attribute based on the dropdown state

dropdownToggle.addEventListener("click", function () {
    dropdownMenu.hidden = !dropdownMenu.hidden;
    dropdownToggle.setAttribute("aria-expanded", !dropdownMenu.hidden);
});




function regionFilter(region) {

    let regionList = [];
    display.hidden = false;
    countryDetails.hidden = true;    // Hide previously opened country details
    if (region === "all") {
        displayCountries(countries);
        return;
    }

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].region === region) {
            regionList.push(countries[i]);
        }
    }
    display.innerHTML = "";


    displayCountries(regionList);
}


themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeText.textContent = "Light Mode";
    } else {
        themeText.textContent = "Dark Mode";
    }
});
