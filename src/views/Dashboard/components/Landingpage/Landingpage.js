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
                      style={{ marginLeft: '55px', fontSize: '45px' }}
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
                      style={{ marginLeft: '40px', fontSize: '45px' }}
                    />
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
        <Grid container xs={12} id="mainWrap" style={{ height: '100vh' }}>
          <Grid item xs={12} align="center">
            <p className="header2">the benefits</p>
            <p className="headersubHeader">What are we about?</p>
            <img width="100%" src={require('../../../../assets/Group 1.png')} />
          </Grid>
        </Grid>
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
        <Grid
          container
          xs={12}
          id="mainWrap"
          style={{
            height: '90vh',
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
