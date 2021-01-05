/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
if(Platform.OS === 'android') { // only android needs polyfill
    require('intl'); // import intl object
    require('intl/locale-data/jsonp/en-US'); // load the required locale details
    Intl.__disableRegExpRestore(); /*For syntaxerror invalid regular expression unmatched parentheses*/
}

AppRegistry.registerComponent(appName, () => App);
