import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const FilterStyle = StyleSheet.create({
    scrollView: {flex: 1, backgroundColor: AppColor.white},
    scrollViewCont: {alignItems: 'center', paddingBottom: wp('10')},

    filterListView: {flexDirection: 'row', width: wp('90'), height: wp('12'), backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp('3'), elevation: wp('0.3'), marginVertical: wp('5')},
    listNameText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4'), color: 'black'},
    listDropDown: {width: wp('5'), height: wp('5'), alignItems: 'center', justifyContent: 'center'},

    rangeView: {width: wp('70'), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'},
    rangeText: {fontFamily: 'Poppins-Medium', fontSize: wp('3.5'), color: '#BABABA'},
    rangePriceText: {fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: 'black'},
    range: {width: wp('80'), height: wp('9')},

    checkBoxView: {width: wp('90'), flexWrap: 'wrap', flexDirection: 'row'},
    checkBoxItem : {flexDirection: 'row', alignItems: 'center',},
    checkBoxItemText: {fontFamily: 'Poppins-Medium',fontSize: wp('3.5'),color: '#838383',},

    carTransmisionView: {width: wp('65'), flexDirection: 'row', justifyContent: 'space-between'},
    carTransmisionButton: {width: wp('30'), height: wp('12'), justifyContent: 'center', alignItems: 'center', borderRadius: wp('3')},
    carTransmisionButtonText: {fontFamily: 'Poppins-Medium', fontSize: wp('4')},

    carEngineType: {width: wp('90'), flexDirection: 'row', flexWrap: 'wrap'},
    carEngineTypeButton: {width: wp('27'), height: wp('12'), justifyContent: 'center', alignItems: 'center', borderRadius: wp('3'), marginBottom: wp('3'), marginRight: wp('3')},
    carEngineTypeButtonText: {fontFamily: 'Poppins-Medium', fontSize: wp('4')},

});
export {FilterStyle};
