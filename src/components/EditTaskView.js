import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import PriorityTag from '@components/PriorityTag';
import DateTag from '@components/DateTag';

import { TaskPriorityType } from '@constants/task';
import { LanguageConfig } from '@config';
import { AppColors, AppSizes, AppFonts } from '@theme';

const styles = StyleSheet.create({
  container: {
    padding: AppSizes.padding,
    backgroundColor: AppColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0
  },
  taskName: {
    ...AppFonts.large,
    padding: AppSizes.paddingExtraSml
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: AppSizes.padding
  },
  priorityContainer: {
    marginRight: AppSizes.paddingSml
  },
  actionContainer: {
    marginTop: AppSizes.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionDeleteText: {
    ...AppFonts.headline500,
    color: AppColors.danger
  },
  actionSaveText: {
    ...AppFonts.headline500,
    color: AppColors.active
  }
});

const EditTaskView = ({
  name = '',
  priorityType = TaskPriorityType.LOW,
  dueDate = null,
  onCallback,
  onClose,
  onRemoveCallback
}) => {
  const [_name, _setName] = useState(name);
  const [_priorityType, _setPriorityType] = useState(priorityType);
  const [_dueDate, _setDueDate] = useState(dueDate);

  const changeNameCallback = useCallback(text => _setName(text), []);
  const changePriorityCallback = useCallback(type => _setPriorityType(type), []);
  const changeDateCallback = useCallback(timestamp => _setDueDate(timestamp), []);

  const saveCallback = useCallback(() => {
    onCallback &&
      onCallback({
        name: _name,
        priorityType: _priorityType,
        dueDate: _dueDate
      });
    onClose && onClose();
  }, [_dueDate, _name, _priorityType, onCallback, onClose]);

  const removeCallback = useCallback(() => {
    onRemoveCallback && onRemoveCallback();
    onClose && onClose();
  }, [onClose, onRemoveCallback]);

  // Rendering
  const _renderDeleteButton = useMemo(
    () =>
      onRemoveCallback && (
        <TouchableOpacity onPress={removeCallback}>
          <Text style={styles.actionDeleteText}>{LanguageConfig.translate('task-action-delete')}</Text>
        </TouchableOpacity>
      ),
    [onRemoveCallback, removeCallback]
  );

  return (
    <Modal style={styles.modalContainer} isVisible animationIn="slideInUp" avoidKeyboard onBackdropPress={onClose}>
      <View style={styles.container}>
        <TextInput
          style={styles.taskName}
          value={_name}
          onChangeText={changeNameCallback}
          placeholder={LanguageConfig.translate('task-name-placeholder')}
          autoFocus
        />
        <View style={styles.tagContainer}>
          <PriorityTag
            style={styles.priorityContainer}
            priorityType={_priorityType}
            onChange={changePriorityCallback}
          />
          <DateTag timestamp={_dueDate} onChange={changeDateCallback} />
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={saveCallback}>
            <Text style={styles.actionSaveText}>{LanguageConfig.translate('task-action-save')}</Text>
          </TouchableOpacity>
          {_renderDeleteButton}
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskView;
