// This is the container for the Shop Component.

import { connect } from 'react-redux'
import { addToCart } from './../actions'
import ShopComponent from '../components/ShopComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    inventory: state.shop.inventory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

const ShopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopComponent)

export default ShopContainer
