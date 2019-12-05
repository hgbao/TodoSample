import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ToggleBox from '@components/ToggleBox';

import { AppStyles } from '@theme';

storiesOf('ToggleBox', module).add('Default', () => {
  return (
    <View style={AppStyles.centerScreen}>
      <ToggleBox />
    </View>
  );
});
