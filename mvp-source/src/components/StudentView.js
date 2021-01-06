import React from 'react';
import StudentDetails from './StudentDetails';
import Goals from './Goals';
import Assignments from './Assignments';
import History from './History';

const StudentView = ({ student, assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment, viewer }) => {

  return (
    <>
      <StudentDetails student={ student } viewer={ viewer } />
      <Goals goals={ student.goals } />
      <Assignments
        assignments={ assignments }
        toggleComplete={ toggleComplete }
        addAssignment={ addAssignment }
        updateAssignment={ updateAssignment }
        removeAssignment={ removeAssignment }
        viewer={ viewer }
      />
      {/* TODO: ADD BUTTON TO TOGGLE 'ADD ASSIGNMENT' FORM - ACCORDION? */}
      <History />
    </>
  )
}

export default StudentView;