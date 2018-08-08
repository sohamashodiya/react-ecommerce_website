// This is the container for the Cart Component.

import { connect } from 'react-redux'
import { updateQuantity, checkout, removeCartItem } from './../actions'
import CartComponent from '../components/CartComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.shop.cart,
    totalPrice: state.shop.totalPrice
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuantity: (cartItem, index, quantity) => dispatch(updateQuantity(cartItem, index, quantity)),
    checkout: () => dispatch(checkout()),
    removeCartItem: (index) => dispatch(removeCartItem(index))
  }
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent)

export default CartContainer
