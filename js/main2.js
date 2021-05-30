const url = "http://api.football-data.org/v2/matches";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });