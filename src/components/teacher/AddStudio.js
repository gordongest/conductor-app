import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { v4 as uuid } from 'uuid';

const AddStudio = ({ addStudio }) => {

  const handleSubmit = () => {
    const data = {
      studioName: 'Example Studio',
      studioId: uuid(),
      location: 'Springfield, IL',
      size: 0,
      days: ["Wednesday"],
      students: []
    };

    addStudio(data);
  };

  return (

    <Grid container justify='center'>
      <Button
        variant='contained'
        color='primary'
        size='large'
        fullWidth
        onClick={handleSubmit}
      >
        Add a Studio
      </Button>
    </Grid>

  )
}

export default AddStudio;