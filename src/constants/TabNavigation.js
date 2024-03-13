
import HomeScreen from "../screens/Home.jsx";
import JobsScreen from "../screens/Jobs";
import ProfileScreen from "../screens/Profile.jsx"; // Import Profile screen
import AppliedScreen from "../screens/Applied";
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Image } from "react-native";
const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="home" size={24} color="black" />
                    ),
                    tabBarLabel: () => null
                }}
            />

            <Tab.Screen
                name="Jobs"
                component={JobsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="search1" size={24} color="black" />
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
                        <Image source={require("../../assets/save.png")} className="w-[20px] h-[20px]"></Image>
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
                    headerTitle: 'Profile',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'black',
                    },
                    headerStyle: {
                        backgroundColor: 'lightblue',
                        // You can add more styles as needed
                    },
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="user-alt" size={24} color="black" />
                    ),
                    tabBarLabel: () => null
                }}
            />

        </Tab.Navigator>
    );
}
export default TabNavigator;