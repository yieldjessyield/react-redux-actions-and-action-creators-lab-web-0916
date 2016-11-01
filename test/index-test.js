import expect from 'expect';
import { addMovie, deleteMovie, fetchMovies } from '../src/actions';
import movies from '../movies';

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
