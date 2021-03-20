import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const History = ({ assignments }) => {
  return (
    <Paper style={{margin: '1rem 0', padding: '1rem .5rem'}}>
      <Typography className="ml-3 mt-2" variant='h5' color='inherit'>History</Typography>
    </Paper>
  )
}

export default History;