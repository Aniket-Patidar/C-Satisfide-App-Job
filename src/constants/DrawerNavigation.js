
import CustomDrawerContent from "../component/CustomDrawerContent.jsx";
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons, or any other icon library you prefer
import { useSelector } from "react-redux";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { headerStyle } from '../constants/colors';

/* login */
import { useEmployeeLoggedIn } from "./auth.js";


/* employee */
import DashScreen from "../dashbord/DashBord.jsx";
import Profile from "../dashbord/Profile";
import AllJobsScreen from "../dashbord/AllJobs";
import CreateJobScreen from "../dashbord/CreateJob";



/* Admin */
import AllStudent from "../Admin/AllStudent.jsx"
import AllEmployee from "../Admin/AllEmployee.jsx"
import AllJobs from "../Admin/AllJobs.jsx"
import DashBoard from "../Admin/Dashboard.jsx"

const Drawer = createDrawerNavigator();

function MyDrawer() {
    const { employee } = useSelector((e) => e.employee);

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>


            {!employee.isAdmin ?
                <>
                    <Drawer.Screen
                        name="Dashboard"
                        component={DashScreen}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <Icon
                                    name={focused ? 'home' : 'home-outline'}
                                    size={size}
                                    color={focused ? '#4080ED' : 'black'}
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
                                    color={focused ? '#4080ED' : 'black'}
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
                                    color={focused ? '#4080ED' : 'black'}
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
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {
                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: false,
                            headerTintColor: 'white',
                        }}
                    />
                </>
                :
                <>
                    <Drawer.Screen
                        name="DashBoard"
                        component={DashBoard}
                        options={{
                            drawerLabel: 'Dashboard',
                            drawerIcon: ({ focused, size }) => (
                                <Icon
                                    name={focused ? 'person' : 'person-outline'}
                                    size={size}
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {

                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: true,
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
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {
                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: false,
                            headerTintColor: 'white',
                        }}
                    />

                    <Drawer.Screen
                        name="All Student"
                        component={AllStudent}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <Icon
                                    name={focused ? 'person' : 'person-outline'}
                                    size={size}
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {
                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: true,
                            headerTintColor: 'white',
                        }}
                    />

                    <Drawer.Screen
                        name="All Employee"
                        component={AllEmployee}
                        options={{
                            drawerLabel: 'Employees',
                            drawerIcon: ({ focused, size }) => (
                                <Icon
                                    name={focused ? 'person' : 'person-outline'}
                                    size={size}
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {

                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: true,
                            headerTintColor: 'white',
                        }}
                    />

                    <Drawer.Screen
                        name="All Jobs"
                        component={AllJobs}
                        options={{
                            drawerLabel: 'All Jobs',
                            drawerIcon: ({ focused, size }) => (
                                <Icon
                                    name={focused ? 'person' : 'person-outline'}
                                    size={size}
                                    color={focused ? '#4080ED' : 'black'}
                                />
                            ),
                            headerStyle: {

                                backgroundColor: '#4080ED',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            },
                            headerShown: true,
                            headerTintColor: 'white',
                        }}
                    />
                </>
            }
        </Drawer.Navigator>
    );
}

export default MyDrawer;