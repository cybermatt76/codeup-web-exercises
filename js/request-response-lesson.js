// fetch('https://swapi.dev/api/films/1/').then(response => response.json) Promise<()=><any></any>.then(data)

// $(document).ready(function() {
//     $("#search-btn").click(function() {
//         let searchQuery = $("#search-input").val();
//         $.ajax({
//             url: "https://swapi.dev/api/people/?search=" + searchQuery,
//             method: "GET",
//             success: function(response) {
//                 let results = response.results;
//                 let output = "<ul>";
//                 for (let i = 0; i < results.length; i++) {
//                     output += "<li>" + results[i].name + "</li>";
//                 }
//                 output += "</ul>";
//                 $("#search-results").html(output);
//             },
//             error: function() {
//                 alert("Error retrieving search results.");
//             }
//         });
//     });
// });

// getCharactor().then(charactor => {
//     console.log(charactor);
// });
// const getCharactor1 = async (movie) => {
//     try {
//         let response = await fetch(`https://swapi.dev/api/people/1/${charactor}`);
//         let data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//     }
// }
//
// (async()=>{
//     let skyWalker = await getCharactor1(1);
// })();

// $(document).ready(function() {
//     $.ajax({
//         url: "https://swapi.dev/api/people/",
//         type: "GET",
//         dataType: "json",
//         success: function(data) {
//             var characters = data.results;
//             for (var i = 0; i < characters.length; i++) {
//                 var character = characters[i];
//                 $("#characters-list").append("<li>" + character.name + "</li>");
//             }
//         }
//     });
// });

// $(document).ready(function() {
//     $.ajax({
//         url: "https://swapi.dev/api/people/1/",
//         type: "GET",
//         dataType: "json",
//         success: function(data) {
//             let luke = data;
//             $("#luke-info").append("<p><strong>Name:</strong> " + luke.name + "</p>");
//             $("#luke-info").append("<p><strong>Height:</strong> " + luke.height + "</p>");
//             $("#luke-info").append("<p><strong>Mass:</strong> " + luke.mass + "</p>");
//             $("#luke-info").append("<p><strong>Hair Color:</strong> " + luke.hair_color + "</p>");
//             $("#luke-info").append("<p><strong>Skin Color:</strong> " + luke.skin_color + "</p>");
//             $("#luke-info").append("<p><strong>Eye Color:</strong> " + luke.eye_color + "</p>");
//             $("#luke-info").append("<p><strong>Birth Year:</strong> " + luke.birth_year + "</p>");
//             $("#luke-info").append("<p><strong>Gender:</strong> " + luke.gender + "</p>");
//         }
//     });
// });

    $(document).ready(function() {
    $("#character-dropdown").change(function() {
        var characterId = $(this).val();
        var characterUrl = "https://swapi.dev/api/people/" + characterId + "/";
        $.ajax({
            url: characterUrl,
            type: "GET",
            dataType: "json",
            success: function(data) {
                let character = data;
                $("#character-info").empty();
                $("#character-info").append("<p><strong>Name:</strong> " + character.name + "</p>");
                $("#character-info").append("<p><strong>Height:</strong> " + character.height + "</p>");
                $("#character-info").append("<p><strong>Mass:</strong> " + character.mass + "</p>");
                $("#character-info").append("<p><strong>Hair Color:</strong> " + character.hair_color + "</p>");
                $("#character-info").append("<p><strong>Skin Color:</strong> " + character.skin_color + "</p>");
                $("#character-info").append("<p><strong>Eye Color:</strong> " + character.eye_color + "</p>");
                $("#character-info").append("<p><strong>Birth Year:</strong> " + character.birth_year + "</p>");
                $("#character-info").append("<p><strong>Gender:</strong> " + character.gender + "</p>");
            }
        });
    });
});