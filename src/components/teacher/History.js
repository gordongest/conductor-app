import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const History = ({ assignments }) => {
  return (
    <Paper>
      <Typography className="ml-3 mt-2" variant='h5' color='inherit'>History</Typography>
    </Paper>
  )
}

export default History;