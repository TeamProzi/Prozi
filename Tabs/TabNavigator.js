import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Library from "./LibraryTab/Library";
import REM from "./REMTab/REM";
import Directory from "./DirectoryTab/Directory";
import Duty from "./DutyTab/Duty";

const Tab = createBottomTabNavigator();
//probably want to change this to CustomTabBarButtons someday
export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: '#10564B',
                tabBarStyle: { backgroundColor: '#007360'},
                tabBarLabelStyle: { color: '#FFFFFF' },
                tabBarIconStyle: { width: 24, height: 24}
            }}
            initialRouteName="Duty"
        >
            <Tab.Screen
                name="Duty"
                component={Duty}
                options={{
                    tabBarIcon: () => (
                      <Image source={require('./../assets/duty.png')} style={{ width: 24, height: 24 }} />
                    )
                }}
            />
            <Tab.Screen
                name="Library"
                component={Library}
                options={{
                    tabBarIcon: () => (
                      <Image source={require('./../assets/library.png')} style={{ width: 24, height: 24 }} />
                    )
                }}
            />
            <Tab.Screen
                name="REM"
                component={REM}
                options={{
                    tabBarIcon: () => (
                      <Image source={require('./../assets/REM.png')} style={{ width: 24, height: 24 }} />
                    )
                }}
            />
            <Tab.Screen
                name="Directory"
                component={Directory}
                options={{
                    tabBarIcon: () => (
                      <Image source={require('./../assets/directory.png')} style={{ width: 24, height: 24 }} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
