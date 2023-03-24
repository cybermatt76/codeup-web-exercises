// $(document).ready(function() {
//     // Initialize map and set up event listener for double-clicking on the map
//     const map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-74.5, 40],
//         zoom: 9
//     });
//
//     map.on('dblclick', function(e) {
//         const longitude = e.lngLat.lng;
//         const latitude = e.lngLat.lat;
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//
//         $.getJSON(weatherUrl, function(weatherData) {
//             console.log(weatherData);
//             const weather = $("#weather");
//             weather.html(`
//                 <div class="h2-container">
//                     <h2>Weather at (${latitude}, ${longitude})</h2>
//                 </div>
//             `);
//             const forecast = weatherData.daily.slice(0, 5);
//             for (let i = 0; i < forecast.length; i++) {
//                 const date = new Date(forecast[i].dt * 1000);
//                 const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//                 const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                 const temperature = forecast[i].temp.day;
//                 const humidity = forecast[i].humidity;
//                 const windSpeed = forecast[i].wind_speed;
//                 const icon = forecast[i].weather[0].icon;
//                 const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                 weather.append(`
//                     <div class="weatherday">
//                         <h3>${dateFormatted}</h3>
//                         <img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
//                         <p>Temperature: ${temperature}&#176F</p>
//                         <p>Humidity: ${humidity}%</p>
//                         <p>Wind Speed: ${windSpeed} mph</p>
//                     </div>
//                 `);
//             }
//             const alerts = weatherData.alerts;
//             const alertBar = $("#alertBar");
//             alertBar.html('');
//             if (alerts) {
//                 alertBar.html(`
//                     <div class="alert alert-danger" role="alert">
//                         <p id="alert-message">${alerts[0].description}</p>
//                     </div>
//                 `);
//             }
//             new mapboxgl.Marker()
//                 .setLngLat([longitude, latitude])
//                 .addTo(map);
//             map.flyTo({
//                 center: [longitude, latitude],
//                 zoom: 10
//             });
//         });
//     });
// });
// mapboxgl.accessToken = MAPBOX_API_TOKEN;
// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-96, 37.8],
//     zoom: 3
// });
// $("#getWeather").click(function() {
//     const address = $("#address").val();
//     const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_API_TOKEN}`;
//     $.getJSON(geocodingUrl, function(geocodingData) {
//         console.log(geocodingData);
//         const latitude = geocodingData.features[0].center[1];
//         const longitude = geocodingData.features[0].center[0];
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//         $.getJSON(weatherUrl, function(weatherData) {
//             console.log(weatherData);
//             const weather = $("#weather");
//             const nearestCity = geocodingData.features[0].text;
//             weather.html(`
//                 <div class="h2-container">
//                     <h2>${nearestCity}</h2>
//                 </div>
//             `);
//             const forecast = weatherData.daily.slice(0, 5);
//             for (let i = 0; i < forecast.length; i++) {
//                 const date = new Date(forecast[i].dt * 1000);
//                 const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//                 const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                 const temperature = forecast[i].temp.day;
//                 const humidity = forecast[i].humidity;
//                 const windSpeed = forecast[i].wind_speed;
//                 const icon = forecast[i].weather[0].icon;
//                 const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                 weather.append(`
//                     <div class="weatherday">
//                         <h3>${dateFormatted}</h3>
//                         <img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
//                         <p>Temperature: ${temperature}&#176F</p>
//                         <p>Humidity: ${humidity}%</p>
//                         <p>Wind Speed: ${windSpeed} mph</p>
//                     </div>
//                 `);
//             }
//             const alerts = weatherData.alerts;
//             const alertBar = $("#alertBar");
//             alertBar.html('');
//             if (alerts) {
//                 alertBar.html(`
//                     <div class="alert alert-danger" role="alert">
//                         <p id="alert-message">${alerts[0].description}</p>
//                     </div>
//                 `);
//             }
//             map.flyTo({
//                 center: [longitude, latitude],
//                 zoom: 10
//             });
//             new mapboxgl.Marker()
//                 .setLngLat([longitude, latitude])
//                 .addTo(map);
//         });
//
//     });
// });
//
// map.on('dblclick', function(e) {
//     const longitude = e.lngLat.lng;
//     const latitude = e.lngLat.lat;
//     const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_API_TOKEN}`;
//     $.getJSON(geocodingUrl, function(geocodingData) {
//         console.log(geocodingData);
//         const nearestCity = geocodingData.features[0].text;
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//         $.getJSON(weatherUrl, function(weatherData) {
//             console.log(weatherData);
//             const weather = $("#weather");
//             weather.html(` <div> <h2>${nearestCity}</h2> </div> `);
//             const forecast = weatherData.daily.slice(0, 5);
//             for (let i = 0; i < forecast.length; i++) {
//                 const date = new Date(forecast[i].dt * 1000);
//                 const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//                 const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                 const temperature = forecast[i].temp.day;
//                 const humidity = forecast[i].humidity;
//                 const windSpeed = forecast[i].wind_speed;
//                 const icon = forecast[i].weather[0].icon;
//                 const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                 weather.append(`
//                     <div class="weatherday">
//                         <h3>${dateFormatted}</h3>
//                         <img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
//                             <p>Temperature: ${temperature}&#176F</p>
//                             <p>Humidity: ${humidity}%</p>
//                             <p>Wind Speed: ${windSpeed} mph</p>
//                         </div>
//             `);
//             }
//             const alerts = weatherData.alerts;
//             const alertBar = $("#alertBar");
//             alertBar.html('');
//             if (alerts) {
//                 alertBar.html(' <div class="alert alert-danger" role="alert"> <p id="alert-message">${alerts[0].description}</p> </div> ');
//             }
//             map.flyTo({
//                 center: [longitude, latitude],
//                     zoom: 10
//             });
//             new mapboxgl.Marker()
//             .setLngLat([longitude, latitude])
//             .addTo(map);
//             });
//             });
//             });
