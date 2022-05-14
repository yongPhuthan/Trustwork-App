import * as contrains from "../Constrains";

// ACTION => REDUCER 

export const contextStyle = payload => ({
  type: contrains.CONTEXT_STYLE,
  payload 
})


// useContext

export const userLogin = payload => ({
  type: contrains.USER_LOGIN,
  payload 
})



export const cartClear = payload => ({
  type: contrains.CART_CLEAR,
  payload 
})

export const userInfoClear = payload => ({
  type: contrains.USER_CLEAR,
  payload 
})



export const shipping = payload => ({
  type: contrains.SAVE_SHIPPING_ADDRESS,
  payload 
})

export const payment = payload => ({
  type: contrains.SVAE_PAYMENT_METHOD,
  payload 
})




export const image = payload => ({
  type: contrains.IMAGE_URL,
  payload 
})



export const cart = payload => ({
  type: contrains.CART_ADD_ITEM,
  payload 
})


export const room = payload => ({
  type: contrains.ROOM,
  payload
})


export const colorName = payload => ({
  type: contrains.COLOR_NAME,
  payload
})


export const linearName = payload => ({
  type: contrains.LINEAR_NAME,
  payload
})


export const linearValue = payload => ({
  type: contrains.LINEAR_VALUE,
  payload
})

export const curtainStyle = payload => ({
  type: contrains.CHOOSE_CURTAIN_STYLES,
  payload
})
export const fabricStyle = payload => ({
  type: contrains.CHOOSE_FABRIC_STYLES,
  payload
})

export const colorStyle = payload => ({
  type: contrains.CHANGE_COLOR_STYLES,
  payload
})

export const size = payload => ({
  type: contrains.SIZE,
  payload
})

export const width = payload => ({
  type: contrains.WIDTH,
  payload
})
export const lenght = payload => ({
  type: contrains.LENGHT,
  payload
})

export const fullNest = payload => ({
  type: contrains.FULLNEST,
  payload
})
export const panels = payload => ({
  type: contrains.PANELS,
  payload
})
export const price = payload => ({
  type: contrains.PRICE,
  payload
})

export const option = payload => ({
  type: contrains.OPTIONS,
  payload
})

export const windowWidth = payload => ({
  type: contrains.WINDOW_WIDTH,
  payload
})

export const widthMargin = payload => ({
  type: contrains.WINDOW_WIDTH_MARGIN,
  payload
})
export const windowLenght = payload => ({
  type: contrains.WINDOW_LENGHT,
  payload
})

export const lenghtMargin = payload => ({
  type: contrains.WINDOW_LENGHT_MARGIN,
  payload
})



// COMPONENTS  => ACTION 
export const contextStyleName = payload => {
  return dispatch => {
    dispatch(contextStyle(payload));
  }
}

export const userInfoLogin =payload=>{
  return dispatch =>{
      dispatch(userLogin(payload));
  };
};





export const imageUrl =payload=>{
  return dispatch =>{
      dispatch(image(payload));
  };
};




export const roomName =payload=>{
  return dispatch =>{
      dispatch(room(payload));
  };
};


export const colorNameCal =payload=>{
  return dispatch =>{
      dispatch(colorName(payload));
  };
};

export const linearNameCal =payload=>{
  return dispatch =>{
      dispatch(linearName(payload));
  };
};



export const linearValueCal =payload=>{
  return dispatch =>{
      dispatch(linearValue(payload));
  };
};

export const style =payload=>{
    return dispatch =>{
        dispatch(curtainStyle(payload));
    };
};

export const fabric =payload=>{
  return dispatch =>{
      dispatch(fabricStyle(payload));
  }
}

export const colorId =payload=>{
  return dispatch =>{
      dispatch(colorStyle(payload));
  }
}

export const widthCal =payload=>{
  return dispatch =>{
      dispatch(width(payload));
  };
};

export const lenghtCal =payload=>{
return dispatch =>{
    dispatch(lenght(payload));
}
}

export const fullNestCal =payload=>{
return dispatch =>{
    dispatch(fullNest(payload));
}
}

export const priceCal =payload=>{
  return dispatch =>{
      dispatch(price(payload));
  };
};

export const optionCal =payload=>{
return dispatch =>{
    dispatch(option(payload));
}
}

export const roomNameCal =payload=>{
return dispatch =>{
    dispatch(roomName(payload));
}
}

  export const windowWidthCal =payload=>{
    return dispatch =>{
        dispatch(windowWidth(payload));
    };
  };
  
  export const widthMarginCal =payload=>{
  return dispatch =>{
      dispatch(widthMargin(payload));
  }
  }
  
  export const windowLengthCal =payload=>{
  return dispatch =>{
      dispatch(windowLenght(payload));
  }
  }
  
  export const lenghtMarginCal =payload=>{
    return dispatch =>{
        dispatch(lenghtMargin(payload));
    }
    }

  export const cartHandler =payload=>{
    return dispatch =>{
        dispatch(cart(payload));
    }
    }

  export const shippingMethod =payload=>{
    return dispatch =>{
        dispatch(shipping(payload));
    }
    }


  export const paymentMethod =payload=>{
    return dispatch =>{
        dispatch(payment(payload));
    }
    }

    export const cartClearAll =payload=>{
      return dispatch =>{
          dispatch(cartClear(payload));
      }
      }

      export const userClear =payload=>{
        return dispatch =>{
            dispatch(userInfoClear(payload));
        }
        }