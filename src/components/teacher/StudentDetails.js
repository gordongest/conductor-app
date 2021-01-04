import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const StudentDetails = ({ student }) => {
  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <Typography className="mt-2 ml-3 pb-1" variant='h4' color='inherit'>{student.name}</Typography>
      {/* <Divider /> */}
      <Typography className="mt-2 ml-3" color='inherit' variant='h6' >Age: {student.age}</Typography>
      <Typography className="mt-2 ml-3 pb-1" color='inherit' variant='h6' >Level: {student.level}</Typography>
      <Divider />
      <Typography className="mt-2 pb-2 ml-3" color='inherit'>Notes: {student.instructorNotes[0].body}</Typography>
    </Paper>
  )
}

export default StudentDetails;