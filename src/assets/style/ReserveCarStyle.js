import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const ReserveCarStyle = StyleSheet.create({
    parentView: { flex: 1, backgroundColor: AppColor.white},
    scrollView: {alignItems: 'center'},
    tuneView: {flexDirection: 'row', justifyContent: 'space-between', width: wp('90'), alignItems: 'center', marginTop: wp('4')},
    headingText: {fontFamily: 'Poppins-Bold', fontSize: wp('7'), color: AppColor.primaryGold},
    subHeadingText: {fontFamily: 'Poppins-Light', fontSize: wp('3'), color: '#928B8B'},

    carDetailView: {width: wp('90'), height: wp('65'), backgroundColor: '#F6F8F8', borderRadius: wp('8'), flexDirection: 'row', paddingHorizontal: wp('5'), paddingVertical: wp('7'), alignItems: 'center', marginVertical: wp('5')},
    carDetailInnerView: {height: wp('53'), justifyContent: 'space-between'},
    carName: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.primaryTeal},
    carPrice: {fontFamily: 'Poppins-Light', fontSize: wp('4'), color: AppColor.primaryGold},
    carFeatureView: {flexDirection: 'row', width: wp('53'), flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'},
    carFeatureButton: {width: wp('25'), height: wp('7'), backgroundColor: '#ABABAB', borderRadius: wp('4'), alignItems: 'center', justifyContent: 'center', marginBottom: wp('3')},
    carFeatureButtonText: {fontFamily: 'Poppins-Light', fontSize: wp('2.5'), color: AppColor.white},
    carDetailButton: {width: wp('36'),height: wp('10'),borderRadius: wp('10'),backgroundColor: '#214D5A', shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
    carDetailButtonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white,},
    
    reservedButton: {width: wp('50'),height: wp('12'),borderRadius: wp('10'), marginVertical: wp('5'), backgroundColor: '#214D5A', shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
    reservedButtonText: {fontFamily: 'Poppins-Bold',fontSize: wp('5'),color: AppColor.white,},

});

export {ReserveCarStyle};
