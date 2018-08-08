// This is the main Component which draws the tool bar and has route placeholders for other components.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import SuccessContainer from './containers/SuccessContainer';

const styles = {
  root: {
    flexGrow: 1,
  }
};


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" className="title" color="inherit">
                Bakery Shop
              </Typography>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/success" component={SuccessContainer} />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
