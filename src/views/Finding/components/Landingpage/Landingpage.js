import React from 'react';
import PropTypes from 'prop-types';
import './Landingpage.css';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
class Landingpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { className, onSidebarOpen, ...rest } = this.props;

    return (
      <Grid container xs={12}>
        <Grid
          container
          xs={12}
          id="mainWrap"
          style={{ height: '100vh', alignContent: 'center' }}>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            align="center"
            id="textWrap"
            style={{ paddingTop: '120px', justifyContent: 'center' }}>
            <p className="header1">find your next family</p>
            <Grid item lg={9} xs={11}>
              <p className="content">
                at match parrot, au pairs and host families can easily connect.
                ah, visibility. swipe and match to initiate a chat. but only
                mutual matches can chat. ah, no connection limits. finally, a
                platform that takes the noise out of connecting!
              </p>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            id="imgWrap"
            style={{ height: '100%' }}>
            <img
              width="100%"
              src={require('../../../../assets/Untitled design 1.png')}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
