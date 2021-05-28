import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  Background: {
    opacity: '0.5'
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div
      className={classes.Background}
      className={clsx({
        [classes.root]: true
      })}>
      <Topbar onSidebarOpen={handleSidebarOpen} />

      <main className={classes.content} style={{}}>
        {children}
        <Footer style={{}} />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
