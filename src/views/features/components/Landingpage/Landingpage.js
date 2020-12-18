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
        <Grid
          container
          xs={12}
          id="mainWrap"
          style={{ height: '100vh', alignSelf: 'center' }}>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ textAlign: '-webkit-center', alignSelf: 'center' }}>
            <Grid item lg={6} md={7} sm={8} xs={10}>
              <p className="header">match parrot features</p>
            </Grid>
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
            style={{ textAlign: '-webkit-center', alignSelf: 'center' }}>
            <Grid item xs={10}>
              <Grid
                container
                xs={12}
                style={{
                  borderBottom: '3px solid #564E4E',
                  padding: '20px 0'
                }}>
                <Grid item lg={3} xs={4} align="center">
                  <img
                    width="85px"
                    src={require('../../../../assets/Untitled design (3) 1.png')}
                  />
                </Grid>
                <Grid item lg={9} xs={8}>
                  <Grid item xs={12} align="left">
                    <p className="contentHeader">FREE TO JOIN?</p>
                    <p className="contentText">
                      Always free for au pairs but to keep our lights on and
                      servers running, we charge host families to chat with
                      matches.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                style={{
                  borderBottom: '3px solid #564E4E',
                  padding: '20px 0'
                }}>
                <Grid item lg={3} xs={4} align="center">
                  <img
                    width="85px"
                    src={require('../../../../assets/Untitled design (4) 1.png')}
                  />
                </Grid>
                <Grid item lg={9} xs={8}>
                  <Grid item xs={12} align="left">
                    <p className="contentHeader">SWIPE AND MATCH</p>
                    <p className="contentText">
                      Match only with au pairs or host families that interest
                      you.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                style={{
                  borderBottom: '3px solid #564E4E',
                  padding: '20px 0'
                }}>
                <Grid item lg={3} xs={4} align="center">
                  <img
                    width="85px"
                    src={require('../../../../assets/Untitled design (5) 1.png')}
                  />
                </Grid>
                <Grid item lg={9} xs={8}>
                  <Grid item xs={12} align="left">
                    <p className="contentHeader">CHAT WITH MATCHES</p>
                    <p className="contentText">
                      You’ve matched! Start a chat to learn more about each
                      other.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
