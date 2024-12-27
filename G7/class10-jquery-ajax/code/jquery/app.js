console.log("working");

console.log($);

$(document).ready(function () {
  const mainTitleEl = $("#mainTitle");
  console.log(mainTitleEl);

  const innerWrapperElmts = $(".innerWrapper");
  console.log(innerWrapperElmts);

  const paragraphElmnts = $("p");
  console.log(paragraphElmnts);

  console.log(paragraphElmnts.first());
  console.log(paragraphElmnts.last());

  const inputEl = $("input").first();

  console.log(inputEl.val());

  console.log(paragraphElmnts.last().text("I have been updated with jQuery"));

  console.log(innerWrapperElmts.first().html("<h3>Changed with jQuery</h3>"));

  innerWrapperElmts.first().css("background-color", "lightpink");

  const displayEl = $(".display").first();

  // displayEl.hide();

  const displayBtn = $(".displayBtn").first();

  displayBtn.on("click", function () {
    displayEl.hide();
  });

  displayBtn.click(function () {
    console.log("Simpler click listner in jQuery");
  });
});
