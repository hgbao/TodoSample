import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import './rn-addons';

// global decorator;
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
const StorybookUIHMRRoot = () => {
  return <StorybookUIRoot />;
};

export default StorybookUIHMRRoot;
