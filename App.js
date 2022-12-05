import React from 'react';
import {LoginScreen} from './src/Home/LoginScreen';
import {UploadScreen} from './src/Home/Spirit';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Log into Spirit!',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Spirit" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
