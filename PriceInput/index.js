/**
 * @format
 */
if(Platform.OS === 'android') { // only android needs polyfill
    require('intl'); // import intl object
    require('intl/locale-data/jsonp/en-US'); // load the required locale details
}
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
