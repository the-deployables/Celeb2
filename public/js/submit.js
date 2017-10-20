$(document).ready(function() {

  var updating = false;

  // Getting jQuery references to the post body, title, form, and category select
  var celebName = $("#name");
  var deathCause = $("#causeofdeath");
  var dateofDeath = $("#deathdate");
  var userName = $("#username");
  var submissionForm = $("#deathForm");

  // Adding an event listener for when the form is submitted
  $(submissionForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    console.log($("#name"));
    console.log(celebName);
    // Wont submit the post if we are missing a name or a cause of death
    if (!deathCause.val().trim() || !celebName.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      name: celebName.val().trim(),
      causeofdeath: deathCause.val().trim(),
      deathdate: dateofDeath.val(),
      username: userName.val().trim()
    };

    console.log(newPost);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/deads";
    });
  }


});
