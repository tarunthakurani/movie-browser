import React, { Component } from 'react';

class MoviePoster extends Component {
  render() {
    let {Poster} = this.props.movie || {};
    Poster = !Poster || Poster === 'N/A' ? 'img/movies.jpg' : Poster;
    return (
      <div className="moviePosterWrap">
      <img className="moviePosterMain" alt="Poster" onClick={() => {this.props.addInWatchedList()}} src={Poster} />
      </div>
    );
  }
}

export default (MoviePoster);
