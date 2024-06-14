export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT_DETAILS = 'FETCH_PROJECT_DETAILS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_TASK = 'ADD_TASK';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS
});

export const fetchProjectDetails = (id) => ({
  type: FETCH_PROJECT_DETAILS,
  payload: id
});

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project
});

export const addTask = (projectId, task) => ({
  type: ADD_TASK,
  payload: { projectId, task }
});
