
import DashScreen from "../dashbord/DashBord.jsx";
import AllJobsScreen from "../dashbord/AllJobs";
import CreateJobScreen from "../dashbord/CreateJob";
import Profile from "../dashbord/Profile";
import { headerStyle } from '../constants/colors';
import CustomDrawerContent from "../component/CustomDrawerContent.jsx";
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons, or any other icon library you prefer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEmployeeLoggedIn } from "./auth.js";
const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>

            <Drawer.Screen
                name="Dashboard"
                component={DashScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#4080ED',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    },
                    headerTintColor: 'white',
                }}
            />

            <Drawer.Screen
                name="Jobs"
                component={AllJobsScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name={focused ? 'briefcase' : 'briefcase-outline'}
                            size={size}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#4080ED',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    },
                    headerTintColor: 'white',
                }}
            />

            <Drawer.Screen
                name="Create Job"
                component={CreateJobScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name={focused ? 'create' : 'create-outline'}
                            size={size}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#4080ED',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    },
                    headerTintColor: 'white',
                }}

            />


            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name={focused ? 'person' : 'person-outline'}
                            size={size}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#4080ED',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    },
                    headerTintColor: 'white',
                }}
            />

        </Drawer.Navigator>
    );
}

export default MyDrawer;