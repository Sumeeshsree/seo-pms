// Define action types
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_TASK = 'ADD_TASK';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT_DETAILS = 'FETCH_PROJECT_DETAILS';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

// Action creators
export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const fetchProjectDetails = (projectId) => ({
  type: FETCH_PROJECT_DETAILS,
  payload: projectId,
});

export const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  payload: projectId,
});

export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  payload: project,
});
