const initialState = {
  current: null,
  movies: {},
  watched: [],
  isFetching: false,
  recentSearchQuery: null,
}

export default ((state = initialState, action) => {
	switch(action.type) {
		case 'FETCHING_MOVIE' :
			return {...state, isFetching: true, recentSearchQuery: action.payload};
    case 'MOVIE_FETCHED' :
			return {...state, isFetching: false, current: action.payload.data};
    case 'REGISTER_MOVIE' :
			return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.key]: {...action.payload.data, ...(state.movies[action.payload.key] || {}) }
        }
      };
    case 'ADD_WATCHED' :
      const newWatched = [...state.watched];
      if(newWatched.indexOf(action.payload) === -1){
        newWatched.push(action.payload);
      }
			return {...state, watched: newWatched};
    case 'REMOVE_WATCHED' :
      const updatedWatched = state.watched.filter((watched) => watched !== action.payload);
			return {...state, watched: updatedWatched };
    case 'UPVOTE' :
      const movie = {...state.movies[action.payload]};
      movie.__vote = movie.__vote === true ? null : true;
			return {...state, movies: {...state.movies, [action.payload]: movie }};
    case 'DOWNVOTE' :
      const movieD = {...state.movies[action.payload]};
      movieD.__vote = movieD.__vote === false ? null : false;
      return {...state, movies: {...state.movies, [action.payload]: movieD }};
		default :
			return state;
	}
});
