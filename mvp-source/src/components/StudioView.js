import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './teacher/AddStudent';

const StudioView = ({ selectedStudio, handleStudentSelect, viewer }) => {

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>

      <Grid container spacing={3} justify='center' alignItems='center'>

        <Grid item xs={6}>
          <StudioInfo data={selectedStudio} />
        </Grid>

        <Grid item xs={6}>
          <Roster
            studioName={selectedStudio.studioName}
            roster={selectedStudio.students}
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