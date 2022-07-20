import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: '200px',
    width: '200px',
  },
}));

export default function ProductDetails() {
  const classes = useStyles();
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`).then(res => res.json());

    setProduct(product);
  }, []);
  return (
    <>
      <CardMedia
        className={classes.cardMedia}
        image={product.image}
        title={product.title}
      />
      <Typography gutterBottom variant="h5" component="h2">
        {product.title}
      </Typography>
      <Typography>
        {product.description}
      </Typography>
    </>
  );
}
