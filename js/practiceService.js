let practiceService = {
  endpoint: "https://jsonplaceholder.typicode.com/albums/1/photos",
};

practiceService.get = () => {
  console.log("get is firing");
  const config = {
    method: "GET",
    url: practiceService.endpoint,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

practiceService.getById = (id) => {
  console.log("getById is firing");
  const config = {
    method: "GET",
    url: practiceService.endpoint + id,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
}
