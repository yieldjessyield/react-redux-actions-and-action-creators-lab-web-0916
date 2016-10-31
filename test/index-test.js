const expect = require('expect');
const { addMovie, deleteMovie, fetchMovies } = require('../src/actions');
const movies = require('../movies');

describe('movie actions', function() {
  describe('adding a movie', function(){
    it('returns the add movies action', function() {
      let movie = {title: 'Ghostbusters', year: 2016}
      expect(addMovie(movie)).toEqual({type: 'ADD_MOVIE', movie: movie})
    })
  })

  describe('adding a movie', function(){
    it('returns the add movies action', function() {
      let movie = {id: 5, title: 'Dead Poets Society', year: 1989}
      expect(deleteMovie(movie)).toEqual({type: 'DELETE_MOVIE', movie: movie})
    })
  })

  describe('fetching all the movies', function(){
    it('returns the add movies action', function() {
      expect(fetchMovies()).toEqual({type: 'ADD_MOVIE', movies: movies});
    })
  })
})
