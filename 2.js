const apiKey = '790af7bc';  
const movieTitle = 'Nope'; 

const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na solicitação. Código de status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.Response === 'True') {
      // Imprime as informações do filme no console
      console.log(`Informações sobre o filme '${movieTitle}':`);
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
      }
    } else {
      console.error(`Erro: ${data.Error}`);
    }
  })
  .catch(error => console.error(`Erro na solicitação: ${error.message}`));
