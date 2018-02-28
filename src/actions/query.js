import * as types from './actionType';

// SYNC ACTION
// -- Query Methods 
export const queryAuthor = (authors) => ({
  type: types.QUERY_AUTHOR,
  authors
});
export const queryLabels = (labels) => ({
  type: types.QUERY_LABELS,
  labels
});
export const queryState = (state) => ({
  type: types.QUERY_STATE,
  state
});
export const queryAssignee = (assignee) => ({
  type: types.QUERY_ASSIGNEE,
  assignee
});
export const queryMentioned = (mentioned) => ({
  type: types.QUERY_MENTIONED,
  mentioned
});
export const queryMilestone = (milestone) => ({
  type: types.QUERY_MILESTONE,
  milestone
});
export const querySort = (sort) => ({
  type: types.QUERY_SORT,
  sort
});
export const queryDirection = (direction) => ({
  type: types.QUERY_DIRECTION,
  direction
});
export const querySince = (since) => ({
  type: types.QUERY_SINCE,
  since
});

// -- Query Results 
export const queryRequest = () => ({
  type: types.QUERY_REQUEST
});
export const queryError = (error) => ({
  type: types.QUERY_ERROR,
  error
});
export const querySuccess = (props) => ({
  types: types.QUERY_SUCCESS,
  props
});

// -- Initial Queries
export const initialQueryLabelsSuccess = (props) => ({
  type: types.INITIAL_QUERY_LABELS_SUCCESS,
  props
});
export const initialQueryAssigneesSuccess = (props) => ({
  type: types.INITIAL_QUERY_ASSIGNEES_SUCCESS,
  props
});
export const initialQueryMilestonesSuccess = (props) => ({
  type: types.INITIAL_QUERY_MILESTONES_SUCCESS,
  props
});

// ASYNC ACTION
export const initialQueryLabels = () => dispatch => {
  dispatch(queryRequest())
  return fetch(`https://api.github.com/repos/atom/atom/labels`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(initialQueryLabelsSuccess(res)))
}

export const initialQueryAssignees = () => dispatch => {
  dispatch(queryRequest())
  return fetch(`https://api.github.com/repos/atom/atom/assignees`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(initialQueryAssigneesSuccess(res)))
}

export const initialQueryMilestones = () => dispatch => {
  dispatch(queryRequest())
  return fetch(`https://api.github.com/repos/atom/atom/milestones`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(initialQueryMilestonesSuccess(res)))
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
};