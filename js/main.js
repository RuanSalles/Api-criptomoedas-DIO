//Minha ApiKey
let apiKey = {
   key: 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
apiKey.key)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
   return response.json();
})
.then((api) => {
    console.log(api);
})
.catch((error) => {
    console.error(error.message);

});



//f17d137a-3594-48f9-9834-3ac300be2be2-3594-48f9-9834-3ac300be2be2

//curl -H "X-CMC_PRO_API_KEY: b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c" -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" -G https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
