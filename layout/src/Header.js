import React, { useEffect, useState } from 'react';
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
    position: 'fixed',
    width: '97%',
  },
  addToCartLink: {
    position: 'relative',
  },
  addToCartCount: {
    position: 'absolute',
    left: '-10px',
    top: '-9px',
    background: 'red',
    padding: '2px 7px',
    borderRadius: '50%',
    color: 'white',
    zIndex: '1'
  }
}));

export default () => {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem('products')) || []);

  useEffect(() => {
    const addToCartEventlistener = ({ detail }) => {
      setProductsInCart(detail.productsInCart);
    };

    window.addEventListener('UPDATE_CART', addToCartEventlistener)
    return () => {
      window.removeEventListener('UPDATE_CART', addToCartEventlistener)
    }
  }, []);

  const classes = useStyles();
  return (
    <header className={classes.header}>
      <a href="http://localhost:3000/products/">
        <Typography variant="h4" >
          FooBar.com
        </Typography>
      </a>
      <a className={classes.addToCartLink} href="http://localhost:3000/cart/">
        <Button variant="contained" color="primary">
          Go to Cart
        </Button>
        {
          productsInCart.length > 0 &&
          <i className={classes.addToCartCount}>{productsInCart.length}</i>
        }
      </a>
    </header>
  )
}