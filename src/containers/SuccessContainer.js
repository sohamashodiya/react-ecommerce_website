// This is the container for the Success Component.

import { connect } from 'react-redux'
import { resetShop } from './../actions'
import SuccessComponent from '../components/SuccessComponent'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("INSIDE DISPATCH TO RESET")
  return {
    resetShop: () => dispatch(resetShop())
  }
}

const SuccessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuccessComponent)

export default SuccessContainer
