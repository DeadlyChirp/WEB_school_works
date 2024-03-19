$(document).ready(function() {
    var posts = [
        // Placeholder for blog posts
        { title: "Post 1", content: "Content for post 1" },
        { title: "Post 2", content: "Content for post 2" },
        { title: "Post 3", content: "Content for post 3" },
        { title: "Post 4", content: "Content for post 4" },
        { title: "Post 5", content: "Content for post 5" }
        { title: "Post 6", content: "Content for post 6" },
        { title: "Post 7", content: "Content for post 7" },
        { title: "Post 8", content: "Content for post 8" },
    ];

    // Generate blog posts and navigation links
    $.each(posts, function(index, post) {
        var postHtml = `
            <div id="post${index}" class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            </div>
        `;

        // Append the post to the main content area
        $("#blog-posts").append(postHtml);

        // Add a navigation link to the sidebar for this post
        var navLink = `<a class="nav-link" href="#post${index}">${post.title}</a>`;
        $("#sidebar").append(navLink);
    });
});
