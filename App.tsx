import React from 'react-native';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION_SCREEN } from './src/common/navigation';
import More from './src/pages/More';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NAVIGATION_SCREEN.HOME}>
        <Stack.Screen name={NAVIGATION_SCREEN.HOME} component={Home} />
        <Stack.Screen name={NAVIGATION_SCREEN.MORE} component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
