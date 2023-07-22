import React, {useState} from 'react';
import {FilterStyle} from '../../style/FilterStyle';
import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
import {AppColor} from '../../colors/AppColor';
import {Checkbox} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Filter = () => {
  //STATES
  const [priceRangeShown, setPriceRangeShown] = useState(false);
  const [carSpecsShown, setCarSpecsShown] = useState(false);
  const [carTransmisionShown, setCarTransmisionShown] = useState(false);
  const [carEngineTypeShown, setCarEngineTypeShown] = useState(false);
  const [carEngineCapacityShown, setCarEngineCapacityShown] = useState(false);
  const [carColorShown, setCarColorShown] = useState(false);
  const [carProviderShown, setCarProviderShown] = useState(false);
  const [carRatingShown, setCarRatingShown] = useState(false);

  //CheckBox States
  const [airCondCheck, setAirCondCheck] = useState(false);
  const [fourDoorCheck, setFourDoorCheck] = useState(false);
  const [twoDoorCheck, setTwoDoorCheck] = useState(false);
  const [sunRoofCheck, setSunRoofCheck] = useState(false);
  const [placeHolderCheck, setPlaceHolderCheck] = useState(false);

  //Transmision State
  const [selectTransmision, setSelectTransmision] = useState('');

  //Engine Type
  const [selectEngineType, setSelectEngineType] = useState('');

  //Engine Capacity
  const [selectEngineCapacity, setSelectEngineCapacity] = useState('');

  //Car Color
  const [selectCarColor, setSelectCarColor] = useState('');

  //Car Provider
  const [selectCarProvider, setSelectCarProvider] = useState('');

  //Variable
  const navigation = useNavigation()

  return (
    <ScrollView
      style={FilterStyle.scrollView}
      contentContainerStyle={FilterStyle.scrollViewCont}>
      <Header onPress={()=>{navigation.goBack()}} />

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Price per Car'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setPriceRangeShown(!priceRangeShown);
          }}>
          <AntDesign
            name={priceRangeShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={priceRangeShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {priceRangeShown ? (
        <View>
          <View style={FilterStyle.rangeView}>
            <Text style={FilterStyle.rangeText}>Min</Text>
            <Text style={FilterStyle.rangeText}>Max</Text>
          </View>
          <View style={FilterStyle.rangeView}>
            <Text style={FilterStyle.rangePriceText}>$0</Text>
            <Text style={FilterStyle.rangePriceText}>$800</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={800}
            step={1}
            style={FilterStyle.range}
            thumbTintColor={AppColor.primaryTeal}
            onValueChange={value => {
              console.log(value);
            }}
            maximumTrackTintColor={'#999999'}
            minimumTrackTintColor={AppColor.primaryTeal}
          />
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Car Specs'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarSpecsShown(!carSpecsShown);
          }}>
          <AntDesign
            name={carSpecsShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carSpecsShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carSpecsShown ? (
        <View style={FilterStyle.checkBoxView}>
          <View style={FilterStyle.checkBoxItem}>
            <Checkbox
              status={airCondCheck ? 'checked' : 'unchecked'}
              uncheckedColor="#868686"
              color={AppColor.primaryTeal}
              onPress={() => {
                setAirCondCheck(!airCondCheck);
              }}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp('3.5'),
                color: '#838383',
              }}>
              Air Condition
            </Text>
          </View>
          <View style={FilterStyle.checkBoxItem}>
            <Checkbox
              status={fourDoorCheck ? 'checked' : 'unchecked'}
              uncheckedColor="#868686"
              color={AppColor.primaryTeal}
              onPress={() => {
                setFourDoorCheck(!fourDoorCheck);
              }}
            />
            <Text style={FilterStyle.checkBoxItemText}>4+ Doors</Text>
          </View>
          <View style={FilterStyle.checkBoxItem}>
            <Checkbox
              status={twoDoorCheck ? 'checked' : 'unchecked'}
              uncheckedColor="#868686"
              color={AppColor.primaryTeal}
              onPress={() => {
                setTwoDoorCheck(!twoDoorCheck);
              }}
            />
            <Text style={FilterStyle.checkBoxItemText}>2 Doors</Text>
          </View>
          <View style={FilterStyle.checkBoxItem}>
            <Checkbox
              status={sunRoofCheck ? 'checked' : 'unchecked'}
              uncheckedColor="#868686"
              color={AppColor.primaryTeal}
              onPress={() => {
                setSunRoofCheck(!sunRoofCheck);
              }}
            />
            <Text style={FilterStyle.checkBoxItemText}>Sun Roof</Text>
          </View>
          <View style={FilterStyle.checkBoxItem}>
            <Checkbox
              status={placeHolderCheck ? 'checked' : 'unchecked'}
              uncheckedColor="#868686"
              color={AppColor.primaryTeal}
              onPress={() => {
                setPlaceHolderCheck(!placeHolderCheck);
              }}
            />
            <Text style={FilterStyle.checkBoxItemText}>Place Holder</Text>
          </View>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Transmision'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarTransmisionShown(!carTransmisionShown);
          }}>
          <AntDesign
            name={carTransmisionShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carTransmisionShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carTransmisionShown ? (
        <View style={FilterStyle.carTransmisionView}>
          <TouchableOpacity
            style={[
              FilterStyle.carTransmisionButton,
              {
                backgroundColor:
                  selectTransmision === 'true'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectTransmision('true');
            }}>
            <Text
              style={[
                FilterStyle.carTransmisionButtonText,
                {
                  color:
                    selectTransmision === 'true'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Manual
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carTransmisionButton,
              {
                backgroundColor:
                  selectTransmision === 'false'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectTransmision('false');
            }}>
            <Text
              style={[
                FilterStyle.carTransmisionButtonText,
                {
                  color:
                    selectTransmision === 'false'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Automatic
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Engine Type'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarEngineTypeShown(!carEngineTypeShown);
          }}>
          <AntDesign
            name={carEngineTypeShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carEngineTypeShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carEngineTypeShown ? (
        <View style={FilterStyle.carEngineType}>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineType === 'Petrol'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineType('Petrol');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineType === 'Petrol'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Petrol
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineType === 'Diesel'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineType('Diesel');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineType === 'Diesel'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Diesel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineType === 'Electric'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineType('Electric');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineType === 'Electric'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Electric
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineType === 'Hybrid'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineType('Hybrid');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineType === 'Hybrid'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Hybrid
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Engine Capacity (cc)'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarEngineCapacityShown(!carEngineCapacityShown);
          }}>
          <AntDesign
            name={carEngineCapacityShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carEngineCapacityShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carEngineCapacityShown ? (
        <View style={FilterStyle.carEngineType}>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineCapacity === '0'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineCapacity('0');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineCapacity === '0'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              0-500
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineCapacity === '500'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineCapacity('500');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineCapacity === '500'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              500-1000
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineCapacity === '1000'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineCapacity('1000');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineCapacity === '1000'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              1000-1500
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectEngineCapacity === '1500'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectEngineCapacity('1500');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectEngineCapacity === '1500'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              1500+
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Color'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarColorShown(!carColorShown);
          }}>
          <AntDesign
            name={carColorShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carColorShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carColorShown ? (
        <View style={FilterStyle.carEngineType}>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarColor === 'white' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarColor('white');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarColor === 'white'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              White
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarColor === 'silver'
                    ? AppColor.primaryTeal
                    : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarColor('silver');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarColor === 'silver'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Silver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarColor === 'red' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarColor('red');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarColor === 'red'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Red
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarColor === 'grey' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarColor('grey');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarColor === 'grey'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Grey
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarColor === 'black' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarColor('black');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarColor === 'black'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Black
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Provider'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarProviderShown(!carProviderShown);
          }}>
          <AntDesign
            name={carProviderShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carProviderShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carProviderShown ? (
        <View style={FilterStyle.carEngineType}>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarProvider === '1' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarProvider('1');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarProvider === '1'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Agency 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarProvider === '2' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarProvider('2');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarProvider === '2'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Agency 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarProvider === '3' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarProvider('3');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarProvider === '3'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Agency 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarProvider === '4' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarProvider('4');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarProvider === '4'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Agency 4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FilterStyle.carEngineTypeButton,
              {
                backgroundColor:
                  selectCarProvider === '5' ? AppColor.primaryTeal : '#F1F1F1',
              },
            ]}
            onPress={() => {
              setSelectCarProvider('5');
            }}>
            <Text
              style={[
                FilterStyle.carEngineTypeButtonText,
                {
                  color:
                    selectCarProvider === '5'
                      ? AppColor.primaryBlush
                      : '#676767CC',
                },
              ]}>
              Agency 5
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={FilterStyle.filterListView}>
        <Text style={FilterStyle.listNameText}>{'Rating'}</Text>
        <TouchableOpacity
          style={FilterStyle.listDropDown}
          onPress={() => {
            setCarRatingShown(!carRatingShown);
          }}>
          <AntDesign
            name={carRatingShown ? 'caretup' : 'caretdown'}
            size={wp('3')}
            color={carRatingShown ? '#999999' : 'black'}
          />
        </TouchableOpacity>
      </View>

      {carRatingShown ? (
        <View style={{flexDirection: 'row', width: wp('90')}}>
          <AntDesign name="star" size={wp('6')} color={'#FCDA28'} />
          <AntDesign name="star" size={wp('6')} color={'#FCDA28'} />
          <AntDesign name="star" size={wp('6')} color={'#FCDA28'} />
          <AntDesign name="star" size={wp('6')} color={'#FCDA28'} />
          <AntDesign name="staro" size={wp('6')} color={'#FCDA28'} />
        </View>
      ) : null}
    </ScrollView>
  );
};
export default Filter;
