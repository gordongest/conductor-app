import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Details from './Details';
import Goals from './Goals';
import Assignments from './Assignments';
import History from './History';

const StudentView = ({ student, assignments, addAssignment, removeAssignment }) => {

  return (
    <>
      <Details student={ student } />
      <Goals goals={ student.goals } />
      <Assignments assignments={assignments} addAssignment={addAssignment} removeAssignment={removeAssignment} />
      <History assignments={assignments} />
    </>
  )
}

export default StudentView;