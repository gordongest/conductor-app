import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AssignmentItem from './AssignmentItem';
import AssignmentList from './AssignmentList';
import AddAssignment from './AddAssignment';

const Assignments = ({ assignments, addAssignment, removeAssignment }) => {
  return (
    <>
      <AssignmentList assignments={ assignments } removeAssignment={ removeAssignment } />
      <AddAssignment addAssignment={ addAssignment } />
    </>
  )
}

export default Assignments;