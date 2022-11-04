import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../../screens/ListScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import AppColors from '../../utills/AppColors';
import { Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { width, height } from 'react-native-dimension'
const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: AppColors.black,
                inactiveTintColor: AppColors.inActive,
                style: {
                    height: Platform.OS == 'ios' ? height(11) : height(8.5),
                    borderTopLeftRadius: width(3),
                    borderTopRightRadius: width(3),
                    overflow: 'hidden'
                },
                tabStyle: {
                    padding: width(1),
                    paddingBottom: height(1.2),
                    backgroundColor: AppColors.white,

                },
                labelPosition: 'below-icon'
            }}>
            <Tab.Screen
                options={(navigation) => ({
                    tabBarLabel: 'List',
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name={'list'}
                            color={color}
                            size={height(3)} />
                    ),
                })}
                name="ListScreen"
                component={ListScreen} />
            <Tab.Screen
                options={(navigation) => ({
                    tabBarLabel: 'Calendar',
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name={'calendar'}
                            color={color}
                            size={height(3)} />
                    ),
                })}
                name="CalendarScreen"
                component={CalendarScreen} />
        </Tab.Navigator >
    );
}
export default BottomTabs