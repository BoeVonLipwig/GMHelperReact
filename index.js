import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
AppRegistry.registerComponent('GMHelper', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger']);
