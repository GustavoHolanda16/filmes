// Função para carregar um filme padrão na inicialização da página
function carregarFilmePadrao() {
    const apiKey = '790af7bc';
    const filmePadrao = 'The Matrix'; // Título do filme padrão

    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${filmePadrao}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na solicitação. Código de status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === 'True') {
                exibirDetalhesDoFilme(data);
            } else {
                exibirFilmeNaoEncontrado();
            }
        })
        .catch(error => console.error(`Erro na solicitação: ${error.message}`));
}

// Função para exibir detalhes do filme
function exibirDetalhesDoFilme(data) {
    document.getElementById('poster').src = data.Poster;
    document.getElementById('titulo').textContent = data.Title;
    document.getElementById('sinopse').textContent = data.Plot;
    document.getElementById('genero').textContent = data.Genre;
    document.getElementById('duracao').textContent = data.Runtime;
    document.getElementById('lancamento').textContent = data.Year;
}

// Função para exibir mensagem de filme não encontrado
function exibirFilmeNaoEncontrado() {
    // Limpar os campos
    document.getElementById('poster').src = '';
    document.getElementById('titulo').textContent = '';
    document.getElementById('sinopse').textContent = '';
    document.getElementById('genero').textContent = '';
    document.getElementById('duracao').textContent = '';
    document.getElementById('lancamento').textContent = '';

    // Exibir a mensagem de filme não encontrado
    document.getElementById('poster').src = 'https://github.com/GustavoHolanda16/filmes/blob/main/img/image-removebg-preview.png?raw=true';
    document.getElementById('titulo').textContent = 'Filme não encontrado!';
}

// Função para buscar um filme
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
                exibirDetalhesDoFilme(data);
            } else {
                exibirFilmeNaoEncontrado();
            }
        })
        .catch(error => console.error(`Erro na solicitação: ${error.message}`));
}

// Carregar um filme padrão na inicialização da página
document.addEventListener('DOMContentLoaded', carregarFilmePadrao);