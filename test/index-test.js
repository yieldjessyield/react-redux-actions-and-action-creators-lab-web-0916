import expect from 'expect';
import { addMovie, deleteMovie, updateUsername, resetUsername} from '../src/actions';

describe('movie actions', function() {
  describe('adding a movie', function(){
    it('returns the add movies action', function() {
      let movie = {title: 'Ghostbusters', year: 2016}
      let action = addMovie(movie);
      expect(action.type).toEqual('ADD_MOVIE');
      expect(action.movie.title).toEqual('Ghostbusters');
    })
  })

  describe('adding a movie', function(){
    it('returns the add movies action', function() {
      let movie = {id: 5, title: 'Dead Poets Society', year: 1989};
      let action = deleteMovie(movie);
      expect(action.type).toEqual('DELETE_MOVIE');
      expect(action.movie.title).toEqual('Dead Poets Society');
    })
  })
})

describe('username actions', function(){
  describe('updating a username', function(){
    it('returns the update username action', function(){
      let action = updateUsername('Miles');
      expect(action.type).toEqual('UPDATE_USERNAME');
      expect(action.username).toEqual('Miles');
    })
  })

  describe('resetting a username', function(){
    it('resets a username to default', function(){
      let action = resetUsername();
      expect(action.type).toEqual('RESET_USERNAME');
      expect(action.username).toEqual('default');
    })
  })
})
