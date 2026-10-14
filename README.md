
REST Countries Project - My Progress ( 09/10/26)

1. Understood the project requirements and the features I needed to build.

2. Explored the existing HTML and CSS files to understand the project structure.

3. Decided to use the local `data.json` file first instead of connecting to the live API.

4. Used `fetch()` to load the country data and stored it in a JavaScript array.

5. Created a function to display country information by creating HTML elements using JavaScript.

6. Displayed each country's flag, name, population, region, and capital.

7. Used CSS Grid to arrange the country cards and adjusted the flag sizes.

8. Fixed issues such as duplicate country names and a JavaScript error caused by using a variable outside its function.

9. Completed the homepage country grid. Next, I will implement the search functionality to find countries by name.

REST Countries Project - My Progress ( 10/10/26)

10.  Completed the search functionality , to find countries by name.

11. Completed the Filter Region functionality, to display the countries by region, selected from the dropdown list.

12. Completed the country details and border countries 

13.  Implemented the Theme toggle function

14.  i will be working on - Connecting the project to the live REST Countries API.

15. Added my local website address to the API's allowed origins.

16. Used a query parameter to pass the API key as an alternative to the Authorization header.

17. Tested the API and received Country data successfully.



##Challenge Faced: 
- API Authentication and CORS

I initially got a CORS error because my local website was not allowed to access the API. I fixed it by adding my local website address to the allowed origins in the API dashboard. Later, I encountered a warning related to the Authorization header, so I tried passing the API key through a query parameter in the URL. This helped me understand how API authentication and CORS work.


### Implementation Notes


# Implemented the Display Function

- Used `createElement()` to create country cards and their content dynamically.

- Used `appendChild()` to add country flags and information to each card.

- `Displayed country details` such as name, population, region, and capital.

- `Reused` the same function to display all countries or only the countries matching the search.


# Search Functionality

- Used `.includes()` to find countries whose names contain the search text.

- Converted country names and search text to `lowercase` to make the search case-insensitive.

- `Partial searches are supported`, so users don't need to type the entire country name.

- `Cleared the previous results` before displaying the matching countries.


# Filter by Region

- Created a custom dropdown with options for Africa, Americas, Asia, Europe, Oceania, and All Regions.

- Added click events to identify the selected region.

- Filtered the country cards based on the selected region.

# Displaying Country Details

- Added a click event to each country card.

- When a card is clicked, displayed a detailed view of that country.

- Included additional information such as subregion, native name, currencies, languages, and top-level domain.

- Added a Back button to return to the country grid.

# Displaying Border Countries

-Used each country's border codes to identify neighboring countries.

- Matched the border codes with the country data.

- Displayed the neighboring countries as buttons.

- Added click events so users can open another country's details by clicking its button.

# Implementing the Theme Switcher

- Added a button to switch between dark mode and light mode.

- Used JavaScript's classList.toggle() to add or remove the dark-mode class.

- Updated the button text when the theme changed.

- Used CSS variables and dark-mode styles to control the colors.

# Fixing Issues During Development

- Corrected an HTML element ID mismatch that caused JavaScript to return null.

- Checked the data structure to access the correct country properties.

- Used the browser console to identify errors and inspect search and filter results.

- Fixed the hidden display issue by ensuring the country grid became visible when needed.

- Corrected CSS variable names used by the dark-mode styles.



