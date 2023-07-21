import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EditProfile from '../EditProfile';
import Home from '../Home';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Edit Profile' component={EditProfile} />
    </Drawer.Navigator>
  );
};

export default Drawer;
