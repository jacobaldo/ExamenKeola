import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, icons} from '../../constants';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, margin: 15}}>
      <Text style={{fontSize: 26, fontWeight: 'bold', color: COLORS.primary}}>
        Mi perfil
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Image
          source={icons.profile}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            tintColor: COLORS.gray,
            backgroundColor: COLORS.green,
            borderRadius: 50,
            padding: 10,
          }}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.black}}>
          Nombre:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: COLORS.lightGray1,
            borderRadius: 10,
            paddingHorizontal: 10,
            flex: 1,
          }}>
          Jacob Aldo Chipana Delgado
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.black}}>
          Correo:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: COLORS.lightGray1,
            borderRadius: 10,
            paddingHorizontal: 10,
            flex: 1,
          }}>
          aldochd13@gmail.com
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.black}}>
          Nro. CEL:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: COLORS.lightGray1,
            borderRadius: 10,
            paddingHorizontal: 10,
            flex: 1,
          }}>
          931588227
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: COLORS.black,
          }}>
          Grado:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: COLORS.lightGray1,
            borderRadius: 10,
            paddingHorizontal: 10,
            flex: 1,
          }}>
          Bachiller en Sistemas.
        </Text>
      </View>
    </View>
  );
};
export default ProfileScreen;
