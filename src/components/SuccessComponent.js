// This renders the Success Page after a transaction has been made.

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class SuccessComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { resetShop } = this.props;
        return (
            <div>
                <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                    <Typography variant="display3" color="primary" gutterBottom>
                        Transaction Successful!
                    </Typography>
                    
                    <Button component={Link} to="/" onClick={resetShop}>Go Back</Button>
                </Grid>
                
            </div>
        )
    }
}

export default SuccessComponent
