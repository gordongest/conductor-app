import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AssignmentList from './AssignmentList';
import AddAssignment from './teacher/AddAssignment';


const Assignments = ({ assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment, viewer }) => {
  return (
    <>
      <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
        <Typography className="ml-3 mt-2" variant='h5' color='inherit'>Assignments</Typography>
        <AssignmentList
          assignments={ assignments }
          toggleComplete={toggleComplete}
          updateAssignment={ updateAssignment}
          removeAssignment={ removeAssignment }
          viewer={ viewer }
        />
      </Paper>
      {viewer === 'teacher' &&
        <AddAssignment addAssignment={ addAssignment } />
      }
    </>
  )
}

export default Assignments;