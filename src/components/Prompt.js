import React, { Component } from 'react';

export default class Prompt extends Component {
  render(){
    return (
      // This component is meant for other future implementations
      // and made into its new component to reserve feature space.
      <div className="prompt">
        <h2>Atom/Atom/Issues</h2>
        <p className="subcaption">Point-and-Click on the filters to refine your search.</p>
      </div>
    )
  }
};