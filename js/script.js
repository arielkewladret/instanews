$(function() {
  const dropdown = $("#select");
  const loader = $("#loader");

  dropdown.on("change", function() {
    const category = $(this).val();

    loader.show();

    $.ajax({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=L4iO7u1rIyh2nxWEMFiKU5SOX79LQHo8`,
      dataType: "json"
    })
      .done(function(data) {
        $("#top-stories").empty();

        const imageOnly = data.results.filter(function(items) {
          if (items.multimedia[4] !== undefined) {
            return true;
          } else {
            return false;
          }
        });

        const topTwelve = imageOnly.slice(0, 12);

        $.each(topTwelve, function(key, value) {
          const link = value.url;
          console.log("this", value);
          $("#top-stories").append(
            `<a class = 'nysite' href= ${link} target="_blank">
              <article class="article" style="background-image:url(${value.multimedia[4].url}); background-size: cover;">
                <p>${value.abstract}</p>
                  
              </article>
            </a>`
          );
        });

        $("#site-header").addClass("header-small");
      })
      .fail(function() {
        alert("Something went wrong");
      })
      .always(function() {
        loader.hide();
      });
  });
});
