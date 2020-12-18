import React from 'react';
import PropTypes from 'prop-types';
import './Landingpage.css';
import { withStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const styles = theme => ({});
class Landingpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { className, onSidebarOpen, ...rest } = this.props;

    return (
      <Grid container xs={12}>
        <Grid container xs={12} id="mainWrap" style={{ height: '100vh' }}>
          <Grid item xs={12} align="center">
            <p className="header2">the benefits</p>
            <img width="95%" src={require('../../../../assets/Group 1.png')} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
Landingpage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(Landingpage);
