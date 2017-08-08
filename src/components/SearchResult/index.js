import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SearchResult.css';
import MoviePoster from '../MoviePoster';
import MovieDetail from '../MovieDetail';
import { addRemoveWatched, fetchMovie } from '../../actions/movies';

class SearchResult extends Component {
  render() {
    const {lastQuery, movie, isFetching} = this.props;
    return (
      <div className="resultContainer">
        {movie &&
          <div>
            <MoviePoster movie={movie}
              addInWatchedList={ ()=>{ console.log('click received'); this.props.addRemoveWatched(true, movie.imdbID)}}
            />
            <MovieDetail movie={movie} />
          </div>
        }
        {!movie && lastQuery && !isFetching &&
          <p className="noResultMsg">We could not find any movie with name <span>{lastQuery}</span>.</p>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movie: movies.current,
    lastQuery: movies.recentSearchQuery,
    isFetching: movies.isFetching
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      fetchMovie,
      addRemoveWatched,
    },
    dispatch
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
