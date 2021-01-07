import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '1rem 0',
    padding: '1rem .5rem'
  }
}));

const StudentDetails = ({ student, viewer }) => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className="mt-2 ml-3 pb-1" variant='h4' color='inherit'>{student.studentName}</Typography>
      {viewer === 'teacher' &&
        <>
          <Typography className="mt-2 ml-3" color='inherit' variant='h6' >Age: {student.age}</Typography>
          <Typography className="mt-2 ml-3 pb-1" color='inherit' variant='h6' >Level: {student.level}</Typography>
          <Divider />
          <Typography className="mt-2 pb-2 ml-3" color='inherit'>Notes: {student.instructorNotes[0].body}</Typography>
        </>
      }
    </Paper>
  )
}

export default StudentDetails;