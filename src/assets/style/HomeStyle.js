import { StyleSheet } from "react-native";
import { AppColor } from "../colors/AppColor";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const HomeStyle = StyleSheet.create({
    scrollView: {flex: 1, backgroundColor: AppColor.white},
    parentView: {flex:1, backgroundColor: AppColor.white, alignItems: 'center'},

    headerView: {flexDirection: 'row', width: wp('90'), paddingTop: wp('5'), alignItems: 'center', justifyContent: 'space-between'},
    hamburg: {width: wp('5'), height: wp('5')},
    locationView: {flexDirection: 'row', alignItems: 'center', width: wp('37'), justifyContent: 'space-between'},
    profileImage: {width: wp('10'), height: wp('10'), borderRadius: wp('7')},
    textStyle: {fontFamily: 'Poppins-Bold', fontSize: wp('4'), color: 'black'},
    
    date: {fontFamily: 'Poppins-Light', fontSize: wp('2.5'), color: AppColor.primaryGold, alignSelf: 'center'},
    filterIcon: {width: wp('90'), alignItems: 'flex-end', paddingTop: wp('3')},
    
    headingView: {width: wp('90'), alignSelf: 'center'},
    featured: {fontFamily: 'Poppins-Bold', fontSize: wp('6'), color: 'black'},
    bestCar: {fontFamily: 'Poppins-Light', fontSize: wp('3'), color: '#928B8B'},
    
    carDetail: {width: wp('80'), height: wp('90'), backgroundColor: '#F6F8F8', marginTop: wp('5'), borderRadius: wp('10'), alignSelf: 'center', justifyContent: 'space-around'},
    carImage: {width: wp('85'), height: wp('45')},
    carTextView: {width: wp('70'), alignSelf: 'center'},
    innovation: {fontFamily: 'Poppins-Light', fontSize: wp('4'), color: '#928B8B'},
    carNameView: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    carName: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: '#000000'},
    carPrice: {fontFamily: 'Poppins-Medium', fontSize: wp('5'), color: '#000000'},
    
    serviceTag: {flexDirection: 'row', width: wp('90'), justifyContent: 'space-between', alignItems: 'center', marginTop: wp('10')},
    serviceText: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: '#000000'},
    seeAll: {fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: '#928B8B'},
    
    serviceView: {width: wp('45'), height: wp('70'), backgroundColor: '#F6F8F8', marginTop: wp('5'), marginHorizontal: wp('5'), alignItems: 'center', justifyContent: 'space-between'},
    serviceImageView: {paddingVertical: wp('3')},
    serviceImage: {width: wp('40'), height: wp('35')},
    serviceName: {fontFamily: 'Poppins-Bold', fontSize: wp('3.5'), color: '#000000', textAlign: 'center'},
    discount: {fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: '#928B8B', textAlign: 'center'},
    servicePrice: {fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: 'red', textAlign: 'center'},
    sericeButton: {width: wp('45'), height: wp('10'), backgroundColor: AppColor.primaryTeal, alignItems: 'center', justifyContent: 'center'},
    serviceButtontext: {fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.white, textAlign: 'center'},

    packageView: {width: wp('90'), height: wp('115'), backgroundColor: '#282931', marginVertical: wp('5'), borderTopRightRadius: wp('10'), borderTopLeftRadius: wp('10'), alignSelf: 'center'},
    packageInnerTextView: {height: wp('30'), padding: wp('5')},
    packageInnerView: {width: wp('90'), height: wp('83'), backgroundColor: AppColor.white, borderTopRightRadius: wp('10'), borderTopLeftRadius: wp('10'), alignSelf: 'center', alignItems: 'center'},
    packageText: {fontFamily: 'Poppins-Bold', fontSize: wp('6'), color: AppColor.white, width: wp('50')},
    featuresView: {paddingTop: wp('10'),width: wp('80'),flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: wp('-25')},
    featureTextView: { height: wp('20'), justifyContent: 'flex-end' },
    featureText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: '#292D32'},
    featuresCars: {width: wp('45'), height: wp('45')},
    carFeaturesView: {width: wp('45'), height: wp('27'), borderWidth: wp('0.1'), borderColor: '#282931', borderRadius: wp('5'), justifyContent: 'space-evenly', paddingHorizontal: wp('3')},
    carFeatureImage: {width: wp('10'), height: wp('15')},
    carFeatureText: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: '#282931'},
    carFeatureText2: {fontFamily: 'Poppins-Light', fontSize: wp('2'), color: '#898A8D'},
    carFeaturePriceView: {width: wp('90'), paddingHorizontal: wp('5'), paddingVertical: wp('10'), flexDirection: 'row', justifyContent: 'space-between'},
    carFeaturePriceTextOne: {fontFamily: 'Poppins-Bold', fontSize: wp('8'), color: '#282931'},
    carFeaturePriceTextTwo: {fontFamily: 'Poppins-Medium', fontSize: wp('8'), color: '#282931'},
    carFeaturePriceTextThree: {fontFamily: 'Poppins-Light', fontSize: wp('5'), color: '#282931'},
    buttonStyle: {width: wp('30'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#214D5A', shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
    buttonTextColor: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white,},

    drawerParentView: {position: 'absolute', top: 0, left: 0, backgroundColor: AppColor.white, width: wp('70'), height: hp('90')},
    drawerBackgroundImage: {width: wp('70'), height: hp('70'), marginTop: hp('20')},
    drawerCross: {width: wp('60'), alignSelf: 'center', alignItems: 'flex-end'},
    drawerInnerView: {position: 'absolute', top: hp(-20), left: 0, width: wp('70'), height: hp('90'), justifyContent: 'space-evenly'},
    drawerPictureView: {flexDirection: 'row', width: wp('40'), marginHorizontal: wp('5'), alignItems: 'center', justifyContent: 'space-between'},
    drawerNameText: {fontFamily: 'Poppins-Bold', fontSize: wp('4'), color: AppColor.primaryTeal},
    drawerListView: {flexDirection: 'row', width: wp('45'), justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp('5'), marginVertical: wp('3')},
    drawerListText: {fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: 'black', width: wp('37')},
    drawerSocialView: {flexDirection: 'row', width: wp('70'), justifyContent: 'space-evenly'},


})

export {HomeStyle}