function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}

function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie: movie
  }
}

function fetchMovies(){
  // imagine that this is making an API call instead of just loading data from afile
  const movies = require('../../movies');
  return {
    type: 'ADD_MOVIE',
    movies: movies
  }
}

module.exports = {
  addMovie,
  deleteMovie,
  fetchMovies
}
