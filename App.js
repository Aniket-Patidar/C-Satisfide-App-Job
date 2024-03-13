import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./src/screens/Welcome";



import RegisterScreenEmployee from "./src/dashbord/Register";
import LoginScreenUserEmployee from "./src/dashbord/Login";

import RegisterScreenStudent from "./src/screens/Register.jsx";
import LoginScreenUserStudent from "./src/screens/Login.jsx";

import DetailsScreen from "./src/screens/Details"; // Import Details screen
import ResumaScreen from "./src/screens/Resuma";
import MyDrawer from './src/constants/DrawerNavigation.js';
const Stack = createNativeStackNavigator();
import store from './store';
import { Provider, useSelector } from 'react-redux';
import TabNavigator from './src/constants/TabNavigation.js';
import { useEmployeeLoggedIn, useUserLoggedIn } from './src/constants/auth.js';
import DetailsEmployee from './src/dashbord/DetailsEmployee.jsx';

export default function App() {

  const { userLoggedIn, setUserLoggedIn } = useUserLoggedIn();
  const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
            {userLoggedIn &&
              <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                  headerShown: false,
                }}
              />
            }
            {employeeLoggedIn && <>
              <Stack.Screen
                name="DrawerNavigator"
                component={MyDrawer}
                options={{ headerShown: false }}
              />
            </>}


            {!employeeLoggedIn && !userLoggedIn && (<>
              <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={LoginScreenUserEmployee} options={{ headerShown: false }} />
              <Stack.Screen name="Register Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={RegisterScreenEmployee} options={{ headerShown: false }} />

              <Stack.Screen name="Login Student" initialParams={{ setUserLoggedIn }} component={LoginScreenUserStudent} options={{ headerShown: false }} />
              <Stack.Screen name="Register Student" initialParams={{ setUserLoggedIn }} component={RegisterScreenStudent} options={{ headerShown: false }} />
            </>)}

            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
            <Stack.Screen name="Job Details" component={DetailsEmployee} options={{ headerShown: false }} />
            <Stack.Screen name="Resuma" component={ResumaScreen} options={{ headerShown: true }} />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
