import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/Styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( theme => ({
  button: {
    height: 75,
    width: 150,
    padding: theme.spacing(2),
    margin: theme.spacing(9)
  }
}));

const Landing = () => {

  const [ spacing, setSpacing ] = useState(2);
  const classes = useStyles();

  return (
      <Grid container justify='center' margin={2} alignItems='center'>
        <Grid item xs={12}>
          <Grid container direction='row' justify='space-around' spacing={2}>
            <Grid item>
              <Link exact to='/teacher'>
                <Button className={classes.button} size='large' variant='contained' color='primary'>Teacher</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link exact to='/student'>
                <Button className={classes.button} size='large' variant='contained' color='primary'>Student</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Landing;