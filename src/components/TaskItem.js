import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import ToggleBox from '@components/ToggleBox';
import EditableTextView from '@components/EditableTextView';
import PriorityTag from '@components/PriorityTag';
import DateTag from '@components/DateTag';

import { AppColors, AppSizes, AppStyles } from '@theme';
import { LanguageConfig } from '@config';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.shadow,
    flexDirection: 'row',
    margin: AppSizes.paddingExtraSml,
    padding: AppSizes.paddingSml,
    alignItems: 'center',
    backgroundColor: AppColors.background
  },
  checkBox: {
    ...AppStyles.iconRound,
    borderWidth: 1,
    borderColor: AppColors.border
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: AppSizes.paddingSml
  },
  tagContainer: {
    flexDirection: 'row'
  }
});

const TaskItem = ({ id, name, priorityType, dueDate, isCompleted, onUpdate, onToggle, onPress }) => {
  const taskData = useMemo(() => {
    return {
      id: id,
      name: name,
      priorityType: priorityType,
      dueDate: dueDate,
      isCompleted: isCompleted
    };
  }, [dueDate, id, isCompleted, name, priorityType]);

  const pressCallback = useCallback(() => onPress(id), [onPress, id]);
  const toggleCallback = useCallback(isActive => onToggle(id, isActive), [id, onToggle]);
  const changeNameCallback = useCallback(name => onUpdate(id, { ...taskData, name: name }), [id, onUpdate, taskData]);
  const changePriorityCallback = useCallback(type => onUpdate(id, { ...taskData, priorityType: type }), [
    id,
    onUpdate,
    taskData
  ]);
  const changeDateCallback = useCallback(timestamp => onUpdate(id, { ...taskData, dueDate: timestamp }), [
    id,
    onUpdate,
    taskData
  ]);

  // Rendering
  const _renderDateTag = useMemo(() => {
    if (dueDate) {
      return (
        <DateTag style={{ marginLeft: AppSizes.paddingExtraSml }} timestamp={dueDate} onChange={changeDateCallback} />
      );
    }
  }, [changeDateCallback, dueDate]);

  return (
    <TouchableOpacity style={styles.container} onPress={pressCallback}>
      <ToggleBox isActive={isCompleted} onToggle={toggleCallback} />
      <View style={styles.infoContainer}>
        <EditableTextView
          text={name}
          placeholder={LanguageConfig.translate('task-name-placeholder')}
          onChange={changeNameCallback}
        />
        <View style={styles.tagContainer}>
          <PriorityTag priorityType={priorityType} onChange={changePriorityCallback} />
          {_renderDateTag}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
