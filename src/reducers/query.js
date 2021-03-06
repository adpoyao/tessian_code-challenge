import * as types from '../actions/actionType';

const initialState = {
  // Initial Payload
  initialLabels: '',
  initialAssignees: '',
  initialMilestones: '',
  initialStates: ['Open', 'Closed', 'All'],
  initialSort: ['Created', 'Updated', 'Comments'],
  initialDirection: ['Asc', 'Desc'],
  initialSince: '',
  // Parameters
  author: '',
  labels: '',
  assignee: '',
  milestone: '',
  mentioned: '',
  state: '',
  sort: '',
  direction: '',
  since: '',
  // Results
  results: '',
  // Loading & Error
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case types.QUERY_AUTHOR:
      return Object.assign({}, state, {
        author: action.author
      });
    case types.QUERY_LABELS:
      return Object.assign({}, state, {
        labels: action.label
      });
    case types.QUERY_STATE:
      return Object.assign({}, state, {
        state: action.state
      });
    case types.QUERY_ASSIGNEE:
      return Object.assign({}, state, {
        assignee: action.assignee
      });
    case types.QUERY_MENTIONED:
      return Object.assign({}, state, {
        mentioned: action.mentioned
      });
    case types.QUERY_MILESTONE:
      return Object.assign({}, state, {
        milestone: action.milestone
      });
    case types.QUERY_SORT:
      return Object.assign({}, state, {
        sort: action.sort
      });
    case types.QUERY_DIRECTION:
      return Object.assign({}, state, {
        direction: action.direction
      });
    case types.QUERY_SINCE:
      return Object.assign({}, state, {
        since: action.since
      });
    case types.QUERY_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case types.QUERY_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.QUERY_SUCCESS:
      return Object.assign({}, state, {
        results: action.props,
        loading: false,
        error: false,
      });
    case types.INITIAL_QUERY_LABELS_SUCCESS:
      return Object.assign({}, state, {
        initialLabels: action.props,
        loading: false,
        error: false,
      });
    case types.INITIAL_QUERY_ASSIGNEES_SUCCESS:
      return Object.assign({}, state, {
        initialAssignees: action.props,
        loading: false,
        error: false,
      });
    case types.INITIAL_QUERY_MILESTONES_SUCCESS:
      return Object.assign({}, state, {
        initialMilestones: action.props,
        loading: false,
        error: false,
      });
    default: break;
  }
  return state;
}
