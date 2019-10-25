document.addEventListener("DOMContentLoaded", function() {
  $("button").on("click", function() {
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=L4iO7u1rIyh2nxWEMFiKU5SOX79LQHo8"
    })

      .done(function(data) {
        const articles = data.results;

        console.log(data.results[2]);

        $.each(articles, function(key, value) {
          //   console.log(value.section);
          $(".name-list").append(
            "<li>[" + value.section + "] " + value.title + "</li>"
          );
        });
      })
      .fail(function() {
        // $(".user-name").append("Sorry there was an error");
      });
  });
});
/*
  jQuery also has a document ready you can use
  NOTE all of these do the same thing, you just need one
  
  $( document ).ready(function() {
      console.log( "ready!" );
  });
  
  OR the Shorthand
  
  $(function() {
      console.log( "ready!" );
  });
  
  */
