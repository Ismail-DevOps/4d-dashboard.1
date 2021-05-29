import React from 'react';
import PropTypes from 'prop-types';
import './Landingpage.css';
import { withStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Face } from '@material-ui/icons';
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
        <Grid container xs={12} style={{ justifyContent: 'center' }}>
          <Grid container lg={10} xs={11}>
            <Grid item lg={1} xs={12} align="center">
              <img src={require('../../../../assets/logo4d.png')} />
            </Grid>
            <Grid container lg={9} xs={12} className="navigation-div hide-xs">
              <Grid item xs>
                <p className="navigation">Home</p>
              </Grid>
              <Grid item xs>
                <p className="navigation">About</p>
              </Grid>
              <Grid item xs>
                <p className="navigation">Features</p>
              </Grid>
              <Grid item xs>
                <p className="navigation">Pricing</p>
              </Grid>
              <Grid item xs>
                <p className="navigation">Support</p>
              </Grid>
            </Grid>
            <Grid item lg={2} xs={12} align="center">
              <p>4D Account</p>
              <Button className="signup-btn">Start for free</Button>
            </Grid>
            <Grid container xs={12} style={{ marginTop: '40px' }}>
              <Grid item lg={5} xs={12}>
                <p className="headerFirst">
                  Build & Deploy! <br />
                  Never Been Easier
                </p>
                <p className="headerContent">
                  4D Cloud is an incredible development platform that lets you
                  focus on your data model and your business rules. Develop and
                  deploy native applications in a new way.
                </p>
              </Grid>
              <Grid item lg={7} xs={12} className="hide-xs">
                <img src={require('../../../../assets/windowimg.png')} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            lg={11}
            md={11}
            sm={11}
            xs={12}
            spacing={4}
            style={{ marginTop: '80px' }}>
            <Grid item md xs={12}>
              <Grid item xs={12}>
                <img
                  style={{ width: '100%' }}
                  src={require('../../../../assets/img1.png')}
                />
                <p className="sideHeader">Develop It</p>
                <p className="sideContent">
                  Lorem ipsum dolor sit amet, consectur adipiscing elit. Nulla
                  vestibulum mauris ut diam vulputate, nec scelerisque magna
                  maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                  consequat arcu. Pellentesque feugiat molestie enim a aliquam
                </p>
              </Grid>
            </Grid>
            <Grid item md xs={12}>
              <Grid item xs={12}>
                <img
                  style={{ width: '100%' }}
                  src={require('../../../../assets/img2.png')}
                />
                <p className="sideHeader">Test It</p>
                <p className="sideContent">
                  Lorem ipsum dolor sit amet, consectur adipiscing elit. Nulla
                  vestibulum mauris ut diam vulputate, nec scelerisque magna
                  maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                  consequat arcu. Pellentesque feugiat molestie enim a aliquam
                </p>
              </Grid>
            </Grid>
            <Grid item md xs={12}>
              <Grid item xs={12}>
                <img
                  style={{ width: '100%' }}
                  src={require('../../../../assets/img3.png')}
                />
                <p className="sideHeader">Go Live</p>
                <p className="sideContent">
                  Lorem ipsum dolor sit amet, consectur adipiscing elit. Nulla
                  vestibulum mauris ut diam vulputate, nec scelerisque magna
                  maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                  consequat arcu. Pellentesque feugiat molestie enim a aliquam
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={11} style={{ margin: '120px 0' }}>
            <Grid container lg={5} xs={12} style={{ justifyContent: 'center' }}>
              <Grid item xs={11} style={{ alignSelf: 'center' }}>
                <p className="sideHeader">Up Up and Away!</p>
                <p className="sideContent">
                  Build Up your business App with the Web Editor and get ready
                  to send it away for the great pleasure of You and your
                  Customers.
                </p>
              </Grid>
            </Grid>
            <Grid container lg={7} xs={12} style={{ justifyContent: 'center' }}>
              <Grid item xs={11} lg={12}>
                <img
                  src={require('../../../../assets/lastimg.png')}
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            className="footer"
            style={{ justifyContent: 'center', padding: '50px 0' }}>
            <Grid container xs={9} sm={9}>
              <Grid container xs={6} md={7} sm={12}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid item className="footerNavigation">
                    Home
                  </Grid>
                  <Grid item className="footerNavigation">
                    About
                  </Grid>
                  <Grid item className="footerNavigation">
                    Features
                  </Grid>
                  <Grid item className="footerNavigation">
                    Pricing
                  </Grid>
                  <Grid item className="footerNavigation">
                    Contact us
                  </Grid>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Grid item className="footerNavigation">
                    Blog
                  </Grid>
                  <Grid item className="footerNavigation">
                    Search
                  </Grid>
                  <Grid item className="footerNavigation">
                    T & Cs
                  </Grid>
                  <Grid item className="footerNavigation">
                    Privacy
                  </Grid>
                  <Grid item className="footerNavigation">
                    Community
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <p className="footerHeader">Get our newsletter</p>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Enter your email"
                    variant="outlined"
                  />
                  <Button className="subscribe-btn">Subscribe</Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <FacebookIcon
                    className="social-icons"
                    style={{ fontSize: '30px', color: 'white' }}
                  />

                  <InstagramIcon
                    className="social-icons"
                    style={{
                      fontSize: '30px',
                      marginLeft: '10px',
                      color: 'white'
                    }}
                  />

                  <TwitterIcon
                    className="social-icons"
                    style={{
                      fontSize: '30px',
                      marginLeft: '10px',
                      color: 'white'
                    }}
                  />

                  <YouTubeIcon
                    className="social-icons"
                    style={{
                      fontSize: '30px',
                      color: 'white',
                      marginLeft: '10px'
                    }}
                  />
                </div>
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
