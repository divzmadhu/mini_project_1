
# 🌍 REST Countries Project — Development & Progress Documentation

Welcome to the official documentation and progress log for the **REST Countries Project**. This document outlines the project overview, core features, technical implementation details, challenges faced, and deployment insights gained throughout development.

---

## 1. Project Overview

The REST Countries Project is a fully responsive web application that fetches global country data and displays detailed statistics, regional classifications, interactive border links, and a seamless light/dark mode experience.

---

## 2. Core Features & Implementation

### 2.1 Homepage & Data Integration
1. **Data Source Transition:** Initially built using a local `data.json` file for fast prototyping, then successfully integrated with the live REST Countries API.
2. **Pagination & Batch Fetching:** Handled API limits by implementing a `while` loop with pagination to fetch all **254 country entries** in batches of 100, combining them into a unified array (`allCountryObjects`).
3. **Dynamic DOM Rendering:** Utilized `createElement()` and `appendChild()` to build country cards dynamically, displaying each country's **flag, name, population, region, and capital**.
4. **Local Backups:** Saved retrieved API data into `api-countries-backup.json` to ensure robust local development and fallback support.

### 2.2 Search & Filtering
1. **Case-Insensitive Search:** Implemented instant search using JavaScript's `.includes()` method with lowercase conversion, supporting **partial matching** so users don't need to type full country names.
2. **State Management:** Automatically clears search inputs and resets state appropriately on page reloads to maintain consistency between the search bar and the displayed grid.
3. **Region Filtering:** Created a custom dropdown for Africa, Americas, Asia, Europe, and Oceania (plus an "All Regions" option).
4. **Visual Region Highlight:** Added distinct styling to highlight the active region in the dropdown (supporting both **light and dark modes**) and cleared previous selections dynamically.

### 2.3 Country Details & Border Navigation
1. **Detailed View:** Clicking any country card opens a detailed page featuring native names, subregions, top-level domains, currencies, and languages.
2. **Border Countries:** Parsed the `borders` property to match neighboring country codes and render interactive buttons. Clicking a border button instantly opens that neighboring country's details.

### 2.4 UI/UX, Accessibility & Responsive Design
1. **Theme Switcher:** Integrated a toggle for **Dark and Light Modes** using JavaScript's `classList.toggle()` combined with CSS variables for smooth transitions.
2. **Responsive Layouts:** Implemented CSS media queries with breakpoints tailored for desktop (4 columns), tablet (2 columns), and mobile (1 column) screens.
3. **Accessibility (a11y):** Added alt text to flags, keyboard navigation support for cards, visible focus outlines for interactive elements, and appropriate ARIA attributes for the region dropdown.

---

## 3. Challenges Faced & Technical Solutions

### 3.1 API Authentication & CORS
* **Challenge:** Encountered initial CORS errors when accessing the API from a local development environment and received warnings regarding the Authorization header.
* **Solution:** Configured allowed origins in the API dashboard and utilized URL query parameters as an alternative method for passing credentials, deepening understanding of web security and CORS policies.

### 3.2 API Pagination & Missing Data
* **Challenge:** Initial fetches were capped at 100 entries, causing border relationships (like Canada pointing to the USA) to break because the USA wasn't loaded in memory.
* **Solution:** Implemented batch pagination with a `while` loop to capture all 250+ records successfully into `allCountryObjects`.
* **Edge Case Note:** Identified that flag images for *South Ossetia, Abkhazia, Somaliland, and Northern Cyprus* returned empty URLs from the API. Verified via `.filter()` that these records weren't present in the baseline dataset and documented them for future edge-case handling.

### 3.3 Vercel Deployment & Serverless Routing
* **Challenge:** Encountered a `404 error` on the deployed API endpoint because Vercel could not locate the serverless API route.
* **Solution:** Corrected the project folder structure by moving the nested `api` folder to the repository root so Vercel could properly detect serverless functions.

---

## 4. Development Timeline & Progress Log

### 4.1 Phase 1 — Project Foundation (09/10/26)
1. Understood project requirements and planned key application features.
2. Analyzed existing HTML and CSS structure.
3. Used local `data.json` with `fetch()` to populate country data.
4. Rendered cards dynamically with JavaScript DOM manipulation.
5. Styled grid layout with CSS Grid and adjusted flag aspect ratios.
6. Resolved scoping issues and duplicate name rendering bugs.

### 4.2 Phase 2 — Interactive Features & API Integration (10/10/26)
1. Built search functionality by country name.
2. Built region dropdown filter with light/dark visual highlights.
3. Built country detail view and linked neighboring border countries.
4. Implemented theme toggle using CSS custom properties.
5. Integrated live API using batch pagination and allowed origins config.
6. Handled search reset on reload and accessibility focus outlines.

### 4.3 Phase 3 — Refinement & Deployment
1. Added full keyboard navigation and accessible focus management.
2. Refined mobile and tablet media query breakpoints.
3. Restructured repository layout for Vercel serverless deployment.
4. Deployed and verified API route functionality in production.
5. Live Demo:[View Live Demo](https://miniproject1-azure.vercel.app)

---

## 5. Key Learning Outcomes

* Mastery of dynamic JavaScript DOM manipulation (`createElement`, `appendChild`).
* Practical experience working with asynchronous data fetching, pagination logic, and array manipulation (`.map()`, `.filter()`, `.includes()`).
* Understanding of Web API authentication, CORS headers, and serverless folder conventions on Vercel.
* Hands-on implementation of responsive CSS Grid, CSS Variables for theming, and web accessibility standards.

