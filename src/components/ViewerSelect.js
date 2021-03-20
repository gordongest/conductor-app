import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/Styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    height: 75,
    width: 150,
    padding: theme.spacing(2),
    margin: theme.spacing(9)
  }
}));

const ViewerSelect = () => {

  const classes = useStyles();

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <Grid container justify='center' margin={2} alignItems='center'>
        <Grid item xs={12}>
          <Grid container direction='row' justify='space-around' spacing={2}>
            <Grid item>
              <Link to='/teacher'>
                <Button className={classes.button} size='large' variant='contained' color='primary'>Teacher</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/student'>
                <Button className={classes.button} size='large' variant='contained' color='primary'>Student</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ViewerSelect;