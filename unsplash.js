document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // if(document.getElementById("query").value === null){
  getSearchedPhotos();
});

const getSearchedPhotos = () => {
  let searchTerm = getSearchData();
  unsplashService.search(searchTerm)
    .then(onSearchSuccess)
    .catch(onSearchError);
};

function getSearchData() {
  console.log("getSearchData is firing");
  let query = document.getElementById("query").value;
  return query;
}

function onSearchSuccess(response) {
  console.log("onSearchSuccess is firing");

  let result = response.data.results;

  result.map((item) => {
    let card = document.createElement("div");
    //make the card render in rows
        
    card.classList.add("card");
    let img = document.createElement("img");
    img.src = item.urls.regular;
    card.appendChild(img);
    document.querySelector("#unsplash").appendChild(card);
  });

  let query = document.getElementById("query").value;
  localStorage.setItem(`${query}`, JSON.stringify(result));
}

function onSearchError(response) {
  console.error({ error: response });
}
