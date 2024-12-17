function searchMovies() {
    const query = document.getElementById('search').value.toLowerCase();
    const movies = document.querySelectorAll('.movie-card');
  
    movies.forEach(movie => {
      const title = movie.querySelector('h2').textContent.toLowerCase();
      if (title.includes(query)) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  }
  