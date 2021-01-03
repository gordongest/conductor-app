import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Details = ({ student }) => {
  return (
    <Paper>
      <Typography className="mt-2 ml-3 pb-1" variant='h4' color='inherit'>{student.name}</Typography>
      <Divider />
      <Typography className="mt-2 ml-3" color='inherit'>Age: {student.age}</Typography>
      <Typography className="mt-2 ml-3 pb-1" color='inherit'>Level: {student.level}</Typography>
      <Divider />
      <Typography className="mt-2 pb-2 ml-3" color='inherit'>Notes: {student.instructorNotes[0].body}</Typography>
    </Paper>
  )
}

export default Details;