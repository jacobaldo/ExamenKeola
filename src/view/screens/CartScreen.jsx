import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, icons} from '../../constants';
import ItemCart from '../components/ItemCart';
import ScreenStyle from './ScreenStyle';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '80%',

            borderRadius: 10,
            elevation: 20,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default function CartScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const {cartItems, itemsCount} = useSelector(reducer => reducer);
  const addToCart = data => {
    dispatch({type: 'ADD_TO_CART', item: data});
  };
  const removeToCart = data => {
    dispatch({type: 'DECREASE_QUANTITY', item: data});
  };
  const deleteToCart = data => {
    dispatch({type: 'DELETE_ITEM', item: data});
  };

  const checkOutCart = () => {
    dispatch({type: 'ORDER_PLACED'});
  };
  const calcTotal = () => {
    return [...cartItems].reduce((a, b) => a + b.priceDrink * b.quantity, 0);
  };
  const renderItem = ({item}) => (
    <ItemCart
      data={item}
      addToCart={addToCart}
      removeToCart={removeToCart}
      deleteToCart={deleteToCart}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ModalPoup visible={visible}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginRight: 10}}>
              x
            </Text>
          </TouchableOpacity>

          <Image
            source={icons.favourite}
            style={{
              tintColor: COLORS.red,
              alignSelf: 'center',
            }}
          />

          <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
            Gracias por su compra!!!
          </Text>
        </View>
      </ModalPoup>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: COLORS.primary,
              textAlign: 'center',
            }}>
            Mis Pedidos
          </Text>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: COLORS.red}}>
            Carrito de compras
          </Text>
        </View>
        <View>
          <Image
            source={icons.filter}
            style={{tintColor: COLORS.primary, width: 25, height: 25}}></Image>
        </View>
      </View>
      {cartItems?.length ? (
        <>
          <FlatList
            style={{marginTop: 20}}
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item, i) => `cart_${i}`}
          />

          <View style={{flexDirection: 'row', margin: 15}}>
            <View style={{flex: 1}}>
              <Text style={ScreenStyle.priceTotalCart}>Productos</Text>
              <Text style={ScreenStyle.priceTotalCart}>Delivery</Text>
              <Text style={ScreenStyle.priceTotalCart}>Descuento</Text>
              <Text style={ScreenStyle.priceTotalCart}>Total</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={ScreenStyle.priceTotalCart}>S/ {calcTotal()}</Text>
              <Text style={ScreenStyle.priceTotalCart}>S/ 0.00</Text>
              <Text style={ScreenStyle.priceTotalCart}>S/ 0.00</Text>
              <Text style={ScreenStyle.priceTotalCart}>S/ {calcTotal()}</Text>
            </View>
          </View>
          <View
            // onStartShouldSetResponderCapture={() => checkOutCart()}
            onStartShouldSetResponderCapture={() => {
              checkOutCart();
              setVisible(true);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.green,
              margin: 15,
              borderRadius: 10,
              height: 50,
            }}>
            <Text
              style={{color: Colors.white, fontWeight: 'bold', fontSize: 18}}>
              PAGAR
            </Text>
          </View>
        </>
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
            No tienes productos en tu carrito
          </Text>
        </View>
      )}

      {/* <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text> */}
    </View>
  );
}
