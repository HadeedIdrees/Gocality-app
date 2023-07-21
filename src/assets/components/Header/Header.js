import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {HomeStyle} from '../../style/HomeStyle';
import {AppColor} from '../../colors/AppColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Header = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={HomeStyle.headerView}>
        <TouchableOpacity onPress={onPress}>
          <FontAwesome name="bars" size={wp('5')} color={'black'} />
        </TouchableOpacity>
        <View style={HomeStyle.locationView}>
          <Entypo name="location-pin" size={wp('7')} color={'black'} />
          <Text style={HomeStyle.textStyle}>California</Text>
          <AntDesign name="down" size={wp('3')} color={'black'} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <Image
            source={AppColor.profileImage}
            style={HomeStyle.profileImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={HomeStyle.date}>12/07/2023</Text>
    </View>
  );
};

export default Header;
