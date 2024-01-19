function buscar() {
    const apiKey = '790af7bc';  
    const movieTitle = document.getElementById('movieTitle').value;
    

    if (!movieTitle) {
        alert('Por favor, insira o título do filme.');
        return;
    }

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
                document.getElementById('poster').src = data.Poster;
                document.getElementById('titulo').textContent = data.Title;
                document.getElementById('sinopse').textContent = data.Plot;
                document.getElementById('genero').textContent = data.Genre;
                document.getElementById('duracao').textContent = data.Runtime;
                document.getElementById('lancamento').textContent = data.Year;
            } else {
                document.getElementById('poster').src = 'https://github.com/GustavoHolanda16/filmes/blob/main/img/image-removebg-preview.png'
                document.getElementById('titulo').textContent = 'Filme não encontrado!' 
            }
        })
        .catch(error => console.error(`Erro na solicitação: ${error.message}`));
}