import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AiFillWarning } from 'react-icons/ai';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return <Grid container xs={12} style={{ marginTop: '0vh' }}></Grid>;
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
