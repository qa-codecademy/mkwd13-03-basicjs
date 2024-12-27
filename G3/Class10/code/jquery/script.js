console.log("Hello i'm here!");

function fetchJoke() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);

      if ($(document.body).find("h1").length) {
        $(document.body).find("h1").remove();
        $(document.body).find("img").remove();
      }

      $(document.body).append(
        $("<h1>", {
          text: data.value,
        }),
        $("<img>", {
          src: data.icon_url,
        })
      );
    },
    error: function (error) {
      console.error(error);
    },
  });
}

$("#joke").on("click", fetchJoke);
