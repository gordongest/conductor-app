import React from 'react';
import StudentDetails from './StudentDetails';
import Goals from '../Goals';
import Assignments from '../Assignments';
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
        viewer='teacher'
      />
      {/* TODO: ADD BUTTON TO TOGGLE 'ADD ASSIGNMENT' FORM - ACCORDION? */}
      <History />
    </>
  )
}

export default TeacherStudentView;