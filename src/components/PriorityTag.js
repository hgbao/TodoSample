import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TaskPriorityType, TaskPriorityPreference } from '@constants/task';
import { AppSizes, AppFonts, AppStyles, AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.card,
    borderWidth: 0,
    alignSelf: 'flex-start',
    padding: AppSizes.paddingSml,
    alignItems: 'center',
    minWidth: 60
  },
  priorityName: {
    ...AppFonts.small,
    color: AppColors.background
  }
});

const PriorityTag = ({ style, priorityType = TaskPriorityType.LOW, onChange, isActive = true }) => {
  const [_priorityType, _setPriorityType] = useState(priorityType);

  const changePriorityCallback = useCallback(() => {
    const nextPriority = TaskPriorityPreference.getNextPriority(_priorityType);
    _setPriorityType(nextPriority);
    onChange && onChange(nextPriority);
  }, [_priorityType, onChange]);

  useEffect(() => _setPriorityType(prevState => (prevState !== priorityType ? priorityType : prevState)), [
    priorityType
  ]);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        backgroundColor: TaskPriorityPreference.getColor(_priorityType),
        opacity: isActive ? 1 : 0.5
      }}
      onPress={changePriorityCallback}
    >
      <Text style={styles.priorityName}>{TaskPriorityPreference.getName(_priorityType)}</Text>
    </TouchableOpacity>
  );
};

export default PriorityTag;
