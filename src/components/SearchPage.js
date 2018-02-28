import React, { Component } from 'react';

import SearchQuery from './SearchQuery';
import SearchResult from './SearchResult';

export default class SearchPage extends Component {
  render(){
    return (
      <div className="search-page">
        <SearchQuery />
        <SearchResult />
      </div>
    )
  }
};