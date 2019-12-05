import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import PriorityTag from '@components/PriorityTag';

import { AppStyles } from '@theme';

storiesOf('PriorityTag', module).add('Default', () => {
  return (
    <View style={AppStyles.centerScreen}>
      <PriorityTag />
    </View>
  );
});
