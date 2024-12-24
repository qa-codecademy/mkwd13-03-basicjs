console.log("Exercises is working");
//Exercise #2
const paragraphBtn = document.querySelector("#paragraphBtn");
const paragraphEl = document.querySelector(".paragraph");

console.log(paragraphBtn, paragraphEl);

paragraphBtn.addEventListener("click", function () {
  console.log("Paragraph button clicked");

  paragraphEl.style.color = "darkblue";
  paragraphEl.style.backgroundColor = "lightblue";
  paragraphEl.style.fontSize = "20px";
});
