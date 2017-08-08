import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addRemoveWatched, voteMovie } from '../../actions/movies';
import WatchedMovieBlock from '../WatchedMovieBlock';
import './WatchedMoviesGrid.css'

class WatchedMoviesGrid extends Component {
  render() {
    const {watched = [], movies} = this.props;
    if(watched.length) {
      return (
        <div className="watchBlock">
          <h3>Watched</h3>
          <div>
            {watched.map(mov =>
              <WatchedMovieBlock
                key={mov}
                poster={(movies[mov] || {}).Poster}
                vote={(movies[mov] || {}).__vote}
                title={(movies[mov] || {}).Title}
                unWatch={() => this.props.addRemoveWatched(false, mov)}
                upvote={() => this.props.voteMovie(true, mov)}
                downvote={() => this.props.voteMovie(false, mov)}
              />
            )}
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies: movies.movies,
    watched: movies.watched,
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      addRemoveWatched,
      voteMovie
    },
    dispatch
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(WatchedMoviesGrid);
