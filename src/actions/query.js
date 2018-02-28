import * as types from './actionType';

// SYNC ACTION
export const queryAuthor = (authors) => {
  type: types.QUERY_AUTHOR,
  authors
};
export const queryLabels = (labels) => {
  type: types.QUERY_LABELS,
  labels
};
export const queryState = (state) => {
  type: types.QUERY_STATE,
  state
};
export const queryAssignee = (assignee) => {
  type: types.QUERY_ASSIGNEE,
  assignee
};
export const queryMentioned = (mentioned) => {
  type: types.QUERY_MENTIONED,
  mentioned
};
export const queryMilestone = (milestone) => {
  type: types.QUERY_MILESTONE,
  milestone
};
export const querySort = (SORT) => {
  type: types.QUERY_SORT,
  sort
};
export const queryDirection = (direction) => {
  type: types.QUERY_DIRECTION,
  direction
};
export const querySince = (since) => {
  type: types.QUERY_SINCE,
  since
};
export const queryRequest = () => {
  type: types.QUERY_REQUEST
};
export const querySince = (error) => {
  type: types.QUERY_ERROR,
  error
};


// ASYNC ACTION
export const queryIssues = () => dispatch => {
  return fetch('https://api.github.com/repos/atom/atom/issues?creator=johnislarry&', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => console.log(res))
};