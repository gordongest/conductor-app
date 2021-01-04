import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = ({ selectedStudio, handleStudentSelect }) => {

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <Grid container justify='center'>
        <StudioInfo data={selectedStudio} />
        <Roster
          studioName={selectedStudio.studioName}
          roster={selectedStudio.students}
          handleStudentSelect={handleStudentSelect} />
      </Grid>
    </Paper>
  )
}

export default Studio;