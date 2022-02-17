import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppNavigation from './app.routes';
import MyLearningScreen from '../screens/my-learning';
import SearchScreen from '../screens/search';
import WishListScreen from '../screens/wishlist';
import AccountScreen from '../screens/account';

import {theme} from '../themes';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.Black,
        tabBarInactiveTintColor: theme.colors.LightGrey,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.Inter_SemiBold,
          fontSize: 10.2,
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Featured"
        component={AppNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Octicons
              name={focused ? 'star-fill' : 'star'}
              color={color}
              size={size * 1.2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="search1" color={color} size={size * 1.2} />
          ),
        }}
      />
      <Tab.Screen
        name="MyLearning"
        component={MyLearningScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name={focused ? 'play' : 'playcircleo'}
              color={color}
              size={size * 1}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name={focused ? 'heart' : 'hearto'}
              color={color}
              size={size * 1.1}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              color={color}
              size={size * 1.2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
