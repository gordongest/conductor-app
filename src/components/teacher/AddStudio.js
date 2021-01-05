import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const AddStudio = ({ addStudio }) => {

  const handleSubmit = () => {
    const data = {
      name: 'Example Studio',
      location: 'Springfield, IL',
      size: 0,
      days: ["Wednesday"],
      students: []
    }

    addStudio(data)
  }

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