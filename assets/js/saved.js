var savedList = document.querySelector("#save-section");

var creatingDisplay = function (image, name, url) {
  var cardEl = document.createElement("div");
  var cardSectionEl = document.createElement("div");
  var subtitleEl = document.createElement("h4");
  var descriptionEl = document.createElement("p");
  var linkEl = document.createElement("a");
  var linkImageEl = document.createElement("a");
  var cardImageEl = document.createElement("img");

  cardEl.setAttribute("class", "card");
  cardSectionEl.setAttribute("class", "card-section");
  subtitleEl.textContent = name;
  cardImageEl.src = image;
  linkEl.setAttribute("href", url);
  linkEl.setAttribute("target", "_blank");
  linkEl.setAttribute("class", "card-link");
  linkImageEl.setAttribute("href", url);
  linkImageEl.setAttribute("target", "_blank");
  descriptionEl.className = "description";
};

var displayFavs = function () {
  var favList = JSON.parse(localStorage.getItem("favourites"));
  console.log(favList);
  for (i = o; i < favList.length; i++) {
    name = favList[i].name;
    image = favList[i].imageUrl;
    url = favList[i].url;
    creatingDisplay(image, name, url);
  }
};
