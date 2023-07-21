import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {HomeStyle} from '../../style/HomeStyle';
import {AppColor} from '../../colors/AppColor';

const HomeDrawer = ({onPress}) => {
  const [drawerList, setDrawerList] = useState([
    {
      id: 1,
      name: 'Overview Page',
      onPress: () => {
        console.log('Hello');
      },
      iconProvider: (
        <MaterialCommunityIcons
          name="tag-outline"
          size={wp('5')}
          color={'black'}
        />
      ),
    },
    {
      id: 2,
      name: 'Reserve a Car',
      onPress: () => {
        console.log('Hello');
      },
      iconProvider: (
        <FontAwesome5 name="car-alt" size={wp('5')} color={'black'} />
      ),
    },
    {
      id: 3,
      name: 'Services',
      onPress: () => {
        console.log('Hello');
      },
      iconProvider: (
        <FontAwesome name="user-circle-o" size={wp('5')} color={'black'} />
      ),
    },
    {
      id: 4,
      name: 'Car Accessories',
      onPress: () => {
        console.log('4');
      },
      iconProvider: (
        <FontAwesome5 name="car-alt" size={wp('5')} color={'black'} />
      ),
    },
    {
      id: 5,
      name: 'Language',
      onPress: () => {
        console.log('5');
      },
      iconProvider: <Ionicons name="language" size={wp('5')} color={'black'} />,
    },
    {
      id: 6,
      name: 'Safety',
      onPress: () => {
        console.log('5');
      },
      iconProvider: (
        <MaterialCommunityIcons
          name="shield-check-outline"
          size={wp('5')}
          color={'black'}
        />
      ),
    },
    {
      id: 7,
      name: 'Support',
      onPress: () => {
        console.log('5');
      },
      iconProvider: (
        <AntDesign name="customerservice" size={wp('5')} color={'black'} />
      ),
    },
  ]);

  const listRenderItem = ({item}) => {
    return (
      <View style={HomeStyle.drawerListView}>
        {item.iconProvider}
        <TouchableOpacity onPress={item.onPress}>
          <Text style={HomeStyle.drawerListText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={HomeStyle.drawerParentView}>
      <ImageBackground
        source={AppColor.drawer}
        style={HomeStyle.drawerBackgroundImage}
        resizeMode="contain">
        <View style={HomeStyle.drawerInnerView}>
          <TouchableOpacity style={HomeStyle.drawerCross} onPress={onPress}>
            <Entypo name="cross" size={wp('7')} color={'black'} />
          </TouchableOpacity>
          <View style={HomeStyle.drawerPictureView}>
            <Image
              source={AppColor.profileImage}
              style={HomeStyle.profileImage}
            />
            <View>
              <Text style={HomeStyle.drawerNameText}>John Doe</Text>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="star" size={wp('4')} color={'#FCDA28'} />
                <AntDesign name="star" size={wp('4')} color={'#FCDA28'} />
                <AntDesign name="star" size={wp('4')} color={'#FCDA28'} />
                <AntDesign name="star" size={wp('4')} color={'#FCDA28'} />
                <AntDesign name="staro" size={wp('4')} color={'#FCDA28'} />
              </View>
            </View>
            <TouchableOpacity>
              <FontAwesome5
                name="chevron-right"
                size={wp('4')}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.drawerFlatList}>
            <FlatList data={drawerList} renderItem={listRenderItem} />
          </View>
          <View style={HomeStyle.drawerSocialView}>
            <TouchableOpacity>
              <AntDesign
                name="facebook-square"
                size={wp('8')}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="twitter" size={wp('8')} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="instagram" size={wp('8')} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeDrawer;
