// This renders the Shop on the E-commerce application.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemComponent from './ItemComponent';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class ShopComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { classes, inventory, addToCart } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={16}> 
                    {inventory.map(item => (
                        <ItemComponent item={item} addToCart={addToCart} key={item.id}/>
                    ))}
                </Grid> 
            </div>
        )
    }
}


ShopComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    inventory: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default withStyles(styles)(ShopComponent)
