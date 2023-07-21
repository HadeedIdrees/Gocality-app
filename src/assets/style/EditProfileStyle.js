import { StyleSheet } from "react-native";
import { AppColor } from "../colors/AppColor";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const EditProfileStyle = StyleSheet.create({
    scrollView: {flex: 1, backgroundColor: AppColor.white},
    parentView: {flex: 1, backgroundColor: AppColor.white, alignItems: 'center'},

    headerView: {flexDirection: 'row', alignItems: 'center', width: wp('90'), paddingVertical: wp('4')},
    headerText: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.primaryTeal, paddingHorizontal: wp('4')},

    imageView: {alignItems: 'flex-end'},
    innerImageView: {width: wp('25'), height: wp('25'), borderRadius: wp('10')},
    editImageIcon: {width: wp('4'), height: wp('4'), marginTop: wp('-3')},

    nameText: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.primaryTeal, paddingVertical: wp('3')},
    textInput: {width: wp('90'), height: wp('12'), borderRadius: wp('3'), backgroundColor: '#F6F8F8', paddingHorizontal: wp('5'), marginVertical: wp('3'), fontFamily: 'Poppins-Light', color: AppColor.primaryTeal},
    birthInputView: {width: wp('90'), flexDirection: 'row', justifyContent: 'space-around'},
    birthTextInput: {width: wp('20'), height: wp('12'), borderRadius: wp('3'), backgroundColor: '#F6F8F8', marginVertical: wp('3'), fontFamily: 'Poppins-Light', color: AppColor.primaryTeal},
    stateInputView: {width: wp('90'), flexDirection: 'row', justifyContent: 'space-between'},
    stateTextInput: {width: wp('40'), height: wp('12'), borderRadius: wp('3'), paddingHorizontal: wp('5'), backgroundColor: '#F6F8F8', marginVertical: wp('3'), fontFamily: 'Poppins-Light', color: AppColor.primaryTeal},
   
    buttonView: {marginVertical: wp('5')},
    buttonStyle: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#214D5A', marginVertical: wp('3'), shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
    buttonTextColor: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white,},

})

export {EditProfileStyle}