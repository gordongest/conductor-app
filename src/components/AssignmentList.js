import React from 'react';
import List from '@material-ui/core/List';
import AssignmentItem from './AssignmentItem';

const AssignmentList = ({ assignments, toggleComplete, updateAssignment, removeAssignment, viewer }) => {
  return (
    <List>
      {assignments.map(assignment => {
        return (
          <AssignmentItem
            assignment={assignment}
            toggleComplete={toggleComplete}
            updateAssignment={updateAssignment}
            removeAssignment={removeAssignment}
            viewer={viewer}
            key={assignment._id}
          />
        )
      })}
    </List>
  )
}

export default AssignmentList;