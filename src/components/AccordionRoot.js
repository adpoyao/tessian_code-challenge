import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import { connect } from 'react-redux';

export class AccordionRoot extends Component {
  render(){
  
    // Author, Labels, State, Assignee, Mentioned, Milestone, Sort, Direction
    const selections = [ 
      {Author: this.props.author},
      {Labels: this.props.labels},
      {Assignee: this.props.author},
    ];

    return (
      <div>
        <Accordion>
          {selections.map((item, i) => {
            let key = Object.keys(item)[0];
            let authorItems, labelItems, assigneeItems;
            if (key === 'Author'){
              if(this.props.author.length > 0){
                authorItems = this.props.author.map((detail, index) => { return <li key={index}>{detail.login}</li>})}
              }

            if (key === 'Labels'){
              if(this.props.labels.length > 0){
                labelItems = this.props.labels.map((detail, index) => { return <li key={index}>{detail.name}</li>})}
              }

            if (key === 'Assignee'){
              if(this.props.author.length > 0){
                assigneeItems = this.props.labels.map((detail, index) => { return <li key={index}>{detail.login}</li>})}
              }

              return (
                <AccordionItem title={key} key={i}>
                  <ul>
                    {authorItems}
                    {labelItems}
                    {assigneeItems}
                  </ul>
                </AccordionItem>
              );
          })}
        </Accordion>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.query.loading,
  author: state.query.initialAssignees,
  labels: state.query.initialLabels
});

export default connect(mapStateToProps)(AccordionRoot);
