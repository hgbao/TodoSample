import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { createTask, updateTask, toggleTask, deleteTask } from '@redux/task/actions';

import TaskItem from '@components/TaskItem';
import FloatingAddButton from '@components/FloatingAddButton';
import EditTaskView from '@components/EditTaskView';

import { AppSizes } from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: AppSizes.padding
  }
});

const TaskView = ({ taskById, showCreateButton = true }) => {
  const dispatch = useDispatch();
  const tasks = useMemo(() => Object.values(taskById), [taskById]);

  const [_isShowingModal, _setIsShowingModal] = useState(false);
  const [_currentTask, _setCurrentTask] = useState({});

  const openModalCallback = useCallback(() => {
    _setCurrentTask({});
    _setIsShowingModal(true);
  }, []);
  const closeModalCallback = useCallback(() => {
    _setIsShowingModal(false);
    _setCurrentTask({});
  }, []);
  const pressTaskCallback = useCallback(
    id => {
      _setCurrentTask(taskById[id]);
      _setIsShowingModal(true);
    },
    [taskById]
  );
  const createTaskCallback = useCallback(data => dispatch(createTask(data)), [dispatch]);
  const updateTaskCallback = useCallback((id, data) => dispatch(updateTask(id, data)), [dispatch]);
  const toggleTaskCallback = useCallback((id, isCompleted) => dispatch(toggleTask(id, isCompleted)), [dispatch]);
  const deleteTaskCallback = useCallback(id => dispatch(deleteTask(id)), [dispatch]);

  // Rendering
  const _renderTasks = useMemo(() => {
    return tasks.map(task => (
      <TaskItem
        key={task.id}
        {...task}
        onToggle={toggleTaskCallback}
        onUpdate={updateTaskCallback}
        onPress={pressTaskCallback}
      />
    ));
  }, [pressTaskCallback, tasks, toggleTaskCallback, updateTaskCallback]);

  const _renderCreateButton = useMemo(() => showCreateButton && <FloatingAddButton onPress={openModalCallback} />, [
    openModalCallback,
    showCreateButton
  ]);

  const _renderEditTaskView = useMemo(() => {
    if (_isShowingModal) {
      let callback = createTaskCallback;
      let removeCallback;
      if (_currentTask.id) {
        callback = data => updateTaskCallback(_currentTask.id, data);
        removeCallback = () => deleteTaskCallback(_currentTask.id);
      }

      return (
        <EditTaskView
          onCallback={callback}
          onRemoveCallback={removeCallback}
          onClose={closeModalCallback}
          {..._currentTask}
        />
      );
    }
  }, [_isShowingModal, createTaskCallback, _currentTask, closeModalCallback, deleteTaskCallback, updateTaskCallback]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{_renderTasks}</ScrollView>
      {_renderCreateButton}
      {_renderEditTaskView}
    </View>
  );
};

export const CompletedTaskView = () => {
  const taskById = useSelector(state => state.task.completedTaskById);

  return <TaskView taskById={taskById} showCreateButton={false} />;
};

export const UncompletedTaskView = () => {
  const taskById = useSelector(state => state.task.taskById);

  return <TaskView taskById={taskById} />;
};
