//
// $(document).ready(function() {
//     const defaultCity = "San Antonio, Texas";
//     const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${defaultCity}.json?access_token=${MAPBOX_API_TOKEN}`;
//
//     $("#getWeather").click(function () {
//         const address = $("#address").val() || defaultCity;
//
//         $.getJSON(geocodingUrl, function (geocodingData) {
//             console.log(geocodingData);
//             const latitude = geocodingData.features[0].center[1];
//             const longitude = geocodingData.features[0].center[0];
//             const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//
//             $.getJSON(weatherUrl, function (weatherData) {
//                 console.log(weatherData);
//                 const weather = $("#weather");
//                 weather.html(`
//                     <div class="h2-container">
//                         <h2>${address}</h2>
//                     </div>
//                 `);
//
//
//                 const forecast = weatherData.daily.slice(0, 5);
//
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
//                         <div class="weatherday">
//                             <h3>${dateFormatted}</h3>
//                             <img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
//                             <p>Temperature: ${temperature}&#176F</p>
//                             <p>Humidity: ${humidity}%</p>
//                             <p>Wind Speed: ${windSpeed} mph</p>
//                         </div>
//                     `);
//                 }
//                 const alerts = weatherData.alerts;
//                 const alertBar = $("#alertBar");
//                 alertBar.html('');
//                 if (alerts) {
//                     alertBar.html(`
//                         <div class="alert alert-danger" role="alert">
//                             <p id="alert-message">${alerts[0].description}</p>
//                         </div>
//                     `);
//                 }
//                 map.flyTo({
//                     center: [longitude, latitude],
//                     zoom: 9
//                 });
//
//                 // Add a marker to the map
//                 let marker = new mapboxgl.Marker({
//                     draggable: true
//                 })
//                     .setLngLat([longitude, latitude])
//                     .addTo(map);
//
//                 // Listen for the "dragend" event on the marker
//                 marker.on('dragend',
//                     function () {
//                         const lngLat = marker.getLngLat();
//                         const newLongitude = lngLat.lng;
//                         const newLatitude = lngLat.lat;
//
//                         const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${newLongitude},${newLatitude}.json?access_token=${MAPBOX_API_TOKEN}`;
//                         $.getJSON(geocodingUrl, function (geocodingData) {
//                             console.log(geocodingData);
//                             const address = geocodingData.features[0].place_name;
//                             const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${newLatitude}&lon=${newLongitude}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
//                             $.getJSON(weatherUrl, function (weatherData) {
//                                 console.log(weatherData);
//                                 const weather = $("#weather");
//                                 weather.html(` <div class="h2-container">
//                                                 <h2>${address}</h2>
//                                             </div>
//                                            `);
//                                 const forecast = weatherData.daily.slice(0, 5);
//                                 for (let i = 0; i < forecast.length; i++) {
//                                     const date = new Date(forecast[i].dt * 1000);
//                                     const dateOptions = {
//                                         weekday: 'long',
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     };
//                                     const dateFormatted = date.toLocaleDateString('en-US', dateOptions);
//                                     const temperature = forecast[i].temp.day;
//                                     const humidity = forecast[i].humidity;
//                                     const windSpeed = forecast[i].wind_speed;
//                                     const icon = forecast[i].weather[0].icon;
//                                     const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
//                                     weather.append(`
//                                         <div class="weatherday">
//                                             <h3>${dateFormatted}</h3>
//                                             <img src="${iconUrl}" alt="${forecast[i].weather[0].description}">
//                                             <p>Temperature: ${temperature}&#176F</p>
//                                             <p>Humidity: ${humidity}%</p>
//                                             <p>Wind Speed: ${windSpeed} mph</p>
//                                         </div>
//                                         `);
//                                 }
//                                 const alerts = weatherData.alerts;
//                                 const alertBar = $("#alertBar");
//                                 alertBar.html('');
//                                 if (alerts) {
//                                     alertBar.html(`
//                                         <div class="alert alert-danger" role="alert">
//                                             <p id="alert-message">${alerts[0].description}</p>
//                                         </div>
//                          `);
//                                 }
//                                 map.flyTo({
//                                     center: [longitude, latitude],
//                                     zoom: 10
//                                 });
//                                 new mapboxgl.Marker()
//                                     .setLngLat([longitude, latitude])
//                                     .addTo(map);
//                             });
//                         });
//                     });

