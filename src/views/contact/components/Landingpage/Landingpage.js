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
          style={{
            height: '100vh',
            alignSelf: 'center',
            backgroundColor: '#F8FBFD'
          }}>
          <Grid container>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: '-webkit-center', alignSelf: 'center' }}>
              <img
                width="100%"
                height="500px"
                src={require('../../../../assets/Untitled design (6) 1.png')}
              />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={12}
              xs={12}
              style={{
                textAlign: '-webkit-center',
                alignSelf: 'center'
              }}>
              <Grid item lg={8} md={9} sm={10} xs={10}>
                <p className="header">contact us</p>
                <p className="contact">hello@matchparrot.com</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <p>made with 💜 in california</p>
            <p style={{ marginTop: '60px' }}>© 2021 match parrot, llc</p>
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
