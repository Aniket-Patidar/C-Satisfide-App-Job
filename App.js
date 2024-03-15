import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./src/screens/Welcome";

import RegisterScreenEmployee from "./src/dashbord/Register";
import LoginScreenUserEmployee from "./src/dashbord/Login";

import RegisterScreenStudent from "./src/screens/Register.jsx";
import LoginScreenUserStudent from "./src/screens/Login.jsx";
import TabNavigator from "./src/constants/TabNavigation"
import DetailsScreen from "./src/screens/Details";
import ResumaScreen from "./src/screens/Resuma";
import MyDrawer from './src/constants/DrawerNavigation.js';
import store from './store';
import { Provider } from 'react-redux';
import { useEmployeeLoggedIn, useUserLoggedIn } from './src/constants/auth.js';
import DetailsEmployee from './src/dashbord/DetailsEmployee.jsx';
import SettingScreen from './src/screens/Setting.jsx';



const Stack = createNativeStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/splash.png")} className="w-fit" style={styles.image}></Image>
    </View>
  );
};


export default function App() {

  React.useEffect(() => {
    StatusBar.setBackgroundColor('#4080ED');
  }, []);

 
  const { userLoggedIn, setUserLoggedIn } = useUserLoggedIn();
  const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();

  return (
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator>
              {userLoggedIn && (
                <Stack.Screen
                  name="TabNavigator"
                  component={TabNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
              )}
              {employeeLoggedIn && (
                <Stack.Screen
                  name="DrawerNavigator"
                  component={MyDrawer}
                  options={{ headerShown: false }}
                />
              )}

              {!employeeLoggedIn && !userLoggedIn && (
                <>
                  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="Login Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={LoginScreenUserEmployee} options={{ headerShown: false }} />
                  <Stack.Screen name="Register Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={RegisterScreenEmployee} options={{ headerShown: false }} />

                  <Stack.Screen name="Login Student" initialParams={{ setUserLoggedIn }} component={LoginScreenUserStudent} options={{ headerShown: false }} />
                  <Stack.Screen name="Register Student" initialParams={{ setUserLoggedIn }} component={RegisterScreenStudent} options={{ headerShown: false }} />
                </>
              )}

              <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
              <Stack.Screen name="Setting" component={SettingScreen}
                options={{
                  title: 'Settings',
                  headerStyle: {
                    backgroundColor: '#4080ED',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }} />
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
    backgroundColor: '#000',
  },
  image: {
    width: '100%', // Take up the entire width of the container
    height: '100%', // Automatically calculate the height based on the aspect ratio
    // aspectRatio: 1, // Ensure the image maintains its aspect ratio
  },
});

