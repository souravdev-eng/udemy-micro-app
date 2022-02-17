import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './app.routes';
import AuthStack from './auth.routes';
import {BottomTab} from './bottom-tab.routes';

const MainNavigation = () => {
  // const {currentUser} = useSelector((state: any) => state.user);
  const currentUser = true;

  return (
    <NavigationContainer>
      {!currentUser ? <AuthStack /> : <BottomTab />}
    </NavigationContainer>
  );
};

export default MainNavigation;
