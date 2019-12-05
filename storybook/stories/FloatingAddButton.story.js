import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import FloatingAddButton from '@components/FloatingAddButton';

storiesOf('FloatingAddButton', module).add('Default', () => {
  return (
    <View style={{ flex: 1 }}>
      <FloatingAddButton />
    </View>
  );
});
