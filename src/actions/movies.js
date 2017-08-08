import fetch from '../fetch';
import {OMDB_KEY} from '../constants';

export function fetchMovie(name) {
  return (async (dispatch, getState) => {
    try{
      dispatch({ type: 'FETCHING_MOVIE', payload: name });
      const movieData = await fetch(`http://www.omdbapi.com?t=${name}&apikey=${OMDB_KEY}`);
      if(movieData && movieData.imdbID) {
        dispatch({ type: 'MOVIE_FETCHED', payload: { data: movieData} });
        dispatch({ type: 'REGISTER_MOVIE', payload: { key: movieData.imdbID, data: movieData} });
      } else {
        dispatch({ type: 'MOVIE_FETCHED', payload: { data: null} })
      }
    } catch(e){
      console.log(e);
    }
  })
}

export function addRemoveWatched(isAdd, id) {
  console.log(1);
  return (async (dispatch) => {
      console.log(2);
      dispatch({ type: isAdd ? 'ADD_WATCHED' : 'REMOVE_WATCHED', payload: id });
  })
}

export function voteMovie(isUp, id) {
  console.log(1);
  return (async (dispatch) => {
      console.log(2);
      dispatch({ type: isUp ? 'UPVOTE' : 'DOWNVOTE', payload: id });
  })
}
