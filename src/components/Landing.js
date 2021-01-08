import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectStudio from './SelectStudio';
import AddStudio from './teacher/AddStudio';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '1rem 0',
    padding: '1rem .5rem'
  }
}));

const Landing = ({ studioData, selectedStudio, handleStudioSelect, addStudio, viewer }) => {

  const classes = useStyles();

  return (
    // ADD AUTH COMPONENT
    <Paper className={classes.paper}>

      <Grid container justify='center' alignItems='center' spacing={3}>

        <Grid item xs={11}>
          <SelectStudio
            studioData={studioData}
            selectedStudio={selectedStudio}
            handleStudioSelect={handleStudioSelect}
            viewer={viewer}
          />
        </Grid>

        {viewer === 'teacher' &&
          <Grid item xs={11}>
            <AddStudio addStudio={addStudio}/>
          </Grid>
        }

      </Grid>

    </Paper>
  )
}

export default Landing;