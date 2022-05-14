import * as contrains from '../Constrains';
import Cookies from 'js-cookie';

const initialState = {

  // style: Cookies.get('style') ? Cookies.get('style') : '',
  // fabric: Cookies.get('fabric') ? Cookies.get('fabric') : '',
  // colorId: Cookies.get('colorId') ? Cookies.get('colorId') : '',
  // colorName: Cookies.get('colorName') ? Cookies.get('colorName') :'white',

  // width: Cookies.get('width') ? Cookies.get('width') : 0,
  // lenght: Cookies.get('lenght') ? Cookies.get('lenght') : 0,
  // fullNess: Cookies.get('fullNess') ? Cookies.get('fullNess') : 0,
  // panels: Cookies.get('panels') ? Cookies.get('panels') : 0,
  // price: Cookies.get('price') ? Cookies.get('price') : 100,
  // option: Cookies.get('options') ? Cookies.get('options') : '',
  // room: Cookies.get('room') ? Cookies.get('room') : 'BATH ROOM',

  // windowWidth: Cookies.get('windowWidth') ? Cookies.get('windowWidth') : 100,
  // widthMargin: Cookies.get('widthMargin') ? Cookies.get('widthMargin') : 0,
  // windowLenght: Cookies.get('windowLenght') ? Cookies.get('windowLenght') : 100,
  // lenghtMargin: Cookies.get('lenghtMargin') ? Cookies.get('lenghtMargin') : 100,

  // linearOptions: Cookies.get('linearOptions') ? Cookies.get('linearOptions') : {
  //   name: 'LINEAR START', 
  //   value: 9900,
  // },
  // linearName: Cookies.get('linearName') ? Cookies.get('linearName') : 'NAME LI',
  // linearValue: Cookies.get('linearValue') ? Cookies.get('linearValue') : 100,

  cart: {
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : 'banana'
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case contrains.CHOOSE_CURTAIN_STYLES:
      Cookies.set('style', payload);
      return { ...state, style: payload };

    // case contrains.CHOOSE_FABRIC_STYLES:
    //   Cookies.set('fabric', payload);
    //   return { ...state, fabric: payload };

    // case contrains.CHANGE_COLOR_STYLES:
    //   Cookies.set('colorId', payload);
    //   return { ...state, colorId: payload };

    // case contrains.WIDTH:
    //   Cookies.set('width', payload);
    //   return { ...state, width: payload };

    // case contrains.LENGHT:
    //   Cookies.set('lenght', payload);
    //   return { ...state, lenght: payload };

    // case contrains.PRICE:
    //   Cookies.set('price', payload);
    //   return { ...state, price: payload };
    // case contrains.OPTIONS:
    //   Cookies.set('options', payload);
    //   return { ...state, options: payload };

    // case contrains.FULLNEST:
    //   Cookies.set('fullNest', payload);
    //   return { ...state, fullNest: payload };

    // case contrains.ROOM:
    //   Cookies.set('room', payload);
    //   return { ...state, room: payload };

    // case contrains.PANELS:
    //   Cookies.set('panels', payload);
    //   return { ...state, panels: payload };

    // case contrains.WINDOW_WIDTH:
    //   Cookies.set('windowWidth', payload);
    //   return { ...state, windowWidth: payload };

    // case contrains.WINDOW_WIDTH_MARGIN:
    //   Cookies.set('widthMargin', payload);
    //   return { ...state, widthMargin: payload };

    // case contrains.WINDOW_LENGHT:
    //   Cookies.set('windowLenght', payload);
    //   return { ...state, windowLenght: payload };

    // case contrains.WINDOW_LENGHT_MARGIN:
    //   Cookies.set('lenghtMargin', payload);
    //   return { ...state, lenghtMargin: payload };

    // case contrains.LINEAR_NAME:
    //   Cookies.set('linearName', payload);
    //   return { ...state, linearName: payload };
    // case contrains.LINEAR_VALUE:
    // Cookies.set('linearValue', payload);
    // return { ...state, linearValue: payload };
    // case contrains.COLOR_NAME:
    // Cookies.set('colorName', payload);
    // return { ...state, colorName: payload };

    // case 'CART_ADD_ITEM': {
    //   const newItem = payload;
    //   const existItem = state.cart.cartItems.find(
    //     (item) => item._key === newItem._key
    //   );
    //   const cartItems = existItem
    //     ? state.cart.cartItems.map((item) =>
    //         item._key === existItem._key ? newItem : item
    //       )
    //     : [...state.cart.cartItems, newItem];
    //   Cookies.set('cartItems', JSON.stringify(cartItems));
    //   return { ...state, cart: { ...state.cart, cartItems } };
    // }
         
    case contrains.CART_ADD_ITEM:
    Cookies.set('cart', payload);
    return { ...state, cart: payload };

    default:
      return state;
  }
};
