
        $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "/data/blog.json",
            dataType: "json",
            success: function(data) {
                let postsHtml = "";

                // Loop through each blog post
                $.each(data, function(index, post) {
                    // Create an HTML string to display the post data
                    let postHtml = "<div>";
                    postHtml += "<h2>" + post.title + "</h2>";
                    postHtml += "<p>" + post.content + "</p>";
                    postHtml += "<p>Categories: " + post.categories.join(", ") + "</p>";
                    postHtml += "<p>Date: " + post.date + "</p>";
                    postHtml += "</div>";

                    // Add the post HTML to the postsHtml string
                    postsHtml += postHtml;
                });

                // Append the postsHtml to the #posts div
                $("#posts").append(postsHtml);
            },
            error: function() {
                alert("Error loading blog posts.");
            }
        });
    });