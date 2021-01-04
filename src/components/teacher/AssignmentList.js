import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AssignmentItem from './AssignmentItem';

const AssignmentList = ({ assignments, removeAssignment }) => {
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <Typography className="ml-3 mt-2" variant='h5' color='inherit'>Assignments</Typography>
      <List>
        {assignments.map(assignment => {
          return (
            <>
              <AssignmentItem
                title={ assignment.title }
                tempo={assignment.tempo}
                notes={ assignment.notes }
                dueDate={assignment.dueDate}
                completed={ assignment.completed }
                id={ assignment.id }
                removeAssignment={ removeAssignment }
              />
              <Divider />
            </>
          )
        })}
      </List>
    </Paper>
  )
}

export default AssignmentList;