import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './app.routes';
import AuthStack from './auth.routes';

const MainNavigation = () => {
  const {currentUser} = useSelector((state: any) => state.user);

  return (
    <NavigationContainer>
      {!currentUser ? <AuthStack /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default MainNavigation;
