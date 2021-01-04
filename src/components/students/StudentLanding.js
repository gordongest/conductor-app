import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/Styles';
import SelectStudio from '../SelectStudio';

const useStyles = makeStyles( theme => ({
  root: {
    flexGrow: 1
  }
}));

const StudentLanding = ({ studioData, selectedStudio, handleStudioSelect }) => {

  const classes = useStyles();

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