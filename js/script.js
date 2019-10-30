// functions
$(function() {
  // $(document).ready());
  // $(#'navdrop-down')

  // event listeners + behaviours + loops/timeout

  // select elements
  const dropdown = $("#select");

  // on select
  dropdown.on("change", function(event) {
    const category = $(this).val();

    // show loader

    // get stories
    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=L4iO7u1rIyh2nxWEMFiKU5SOX79LQHo8`,
      dataType: "json"
    })
      .done(function(data) {
        // fill grid with stories
        const imageOnly = data.results.filter(function(items) {
          if (items.multimedia[4] !== undefined) {
            return true;
          } else {
            return false;
          }
        });

        const topTwelve = imageOnly.slice(0, 12);

        // reveal grid with stories
        $.each(topTwelve, function(key, value) {
          const link = value.url;
          console.log("this", value);
          $(".top-stories").append(
            `<a class = 'nysite' href= ${link} target="_blank">
            <article class="article" style="background-image:url(${value.multimedia[4].url}); background-size: cover;"><p>${value.abstract}</p></a></article>`
          );
        });
      })
      .fail(function() {
        alert("Something went wrong");
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
