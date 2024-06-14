import { combineReducers } from 'redux';
import { FETCH_PROJECTS, FETCH_PROJECT_DETAILS, ADD_PROJECT, ADD_TASK } from './actions';

const initialState = [
  { id: 1, name: 'Project A', description: 'Description of Project A', tasks: ['Task 1', 'Task 2'] },
  { id: 2, name: 'Project B', description: 'Description of Project B', tasks: ['Task 3', 'Task 4'] }
];

const projects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return state;
    case ADD_PROJECT:
      return [...state, action.payload];
    case ADD_TASK:
      return state.map(project =>
        project.id === action.payload.projectId
          ? { ...project, tasks: [...project.tasks, action.payload.task] }
          : project
      );
    default:
      return state;
  }
};

const projectDetails = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECT_DETAILS:
      return { ...state, [action.payload]: state[action.payload] };
    default:
      return state;
  }
};

export default combineReducers({
  projects,
  projectDetails
});
