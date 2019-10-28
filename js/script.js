// functions
$(function() {
  // $("select").selectric();
  // $(document).ready());
  // $(#'navdrop-down')

  // event listeners + behaviours + loops/timeout

  // select elements
  const dropdown = $("#select");
  const storyContainer = $("#stories");
  const logo = $(".logo");

  // on select
  dropdown.on("change", function(event) {
    const category = event.target.value;

    // show loader

    // get stories
    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=L4iO7u1rIyh2nxWEMFiKU5SOX79LQHo8`
    })
      .done(function(data) {
        // fill grid with stories
        const articles = data.results;
        console.log(articles);

        logo.addClass("move-up");

        // reveal grid with stories
        $.each(articles, function(key, value) {
          storyContainer.append(`
            <li>
              <a target="_blank" href="${value.url}">
              <img src="${value.multimedia[4].url}"> 
              <p>${value.abstract}</p>
              </a>s
            </li>
          `);
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
