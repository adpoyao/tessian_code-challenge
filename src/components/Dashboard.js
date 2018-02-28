import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccordionRoot from './AccordionRoot';
import SearchPage from './SearchPage';

import * as actions from '../actions/query';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(actions.initialQueryLabels());
    this.props.dispatch(actions.initialQueryAssignees());
    this.props.dispatch(actions.initialQueryMilestones());
  }
  
  render(){

    if(this.props.loading){
      return (
        <div>Loading!</div>
      )
    }

    return (
      <div className="dashboard">
        <AccordionRoot />
        <SearchPage />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.query.loading,
});

export default connect(mapStateToProps)(Dashboard);
