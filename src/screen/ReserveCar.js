import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Header from '../assets/components/Header/Header';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ReserveCarStyle} from '../assets/style/ReserveCarStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../assets/colors/AppColor';
import {useNavigation} from '@react-navigation/native';
import HomeDrawer from '../assets/components/Drawer/HomeDrawer';

const ReserveCar = () => {
  //Variable
  const navigation = useNavigation();

  //State
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ScrollView
      style={ReserveCarStyle.parentView}
      contentContainerStyle={ReserveCarStyle.scrollView}>
      <Header
        onPress={() => {
          setDrawerOpen(true);
        }}
      />
      <View style={ReserveCarStyle.tuneView}>
        <View>
          <Text style={ReserveCarStyle.headingText}>Explore</Text>
          <Text style={ReserveCarStyle.subHeadingText}>Available Cars</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <MaterialIcon name="tune" size={wp('7')} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={ReserveCarStyle.carDetailView}>
        <View style={ReserveCarStyle.carDetailInnerView}>
          <View>
            <Text style={ReserveCarStyle.carName}>Ford Mustang GT 2022</Text>
            <Text style={ReserveCarStyle.carPrice}>
              Min. $ 50.00 - Max $150
            </Text>
          </View>
          <View style={ReserveCarStyle.carFeatureView}>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>AC Ride</Text>
            </View>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>
                Fair Fuel Policy
              </Text>
            </View>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>
                In terminal
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Neomorph style={ReserveCarStyle.carDetailButton}>
              <Text style={ReserveCarStyle.carDetailButtonText}>
                Goin` Local
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
        <Image
          source={AppColor.mustang}
          style={{width: wp('32'), height: wp('45')}}
          resizeMode="contain"
        />
      </View>
      <View style={ReserveCarStyle.carDetailView}>
        <View style={ReserveCarStyle.carDetailInnerView}>
          <View>
            <Text style={ReserveCarStyle.carName}>Ford Mustang GT 2022</Text>
            <Text style={ReserveCarStyle.carPrice}>
              Min. $ 50.00 - Max $150
            </Text>
          </View>
          <View style={ReserveCarStyle.carFeatureView}>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>AC Ride</Text>
            </View>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>
                Fair Fuel Policy
              </Text>
            </View>
            <View style={ReserveCarStyle.carFeatureButton}>
              <Text style={ReserveCarStyle.carFeatureButtonText}>
                In terminal
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Neomorph style={ReserveCarStyle.carDetailButton}>
              <Text style={ReserveCarStyle.carDetailButtonText}>
                Goin` Local
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
        <Image
          source={AppColor.LC2}
          style={{width: wp('32'), height: wp('45')}}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Neomorph style={ReserveCarStyle.reservedButton}>
          <Text style={ReserveCarStyle.reservedButtonText}>Reserved</Text>
        </Neomorph>
      </TouchableOpacity>
      {drawerOpen ? (
        <HomeDrawer
          onPress={() => {
            setDrawerOpen(false);
          }}
        />
      ) : null}
    </ScrollView>
  );
};

export default ReserveCar;
