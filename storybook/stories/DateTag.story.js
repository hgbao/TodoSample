import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import DateTag from '@components/DateTag';

import { AppStyles } from '@theme';

storiesOf('DateTag', module).add('Default', () => {
  return (
    <View style={AppStyles.centerScreen}>
      <DateTag />
    </View>
  );
});
