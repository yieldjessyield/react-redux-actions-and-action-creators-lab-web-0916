export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}

export function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie: movie
  }
}

export function updateUsername(username){
  return {
    type: 'UPDATE_USERNAME',
    username: username
  }
}

export function resetUsername() {
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}
