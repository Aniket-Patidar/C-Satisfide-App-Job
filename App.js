import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from "./src/screens/Home";
import JobsScreen from "./src/screens/Jobs";
import ProfileScreen from "./src/screens/Profile.jsx"; // Import Profile screen
import DetailsScreen from "./src/screens/Details"; // Import Details screen
import WelcomeScreen from "./src/screens/Welcome";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
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
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/job.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/profile.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />

      {/* Setting Tab */}
      <Tab.Screen
        name="Setting"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require("./assets/setting.png")} className="w-[22px] h-[22px]"></Image>
          ),
          tabBarLabel: () => null
        }}
      />
    </Tab.Navigator>
  );
}

// Main component
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(true);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          {userLoggedIn ? (
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            </>
          )}
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
