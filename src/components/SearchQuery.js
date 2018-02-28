import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SearchQuery extends Component {
  render(){
    let queries;


    return (
      <div className="search-query">
        <h2>Search Query</h2>
        <p className="subcaption">Your active search queries will be shown here.</p>
        {queries}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  sample: 'abc'
})

export default connect(mapStateToProps)(SearchQuery);