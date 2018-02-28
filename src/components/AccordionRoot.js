import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import { connect } from 'react-redux';

import Prompt from './Prompt';
import SearchButton from './SearchButton';
import * as actions from '../actions';

export class AccordionRoot extends Component {
  handleClickAuthor = author => (
    this.props.dispatch(actions.queryAuthor(author))
  );

  handleClickLabel = label => (
    this.props.dispatch(actions.queryLabels(label))
  );

  handleClickState = state => (
    this.props.dispatch(actions.queryState(state))
  );

  handleClickAssignee = assignee => (
    this.props.dispatch(actions.queryAssignee(assignee))
  );

  handleClickMentioned = mentioned => (
    this.props.dispatch(actions.queryMentioned(mentioned))
  )

  handleClickMilestone = milestone => (
    this.props.dispatch(actions.queryMilestone(milestone))
  )

  handleClickSort = sort => (
    this.props.dispatch(actions.querySort(sort))
  );

  handleClickDirection = direction=> (
    this.props.dispatch(actions.queryDirection(direction))
  );
  
  render(){
  
    // Author, Labels, State, Assignee, Mentioned, Milestone, Sort, Direction
    const selections = [ 
      {Author: this.props.author},
      {Labels: this.props.labels},
      {State: this.props.state},
      {Assignee: this.props.author},
      {Mentioned: this.props.author},
      {Milestone: this.props.milestone},
      {Sort: this.props.sort},
      {Direction: this.props.direction},
    ];

    return (
      <div className='accordion-wrapper'>
        <Prompt/>
        <Accordion>
          {selections.map((item, i) => {
            let key = Object.keys(item)[0];
            let authorItems, labelItems, assigneeItems, stateItems, mentionedItems, milestoneItems, sortItems, directionItems;
            if (key === 'Author'){
              if(this.props.author.length > 0){
                authorItems = this.props.author.map((detail, index) => { 
                  return <li key={index} className="detail-list" onClick={()=>this.handleClickAuthor(detail.login)}>{detail.login}</li>})}
            }
            if (key === 'Labels'){
              if(this.props.labels.length > 0){
                labelItems = this.props.labels.map((detail, index) => { 
                  return <li key={index} className="detail-list" onClick={()=>this.handleClickLabel(detail.name)}>{detail.name}</li>})}
            }
            if (key === 'Assignee'){
              if(this.props.author.length > 0){
                assigneeItems = this.props.author.map((detail, index) => { 
                  return <li key={index} className="detail-list" onClick={()=>this.handleClickAssignee(detail.login)}>{detail.login}</li>})}
            }
            if (key === 'State'){
              stateItems = this.props.state.map((detail, index) => { 
                return <li key={index} className="detail-list" onClick={()=>this.handleClickState(detail)}>{detail}</li>})
            }
            if (key === 'Mentioned'){
              if(this.props.author.length > 0){
                authorItems = this.props.author.map((detail, index) => { 
                  return <li key={index} className="detail-list" onClick={()=>this.handleClickMentioned(detail.login)}>{detail.login}</li>})}
            }
            if (key === 'Milestone'){
              if(this.props.milestone.length > 0){
                milestoneItems = this.props.milestone.map((detail, index) => { 
                  return <li key={index} className="detail-list" onClick={()=>this.handleClickMilestone(detail)}>{detail}</li>})
              }
              else {
                milestoneItems = <li className="detail-list">No Milestone Available</li>
              }
            }
            if (key === 'Sort'){
              sortItems = this.props.sort.map((detail, index) => { 
                return <li key={index} className="detail-list" onClick={()=>this.handleClickSort(detail)}>{detail}</li>})
            }
            if (key === 'Direction'){
              directionItems = this.props.direction.map((detail, index) => { 
                return <li key={index} className="detail-list" onClick={()=>this.handleClickDirection(detail)}>{detail}</li>})
            }


            return (
              <AccordionItem title={key} key={i} className="accordion-item">
                <ul>
                  {authorItems}
                  {labelItems}
                  {assigneeItems}
                  {stateItems}
                  {mentionedItems}
                  {milestoneItems}
                  {sortItems}
                  {directionItems}
                </ul>
              </AccordionItem>
            );
          })}
        </Accordion>
        <SearchButton/>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.query.loading,
  author: state.query.initialAssignees,
  labels: state.query.initialLabels,
  state: state.query.initialStates,
  milestone: state.query.initialMilestones,
  sort: state.query.initialSort,
  direction: state.query.initialDirection,
});

export default connect(mapStateToProps)(AccordionRoot);
