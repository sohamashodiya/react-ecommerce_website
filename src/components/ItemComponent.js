// This renders the items that are in the Shop.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    grid: {
        marginTop: 20,
        marginLeft: 30
    }
});


class ItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, item, addToCart } = this.props;

        return (
            <Grid item xs={3} className={classes.grid}>
                <Card className={classes.card} key={item.id}>
                    <CardMedia
                    className={classes.media}
                    image={item.pictureURL}
                    title={item.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {item.name}
                    </Typography>
                    <Typography component="p">
                        ${item.price}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" className={classes.button} onClick={() => addToCart(item)}>
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
    
}


ItemComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default withStyles(styles)(ItemComponent)
