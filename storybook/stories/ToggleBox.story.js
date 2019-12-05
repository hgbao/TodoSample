import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ToggleBox from '@components/ToggleBox';

storiesOf('ToggleBox', module).add('Default', () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ToggleBox />
    </View>
  );
});
