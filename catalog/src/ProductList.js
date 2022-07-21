import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { Button, ButtonAction, ButtonSize } from 'ui-components';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function ProductList() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const productList = await fetch('https://fakestoreapi.com/products').then(res => res.json());

    setProducts(productList);
  }, []);

  const addToCart = (product) => {
    const addToCartEvent = new CustomEvent('ADD_TO_CART', { detail: { productId: product.id } });
    window.dispatchEvent(addToCartEvent);
  }

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} >
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link to={`/products/${product.id}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.title}
                  />
                </Link>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button buttonType={ButtonAction.PRIMARY}
                    size={ButtonSize.XLARGE}
                    disabled={false}
                    onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
