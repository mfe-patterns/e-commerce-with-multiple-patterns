import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
}));


export default function ProductDetail() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid}>
          <Link to="/test">skdjflksjdflkjsf</Link>
          dsfsdfsdf12345678
        </Container>
      </main>
    </React.Fragment>
  );
}
