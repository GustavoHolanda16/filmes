async function searchMovie() {
    const apiKey = "ed417a2c5e740ebe2e3226f0f01c0f51"; // Substitua com a sua chave de API
    const movieTitle = document.getElementById("movieTitle").value;

    if (movieTitle === "") {
        alert("Por favor, insira o título do filme.");
        return;
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}&language=pt-BR`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const movieData = data.results[0];

        if (movieData) {
            const director = await getDirector(movieData.id, apiKey);
            const actors = await getActors(movieData.id, apiKey);
            const posterURL = getMovieCoverURL(movieData.poster_path);

            const movieInfo = `
                <h2 class='titulo'>Título: ${movieData.title}</h2>
                <p class='sinopse'>Sinopse: ${movieData.overview}</p>
                <p class='data'>Data de Lançamento: ${movieData.release_date}</p>
                <p class='pontuação'>Pontuação: ${movieData.vote_average}</p>
                <p class='diretor'>Diretor: ${director}</p>
                <p class='atores'>Atores: ${actors}</p>
                <img src='${posterURL}' alt='Capa do filme'>
            `;

            document.getElementById("movieInfo").innerHTML = movieInfo;
        } else {
            document.getElementById("movieInfo").innerHTML = "Nenhum filme encontrado com esse título.";
        }
    } catch (error) {
        console.error("Erro ao buscar informações do filme: ", error);
        document.getElementById("movieInfo").innerHTML = "Erro ao buscar informações do filme. Verifique a chave de API e a conexão com a internet.";
    }
}

// Restante do código permanece inalterado
