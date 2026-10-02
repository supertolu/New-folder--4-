# Weather Forecast Web App

A simple front-end weather dashboard that lets users search for a city, view the current weather, and browse a multi-day forecast.

## Project Overview

This project is a static web application built with:
- HTML
- JavaScript
- jQuery
- WeatherAPI
- Owl Carousel for the forecast slider

It includes:
- City-based weather lookup
- Current weather details
- Multi-day forecast cards
- Weather highlight carousel
- Temperature conversion between Celsius and Fahrenheit

## Files in this project

- `02.htm` — main HTML page for the weather app
- `myjs2.js` — JavaScript logic for fetching and rendering weather data
- `02_files/` — page assets and scripts used by the HTML page
- `htmlassigment.zip` — archived assignment content

## Features

- Search weather by city name
- Select the number of forecast days
- Display temperature, humidity, wind, pressure, visibility, UV index, and more
- Show sunrise and sunset details for each forecast day
- Update the dashboard dynamically without reloading the page
- Convert Celsius values to Fahrenheit

## How to run

1. Open `02.htm` in a web browser.
2. Enter a city name.
3. Choose the number of forecast days.
4. Click the weather button to fetch and display the forecast.

## API setup

The app uses the WeatherAPI service. The script contains an API key in `myjs2.js` and calls the WeatherAPI forecast endpoint.

If the key is invalid, expired, or limited, replace it with a valid API key from WeatherAPI to continue using the app.

## Notes

This is a browser-based project and does not require a backend or database setup. It works best when opened in a modern browser with internet access.

## License

This project is provided as a learning/demo assignment and does not include a formal license file.
