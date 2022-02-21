import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen name="Register" component={MemberSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
