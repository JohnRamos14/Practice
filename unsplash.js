

document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();

  // if(document.getElementById("query").value === null){

  getSearchedPhotos();
});

const getSearchedPhotos = () => {
  let searchTerm = getSearchData();
  unsplashService.search(searchTerm).then(onSearchSuccess).catch(onSearchError);



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
    let div = document.createElement("div");
    div.classList.add("col-lg-3", "col-md-4", "col-sm-6");
    let card = document.createElement("div");
    card.classList.add("card");
    div.appendChild(card);
    let img = document.createElement("img");
    img.src = item.urls.regular;
    div.appendChild(img);

    document.body.appendChild(div);
  });

  let query = document.getElementById("query").value;
  localStorage.setItem(`${query}`, JSON.stringify(result));

}

function onSearchError(response) {
  console.error({ error: response });
}
