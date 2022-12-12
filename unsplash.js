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
    let div = document.createElement("div");
    div.classList.add("col-lg-3", "col-md-4", "col-sm-6");
    div.innerHTML = `
    <div class="card text-center">
    <img src="${item.urls.regular}" class="card-img-top" alt="...">`;
    document.querySelector(".row").appendChild(div);
  });
}
function onSearchError(response) {
  console.error({ error: response });
}
