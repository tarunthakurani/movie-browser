import React, { Component } from 'react';
import logo from '../../logo.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movies';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="searchWrap">
          <form onSubmit={(e) => {e.preventDefault(); this.props.fetchMovie(this.searchBox.value); }}>
            <input className="searchBox" type="text" placeholder="Search Movies" ref={(inpt) => { this.searchBox = inpt; }} />
            <button className="searchBtn" type="submit">go</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      fetchMovie,
    },
    dispatch
  )
);

export default connect(()=>({}), mapDispatchToProps)(Header);
