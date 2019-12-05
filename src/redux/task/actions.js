import uuidV1 from 'uuid/v1';

export const types = {
  CREATE_TASK: 'CREATE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  UNCOMPLETE_TASK: 'UNCOMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

export function createTask(taskData) {
  return async dispatch => {
    return dispatch({
      type: types.CREATE_TASK,
      data: {
        id: uuidV1(),
        data: taskData
      }
    });
  };
}

export function updateTask(taskId, taskData) {
  return async dispatch => {
    return dispatch({
      type: types.UPDATE_TASK,
      data: {
        id: taskId,
        data: taskData
      }
    });
  };
}

export function toggleTask(taskId, isCompleted = false) {
  return async dispatch => {
    return dispatch({
      type: isCompleted ? types.COMPLETE_TASK : types.UNCOMPLETE_TASK,
      data: {
        id: taskId
      }
    });
  };
}

export function deleteTask(taskId) {
  return async dispatch => {
    return dispatch({
      type: types.DELETE_TASK,
      data: {
        id: taskId
      }
    });
  };
}
