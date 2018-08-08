// This component renders both Shop and Cart.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShopContainer from '../containers/ShopContainer';
import CartContainer from '../containers/CartContainer';
import Grid from '@material-ui/core/Grid';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={9}>
                        <ShopContainer />
                    </Grid>

                    <Grid item xs={3}>
                        <CartContainer />   
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomeComponent
