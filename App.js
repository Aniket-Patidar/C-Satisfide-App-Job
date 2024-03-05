import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/Home"
import LoginScreen from "./src/screens/Login"
import RegisterScreen from "./src/screens/Register"
import JobsScreen from "./src/screens/Jobs"
import DetailsScreen from "./src/screens/Details"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
          <Stack.Screen name="Jobs" options={{ headerShown: false }} component={JobsScreen} />
          <Stack.Screen name="Details" options={{ headerShown: true }} component={DetailsScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android status bar
  },
});

export default App;
