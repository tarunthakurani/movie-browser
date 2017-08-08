import React, { Component } from 'react';
import './WatchedMovieBlock.css'

class WatchedMovieBlock extends Component {
  render() {
    const {vote, title, unWatch, upvote, downvote} = this.props;
    let {poster} = this.props;
    poster = !poster || poster === 'N/A' ? 'img/movies.jpg' : poster;
    return (
      <div className='watchedBlock'>
      <img className="watchedPoster" alt="Poster" src={poster || 'img/movies.jpg'} title={title} onClick={unWatch} />
      <div className="voteSection">
        <span onClick={upvote} className={`voteIcon upvote ${vote === true ? 'active' : ''}`} data-icon="e" />
        <span onClick={downvote} className={`voteIcon downvote ${vote === false ? 'active' : ''}`} data-icon="b" />
      </div>
      </div>
    );
  }
}

export default (WatchedMovieBlock);
