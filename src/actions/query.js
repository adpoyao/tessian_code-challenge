import * as types from './actionType';

// SYNC ACTION
// -- Query Methods 
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
export const querySort = (sort) => {
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

// -- Query Results 
export const queryRequest = () => {
  type: types.QUERY_REQUEST
};
export const queryError = (error) => {
  type: types.QUERY_ERROR,
  error
};
export const querySuccess = (props) => {
  types: types.QUERY_SUCCESS,
  props
};
export const initialQuerySuccess = (props) => {
  type: types.INITIAL_QUERY_SUCCESS
  props
};


// ASYNC ACTION
export const initialQuery = () => dispatch => {
  dispatch(queryRequest())
  // parameter: i.e. creator=johnislarry&
  return fetch(`https://api.github.com/repos/atom/atom/issues}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(initialQuerySuccess(res)))
  .then(res => console.log(res))
}

export const query = (parameter) => dispatch => {
  dispatch(queryRequest())
  // parameter: i.e. creator=johnislarry&
  return fetch(`https://api.github.com/repos/atom/atom/issues?${parameter}}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(querySuccess(res)))
  .then(res => console.log(res))
};