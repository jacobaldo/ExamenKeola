import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  icons,
  images,
  dummyData,
  COLORS,
  SIZES,
  constants,
  FONTS,
} from '../constants';

// Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Carrito';
const profileScreen = 'Perfil';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 2,
            paddingTop: 5,
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              // iconName = focused ? icons.home : icons.home;
              iconName = icons.home;
            } else if (rn === detailsName) {
              iconName = icons.cart;
            } else if (rn === profileScreen) {
              iconName = icons.profile;
            }

            // You can return any component that you like here!
            // return <Ionicons name={'settings'} size={size} color={color} />;
            return (
              <Image
                source={iconName}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: color,
                }}
              />
            );
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={CartScreen} />
        <Tab.Screen name={profileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
