import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieDetail.css';
import { fetchMovie } from '../../actions/movies';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {Title, Year, Ratings, Plot, imdbID} = this.props.movie || {};
    let imdbRatings, rottenTom;
    (Ratings || []).forEach((rating) => {
      if(rating.Source === 'Internet Movie Database') {
        imdbRatings = rating.Value;
      } else if(rating.Source === 'Rotten Tomatoes') {
        rottenTom = rating.Value;
      }
    });
    return (
      <div className="movieDetailWrap">
        <h2>{Title}</h2>
        <p>{Year}</p>
        <div className="ratingSection">
          {
            Ratings.map(rating => {
              if(rating.Source === 'Rotten Tomatoes' || rating.Source === 'Internet Movie Database') {
              return (
                <div className="rateingBlock" key={rating.Source}>
                  <p>{rating.Value}</p>
                  <span>{rating.Source}</span>
                </div>);
              }
              return null;
            })
          }
          {this.props.watched.indexOf(imdbID) !== -1 &&
            <div className="rateingBlock watchedBtn" key='watched'>
              <span data-icon="f" title="Watched" />
            </div>
          }
        </div>
        <div className="plotSection">
          <h3>Plot</h3>
          <p>{Plot}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    watched: movies.watched,
  }
};

export default connect(mapStateToProps)(MovieDetail);
