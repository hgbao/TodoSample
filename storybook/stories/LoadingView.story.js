import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { number } from '@storybook/addon-knobs';
import LoadingView from '@components/LoadingView';

storiesOf('LoadingView', module).add('Default', () => {
  const opacity = number('Opacity', 1);

  return <LoadingView opacity={opacity} />;
});
