
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

