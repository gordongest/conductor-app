import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Details from './Details';
import Goals from './Goals';
import Assignments from './Assignments';
import AddAssignment from './AddAssignment';
import History from './History';

const TeacherView = ({ student, assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment }) => {

  return (
    <>
      <Details student={ student } />
      <Goals goals={ student.goals } />
      <Assignments
        assignments={ assignments }
        toggleComplete={ toggleComplete }
        addAssignment={ addAssignment }
        updateAssignment={ updateAssignment }
        removeAssignment={ removeAssignment }
      />
      {/* TODO: ADD BUTTON TO TOGGLE 'ADD ASSIGNMENT' FORM - ACCORDION? */}
      
    </>
  )
}

export default TeacherView;