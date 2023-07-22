import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {HomeStyle} from '../assets/style/HomeStyle';
import {AppColor} from '../assets/colors/AppColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Neomorph} from 'react-native-neomorph-shadows';
import ServiceList from '../assets/components/Services/ServiceList';
import HomeDrawer from '../assets/components/Drawer/HomeDrawer';
import Header from '../assets/components/Header/Header';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  //States
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Steering Wheel Covers',
      price: '140 OMR',
      discount: 'Upto 50% off',
      image: AppColor.carStearing,
    },
    {
      id: 2,
      name: 'Light Bulbs',
      price: '75 OMR',
      discount: 'Upto 25% off',
      image: AppColor.lighBulb,
    },
  ]);

  //Variables
  const navigation = useNavigation();

  const serviceRenderItem = ({item}) => {
    return <ServiceList item={item} />;
  };

  //useEffect
  useEffect(() => {
    console.log("OOO")
  });

  return (
    <ScrollView style={HomeStyle.scrollView}>
      <View style={HomeStyle.parentView}>
        <Header
          onPress={() => {
            setDrawerOpen(true);
          }}
        />

        <TouchableOpacity
          style={HomeStyle.filterIcon}
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <MaterialIcon name="tune" size={wp('7')} color={'black'} />
        </TouchableOpacity>

        <View style={HomeStyle.headingView}>
          <Text style={HomeStyle.featured}>Featured Cars</Text>
          <Text style={HomeStyle.bestCar}>The best & favourite car</Text>
        </View>

        <View style={HomeStyle.carDetail}>
          <Image
            source={AppColor.mustang}
            style={HomeStyle.carImage}
            resizeMode="cover"
          />
          <View style={HomeStyle.carTextView}>
            <Text style={HomeStyle.innovation}>Innovation Vision</Text>
            <View style={HomeStyle.carNameView}>
              <Text style={HomeStyle.carName}>Ford Mustang GT 2022</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={wp('7')} color={'black'} />
              </TouchableOpacity>
            </View>
            <Text style={HomeStyle.carPrice}>$ 50.00 per day</Text>
          </View>
        </View>

        <View style={HomeStyle.serviceTag}>
          <Text style={HomeStyle.serviceText}>Services</Text>
          <TouchableOpacity>
            <Text style={HomeStyle.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={services}
          renderItem={serviceRenderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={HomeStyle.serviceTag}>
          <Text style={HomeStyle.serviceText}>Packages</Text>
          <TouchableOpacity>
            <Text style={HomeStyle.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={HomeStyle.packageView}>
          <View style={HomeStyle.packageInnerTextView}>
            <Text style={HomeStyle.packageText}>Wedding Packages</Text>
          </View>
          <View style={HomeStyle.packageInnerView}>
            <View style={HomeStyle.featuresView}>
              <View style={HomeStyle.featureTextView}>
                <Text style={HomeStyle.featureText}>Features</Text>
              </View>

              <Image
                source={AppColor.LC}
                style={HomeStyle.featuresCars}
                resizeMode="contain"
              />
            </View>

            <View>
              <View style={HomeStyle.carFeaturesView}>
                <FontAwesome5
                  name="gas-pump"
                  size={wp('8')}
                  color={'#282931'}
                />
                <View>
                  <Text style={HomeStyle.carFeatureText}>3 Cars</Text>
                  <Text style={HomeStyle.carFeatureText2}>
                    Common Rail Fuel Injection
                  </Text>
                </View>
              </View>
            </View>

            <View style={HomeStyle.carFeaturePriceView}>
              <Text style={HomeStyle.carFeaturePriceTextOne}>
                <Text style={HomeStyle.carFeaturePriceTextTwo}>$ </Text>
                45<Text style={HomeStyle.carFeaturePriceTextTwo}>.00</Text>
                <Text style={HomeStyle.carFeaturePriceTextThree}>/day</Text>
              </Text>
              <TouchableOpacity>
                <Neomorph style={HomeStyle.buttonStyle}>
                  <Text style={HomeStyle.buttonTextColor}>Explore</Text>
                </Neomorph>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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

export default Home;
