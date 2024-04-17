import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from "react"

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

import { useDispatch, useSelector } from "react-redux";
import useTokenAndFetchCurrentUser from './src/component/isUserExist.js';
import { currentStudent } from './src/redux/action/studentAction.js';
import { currentEmployee } from './src/redux/action/employeeAction.js';
import ForgetEmployee from './src/dashbord/Forget.jsx';

const Stack = createNativeStackNavigator();

export default function Main() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        StatusBar.setBackgroundColor('#4080ED');
    }, []);

    const { userLoggedIn, setUserLoggedIn } = useUserLoggedIn();
    const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();



    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                dispatch(currentStudent());
                dispatch(currentEmployee());
            }

        }
        checkToken()
    }, [])

    const { student } = useSelector((e) => e.student)
    const { employee } = useSelector((e) => e.employee)

    useEffect(() => {
        if (student) {
            setUserLoggedIn(true);
        }
    }, [student])

    useEffect(() => {
        if (employee) {
            setEmployeeLoggedIn(true);
        }
    }, [employee])

    const [onboardingCompleted, setOnboardingCompleted] = React.useState(false);


    const checkOnboardingStatus = async () => {
        try {
            const value = await AsyncStorage.getItem("onboardingCompleted");
            setOnboardingCompleted(value === "true");
        } catch (error) {
            console.error("Error checking onboarding status:", error);
        }
    };

    useEffect(() => {
        checkOnboardingStatus();
      }, []);



    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                {userLoggedIn && (
                    <Stack.Screen
                        name="TabNavigator"
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                        }}
                        initialParams={{ userLoggedIn, setUserLoggedIn }}
                    />
                )}

                {employeeLoggedIn && (
                    <Stack.Screen
                        name="DrawerNavigator"
                        component={MyDrawer}
                        options={{ headerShown: false }}
                        initialParams={{ employeeLoggedIn, setEmployeeLoggedIn }}
                    />
                )}

                {!employeeLoggedIn && !userLoggedIn && (
                    <>
                        {!onboardingCompleted && <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />}
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Login Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={LoginScreenUserEmployee} options={{ headerShown: false }} />
                        <Stack.Screen name="Register Employee" initialParams={{ setUserLoggedIn, setEmployeeLoggedIn }} component={RegisterScreenEmployee} options={{ headerShown: false }} />
                        <Stack.Screen name="Register Student" initialParams={{ setUserLoggedIn }} component={RegisterScreenStudent} options={{ headerShown: false }} />
                        <Stack.Screen name="OTP Student" initialParams={{ setUserLoggedIn }} component={OTPScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="forgot Password" initialParams={{ setUserLoggedIn }} component={Forget} options={{ headerShown: false }} />
                        <Stack.Screen name="forgot Password Employee" initialParams={{ setUserLoggedIn }} component={ForgetEmployee} options={{ headerShown: false }} />
                        <Stack.Screen name="Login Student" initialParams={{ setUserLoggedIn }} component={LoginScreenUserStudent} options={{
                            headerShown: false,
                            statusBarStyle: 'light-content',
                            statusBarBackgroundColor: '#your_color_here' // Change the status bar background color to black
                        }} />
                    </>
                )}

                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />

                <Stack.Screen name="Setting" component={SettingScreen} options={{
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

                <Stack.Screen name="ProfileStudent" component={ProfileStudent} options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#4080ED',
                    },
                    headerTintColor: 'white',
                    headerTitle: 'Profile',
                }} />

                <Stack.Screen name="ProfileEmployee" component={ProfileEmployee} options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#4080ED',
                    },
                    headerTintColor: 'white',
                    headerTitle: 'Profile',
                }} />

                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#4080ED',
                    },
                    headerTintColor: 'white',
                    headerTitle: 'Privacy Policy',
                }} />

                <Stack.Screen name="About" component={AboutUs} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#4080ED',
                    },
                    headerTintColor: 'white',
                    headerTitle: 'About Us',
                }} />

                <Stack.Screen name="EditEmployeeJob"
                    component={EditScreen}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#4080ED',
                        },
                        headerTintColor: 'white',
                        headerTitle: 'Edit Job',
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>
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

