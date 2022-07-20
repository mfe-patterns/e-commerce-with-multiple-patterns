import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mainContent: {
    flex: 1,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.mainContent} />
      <Footer />
    </div>
  )
}