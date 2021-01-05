import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectStudio from '../SelectStudio';
import AddStudio from './AddStudio';

const TeacherLanding = ({ studioData, selectedStudio, handleStudioSelect, addStudio }) => {

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>

      <Grid container justify='center' alignItems='center' spacing={3}>

        <Grid item xs={11}>
          <SelectStudio
            studioData={studioData}
            selectedStudio={selectedStudio}
            handleStudioSelect={handleStudioSelect}
            viewer='teacher'
          />
        </Grid>

        <Grid item xs={11}>
          <AddStudio addStudio={addStudio}/>
        </Grid>

      </Grid>

    </Paper>
  )
}

export default TeacherLanding;