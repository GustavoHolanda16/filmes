function buscar() {
    const apiKey = '790af7bc';  // Substitua 'sua_api_key' pela sua chave de API do OMDB
    const movieTitle = document.getElementById('movieTitle').value;
    

    if (!movieTitle) {
        alert('Por favor, insira o título do filme.');
        return;
    }

    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    // Faz a solicitação à API usando fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na solicitação. Código de status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === 'True') {
                // Exibe as informações do filme na página
                document.getElementById('poster').src = data.Poster;
                document.getElementById('titulo').textContent = data.Title;
                document.getElementById('sinopse').textContent = data.Plot;
                document.getElementById('genero').textContent = data.Genre;
                document.getElementById('duracao').textContent = data.Runtime;
                document.getElementById('lancamento').textContent = data.Released;
            } else {
                console.error(`Erro: ${data.Error}`);
            }
        })
        .catch(error => console.error(`Erro na solicitação: ${error.message}`));
}