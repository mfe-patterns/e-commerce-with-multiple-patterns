import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2874f0',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <a href="http://localhost:3000/products/">
        <Typography variant="h4" >
          FooBar.com
        </Typography>
      </a>
      <a href="http://localhost:3000/cart/">
        <Button variant="contained" color="primary">
          Go to Cart
        </Button>
      </a>
    </header>
  )
}