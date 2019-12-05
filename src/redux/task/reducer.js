import { types } from './actions';

const initialState = {
  taskById: {},
  completedTaskById: {}
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TASK: {
      const { id, data } = action.data;

      const taskById = { ...state.taskById };
      taskById[id] = {
        id: id,
        name: data.name,
        priorityType: data.priorityType,
        dueDate: data.dueDate,
        isCompleted: false
      };

      return {
        ...state,
        taskById: taskById
      };
    }

    case types.UPDATE_TASK: {
      const { id, data } = action.data;
      const newData = {
        id: id,
        name: data.name,
        priorityType: data.priorityType,
        dueDate: data.dueDate
      };

      const taskById = { ...state.taskById };
      const completedTaskById = { ...state.completedTaskById };

      if (taskById[id]) {
        taskById[id] = { ...newData };
        return {
          ...state,
          taskById: taskById
        };
      } else if (completedTaskById[id]) {
        completedTaskById[id] = { ...newData };
        return {
          ...state,
          completedTaskById: completedTaskById
        };
      }

      return state;
    }

    case types.COMPLETE_TASK: {
      const { id } = action.data;

      const taskById = { ...state.taskById };
      const completedTaskById = { ...state.completedTaskById };

      if (taskById[id]) {
        completedTaskById[id] = { ...taskById[id], isCompleted: true };
        delete taskById[id];

        return {
          ...state,
          taskById: taskById,
          completedTaskById: completedTaskById
        };
      }

      return state;
    }

    case types.UNCOMPLETE_TASK: {
      const { id } = action.data;

      const taskById = { ...state.taskById };
      const completedTaskById = { ...state.completedTaskById };

      if (completedTaskById[id]) {
        taskById[id] = { ...completedTaskById[id], isCompleted: false };
        delete completedTaskById[id];

        return {
          ...state,
          taskById: taskById,
          completedTaskById: completedTaskById
        };
      }

      return state;
    }

    case types.DELETE_TASK: {
      const { id } = action.data;

      const taskById = { ...state.taskById };
      const completedTaskById = { ...state.completedTaskById };

      if (taskById[id]) {
        delete taskById[id];
        return {
          ...state,
          taskById: taskById
        };
      } else if (completedTaskById[id]) {
        delete completedTaskById[id];
        return {
          ...state,
          completedTaskById: completedTaskById
        };
      }

      return state;
    }

    default:
      return state;
  }
}
