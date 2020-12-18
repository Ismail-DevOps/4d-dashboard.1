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
          id="mainPic"
          style={{ height: '100vh', alignContent: 'center' }}>
          <Grid item lg={6} md={5} sm={3} xs={0} />
          <Grid
            container
            lg={6}
            md={7}
            sm={9}
            xs={10}
            align="left"
            style={{
              minHeight: '70vh',
              maxHeight: '80vh',
              height: 'min-content'
            }}>
            <Grid item xs={12}>
              <p className="header3">match parrot</p>
              <p className="subHeader">AU PAIR AND HOST FAMILY MATCH & CHAT</p>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Button className="btnLogin">
                  <Grid container xs={12} style={{ alignItems: 'center' }}>
                    <p>LOGIN</p>
                    <ArrowRightAltIcon
                      style={{ marginLeft: '60px', fontSize: '45px' }}
                    />
                  </Grid>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button className="btnSignup">
                  <Grid
                    container
                    xs={12}
                    style={{
                      alignItems: 'center'
                    }}>
                    <p>SIGNUP</p>
                    <ArrowRightAltIcon
                      style={{ marginLeft: '50px', fontSize: '45px' }}
                    />
                  </Grid>
                </Button>
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
