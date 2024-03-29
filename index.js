function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const apiKey = 'fae696bb'; // Replace 'YOUR_API_KEY' with your actual OMDB API key
    const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayResults(data.Search);
            } else {
                document.getElementById('results').innerHTML = "No movies found.";
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const title = movie.Title;
        const year = movie.Year;
        const poster = movie.Poster === "N/A" ? 'https://via.placeholder.com/100' : movie.Poster;

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h2>${title} (${year})</h2>
            <img src="${poster}" alt="${title} poster">
        `;
        resultsDiv.appendChild(movieDiv);
    });
}
