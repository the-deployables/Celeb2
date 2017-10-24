$(document).ready(function() {

  var celebContainer = $("#recent-predictions");

  var posts;

  // This function grabs posts from the database and updates the view
  function getPosts(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/posts", function(data) {
      console.log("Celebrities", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }


  // Getting the initial list of posts
  getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // celebContainer
  function initializeRows() {
    celebContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    celebContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var newPostPanel = $("<div>");
    newPostPanel.addClass("panel panel-default bg-inverse text-white");

    var newPostPanelBody = $("<div>");
    newPostPanelBody.addClass("panel-body bg-inverse text-white");
  
    var newPostCelebName = $("<h2>");
    var newPostDateofDeath = $("<h4>");
    var newPostCauseofDeath = $("<h4>");
    var newPostUsername = $("<p>");

    newPostCelebName.text(post.name);
    newPostDateofDeath.text("predicted death date: " + post.deathdate);
    newPostCauseofDeath.text("casue of death: " + post.causeofdeath);
    newPostUsername.text("posted by: " + post.username);

    newPostPanelBody.append(newPostCelebName);
    newPostPanelBody.append(newPostDateofDeath);
    newPostPanelBody.append(newPostCauseofDeath);
    newPostPanelBody.append(newPostUsername);
    newPostPanel.prepend(newPostPanelBody);
    newPostPanelBody.data("post", post);
    return newPostPanel;
  }


  // This function displays a messgae when there are no posts
  function displayEmpty() {
    celebContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "20px" });
    messageh2.html("No predictions yet, post yours above!");
    celebContainer.append(messageh2);
  }


});
