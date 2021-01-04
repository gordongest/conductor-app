import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StudentDetails from './StudentDetails';
import Goals from '../Goals';
import Assignments from '../Assignments';
import AddAssignment from './AddAssignment';
import History from '../History';

const TeacherStudentView = ({ student, assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment }) => {

  return (
    <>
      <StudentDetails student={ student } />
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

export default TeacherStudentView;