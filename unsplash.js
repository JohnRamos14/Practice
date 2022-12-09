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
  console.log(query);
}

function onSearchSuccess(response) {
  console.log("onSearchSuccess is firing");
  console.log(response.data);

  let result = response.data.results;
  result.map((item) => {
    let div = document.createElement("div");
    div.classList.add("card");

    let img = document.createElement("img");
    img.src = item.urls.small;
    div.appendChild(img);
    let title = document.createElement("h3");
    title.innerHTML = item.alt_description;
    div.appendChild(title);

    document.body.appendChild(div);
  });
}

function onSearchError(response) {
  console.error({ error: response });
}
