import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/query';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(actions.initialQueryLabels());
    this.props.dispatch(actions.initialQueryAssignees());
    this.props.dispatch(actions.initialQueryMilestones());
  }
  
  render(){
    return (
      <h1>Dashboard</h1>
    )
  }
};

export default connect()(Dashboard);