// $(document).ready(function() {
//     $.get("/data/inventory.json", function(data) {
//         $.each(data, function(index, value) {
//             let row = $('<tr>');
//             $('<td>').text(value.title).appendTo(row);
//             $('<td>').text(value.quantity).appendTo(row);
//             $('<td>').text(value.price).appendTo(row);
//             $('<td>').text(value.categories.join(", ")).appendTo(row);
//             row.appendTo('#insertProducts');
//         });
//     })
//         .done(function() {
//             console.log("Data loaded successfully.");
//         })
//         .fail(function() {
//             console.log("Error loading data.");
//         });
// });

$(document).ready(function() {
    function loadProducts() {
        $.get("/data/inventory.json", function(data) {
            $('#insertProducts').empty(); // clear the current table rows
            $.each(data, function(index, value) {
                let row = $('<tr>');
                $('<td>').text(value.title).appendTo(row);
                $('<td>').text(value.quantity).appendTo(row);
                $('<td>').text(value.price).appendTo(row);
                $('<td>').text(value.categories.join(", ")).appendTo(row);
                row.appendTo('#insertProducts');
            });
        })
            .done(function() {
                console.log("Data loaded successfully.");
            })
            .fail(function() {
                console.log("Error loading data.");
            });
    }

    // Load products when the page is first loaded
    loadProducts();

    // Add click event listener to the refresh button
    $('#refreshButton').click(function() {
        loadProducts();
    });
});