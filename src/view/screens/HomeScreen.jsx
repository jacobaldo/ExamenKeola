// import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Icon,
  ActivityIndicator,
  Button,
} from 'react-native';
// import Icon from 'react-native-vector-icons';

import {COLORS, icons} from '../../constants';
import ItemProduct from '../components/ItemProduct';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ScreenStyle from './ScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const {products, cartItems} = useSelector(reducer => reducer);
  const [isLoading, setLoading] = useState(true);

  const getPrice = () => Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  const getdata = () => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(data => {
        dispatch({
          type: 'SET_PRODUCT',
          payload: data?.data?.drinks?.map(e => ({
            ...e,
            priceDrink: getPrice(),
          })),
        });
        setLoading(false);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getdata();
  }, []);

  const searchProducts = () => {
    if (query?.length && !isLoading) {
      setLoading(true);
      Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      )
        .then(data => {
          dispatch({
            type: 'SET_PRODUCT',
            payload: data?.data?.drinks?.map(e => ({
              ...e,
              priceDrink: getPrice(),
            })),
          });
          setLoading(false);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  const buildQuantity = data => {
    let arrayq = [...cartItems]?.filter(
      item => item?.idDrink === data?.idDrink,
    );
    if (!arrayq?.length) return 0;
    return arrayq[0].quantity;
  };
  const renderItem = ({item}) => (
    <ItemProduct
      quantity={buildQuantity(item)}
      data={item}
      addToCart={addToCart}
      removeToCart={removeToCart}
    />
  );

  const addToCart = data => {
    dispatch({type: 'ADD_TO_CART', item: data});
  };
  const removeToCart = data => {
    dispatch({type: 'DECREASE_QUANTITY', item: data});
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={ScreenStyle.navTitle}>
        <View>
          <Text
            style={{fontSize: 25, fontWeight: 'bold', color: COLORS.primary}}>
            Keola Drink
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Jacob Aldo Chipana Delgado
          </Text>
        </View>
        <View>
          <Image
            source={icons.filter}
            style={{tintColor: COLORS.primary, width: 25, height: 25}}></Image>
        </View>
      </View>
      <View style={ScreenStyle.containerSearch}>
        <View style={ScreenStyle.inputSearch}>
          <Image
            source={icons.search}
            style={{
              tintColor: COLORS.gray,
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
          />
          <TextInput
            onChangeText={e => setQuery(e)}
            placeholder="Buscar..."
            style={{fontWeight: 'bold', fontSize: 15, flex: 1}}
          />
        </View>
        <View
          style={ScreenStyle.search}
          onStartShouldSetResponder={() => searchProducts()}>
          <Image
            source={icons.search}
            style={{
              tintColor: COLORS.gray,
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={{flex: 1}}
        />
      ) : products?.length ? (
        <FlatList
          style={{marginTop: 20}}
          data={products}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, i) => `product_${i}`}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={icons.cart_empty}
            style={{
              tintColor: COLORS.gray,
              width: 100,
              height: 100,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: COLORS.primary,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            No existe productos con ese nombre
          </Text>
          <Text
            onPress={() => {
              getdata();
            }}
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: COLORS.white,
              fontWeight: 'bold',
              backgroundColor: COLORS.blue,
              alignSelf: 'center',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            reload
          </Text>
        </View>
      )}
    </View>
  );
};
export default HomeScreen;
