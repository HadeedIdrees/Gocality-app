import React from 'react';
import {HomeStyle} from '../../style/HomeStyle';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const ServiceList = ({item}) => {
  return (
    <View style={HomeStyle.serviceView}>
      <View style={HomeStyle.serviceImageView}>
        <Image source={item.image} style={HomeStyle.serviceImage} />
      </View>
      <View>
        <Text
          style={HomeStyle.serviceName}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={HomeStyle.discount}>{item.discount}</Text>
        <Text style={HomeStyle.servicePrice}>{item.price}</Text>
        <TouchableOpacity style={HomeStyle.sericeButton}>
          <Text style={HomeStyle.serviceButtontext}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceList;
