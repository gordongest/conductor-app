import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentItem from './AssignmentItem';
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
        {viewer === 'teacher' &&
          <AddAssignment addAssignment={ addAssignment } />
        }
      </Paper>
    </>
  )
}

export default Assignments;