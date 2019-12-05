import { AppRegistry } from 'react-native';
import config from 'react-native-config';

import { name as appName } from './app.json';

import App from './src';
import StorybookUI from './storybook';

if (config.IS_STORYBOOK) {
  AppRegistry.registerComponent(appName, () => StorybookUI);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
