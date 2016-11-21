// define your actions here!

// ex:
// export function incrementCount(){
//   return {
//     type: 'INCREMENT_COUNT'
//   }
// }

// function createTweet(tweet) {
//   return {
//     type: 'CREATE_TWEET',
//     tweet: tweet
//   }
// }

export function addMovie(movie){
  return{
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

export function updateUsername(name){
  return {
    type: 'UPDATE_USERNAME',
    username: name
  }
}

export function resetUsername(){
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}
