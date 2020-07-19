/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackNavigation from './src/navigation/StackNavigation';
import tabNavigation from './src/navigation/tabNavigation';

AppRegistry.registerComponent(appName, () => tabNavigation);
