import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { formatDate } from '@lib/utils';

import { LanguageConfig } from '@config';
import { AppSizes, AppFonts, AppStyles } from '@theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.card,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: AppSizes.paddingSml,
    paddingVertical: AppSizes.paddingExtraSml,
    alignItems: 'center'
  },
  icon: {
    ...AppStyles.icon,
    marginRight: AppSizes.paddingSml
  },
  dateText: {
    ...AppFonts.xsmall
  }
});

const DateTag = ({ style, timestamp, onChange }) => {
  const [_showPicker, _setShowPicker] = useState(false);
  const [_timestamp, _setTimestamp] = useState(timestamp);

  const showPickerCallback = useCallback(() => _setShowPicker(true), []);
  const updatePickerCallback = useCallback(
    (event, date) => {
      _setShowPicker(false);
      if (date) {
        const newTimestamp = moment(date).format('X');
        _setTimestamp(newTimestamp);
        onChange && onChange(newTimestamp);
      }
    },
    [onChange]
  );
  const removeDateCallback = useCallback(() => {
    _setTimestamp(null);
    onChange && onChange(null);
  }, [onChange]);

  // Rendering
  const _renderDatePicker = useMemo(
    () =>
      _showPicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={_timestamp ? moment.unix(_timestamp).toDate() : moment().toDate()}
          onChange={updatePickerCallback}
        />
      ),
    [_showPicker, _timestamp, updatePickerCallback]
  );

  const _renderText = useMemo(
    () => (_timestamp ? formatDate(_timestamp) : LanguageConfig.translate('task-date-placeholder')),
    [_timestamp]
  );

  return (
    <React.Fragment>
      <TouchableOpacity
        style={{ ...styles.container, ...style }}
        onPress={showPickerCallback}
        onLongPress={removeDateCallback}
      >
        <Image style={styles.icon} source={require('@images/ChecklistIcon.png')} />
        <Text style={styles.dateText}>{_renderText}</Text>
      </TouchableOpacity>
      {_renderDatePicker}
    </React.Fragment>
  );
};

export default DateTag;
