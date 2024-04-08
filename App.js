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

import Forget from './src/screens/Forget.jsx'

import OTPScreen from './src/screens/OTP.jsx';

import OnboardingScreen from './src/component/Onboarding.jsx'
import EditScreen from './src/dashbord/EditJob.jsx'


import ProfileEmployee from './src/dashbord/ProfileEmployee.jsx';
import ProfileStudent from './src/screens/ProfileStudent.jsx';

import PrivacyPolicy from './src/dashbord/PrivacyPolicy.jsx';
import AboutUs from './src/dashbord/AboutUs.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Main.js';


const Stack = createNativeStackNavigator();

export default function App() {

  React.useEffect(() => {
    StatusBar.setBackgroundColor('#4080ED');
  }, []);


  const { userLoggedIn, setUserLoggedIn } = useUserLoggedIn();
  const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();


  const checkOnboardingStatus = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      return onboardingCompleted !== null;
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      return false;
    }
  };

  const renderOnboardingScreen = async () => {
    const onboardingCompleted = await checkOnboardingStatus();
    return onboardingCompleted;
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
