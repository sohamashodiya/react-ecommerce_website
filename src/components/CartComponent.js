// This component renders the Cart Sidebar on the right-hand side.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CartItemComponent from './CartItemComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - 200px)`,
    },
    'appBar-right': {
        marginRight: 200,
    },
    drawerPaper: {
        position: 'relative',
        width: '100%',
        marginTop: 10
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    paper: {
        position: "absolute",
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    chip: {
        width: 80,
        marginTop: 10
    },
    totalItems: {
        marginRight: 20
    },
    totalTitle: {
        marginTop: 5,
        marginRight: 10
    },
    badge: {
        top: 1,
        right: -15,
        border: `2px solid ${
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        }`
    }
});


// Centers the modal.
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

class CartComponent extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        modalOpen: false,
        snackBarOpen: false
    };
    
    handleModalOpen = () => {
        if (this.props.totalPrice < 1) {
            this.setState({ snackBarOpen: true });
        } else {
            this.setState({ modalOpen: true });
        }
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    };

    handleSnackBarClose = () => {
        this.setState({ snackBarOpen: false });
    };
    
    render() {
        const { classes, cart, totalPrice, checkout, updateQuantity, removeCartItem} = this.props;
        return (
            <div className={classes.root}>
                <Drawer
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor='right'
                >
                    <div className={classes.toolbar} />

                    <Grid container justify = "center">
                        <Tooltip title="Total Items" placement="top">
                            <IconButton aria-label="Cart" className={classes.totalItems}>
                                <Badge badgeContent={cart.reduce((totalItems, cartItem) => totalItems + Number(cartItem.quantity), 0)} color="secondary" classes={{ badge: classes.badge }}>
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Total Cost" placement="top">
                            <Chip color="primary" className={classes.chip} avatar={<Avatar><AttachMoneyIcon /></Avatar>} label={parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2)}/>
                        </Tooltip>
                    </Grid>

                    
                    
                    <Divider />
                    <List>
                        {cart.map((cartItem, index) => (
                            <CartItemComponent cartItem={cartItem} updateQuantity={updateQuantity} removeCartItem={removeCartItem} removeCartItemIndex={index} key={cartItem.id}/>
                        ))}
                    </List>
                    <Button onClick={this.handleModalOpen}>CHECKOUT</Button>
                </Drawer>
                
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.modalOpen}
                    onClose={this.handleModalClose}
                    >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Grid container justify = "center">
                            <Typography variant="title" className={classes.totalTitle}>
                                Total is: ${parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2)}
                            </Typography>
                            
                            <Button component={Link} to="/success">Confirm Order</Button>
                        </Grid>   
                        
                    </div>
                </Modal>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={3000}
                    onClose={this.handleSnackBarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Cart is empty!</span>}
                />
            </div>
        )
    }
}


CartComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    checkout: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired
}

export default withStyles(styles)(CartComponent)
