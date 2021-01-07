import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './teacher/AddStudent';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '1rem 0',
    padding: '1rem .5rem'
  }
}));

const StudioView = ({ selectedStudio, students, handleStudentSelect, viewer }) => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>

      <Grid container spacing={3} justify='center' alignItems='center'>

        <Grid item xs={6}>
          <StudioInfo data={selectedStudio} />
        </Grid>

        <Grid item xs={6}>
          <Roster
            studioName={selectedStudio.studioName}
            students={students}
            handleStudentSelect={handleStudentSelect}
            viewer={viewer}
          />
        </Grid>

        {viewer === 'teacher' &&
          <Grid item xs={4}>
            <AddStudent />
          </Grid>
        }

      </Grid>
    </Paper>
  )
}

export default StudioView;