// $(document).ready(function() {
//     const DEFAULT_LOCATION = "San Antonio";
//     const MAPBOX_API_TOKEN = "<YOUR_MAPBOX_API_TOKEN>";
//     const OPEN_WEATHER_APPID = "<YOUR_OPEN_WEATHER_APPID>";
//     let map;
//     let marker;
//
//     // Initialize Mapbox map and marker
//     function initMap() {
//         mapboxgl.accessToken = MAPBOX_API_TOKEN;
//         map = new mapboxgl.Map({
//             container: "map",
//             style: "mapbox://styles/mapbox/streets-v11",
//             center: [-98.4916, 29.4252],
//             zoom: 10
//         });
//
//         marker = new mapboxgl.Marker({
//             draggable: true
//         })
//             .setLngLat([-98.4916, 29.4252])
//             .addTo(map);
//
//         marker.on("dragend", function() {
//             const lngLat = marker.getLngLat();
//             const longitude = lngLat.lng;
//             const latitude = lngLat.lat;
//             const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//             getWeather(weatherUrl, longitude, latitude);
//         });
//     }
//
//     function getWeather(weatherUrl, longitude, latitude) {
//         $.getJSON(weatherUrl, function(weatherData) {
//             console.log(weatherData);
//             // puts the name of the town in the H2
//             const weather = $("#weather");
//             weather.html(`
//                 <div class="h2-container">
//                     <h2>${weatherData.timezone}</h2>
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
//                 //populates the 5 day forecast
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
//         });
//     }
//
//     searchWeatherForSanAntonio();
//     $(document).ready(function () {
//         $("#getWeather").click(function () {
//             const address = $("#address").val();
//             const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_API_TOKEN}`;
//             $.getJSON(geocodingUrl, function (geocodingData) {
//                 console.log(geocodingData);
//                 const latitude = geocodingData.features[0].center[1];
//                 const longitude = geocodingData.features[0].center[0];
//                 const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//                 $.getJSON(weatherUrl, function (weatherData) {
//                     console.log(weatherData);
//                     // puts the name of the town in the H2
//                     const weather = $("#weather");
//                     weather.html(`
// 							<div class="h2-container">
// 							    <h2>${address}</h2>
// 							</div>
// 						`);
//                     const forecast = weatherData.daily.slice(0, 5);
//                     for (let i = 0; i < forecast.length; i++) {
//                         const date = new Date(forecast[i].dt * 1000);
//                         const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//                         const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                         const temperature = forecast[i].temp.day;
//                         const humidity = forecast[i].humidity;
//                         const windSpeed = forecast[i].wind_speed;
//                         const icon = forecast[i].weather[0].icon;
//                         const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                         //populates the 5 day forecast
//                         weather.append(`
// 									<div class="weatherday">
// 										<h3>${dateFormatted}</h3>
// 										<img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
// 										<p>Temperature: ${temperature}&#176F</p>
// 										<p>Humidity: ${humidity}%</p>
// 										<p>Wind Speed: ${windSpeed} mph</p>
// 									</div>
// 								`);
//                     }
//                     const alerts = weatherData.alerts;
//                     const alertBar = $("#alertBar");
//                     alertBar.html('');
//                     if (alerts) {
//                         alertBar.html(`
//                     <div class="alert alert-danger" role="alert">
//                         <p id="alert-message">${alerts[0].description}</p>
//                     </div>
//                 `);
//                     }
//                     map.flyTo({
//                         center: [longitude, latitude],
//                         zoom: 10
//                     });
//                     new mapboxgl.Marker()
//                         .setLngLat([longitude, latitude])
//                         .addTo(map);
//                 });
//
//             });
//         });
//         let marker = new mapboxgl.Marker({
//             draggable: true
//         })
//             .setLngLat([-98.4916, 29.4252])
//             .addTo(map);
//
//         // Get the marker's coordinates when it is moved
//         marker.on('dragend', function () {
//             let lngLat = marker.getLngLat();
//             console.log('Longitude:', lngLat.lng);
//             console.log('Latitude:', lngLat.lat);
//             const weatherUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//             $.getJSON(weatherUrl2, function (weatherData) {
//                 console.log(weatherData);
//                 const weather = $("#weather");
//                 weather.html(`
// 							<div class="h2-container">
// 							    <h2 class= "latlong-container">${lngLat.lat} Latitude, ${lngLat.lng} Longitude</h2>
// 							</div>
// 						`);
//                 const forecast = weatherData.daily.slice(0, 5);
//                 for (let i = 0; i < forecast.length; i++) {
//                     const date = new Date(forecast[i].dt * 1000);
//                     const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//                     const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                     const temperature = forecast[i].temp.day;
//                     const humidity = forecast[i].humidity;
//                     const windSpeed = forecast[i].wind_speed;
//                     const icon = forecast[i].weather[0].icon;
//                     const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                     weather.append(`
// 									<div class="weatherday">
// 										<h3>${dateFormatted}</h3>
// 										<img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
// 										<p>Temperature: ${temperature}&#176F</p>
// 										<p>Humidity: ${humidity}%</p>
// 										<p>Wind Speed: ${windSpeed} mph</p>
// 									</div>
// 								`);
//                 }
//                 const alerts = weatherData.alerts;
//                 const alertBar = $("#alertBar");
//                 alertBar.html('');
//                 if (alerts) {
//                     alertBar.html(`
//                     <div class="alert alert-danger" role="alert">
//                         <p id="alert-message">${alerts[0].description}</p>
//                     </div>
//                 `);
//                 }
//                 map.flyTo({
//                     center: [longitude, latitude],
//                     zoom: 10
//                 });
//                 new mapboxgl.Marker()
//                     .setLngLat([longitude, latitude])
//                     .addTo(map);
//             });
//
//         });
//     });
// })
//
// map.flyTo({
//                 center: [longitude, latitude],
//                 zoom: 10
//             });
//             new mapboxgl.Marker()
//                 .setLngLat([longitude, latitude])
//                 .addTo(map);
//         });
// });
//
// });

