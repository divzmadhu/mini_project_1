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

  • Homepage Country Grid
    - Display all countries fetched from the REST Countries API on load.

  • Search Functionality
    - Real-time search/filtering of countries using an input field.

  • Region Filtering
    - Filter the list of displayed countries by geographical region.

  • Detailed Country View
    - Navigate to a separate page/view showing in-depth country details upon click.

  • Interactive Border Navigation
    - Clickable border country tags on the detail page to jump between countries.

  • Theme Toggle (Optional)
    - Toggle color scheme seamlessly between Light and Dark modes.

=============================================================================
*/



const displayInput = document.getElementById("display-input");
const searchInput = document.getElementById("search-input");

let countries =[];

async function fetchCountries() {
    try{
        const response = await fetch("./rest-countries-api-with-color-theme-switcher-master/data.json");

        countries = await response.json();

        console.log(countries);
    }
    catch (error)
    {
       console.error("Unable to load countries: ",error);
    }

}
fetchCountries();

// const countries =[
//     {
//         name: string;
//         population: number;
//         region: string;
//         capital: string;
//     }
// ];



