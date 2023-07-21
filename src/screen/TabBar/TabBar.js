import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import EditProfile from '../EditProfile';
import ReserveCar from '../ReserveCar';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AppColor} from '../../assets/colors/AppColor';

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: wp('3'),
          textDecorationLine: 'underline',
        },
        tabBarInactiveTintColor: '#928B8B',
        tabBarActiveTintColor: AppColor.primaryTeal,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name={'home'}
              color={focused ? AppColor.primaryTeal : '#928B8B'}
              size={wp('5')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Car"
        component={ReserveCar}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5 name="car-alt" size={wp('5')} color={focused ? AppColor.primaryTeal : '#928B8B'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
