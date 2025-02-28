import { registerRootComponent } from 'expo';
// Import the global.css file in the index.js file:
// If using Expo Router, import your CSS file in the app/_layout.tsx file

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
