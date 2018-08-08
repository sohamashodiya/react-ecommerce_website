// These are the actions for all the Components.

export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const CHECKOUT = 'CHECKOUT'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM' 
export const RESET_SHOP = 'RESET_SHOP'

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}

export const updateQuantity = (cartItem, index, quantity) => {
    return {
        type: UPDATE_QUANTITY,
        cartItem,
        index,
        quantity
    }
}

export const checkout = () => {
    return {
        type: CHECKOUT
    }
}

export const removeCartItem = (index) => {
    return {
        type: REMOVE_CART_ITEM,
        index
    }
}

export const resetShop = () => {
    return {
        type: RESET_SHOP
    }
}