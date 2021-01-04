import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AssignmentItem from './AssignmentItem';

const AssignmentList = ({ assignments, toggleComplete, updateAssignment, removeAssignment, viewer }) => {
  return (
    <List>
      {assignments.map(assignment => {
        return (
          <>
            <AssignmentItem
              title={ assignment.title }
              tempo={assignment.tempo}
              notes={ assignment.notes }
              dueDate={ assignment.dueDate }
              completed={ assignment.completed }
              id={ assignment.id }
              toggleComplete={ toggleComplete }
              updateAssignment={ updateAssignment }
              removeAssignment={ removeAssignment }
              viewer={ viewer }
            />
            {/* <Divider /> */}
          </>
        )
      })}
    </List>
  )
}

export default AssignmentList;