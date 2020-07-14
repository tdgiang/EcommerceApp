/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackNavigation from './src/navigation/StackNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
