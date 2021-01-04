import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

const GoButton = ({ route, text }) => {
  return (
    <Link to={ route } >
    {console.log(route)}
      <Button
        variant="contained"
        color='primary'
        fullWidth
      >
        {text}
      </Button>
    </Link>
  )
}

export default GoButton;