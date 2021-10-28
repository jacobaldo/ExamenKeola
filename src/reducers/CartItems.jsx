const initialState = {
  cartItems: [],
  wishListItems: [],
  itemsCount: 0,
  products: [],
};

export default cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {...state, products: action.payload};
    case 'ADD_TO_CART':
      let exists = -1;

      if (state.itemsCount > 0) {
        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i].idDrink === action.item.idDrink) {
            exists = 1;
            // console.log(action.item?.quantity);
            return {
              ...state,
              cartItems: state.cartItems.map(item =>
                item.idDrink === action.item.idDrink
                  ? {...item, quantity: item?.quantity ? item?.quantity + 1 : 1}
                  : item,
              ),
            };
          }
        }
      }
      if (exists == 1) {
        // console.log('if');
        // console.log(state.cartItems);
      } else {
        let updatedCartItems = [
          ...state.cartItems,
          {...action.item, quantity: 1},
        ];
        let count = state.itemsCount + 1;

        return {
          ...state,
          itemsCount: count,
          cartItems: updatedCartItems,
        };
      }

    case 'DELETE_ITEM':
      let newCartItems = state.cartItems.filter(item => {
        return item.idDrink !== action.item?.idDrink;
      });
      let count = state.itemsCount - 1;
      return {
        ...state,
        itemsCount: count,
        cartItems: newCartItems,
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.idDrink === action.item.idDrink
            ? {...item, quantity: item.quantity ? item.quantity - 1 : 0}
            : item,
        ),
      };

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.item
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };

    case 'ORDER_PLACED':
      return {
        ...state,
        itemsCount: 0,
        cartItems: [],
      };

    default:
      return state;
  }
};
