import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectStudio from '../SelectStudio';

const StudentLanding = ({ studioData, selectedStudio, handleStudioSelect }) => {

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={11}>
          <SelectStudio
            studioData={studioData}
            selectedStudio={selectedStudio}
            handleStudioSelect={handleStudioSelect}
            viewer='student'
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default StudentLanding;