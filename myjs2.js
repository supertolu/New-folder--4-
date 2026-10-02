const apiKey = "b5b203702d5244ea93d230136260704";

$("#fetch_weather").click(function () {

    const city = $("#city_name").val().trim();
    const days = $("#forecast_days").val();

    if (city === "") {
        $("#output_para").text("Please enter a city name.");
        return;
    }

    fetchWeather(city, days);
});

function fetchWeather(city, days) {

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`;

    $.get(url)

        .done(function (data) {

            /* RAW API DATA FOR CONSOLE */
            console.log("FULL WEATHER DATA:", data);

            $("#output_para").text("");

            renderCurrentWeather(data);

            renderForecast(data.forecast.forecastday);

            updateCarousel(data.forecast.forecastday);

        })

        .fail(function () {

            $("#output_para").text("City not found. Please try again.");

        });
}


// 7 Metrics to Display:
function renderCurrentWeather(data) {

    $("#current_weather").html(`
        <div class="weather-card">
            <h2>${data.location.name}, ${data.location.country}</h2>
            <h3>${data.current.condition.text}</h3>

            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Feels Like:</strong> ${data.current.feelslike_c}°C</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
            <p><strong>Pressure:</strong> ${data.current.pressure_mb} mb</p>
            <p><strong>Visibility:</strong> ${data.current.vis_km} km</p>
            <p><strong>UV Index:</strong> ${data.current.uv}</p>
        </div>
    `);
}


// 8 Metrics + Astro Data for Each Forecast Day

function renderForecast(forecastDays) {

    $("#forecast_container").empty();

    forecastDays.forEach(function (day) {

        console.log("FORECAST DAY:", day);

        $("#forecast_container").append(`
            <div class="weather-card">
                <h3>${day.date}</h3>

                <p><strong>Temperature:</strong> ${day.day.avgtemp_c}°C</p>
                <p><strong>Condition:</strong> ${day.day.condition.text}</p>
                <p><strong>Humidity:</strong> ${day.day.avghumidity}%</p>
                <p><strong>Wind:</strong> ${day.day.maxwind_kph} kph</p>
                <p><strong>UV:</strong> ${day.day.uv}</p>
                <p><strong>Rain Chance:</strong> ${day.day.daily_chance_of_rain}%</p>
                <p><strong>Sunrise:</strong> ${day.astro.sunrise}</p>
                <p><strong>Sunset:</strong> ${day.astro.sunset}</p>
            </div>
        `);

    });
}


// OWL CAROUSEL WEATHER HIGHLIGHTS
function updateCarousel(forecastDays) {

    const carousel = $("#weather_carousel");

    carousel.trigger('destroy.owl.carousel');
    carousel.html('');

    forecastDays.forEach(function (day) {

        carousel.append(`
            <div class="item">
                <h3>${day.date}</h3>
                <p>${day.day.condition.text}</p>
                <p>${day.day.avgtemp_c}°C</p>
            </div>
        `);

    });

    carousel.owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 3,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
}


// temperature converter

$("#convert_temp").click(function () {

    const celsius = parseFloat($("#temp_input").val());

    if (isNaN(celsius)) {
        $("#temp_output").text("Enter a valid number.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;

    $("#temp_output").text(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
});



// Jquery methods

$("#fetch_weather").click(function(){

    let my_api = "";
    let the_city = $("#city_name").val();
    let weather_url = "https://api.weatherapi.com/v1/forecast.json?key=" + my_api + "&q=" + the_city + "&days=3&aqi=no";

    $.get(weather_url, function(data, message, xhr){
        console.log(data.current);
        console.log(data.forecast.forecastday[0].day.mintemp_c);
        console.log(data.forecast.forecastday[1].day.mintemp_c);
        console.log(data.forecast.forecastday[2].day.mintemp_c);
        console.log(data.location);
        $("#output_para").text("The current weather in " + the_city + " is - " + data.current.temp_c + "c");
    });

});