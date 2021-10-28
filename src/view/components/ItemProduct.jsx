import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {icons, images, COLORS, SIZES, FONTS} from '../../constants';
import ScreenStyle from '../screens/ScreenStyle';
const ItemProduct = ({data, addToCart, removeToCart, quantity, navigation}) => {
  const {strDrinkThumb, strDrink, priceDrink} = data;

  return (
    <View
      style={{
        backgroundColor: COLORS.lightGray1,
        marginBottom: 10,
        borderRadius: 10,
        flex: 1,
        // alignItems: 'center',
        marginHorizontal: 15,
        padding: 10,
      }}>
      <View style={{alignItems: 'flex-end'}}>
        <View style={ScreenStyle.contentFavorite}>
          <Image
            source={icons.favourite}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: strDrinkThumb,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.black}}>
          {strDrink}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.primary}}>
          S/{priceDrink}
        </Text>
      </View>

      <View style={ScreenStyle.contentAddCart}>
        {quantity > 0 ? (
          <>
            <Text
              onPress={() => removeToCart(data)}
              style={{
                justifyContent: 'center',
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'bold',
                paddingVertical: 4,
                paddingHorizontal: 16,
              }}>
              -
            </Text>

            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                paddingVertical: 4,
                paddingHorizontal: 16,
                fontWeight: 'bold',
              }}>
              {quantity}
            </Text>

            <Text
              onPress={() => addToCart(data)}
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'bold',
                paddingVertical: 4,
                paddingHorizontal: 16,
              }}>
              +
            </Text>
          </>
        ) : (
          <Text
            onPress={() => addToCart(data)}
            style={{
              flex: 1,
              textAlign: 'center',
              color: COLORS.white,
              fontSize: 14,
              paddingHorizontal: 16,
              paddingVertical: 4,
              fontWeight: 'bold',
            }}>
            AGREGAR
          </Text>
        )}
      </View>
    </View>
  );
};
export default ItemProduct;
