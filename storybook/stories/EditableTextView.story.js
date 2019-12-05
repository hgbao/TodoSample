import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import EditableTextView from '@components/EditableTextView';

import { AppStyles } from '@theme';

storiesOf('EditableTextView', module).add('Default', () => {
  const placeholder = text('Placeholder', 'Placeholder');

  return (
    <View style={AppStyles.centerScreen}>
      <EditableTextView placeholder={placeholder} />
    </View>
  );
});
