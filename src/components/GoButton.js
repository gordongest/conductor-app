import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

const GoButton = ({ route, text }) => {
  return (
    <Link to={route} >
      <Button
        variant="contained"
        size='large'
        color='primary'
        fullWidth
      >
        {text}
      </Button>
    </Link>
  )
}

export default GoButton;