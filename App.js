import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons';

import WelcomeScreen from "./src/screens/Welcome";
import RegisterScreen from "./src/screens/Register";
import LoginScreen from "./src/screens/Login";

import HomeScreen from "./src/screens/Home";
import JobsScreen from "./src/screens/Jobs";
import ProfileScreen from "./src/screens/Profile.jsx"; // Import Profile screen
import DetailsScreen from "./src/screens/Details"; // Import Details screen
import AppliedScreen from "./src/screens/Applied";
import ResumaScreen from "./src/screens/Resuma";


import DashScreen from "./src/dashbord/DashBord";
import AllJobsScreen from "./src/dashbord/AllJobs";
import CreateJobScreen from "./src/dashbord/CreateJob";
import Profile from "./src/dashbord/Profile";
import { View } from 'react-native-web';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/home.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />

      {/* Jobs Tab */}
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/job.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />



      {/* Setting Tab */}
      <Tab.Screen
        name="Applied"
        component={AppliedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/save.png")} className="w-[20px] h-[20px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/profile.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />

    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashScreen} />
      <Drawer.Screen name="Create Job" component={CreateJobScreen} />
      <Drawer.Screen name="Jobs" component={AllJobsScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}


export default function App() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const [employeeLoggedIn, setEmployeeLoggedIn] = React.useState(true);
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          {userLoggedIn &&
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
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
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" initialParams={{ setUserLoggedIn: setUserLoggedIn }} component={RegisterScreen} options={{ headerShown: false }} />
          </>)
          }
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Resuma" component={ResumaScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
