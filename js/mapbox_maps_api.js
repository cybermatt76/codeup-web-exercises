document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.getElementById("setMarkerButton").addEventListener('click', event=>{
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});
// const brothersMarker = new mapboxgl.Marker()
//         .setLngLat([ -91.62061501923708, 42.32526452248411])
//         .addTo(map);
// const brothersPopup = new mapboxgl.Popup()
//         .setHTML('<p class="popup">Brothers Bar and Grill</p>' +
//                 '<video width="640" height="320" controls>\n' +
//                 '  <source src="/videos/brothers.mp4" type="video/mp4">\n' +
//                 '  Your browser does not support the video tag.\n' +
//                 '</video>');
// brothersMarker.setPopup(brothersPopup);
// const broadlandsMarker = new mapboxgl.Marker()
//         .setLngLat([-77.531940, 39.020590])
//         .addTo(map);
// const broadlandsPopup = new mapboxgl.Popup()
//         .setHTML('<p class="popup">Broadlands Sports Bar and Grill</p>' +
//                 '<video width="640" height="320" controls>\n' +
//                 '  <source src="/videos/broadlands.mp4" type="video/mp4">\n' +
//                 '  Your browser does not support the video tag.\n' +
//                 '</video>');
// broadlandsMarker.setPopup(broadlandsPopup);
// const willowcreekMarker = new mapboxgl.Marker()
//         .setLngLat([-77.51635388094994, 39.03263105692224])
//         .addTo(map);
// const willowcreekPopup = new mapboxgl.Popup()
//         .setHTML('<p class="popup">Clydes Willow Creek</p>' +
//                 '<video width="640" height="320" controls>\n' +
//                 '  <source src="/videos/Willow_Creek.mp4" type="video/mp4">\n' +
//                 '  Your browser does not support the video tag.\n' +
//                 '</video>');
// willowcreekMarker.setPopup(willowcreekPopup);
const markers = [
    {
        lngLat: [-91.62061501923708, 42.32526452248411],
        popupHTML: '<p class="popup">Brothers Bar and Grill</p>' +
            '<video width="640" height="320" controls>\n' +
            '  <source src="/videos/brothers.mp4" type="video/mp4">\n' +
            '  Your browser does not support the video tag.\n' +
            '</video>'
    },
    {
        lngLat: [-77.531940, 39.020590],
        popupHTML: '<p class="popup">Broadlands Sports Bar and Grill</p>' +
            '<video width="640" height="320" controls>\n' +
            '  <source src="/videos/broadlands.mp4" type="video/mp4">\n' +
            '  Your browser does not support the video tag.\n' +
            '</video>'
    },
    {
        lngLat: [-77.51635388094994, 39.03263105692224],
        popupHTML: '<p class="popup">Clydes Willow Creek</p>' +
            '<video width="640" height="320" controls>\n' +
            '  <source src="/videos/Willow_Creek.mp4" type="video/mp4">\n' +
            '  Your browser does not support the video tag.\n' +
            '</video>'
    },
    {
        lngLat: [ -77.55147665821912,39.11087467395079],
        popupHTML: '<p class="popup">The Loudoun Kitchen & Bar</p>' +
            '<video width="640" height="320" controls>\n' +
            '  <source src="/videos/leesburgkitchen.mp4" type="video/mp4">\n' +
            '  Your browser does not support the video tag.\n' +
            '</video>'
    },
    {
        lngLat: [ -78.49181871573981, 38.03145791212602],
        popupHTML: '<p class="popup">Wild Wings Cafe</p>' +
            '<video width="640" height="320" controls>\n' +
            '  <source src="/videos/wildwings.mp4" type="video/mp4">\n' +
            '  Your browser does not support the video tag.\n' +
            '</video>'
    },
];

markers.forEach(function(marker) {
    const newMarker = new mapboxgl.Marker()
        .setLngLat(marker.lngLat)
        .addTo(map);
    const newPopup = new mapboxgl.Popup()
        .setHTML(marker.popupHTML);
    newMarker.setPopup(newPopup);
});