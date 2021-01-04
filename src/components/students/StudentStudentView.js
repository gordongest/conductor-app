import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Goals from '../Goals';
import Assignments from '../Assignments';
import History from '../History';

const StudentStudentView = ({ student, assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment }) => {

  return (
    <>
      <Goals goals={ student.goals } />
      <Assignments
        assignments={ assignments }
        toggleComplete={ toggleComplete }
        addAssignment={ addAssignment }
        updateAssignment={ updateAssignment }
        removeAssignment={ removeAssignment }
        viewer='student'
      />
    </>
  )
}

export default StudentStudentView;