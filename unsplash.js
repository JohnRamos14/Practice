document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
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
    //render item 4 in a row
    div.classList.add("col-3");
    div.classList.add("card");
    div.classList.add("row");
    let img = document.createElement("img");
    img.src = item.urls.small;
    div.appendChild(img);

    document.body.appendChild(div);
  });
}

function onSearchError(response) {
  console.error({ error: response });
}
