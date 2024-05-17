import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { RootNavigator } from './navigations/RootNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Setting a timer',
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',

]);

export default function App() {
  return (
    
    <Provider store={store}>
      <RootNavigator noMean={"test"}/>
      <h2>this is App.tsx</h2>
    </Provider>

    
  );
}