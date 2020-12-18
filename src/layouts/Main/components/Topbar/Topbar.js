import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../../../App.css';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: 'rgb(134, 113, 95)',
    backgroundColor: theme.palette.background.paper
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  return <Grid container xs={12} align="center"></Grid>;
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
