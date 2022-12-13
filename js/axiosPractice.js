const getJsonData = () => {
  practiceService.get().then(onGetSuccess).catch(onGetError);
};

function onGetSuccess(response) {
  let result = response.data;
  result.map((item) => {
    let div = document.createElement("div");
    div.classList.add("card");
    
    let img = document.createElement("img");
    img.src = item.thumbnailUrl;
    div.appendChild(img);
    let title = document.createElement("h3");
    title.innerHTML = item.title;
    div.appendChild(title);

    document.body.appendChild(div);
  });

  console.log("onGetSuccess is firing", result);
}

function onGetError(response) {
  console.error({ error: response });
}

getJsonData();

//  const getById = () => {
//         practiceService
//         .getById(1)
//         .then(onGetByIdSuccess)
//         .catch(onGetByIdError)
//     }

//     function onGetByIdSuccess(response){
//         console.log("onGetByIdSuccess is firing")
//         console.log(response.data, "GET BY ID")
//     }

//     function onGetByIdError(response){
//         console.error({error : response})
//     }

//     getById();
