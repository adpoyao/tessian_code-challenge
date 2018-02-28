import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class SearchResults extends Component {
  handleSearchButton = () => {
    let author, label, assignee, milestone, mentioned, state, sort, direction;
    this.props.query.author ? author = `creator=${this.props.query.author}&` : author = '';
    this.props.query.labels ? label = `labels=${this.props.query.labels}&` : label = '';
    this.props.query.assignee ? assignee = `assignee=${this.props.query.assignee}&` : assignee = '';
    this.props.query.milestone ? milestone = `milestone=${this.props.query.milestone}&` : milestone = '';
    this.props.query.mentioned ? mentioned = `mentioned=${this.props.query.mentioned}&` : mentioned = '';
    this.props.query.state ? state = `state=${this.props.query.state}&` : state = '';
    this.props.query.sort ? sort = `sort=${this.props.query.sort}&` : sort = '';
    this.props.query.direction ? direction = `direction=${this.props.query.direction}&` : direction = '';
    
    let searchParams = `${author}${label}${assignee}${milestone}${mentioned}${state}${sort}${direction}`
    this.props.dispatch(actions.query(searchParams));
  };

  render(){
    return (
      <div className="search-wrapper">
        <button onClick={()=>this.handleSearchButton()}>Search</button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  query: state.query,
})

export default connect(mapStateToProps)(SearchResults);