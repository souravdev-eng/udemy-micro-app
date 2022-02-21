import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import {RootStack} from './navigation.types';
import CourseDetails from '../screens/course-details';

const Stack = createNativeStackNavigator<RootStack>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
