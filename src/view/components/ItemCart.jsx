import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {icons, images, COLORS, SIZES, FONTS} from '../../constants';

const ItemCart = ({data, addToCart, removeToCart, deleteToCart}) => {
  const {strDrinkThumb, strDrink, priceDrink, quantity} = data;

  return (
    <View
      style={{
        backgroundColor: COLORS.lightGray2,
        marginBottom: 10,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 15,
        padding: 10,
        flexDirection: 'row',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: strDrinkThumb}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            // backgroundColor: COLORS.primary
          }}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.black}}>
          {strDrink}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.primary}}>
          S/{priceDrink}
        </Text>
        <View
          style={{
            width: 150,
            flexDirection: 'row',
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 36,
            marginTop: 5,
          }}>
          {quantity > 0 ? (
            <>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => removeToCart(data)}
                  style={{
                    color: COLORS.white,
                    paddingVertical: 4,
                    paddingHorizontal: 16,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  -
                </Text>
              </View>
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
              <View
                style={{
                  flex: 1,

                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => addToCart(data)}
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    fontWeight: 'bold',
                  }}>
                  +
                </Text>
              </View>
            </>
          ) : (
            <Text
              onPress={() => deleteToCart(data)}
              style={{
                flex: 1,
                textAlign: 'center',

                color: COLORS.white,
                fontSize: 14,
                paddingHorizontal: 16,
                paddingVertical: 4,
                fontWeight: 'bold',
              }}>
              ELIMINAR
            </Text>
          )}
        </View>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <View
          style={{
            width: 40,
            height: 40,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            onStartShouldSetResponder={() => deleteToCart(data)}
            source={icons.clear}
            style={{
              width: 25,
              height: 25,
              borderRadius: 10,
              tintColor: COLORS.transparentBlack7,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
